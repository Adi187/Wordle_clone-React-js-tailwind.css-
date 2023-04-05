import React from 'react';
import Letter from './Letter';

const Board = () => {
  return (
    <div className="text-white mt-10 flex-col gap-1.5 grid justify-items-center">
        <div className="flex flex-row gap-2">
            <Letter pos={0} attempt={0} />
            <Letter pos={1} attempt={0} />
            <Letter pos={2} attempt={0} />
            <Letter pos={3} attempt={0} />
            <Letter pos={4} attempt={0} />
        </div>
        <div className="flex flex-row gap-2">
            <Letter pos={0} attempt={1} />
            <Letter pos={1} attempt={1} />
            <Letter pos={2} attempt={1} />
            <Letter pos={3} attempt={1} />
            <Letter pos={4} attempt={1} />
        </div>
        <div className="flex flex-row gap-2">
            <Letter pos={0} attempt={2} />
            <Letter pos={1} attempt={2} />
            <Letter pos={2} attempt={2} />
            <Letter pos={3} attempt={2} />
            <Letter pos={4} attempt={2} />
        </div>
        <div className="flex flex-row gap-2">
            <Letter pos={0} attempt={3} />
            <Letter pos={1} attempt={3} />
            <Letter pos={2} attempt={3} />
            <Letter pos={3} attempt={3} />
            <Letter pos={4} attempt={3} />
        </div>
        <div className="flex flex-row gap-2">
            <Letter pos={0} attempt={4} />
            <Letter pos={1} attempt={4} />
            <Letter pos={2} attempt={4} />
            <Letter pos={3} attempt={4} />
            <Letter pos={4} attempt={4} />
            
        </div>
        <div className="flex flex-row gap-2">
            <Letter pos={0} attempt={5} />
            <Letter pos={1} attempt={5} />
            <Letter pos={2} attempt={5} />
            <Letter pos={3} attempt={5} />
            <Letter pos={4} attempt={5} />
        </div>

        
    </div>
  )
}

export default Board