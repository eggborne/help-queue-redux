import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const defaultNames = [ 'Carlos', 'Chauncey', 'Rover', 'Cornelius', 'Martha', 'Romy' ]

function PlayerArea(props){
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
      id: v4(),
    };
    props.onAddPlayerFormSubmit(newPlayer)
  }
  console.log('PlayerArea playerList prop is')
  console.log(Object.values(props.playerList))
  return (
    <React.Fragment>
      <div style={playerAreaStyle}>
        {props.playerFormShowing ? 
          <div className='player-form-area'>
            <form className='player-form' onSubmit={handleFormSubmit}>
              <input name='name' placeholder="Enter name" type="text" />
              <button className='green' type='submit'>Add Player</button>
            </form>
            <button onClick={props.onClickCancelAddPlayer}>Cancel</button>
          </div>
          : 
          <>
            <div className='player-list'>
              {Object.values(props.playerList).map(player => 
                <div key={player.id} className='player-listing'>
                  <div className='player-name'>{player.name}</div>
                  <div>Player {player.playerNumber}</div>
                  <div className='id-tag'>id: {player.id}</div>
                  <button onClick={() => props.onClickDeleteButton(player.id)} className='close-button'>X</button>
                </div>
              )}
            </div>
            <button onClick={props.onClickAddPlayer}>Add Player</button>
          </>
        }
      </div>
    </React.Fragment>
  );
}

PlayerArea.propTypes = {
  playerList: PropTypes.object,
  playerFormShowing: PropTypes.bool,
  onClickAddPlayer: PropTypes.func,
  onClickDeleteButton: PropTypes.func,
  onClickCancelAddPlayer: PropTypes.func,
  onAddPlayerFormSubmit: PropTypes.func,
  buttonText: PropTypes.string,
};

export default PlayerArea;

