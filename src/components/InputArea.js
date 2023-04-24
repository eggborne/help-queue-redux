import React from "react";
import PropTypes from "prop-types";


function InputArea(props){
  const inputAreaStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '18rem',
    padding: '1rem',
    border: '0.25rem solid black',
    backgroundColor: '#00440033',
  };

  function handleLetterSubmit(event) {
    event.preventDefault();
    props.onSubmitLetterGuess(event.target['player-letter-guess'].value);
  }

  return (
    <React.Fragment>
      <div style={inputAreaStyle}>
        <div>
          <h4>Guessed letters:</h4>
          {props.guessedLetters.map(letter => <span className='letter-list-item'>{letter}</span>)}
        </div>
        <h2>Guess a letter:</h2>
        <form onSubmit={handleLetterSubmit}>
          <input className="letter-guess-input" name='player-letter-guess' maxLength='1' />
          <button type='submit'>Guess</button>
        </form>
        <h2>Guess the Word/Phrase!</h2>
        <h2>Active Player</h2>
        <div>Guessed Letter: {props.currentLetterGuess}</div>
      </div>
    </React.Fragment>
  );
}

InputArea.propTypes = {
  onSubmitLetterGuess: PropTypes.func,
  currentLetterGuess: PropTypes.string,
  guessedLetters: PropTypes.arrayOf(PropTypes.string)
};

export default InputArea;

