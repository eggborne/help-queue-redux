import React, { useState } from 'react';
import Header from "./Header";
import WordArea from "./WordArea";
import InputArea from "./InputArea";
import PlayerArea from "./PlayerArea";
import { v4 } from 'uuid';


function WordGameControl(props) {

  const [gameStarted, setGameStarted] = useState(false);
  const [playerList, setPlayerList] = useState([]);
  const [currentPuzzleWord, setCurrentPuzzleWord] = useState('obstreperous');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [activePlayer, setActivePlayer] = useState(1);
  const [currentSolutionCorrect, setCurrentSolutionCorrect] = useState(false);

  function getIndexById(id, arr = playerList) {
    const idItem = arr.filter(item => item.id === id)[0];
    return arr.indexOf(idItem);
  }

  function handleDeletingPlayer(id) {
    const newPlayerList = [...playerList].filter(player => player.id !== id);
    setPlayerList(newPlayerList);
  }

  function handleAddingNewPlayer(newPlayer) {
    let newPlayerList = [...playerList, newPlayer];
    setPlayerList(newPlayerList);
  }

  function handleSubmitLetterGuess(letterGuess) {
    let newGuessedLetters = [...guessedLetters, letterGuess];
    setGuessedLetters(newGuessedLetters);
    //if currentPuzzleWord contains letterGuess, do nothing, else advance turn
    const solutionHasLetter = currentPuzzleWord.split('').includes(letterGuess);

    !solutionHasLetter && advanceTurn();
  }

  function handleStartGame() {
    if (!playerList.length) {
      const player1 = {
        name: 'Petunia',
        playerNumber: 1,
        id: v4(),
      };
      const player2 = {
        name: 'George',
        playerNumber: 2,
        id: v4(),
      };
      let newPlayerList = [...playerList, player1, player2];
      setPlayerList(newPlayerList);
    }
    setGameStarted(true);
  }

  function advanceTurn() {
    const nextTurnNumber = activePlayer < playerList.length ? activePlayer + 1 : 1;
    setActivePlayer(nextTurnNumber);
  }

  function handleSubmitSolution(solutionGuess) {
    setCurrentSolutionCorrect(currentPuzzleWord.toLowerCase() === solutionGuess.toLowerCase())
  }



  return (
    <React.Fragment>
      <Header onClickStartGame={handleStartGame} gameStarted={gameStarted} />

      <WordArea
        guessedLetters={guessedLetters}
        gameStarted={gameStarted}
        currentPuzzleWord={currentPuzzleWord}
      />
      <InputArea
        gameStarted={gameStarted}
        activePlayerName={
          playerList.length ?
          playerList.filter(player => player.playerNumber === activePlayer)[0].name
          :
          ''
        }
        guessedLetters={guessedLetters}
        onSubmitLetterGuess={handleSubmitLetterGuess}
        handleSubmitSolution={handleSubmitSolution}
        currentSolutionCorrect={currentSolutionCorrect}
      />
      <PlayerArea
        gameStarted={gameStarted}
        activePlayer={activePlayer}
        playerList={playerList}
        handleAddPlayerFormSubmit={handleAddingNewPlayer}
        onClickDeletePlayer={handleDeletingPlayer}
      />
    </React.Fragment>
  );
}

export default WordGameControl;


