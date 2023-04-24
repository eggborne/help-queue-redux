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
  return (
    <React.Fragment>
      <div style={wordAreaStyle}>
        <h2>Obscured word goes here</h2>
      </div>
    </React.Fragment>
  );
}

WordArea.propTypes = {
  currentWord: PropTypes.string,
};

export default WordArea;

