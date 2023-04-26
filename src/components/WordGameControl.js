import React, { useState } from 'react';
import Header from "./Header";
import WordArea from "./WordArea";
import InputArea from "./InputArea";
import PlayerArea from "./PlayerArea";
import { v4 } from 'uuid';
import axios from 'axios';
import { randomInt } from '../util';

function WordGameControl(props) {

  const [gameStarted, setGameStarted] = useState(false);
  const [playerList, setPlayerList] = useState([]);
  const [currentPuzzleWord, setCurrentPuzzleWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [activePlayer, setActivePlayer] = useState(1);
  const [currentSolutionCorrect, setCurrentSolutionCorrect] = useState(false);
  const [currentSolutionGuess, setCurrentSolutionGuess] = useState('');


  async function getRandomWord(wordLength, amount) {
    try {
      let apiURL = `https://random-word-api.vercel.app/api?words=${amount}&length=${wordLength}`;
      const response = await axios.get(apiURL);
      return response.data[0];
    } catch (error) {
      console.error(error);
    }
  }

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

  async function handleStartGame() {
    if (playerList.length === 0) {
      const player1 = {
        name: 'Petunia',
        playerNumber: 1,
        score: 0,
        id: v4(),
      };
      const player2 = {
        name: 'George',
        playerNumber: 2,
        score: 0,
        id: v4(),
      };
      let newPlayerList = [...playerList, player1, player2];
      setPlayerList(newPlayerList);
    } else if (playerList.length === 1) {
      const player2 = {
        name: 'George',
        playerNumber: 2,
        score: 0,
        id: v4(),
      };
      let newPlayerList = [...playerList, player2];
      setPlayerList(newPlayerList);
    }
    const firstPuzzleWord = await getRandomWord(randomInt(5,9), 1);
    console.warn('FIRST PUZZLE WORD: ------', firstPuzzleWord);
    setCurrentPuzzleWord(firstPuzzleWord);
    setGameStarted(true);
  }

  function advanceTurn() {
    const nextTurnNumber = activePlayer < playerList.length ? activePlayer + 1 : 1;
    setActivePlayer(nextTurnNumber);
    
  }

  async function resetPuzzleWord() {
    const winningPlayer = playerList.filter(player => player.playerNumber === activePlayer)[0];
    winningPlayer.score += currentPuzzleWord.length;
    setGuessedLetters([]);
    setCurrentSolutionGuess('');
    setCurrentSolutionCorrect(false);
    let newPuzzleWord = await getRandomWord(randomInt(5,9), 1);
    console.warn('NEW PUZZLE WORD: ------', newPuzzleWord)
    setCurrentPuzzleWord(newPuzzleWord)
    // setCurrentPuzzleWord(puzzleWords[puzzleWords.indexOf(currentPuzzleWord) + 1]);
    setActivePlayer(1);
    
  }


  function handleSubmitSolution(currentSolutionGuess) {
    console.log('handleSubmitSolution in WordGameControl received currentSolutionGuess: ' + currentSolutionGuess)
    setCurrentSolutionGuess(currentSolutionGuess);
    setCurrentSolutionCorrect(currentPuzzleWord.toLowerCase() === currentSolutionGuess.toLowerCase());
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
          playerList.length && playerList.filter(player => player.playerNumber === activePlayer)[0].name
        }
        guessedLetters={guessedLetters}
        onSubmitLetterGuess={handleSubmitLetterGuess}
        handleSubmitSolution={handleSubmitSolution}
        currentSolutionCorrect={currentSolutionCorrect}
        currentSolutionGuess={currentSolutionGuess}
        resetPuzzleWord={resetPuzzleWord}
        advanceTurn={advanceTurn}
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


