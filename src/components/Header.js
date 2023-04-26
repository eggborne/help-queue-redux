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
        <h1>React Word Game</h1>
        {!props.gameStarted && <button onClick={props.onClickStartGame} className='green'>Start Game</button>}
      </header>
    </React.Fragment>
  );
}

Header.propTypes = {
  gameStarted: PropTypes.bool,
  onClickStartGame: PropTypes.func,
}

export default Header;