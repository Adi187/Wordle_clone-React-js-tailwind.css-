import wordBank from "./Wordle-bank.txt";
export const boardDefault=[
["","","","",""],
["","","","",""],
["","","","",""],
["","","","",""],
["","","","",""],
["","","","",""]]


export const generateWordSet= async()=>{
    let wordSet;
    let rightWord;
    await fetch(wordBank).then((response)=>response.text())
    .then((result)=>{
        const wordArr=result.split("\n").map(word => word.trim());
        rightWord=wordArr[Math.floor(Math.random()*wordArr.length)]
        wordSet=new Set(wordArr)
    });

    return { wordSet,rightWord }
}

