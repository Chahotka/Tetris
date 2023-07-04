import React from 'react'
import Stage from './Tetris/Stage'
import Display from './Tetris/Display'
import StartButton from './Tetris/StartButton'
import { createStage } from '../gameHelpers'
import '../styles/tetris.scss'

function Tetris() {
  return (
    <>
      <main className="main">
        <div className="main__container">
          <div className="main__body">
            <Stage stage={createStage()} />
          </div>
        </div>
      </main>
      <aside className='aside'>
        <Display text='Score'/>
        <Display text='Lines'/>
        <Display text='Level'/>
        <StartButton />
      </aside>
    </>
  )
}

export default Tetris