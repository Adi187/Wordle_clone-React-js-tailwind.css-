import React,{useEffect,useContext,useCallback} from 'react';
import Key from './Key';
import {AppContext} from '../App';


const Keyboard = () => {
  const {onEnter,onDelete,onSelectLetter,disabledLetters,setDisabledLetters}=useContext(AppContext);
  const keys1=["Q","W","E","R","T","Y","U","I","O","P"]
  const keys2=["A","S","D","F","G","H","J","K","L"]
  const keys3=["Z","X","C","V","B","N","M"]
  
  const handleKeyboard=useCallback(
    (event) => {

      if(event.key==="Enter"){
         onEnter();
      }else if(event.key==="Backspace"){
          onDelete();
      }else{
        keys1.forEach((key)=>{
            if(event.key.toUpperCase()===key){
                onSelectLetter(key)
            }
        })

        keys2.forEach((key)=>{
            if(event.key.toUpperCase()===key){
                onSelectLetter(key)
            }
        })

        keys3.forEach((key)=>{
            if(event.key.toUpperCase()===key){
                onSelectLetter(key)
            }
        })
      }
    }
  )

  
  useEffect(() => {
    document.addEventListener("keydown",handleKeyboard)

    return ()=>{
        document.removeEventListener("keydown",handleKeyboard)
    }

  }, [handleKeyboard])
  
  return (
    <div className="flex flex-col grid justify-items-center mt-10 text-white gap-2" onKeyDown={handleKeyboard}>
        <div className="flex flex-row gap-1">
            {keys1.map((key)=>{
                return  <Key keyVal={key} disabled={disabledLetters.includes(key)}/>
            })}
        </div>
        <div className="flex flex-row gap-1">
            {keys2.map((key)=>{
                return <Key keyVal={key} disabled={disabledLetters.includes(key)}/>
            })}
        </div>
        <div className="flex flex-row gap-1">
            <Key keyVal={"ENTER"}  />
            {keys3.map((key)=>{
                return  <Key keyVal={key} disabled={disabledLetters.includes(key)} />
            })}
            <Key keyVal={"DELETE"} />
        </div>
    </div>
  )
}

export default Keyboard
