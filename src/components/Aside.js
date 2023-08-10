import React from 'react'
import Display from './Tetris/Display'
import StartButton from './Tetris/StartButton'
import '../styles/aside.scss'

function Aside({ gameOver, startGame, score, rows, level }) {

  return (
    <aside className='aside'>
      { gameOver 
        ? 
        <>
          <Display text='Game Over'/> 
          <Display text={`Score: ${score}`}/> 
        </>
        :
        <>
          <Display text={`Score: ${score}`}/>
          <Display text={`Rows: ${rows}`}/>
          <Display text={`Level: ${level}`}/>
        </>
      }
      <StartButton startGame={startGame}/>
    </aside>
  )
}

export default Aside