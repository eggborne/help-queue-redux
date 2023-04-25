import React from "react";
import PropTypes from "prop-types";

function SolutionModal(props) {
  const solutionModalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    translate: '-50% -50%',
    width: '28rem',
    height: '24rem',
    backgroundColor: 'darksalmon',
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

  console.log('showing', props.showing)

  return (
    <div style={solutionModalStyle} className={`modal${props.showing ? ' showing' : ''}`} >
      <h1>Solve puzzle</h1>
      <form className='solution-form'>
        <input type='text' name='solution-guess' />
        <button type='submit' className='green'>Submit!</button>
      </form>
      <button onClick={props.onClickCancel} type='submit'>Cancel</button>
    </div>
  );
}

SolutionModal.propTypes = {
  onClickCancel: PropTypes.func,
  showing: PropTypes.bool,
}

export default SolutionModal;