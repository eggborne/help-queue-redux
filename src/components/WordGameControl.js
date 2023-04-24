import React from 'react';
import Header from "./Header";
import WordArea from "./WordArea";
import InputArea from "./InputArea";
import PlayerArea from "./PlayerArea";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

function WordGameControl(props) {

  function handleDeletingPlayer(id) {
    const { dispatch } = props;
    const action = {
      type: 'DELETE_PLAYER',
      id: id,
    }
    dispatch(action);
  }

  function handleClickAddPlayer() {
    const { dispatch } = props;
    const action = {
      type: 'SHOW_NEW_PLAYER_FORM',
    }
    dispatch(action);
  }

  function handleClickCancelAddPlayer() {
    const { dispatch } = props;
    const action = {
      type: 'HIDE_NEW_PLAYER_FORM',
    }
    dispatch(action);
  }

  function handleEditingPlayer(ticketToEdit) {
    const { dispatch } = props;
    const { name, id } = ticketToEdit;
    const action = {
      type: 'ADD_PLAYER',
      name: name,
      id: id,
    }
    dispatch(action);
  }

  function handleAddingNewPlayer(newPlayer) {
    const { dispatch } = props;
    const { name, id } = newPlayer;
    const action = {
      type: 'ADD_PLAYER',
      name: name,
      id: id,
      playerFormShowing: false,
    }
    dispatch(action);
  }

  function handleSubmitLetterGuess(guessedLetter) {
    const { dispatch } = props;
    const action = {
      type: 'CHANGE_LETTER_GUESS',
      currentLetterGuess: guessedLetter
    }
    dispatch(action)
  }

  return (
    <React.Fragment>
      <Header />
      <WordArea />
      <InputArea 
        onSubmitLetterGuess={handleSubmitLetterGuess}
        currentLetterGuess={props.currentLetterGuess}
        guessedLetters={props.guessedLetters}
      />
      
      <PlayerArea 
        playerList={props.playerList}
        playerFormShowing={props.playerFormShowing} 
        onClickAddPlayer={handleClickAddPlayer} 
        onClickCancelAddPlayer={handleClickCancelAddPlayer}
        onAddPlayerFormSubmit={handleAddingNewPlayer}
        onClickDeleteButton={handleDeletingPlayer}
        buttonText="Add New Player!"
      />
    </React.Fragment>
  );
}

WordGameControl.propTypes = {
  playerFormShowing: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    playerFormShowing: state.playerFormShowing,
    playerList: state.playerList,
    currentLetterGuess: state.currentLetterGuess,
    guessedLetters: state.guessedLetters,
  }
}

// Note: we are now passing mapStateToProps into the connect() function.
WordGameControl = connect(mapStateToProps)(WordGameControl);

export default WordGameControl;

