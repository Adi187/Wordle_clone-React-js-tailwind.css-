import './App.css';
import {createContext,useState,useEffect} from 'react';
import Board from './components/Board';
import GameEnded from './components/GameEnded'
import Keyboard from './components/Keyboard';
import {boardDefault,generateWordSet} from './Words';
export const AppContext=createContext();

function App() {
  const [board,setBoard]=useState(boardDefault)
  const [currAttempt,setCurrAttempt]=useState({attempt:0,letterPos:0});
  const [wordSet,setWordSet]=useState(new Set())
  const [disabledLetters,setDisabledLetters] = useState([]);
  const [gameOver,setGameOver]=useState({gameOver:false,guessedWord:false})
  const [correctWord,setCorrectWord]=useState("");
  useEffect(() => {
   generateWordSet().then((words)=>{
    setWordSet(words.wordSet)
    setCorrectWord(words.rightWord.toUpperCase());
    console.log(correctWord)
   })
  
  },[])

  const onSelectLetter=(keyVal)=>{
    if(currAttempt.letterPos>4) return;
    const newBoard=[...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos]=keyVal;
    setBoard(newBoard)
    setCurrAttempt({...currAttempt,letterPos:currAttempt.letterPos+1});
  }

  
  const onDelete=()=>{
    if(currAttempt.letterPos===0)return;
    const newBoard=[...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos-1]="";
    setBoard(newBoard)
    setCurrAttempt({...currAttempt,letterPos:currAttempt.letterPos-1});
  }
  
  const onEnter=()=>{
    if(currAttempt.letterPos!==5)return;
    let currWord="";
    for(let i=0;i<5;i++){
      currWord+=board[currAttempt.attempt][i]
    }
    console.log(currWord.toLowerCase());
    if(wordSet.has(currWord.toLowerCase())){
       setCurrAttempt({attempt:currAttempt.attempt+1,letterPos:0});
    }
    else{
      alert("no word found");
      setCurrAttempt({attempt:currAttempt.attempt+1,letterPos:0});
    }
    if(currWord===correctWord){

     setGameOver({gameOver:true,guessedWord:true});
     return
    }
    if(currAttempt.attempt===5){
      setGameOver({gameOver:true,guessedWord:false})
    }
  }
   
  return (
    <div className="App">
      <h1 className="text-3xl text-white font-bold border-b-2 border-b-white h-12 py-1.5">
      Wordle
    </h1>
    <AppContext.Provider value={{board,setBoard,currAttempt,setCurrAttempt,onSelectLetter,onEnter,
      onDelete,correctWord,disabledLetters,setDisabledLetters,wordSet,setWordSet,setGameOver,gameOver}}>
    <Board />
    {gameOver.gameOver?<GameEnded />:<Keyboard />}
    </AppContext.Provider >
    </div>
  );
}

export default App;

