import React from "react";
import PropTypes from "prop-types";

function WordArea(props){
  const wordAreaStyle = {
    backgroundColor: '#657844',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.5rem',
    flexGrow: '1',
  };
  const lettersArray = props.currentPuzzleWord.split('');
  return (
    <React.Fragment>
      <div style={wordAreaStyle}>
        {props.gameStarted ?
          <div className='puzzle-letter-area'>
            {lettersArray.map((letter, l) =>
              <div key={l} className='puzzle-letter'>{letter}</div>
            )}
          </div>
        :
        <div>game not started yet!</div>
        }
      </div>
    </React.Fragment>
  );
}

WordArea.propTypes = {
  gameStarted: PropTypes.bool,
  currentPuzzleWord: PropTypes.string,
  guessedLetters: PropTypes.array,
};

export default WordArea;

