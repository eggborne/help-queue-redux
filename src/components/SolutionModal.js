import React from "react";
import ScreenVeil from './ScreenVeil';
import PropTypes from "prop-types";

function SolutionModal(props) {
  const solutionModalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    translate: '-50% -50%',
    width: '28rem',
    height: '24rem',
    backgroundColor: 'rgb(71, 37, 13)',
    border: '0.25rem solid #00000033',
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0.5rem',
    padding: '2rem 1rem',
    opacity: '0',
    pointerEvents: 'none',
    scale: '0.9',
    transition: 'all 200ms ease',
  }

  function handleSubmitSolution(event) {
    event.preventDefault();
    const solutionGuess = event.target['solution-guess'].value;
    console.log('solutionGuess', solutionGuess);
    props.onSubmitSolution(solutionGuess);
    // props.onClickCancel();
    event.target['solution-guess'].value = '';
    
  }
//
// has access to props.currentSolutionGuess, props.currentSolutionCorrect
//
//


  return (
    <>
      <ScreenVeil showing={props.showing} />
      <div style={solutionModalStyle} className={`modal${props.showing ? ' showing' : ''}`} >
        {props.currentSolutionGuess === '' ? 
          <>
          <h1>Solve puzzle</h1>
          <h1>{props.currentSolutionGuess}</h1>
          <form onSubmit={handleSubmitSolution} className='solution-form'>
            <input style={{textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold'}} type='text' name='solution-guess' />
            <button type='submit' className='green'>Submit!</button>
          </form>
          </> 
          : 
          (props.currentSolutionCorrect ? <h1>Correct!</h1> : <h1>Incorrect</h1>)
        }


        {props.currentSolutionGuess === '' ?
          <button onClick={props.onClickCancel}>Cancel</button>
          :
          (props.currentSolutionCorrect ?
            <button onClick={props.onClickCancel}>Start New Game</button> 
            :
            <button onClick={props.onClickCancel}>Sorry, you guessed wrong</button>
          )
        }
      </div>
    </>
  );
}

SolutionModal.propTypes = {
  onSubmitSolution: PropTypes.func,
  onClickCancel: PropTypes.func,
  showing: PropTypes.bool,
  currentSolutionCorrect: PropTypes.bool,
  currentSolutionGuess: PropTypes.string
}

export default SolutionModal;