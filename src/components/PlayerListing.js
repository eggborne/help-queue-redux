import React from "react";
import PropTypes from "prop-types";

function PlayerListing(props) {
  return (
    <div key={props.player.id} className={`player-listing${props.activePlayer === props.player.playerNumber ? ' active' : ''}`}>
      <div className='player-name'>{props.player.name}</div>
      <div>Player {props.player.playerNumber}</div>
      <div>Score: {props.player.score}</div>
      <div className='id-tag'>{props.player.id}</div>
      {!props.gameStarted && <div onClick={() => props.onClickDeletePlayer(props.player.id)} className='close-button'>X</div>}
    </div>
  );
}

PlayerListing.propTypes = {
  gameStarted: PropTypes.bool,
  player: PropTypes.object,
  activePlayer: PropTypes.number,
}

export default PlayerListing;