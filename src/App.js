import React from 'react';

import './App.css';


import GameController from "./GameController";

function App() {
  return (
    <div className="App">
     <GameController/>
    </div>
  );
}

export default App;
// - Going back to a particular move should not erase future moves, moves are removed only when you click on the board
//
// Code Quality - 15/20
// - use the `item` in .map function and not index to create the button