const reducer = (state = {
  gameStarted: false,
  playerFormShowing: false,
  playerList: {},
  currentPlayerTurn: undefined, // player.id
  currentLetterGuess: undefined,
  guessedLetters: [],
  currentPuzzleWord: undefined,
}, action) => {
  const { name, id, currentLetterGuess } = action;
  switch (action.type) {
    case 'ADD_PLAYER':
      let updatedState = { ...state };
      let newPlayerNumber = Object.values(updatedState.playerList).length + 1
      updatedState.playerList[id] = {
        name: name,
        id: id,
        playerNumber: newPlayerNumber,
      };
      updatedState.playerFormShowing = false;
      return updatedState;
    case 'DELETE_PLAYER':
      let newState = { ...state };
      delete newState.playerList[id];
      return newState;
    case 'SHOW_NEW_PLAYER_FORM':
      let newState2 = { ...state };
      newState2.playerFormShowing = true;
      return newState2;
    case 'HIDE_NEW_PLAYER_FORM':
      let newState3 = { ...state };
      newState3.playerFormShowing = false;
      return newState3;
    case 'CHANGE_LETTER_GUESS':
      let newLetterState = { ...state };
      newLetterState.currentLetterGuess = currentLetterGuess;
      newLetterState.guessedLetters.push(currentLetterGuess)
      return newLetterState;
    default:
      return state;
  }
};

export default reducer; 

//create a set somewhere, and then just include 'push to the set' in the logic upon creation/updating a player?