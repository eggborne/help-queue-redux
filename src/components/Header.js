import React from "react";

function Header() {
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
        <button className='green'>Start Game</button>
      </header>
    </React.Fragment>
  );
}

export default Header;