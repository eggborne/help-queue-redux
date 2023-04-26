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

  return (
    <>
      <ScreenVeil showing={props.showing} />
      <div style={solutionModalStyle} className={`modal${props.showing ? ' showing' : ''}`} >
        <h2>Correct? {props.currentSolutionCorrect ? 'true' : 'false'}</h2>
        <h1>Solve puzzle</h1>
        <form onSubmit={handleSubmitSolution} className='solution-form'>
          <input style={{textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold'}} type='text' name='solution-guess' />
          <button type='submit' className='green'>Submit!</button>
        </form>
        <button onClick={props.onClickCancel} type='submit'>Cancel</button>
      </div>
    </>
  );
}

SolutionModal.propTypes = {
  onSubmitSolution: PropTypes.func,
  onClickCancel: PropTypes.func,
  showing: PropTypes.bool,
  currentSolutionCorrect: PropTypes.bool,
}

export default SolutionModal;