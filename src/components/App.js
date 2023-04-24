import React from "react";
import WordGameControl from "./WordGameControl";

function App(){
  const mainStyle = {
    minHeight: 'var(--actual-height)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'plum',
  }
  return (
    <main style={mainStyle}>
      <WordGameControl />
    </main>
  );
}

export default App;