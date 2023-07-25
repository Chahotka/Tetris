import React from 'react'

function StartButton({ startGame }) {
  return (
    <button onClick={startGame} className='aside__start'>Start</button>
  )
}

export default StartButton