import React,{useContext} from 'react'
import {AppContext} from '../App'
const GameEnded = () => {
  const {setGameOver,gameOver,currAttempt,correctWord}=useContext(AppContext);
  return (
    <div className="text-white text-lg mt-4">
        <h3>{gameOver.guessedWord?"you Correctly Guessed":"You didn't guess correctly"}</h3>
        <h1 className="font-bold">correct-word:{correctWord}</h1>
        {gameOver.guessedWord &&(<h3>you guessed in {currAttempt.attempt} attempts</h3>)}
    </div>
  )
}

export default GameEnded;