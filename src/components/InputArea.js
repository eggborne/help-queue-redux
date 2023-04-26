import React, { useState } from "react";
import SolutionModal from "./SolutionModal";
import PropTypes from "prop-types";


function InputArea(props){
  
  const [solutionModalShowing, setSolutionModalShowing] = useState(false);
  const [guessResultModalShowing, setGuessResultModalShowing] = useState(false);
  
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const inputAreaStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '18rem',
    justifyContent: 'space-between',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: '#00440033',
    opacity: props.gameStarted ? '1' : '0',
    pointerEvents: props.gameStarted ? 'all' : 'none',
    transition: 'all 200ms ease',
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    const letterGuess = event.target['letter-guess'].value;
    let alreadyGuessed = props.guessedLetters.includes(letterGuess);
    if (alreadyGuessed || !letterGuess) {
      // nothing
    } else {
      props.onSubmitLetterGuess(letterGuess);
    }
    event.target['letter-guess'].value = null;
   
  }

  function handleCallSolutionModal(show = true) {
    setSolutionModalShowing(show);
    if (!show) {
      if (props.currentSolutionCorrect) {
        props.resetPuzzleWord();
      } else {
        props.advanceTurn();
      }
    }
  }

  function handleClickListLetter(letter) {
    document.getElementById('letter-guess-input').value = letter;
  }

  return (
    <div style={{border: '0.25rem solid black'}}>
      <div style={inputAreaStyle}>
        <h2 style={{color: 'lightgreen'}}>{props.activePlayerName}'s turn</h2>
        <div className='guessed-letter-area'>
          <div className='guessed-letter-list'>
            {alphabet.map((letter, l) => 
              <div 
                key={l} 
                className={`guessed-letter${props.guessedLetters.includes(letter) ? ' guessed' : ''}`}
                onClick={!props.guessedLetters.includes(letter) ? () => handleClickListLetter(letter) : null}
              >
                {letter}
              </div>
            )}
          </div>
          <div className='letter-guess-area'>
            <form onSubmit={handleFormSubmit}>
              <label for='letter-guess'>Guess a letter:</label>
              <input 
                id='letter-guess-input'
                pattern="[A-Za-z]{1}"
                title="You must guess a LETTER (A-Z)"
                type='text' 
                name='letter-guess' 
                maxLength='1' 
                className='letter-guess-input' 
              />
              <button id='guess-button' type='submit'>Guess</button>
            </form>
          </div>
        </div>
        <div className='solution-guess-area'>
          <button className='green' onClick={() => handleCallSolutionModal()}>Solve puzzle</button>
        </div>
        <SolutionModal 
          showing={solutionModalShowing}
          onSubmitSolution={props.handleSubmitSolution}
          onClickCancel={() => handleCallSolutionModal(false)}
          currentSolutionGuess={props.currentSolutionGuess}
          currentSolutionCorrect={props.currentSolutionCorrect}
        />
      </div>
    </div>
  );
}

InputArea.propTypes = {
  gameStarted: PropTypes.bool,
  activePlayerName: PropTypes.string,
  onSubmitLetterGuess: PropTypes.func,
  currentLetterGuess: PropTypes.string,
  guessedLetters: PropTypes.arrayOf(PropTypes.string),
  handleSubmitSolution: PropTypes.func,
  currentSolutionCorrect: PropTypes.bool,
  advanceTurn: PropTypes.func,
  resetPuzzleWord: PropTypes.func,
};

export default InputArea;