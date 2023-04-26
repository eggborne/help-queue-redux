import React, { useState } from "react";
import PropTypes from "prop-types";
import NewPlayerModal from "./NewPlayerModal";

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

  return (
    <>
      <NewPlayerModal 
        showing={newPlayerFormShowing}
        onAddPlayerFormSubmit={props.handleAddPlayerFormSubmit}
        onClickCancel={() => setNewPlayerFormShowing(false)}
        nextPlayerNumber={props.playerList.length + 1}
      />
      
      <div style={playerAreaStyle}>
          <div className='player-list'>
            {props.playerList.map(player =>
              <div key={player.id} className={`player-listing${props.activePlayer === player.playerNumber ? ' active' : ''}`}>
                <div className='player-name'>{player.name}</div>
                <div>Player {player.playerNumber}</div>
                <div className='id-tag'>{player.id}</div>
                {!props.gameStarted && <div onClick={() => props.onClickDeletePlayer(player.id)} className='close-button'>X</div>}
              </div>
            )}
          </div>
          {!props.gameStarted && <button onClick={() => setNewPlayerFormShowing(true)}>Add a new player</button>}
      </div>
    </>
  );
}

PlayerArea.propTypes = {
  gameStarted: PropTypes.bool,
  playerList: PropTypes.array,
  handleAddPlayerFormSubmit: PropTypes.func,
  onClickDeletePlayer: PropTypes.func,
  activePlayer: PropTypes.number,
};

export default PlayerArea;

