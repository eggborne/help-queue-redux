import React from "react";
import ScreenVeil from "./ScreenVeil";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import { randomInt } from "../util";

function NewPlayerModal(props) {
  const newPlayerModalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    translate: '-50% -50%',
    width: '28rem',
    height: '24rem',
    backgroundColor: 'rgb(71, 37, 13)',
    border: '0.25rem solid #00000033',
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0.5rem',
    padding: '2rem 1rem',
    opacity: '0',
    pointerEvents: 'none',
    scale: '0.9',
    transition: 'all 200ms ease',
  }

  function handleFormSubmit(event) {
    const defaultNames = [ 'Carlos', 'Chauncey', 'Rover', 'Cornelius', 'Martha', 'Romy', 'Marvin', 'Mingus', 'Curtesia', 'Annabelle', 'Roxy' ]
    event.preventDefault();
    const newPlayer = {
      name: event.target.name.value || defaultNames[randomInt(0, defaultNames.length - 1)],
      playerNumber: props.nextPlayerNumber,
      id: v4(),
    };
    props.onAddPlayerFormSubmit(newPlayer);
    props.onClickCancel();
    event.target.name.value = '';
  }

  return (
    <>
      <ScreenVeil showing={props.showing} />
      <div style={newPlayerModalStyle} className={`modal${props.showing ? ' showing' : ''}`} >
        <h1>Add a Player</h1>
        <form onSubmit={handleFormSubmit} className='solution-form'>
          <input type='text' name='name' />
          <button type='submit' className='green'>Submit!</button>
        </form>
        <button onClick={props.onClickCancel} type='submit'>Cancel</button>
      </div>
    </>
  );
}

NewPlayerModal.propTypes = {
  onAddPlayerFormSubmit: PropTypes.func,
  onClickCancel: PropTypes.func,
  showing: PropTypes.bool,
  nextPlayerNumber: PropTypes.number,
}

export default NewPlayerModal;