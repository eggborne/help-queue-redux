import React, { useState } from 'react';
import Header from "./Header";
import WordArea from "./WordArea";
import InputArea from "./InputArea";
import PlayerArea from "./PlayerArea";

function WordGameControl(props) {

  const [gameStarted, setGameStarted] = useState(false);
  const [playerList, setPlayerList] = useState([]);
  const [activePlayer, setActivePlayer] = useState(1);
  const [currentPuzzleWord, setCurrentPuzzleWord] = useState('guacamole');
  const [guessedLetters, setGuessedLetters] = useState([]);

  function getIndexById(id, arr = playerList) {
    const idItem = arr.filter(item => item.id === id)[0];
    return arr.indexOf(idItem);
  }

  function handleDeletingPlayer(id) {
    const newPlayerList = [...playerList];
    newPlayerList.splice(getIndexById(id), 1);
  }

  function handleClickCancelAddPlayer() {

  }

  function handleEditingPlayer(ticketToEdit) {

  }

  function handleAddingNewPlayer(newPlayer) {
    let newPlayerList = [...playerList, newPlayer];
    setPlayerList(newPlayerList);
  }

  function handleSubmitLetterGuess(letterGuess) {
    let newGuessedLetters = [...guessedLetters, letterGuess];
    setGuessedLetters(newGuessedLetters);
  }

  function handleStartGame() {
    setGameStarted(true);
  }

  return (
    <React.Fragment>
      <Header onClickStartGame={handleStartGame} />
      <WordArea
        guessedLetters={guessedLetters}
        gameStarted={gameStarted}
        currentPuzzleWord={currentPuzzleWord}
      />
      <InputArea
        activePlayer={activePlayer}
        guessedLetters={guessedLetters}
        onSubmitLetterGuess={handleSubmitLetterGuess}
      />
      <PlayerArea
        activePlayer={activePlayer}
        playerList={playerList}
        onAddPlayerFormSubmit={handleAddingNewPlayer}
        onClickDeletePlayer={handleDeletingPlayer}
      />
    </React.Fragment>
  );
}

export default WordGameControl;


