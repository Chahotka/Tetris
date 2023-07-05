import React from 'react'
import Stage from './Tetris/Stage'
import { createStage } from '../gameHelpers'
import '../styles/tetris.scss'
import Aside from './Aside'

function Tetris() {
  return (
    <div className='tetris'>
      <main className="main">
        <div className="main__container">
          <div className="main__body">
            <Stage stage={createStage()} />
          </div>
        </div>
      </main>
      <Aside />
    </div>
  )
}

export default Tetris