import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  const headerStyle = {
    backgroundColor: 'var(--header-bg-color)',
    color: 'var(--header-text-color)',
    height: 'var(--header-height)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 1rem',
  }
  return (
    <React.Fragment>
      <header style={headerStyle}>
        <h1>Redux Word Game</h1>
        <button onClick={props.onClickStartGame} className='green'>Start Game</button>
      </header>
    </React.Fragment>
  );
}

Header.propTypes = {
  onClickStartGame: PropTypes.func,
}

export default Header;