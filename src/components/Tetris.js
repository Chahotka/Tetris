import React, { useState } from 'react'
import '../styles/tetris.scss'
import Stage from './Tetris/Stage'
import { createStage, checkCollision } from '../gameHelpers'
import Aside from './Aside'
import usePlayer from '../hooks/usePlayer'
import useStage from '../hooks/useStage'


function Tetris() {
  // не работает resetPlayer надо починить
  const [dropTime, setDropTime] = useState(null)
  const [gameOver, setGameOver] = useState(false)

  const { player, updatePlayerPos, resetPlayer } = usePlayer()
  const { stage, setStage } = useStage(player)


  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 })
    }
  }

  const startGame = () => {
    setStage(createStage());
    resetPlayer()
    setGameOver(false)
  }

  const drop = () => {
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false })
    } else {
      if (player.pos.y < 1) {
        setGameOver(true)
        setDropTime(null)
      }

      updatePlayerPos({ x: 0, y: 0, collided: true })
    }
  }

  const dropPlayer = () => {
    drop()
  }

  const move = ({ keyCode }) => {
    if(!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1)
      } else if (keyCode === 39) {
        movePlayer(1)
      } else if (keyCode === 40) {
        dropPlayer()
      }
    }
  }


  console.log('re-render')
  return (
    <div 
      className='tetris' 
      role='button'
      onKeyDown={e => move(e)}
    >
      <main className="main">
        <div className="main__container">
          <div className="main__body">
            <Stage stage={stage} />
          </div>
        </div>
      </main>
      <Aside gameOver={gameOver} startGame={startGame}/>
    </div>
  )
}

export default Tetris