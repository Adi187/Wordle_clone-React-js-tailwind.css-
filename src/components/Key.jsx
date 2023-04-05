import React,{useContext} from 'react'
import {AppContext} from "../App";
const Key = ({keyVal,disabled}) => {
  const {onEnter,onSelectLetter,onDelete,wordSet}=useContext(AppContext);
  const selectLetter=()=>{
    if(keyVal==="ENTER"){
      onEnter(keyVal)
    }
    else if(keyVal==="DELETE"){
     onDelete()
    }
    else{
    onSelectLetter(keyVal)
  }
} 
  console.log(wordSet)
  if(keyVal!=="ENTER" && keyVal!=="DELETE"){
      return (
        <button className="h-11 w-8
        px-2 py-2.5 font-bold text-base text-blue-50 bg-gray-500 rounded"onClick={selectLetter} 
        id={disabled && "disabled"}>{keyVal}
       </button>
      )
    }
    else {
       return(<div className="h-11 w-13  px-2 py-2.5 font-bold text-base text-blue-50 bg-gray-500 rounded " onClick={selectLetter}>{keyVal}</div>
       )
      }
}

export default Key

