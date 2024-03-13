import React, { useState } from 'react'
import './App.css';
import StartGame from './components/StartGame';
import GamePlay from './components/GamePlay';


function App() {
    const [startGame, setStartGame] = useState(false)
     
    const toggleGame = () =>{
      setStartGame((prev)=>!prev);  //toggle the state of start game component

    }

  return (
    <>
      {
    startGame ?  <GamePlay/>  :<StartGame toggle={toggleGame}/>   //conditional rendering based on the value of StartGame State

      }
     
     
    </>
  );
}

export default App;
