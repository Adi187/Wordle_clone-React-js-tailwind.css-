import React,{useContext,useEffect} from 'react'
import {AppContext} from '../App';
const Letter = ({pos,attempt}) => {
  const {board,correctWord,currAttempt,setDisabledLetters}=useContext(AppContext);
  const letter=board[attempt][pos];
  const correct=correctWord[pos]===letter
  const almost=!correct && letter!=="" && correctWord.includes(letter)
  const letterState= currAttempt.attempt>attempt && (correct?"green":almost?"#DAA520":"#3a393c")
  
  useEffect(()=>{
     if(letter!=="" &&!correct &&!almost){
       setDisabledLetters((prev)=>[...prev,letter]);
     }
  },[currAttempt.attempt])
    return(
    <div className="h-12 w-11 border
     border-gray-500 px-2 py-1.5 font-bold text-2xl text-blue-50" style={{backgroundColor:letterState}}>{letter}
     </div>
    ) }
    



export default Letter