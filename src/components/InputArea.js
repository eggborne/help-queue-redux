import React, { useState } from "react";
import SolutionModal from "./SolutionModal";
import PropTypes from "prop-types";


function InputArea(props){

  const [solutionModalShowing, setSolutionModalShowing] = useState(false);

  const inputAreaStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '18rem',
    padding: '1rem',
    border: '0.25rem solid black',
    backgroundColor: '#00440033',
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
  }

  return (
    <React.Fragment>
      <div style={inputAreaStyle}>
        <div className='guessed-letter-area'>
          <h3>Guessed letters:</h3>
          <div className='guessed-letter-list'>
            {props.guessedLetters.map((letter, l) =>
              <div key={l} className='guessed-letter'>{letter}</div>
            )}
          </div>
          <div className='letter-guess-area'>
            <form onSubmit={handleFormSubmit}>
              <label for='letter-guess'>Guess a letter:</label>
              <input pattern="[A-Za-z]{1}" type='text' name='letter-guess' maxLength='1' className='letter-guess-input' />
              <button id='guess-button' type='submit'>Guess</button>
            </form>
          </div>
        </div>
        <div className='solution-guess-area'>
          Or <button className='green' onClick={() => handleCallSolutionModal()}>Guess solution...</button>
        </div>
        <SolutionModal showing={solutionModalShowing} onClickCancel={() => handleCallSolutionModal(false)}/>
      </div>
    </React.Fragment>
  );
}

InputArea.propTypes = {
  // activePlayer: PropTypes.object,
  onSubmitLetterGuess: PropTypes.func,
  currentLetterGuess: PropTypes.string,
  guessedLetters: PropTypes.arrayOf(PropTypes.string),
};

export default InputArea;

/*
{
  showing: true
}
*/
