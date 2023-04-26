import React, { useState } from "react";
import PropTypes from "prop-types";
import PlayerListing from "./PlayerListing";
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
            <PlayerListing activePlayer={props.activePlayer} key={player.id} player={player} gameStarted={props.gameStarted} />
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
  activePlayer: PropTypes.func,
};

export default PlayerArea;