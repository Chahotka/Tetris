import React from 'react'
import Display from './Tetris/Display'
import StartButton from './Tetris/StartButton'
import '../styles/aside.scss'

function Aside({ gameOver, startGame }) {

  return (
    <aside className='aside'>
      { gameOver ? 
        <Display text='Game Over'/> 
        :<>
          <Display text='Score:'/>
          <Display text='Lines:'/>
          <Display text='Level:'/>
        </>
      }
      <StartButton startGame={startGame}/>
    </aside>
  )
}

export default Aside