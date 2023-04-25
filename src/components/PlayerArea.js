import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const defaultNames = [ 'Carlos', 'Chauncey', 'Rover', 'Cornelius', 'Martha', 'Romy', 'Marvin', 'Mingus', 'Curtesia', 'Annabelle', 'Roxy' ]

function PlayerArea(props){
  
  const [newPlayerFormShowing, setNewPlayerFormShowing] = useState(false);
  
  const playerAreaStyle = {
    backgroundColor: 'var(--header-bg-color)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '14rem',
    padding: '1rem',
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    const newPlayer = {
      name: event.target.name.value || defaultNames[randomInt(0, defaultNames.length - 1)],
      playerNumber: props.playerList.length + 1,
      id: v4(),
    };
    props.onAddPlayerFormSubmit(newPlayer);
    setNewPlayerFormShowing(false);
  }

  return (
    <React.Fragment>
      <div style={playerAreaStyle}>
        {newPlayerFormShowing ?
        <div className='player-form-area'>
        <form onSubmit={handleFormSubmit} className='player-form'>
          <div className='form-row'>
            <input name='name' type='text' placeholder='Enter name' maxLength='18' />
          </div>
          <button className='green' type='submit'>Save</button>
        </form>
        <button onClick={() => setNewPlayerFormShowing(false)}>Cancel</button>
        </div>
        :
        <>
          <div className='player-list'>
            {props.playerList.map(player =>
              <div key={player.id} className='player-listing'>
                <div className='player-name'>{player.name}</div>
                <div>Player {player.playerNumber}</div>
                <div className='id-tag'>{player.id}</div>
                <div onClick={() => props.onClickDeletePlayer(player.id)} className='close-button'>X</div>
              </div>
            )}
          </div>
        <button onClick={() => setNewPlayerFormShowing(true)}>Add a new player</button>
        </>
        }
        
      </div>
    </React.Fragment>
  );
}

PlayerArea.propTypes = {
  playerList: PropTypes.array,
  onAddPlayerFormSubmit: PropTypes.func,
  onClickDeletePlayer: PropTypes.func,
};

export default PlayerArea;

