import React, { useContext, useEffect, useState } from 'react'
import '../styles/tetris.scss'
import Stage from './Tetris/Stage'
import { createStage, checkCollision } from '../gameHelpers'
import Aside from './Aside'
import usePlayer from '../hooks/usePlayer'
import useStage from '../hooks/useStage'
import { useInterval } from '../hooks/useInterval'
import useGameStatus from '../hooks/useGameStatus'
import { MediaContext } from '../context/MediaContext'


function Tetris() {
  const { image, dispatch} = useContext(MediaContext)
  const [dropTime, setDropTime] = useState(null)
  const [gameOver, setGameOver] = useState(false)

  const { player, updatePlayerPos, resetPlayer, playerRotate } = usePlayer()
  const { stage, setStage, rowsCleared } = useStage(player, resetPlayer, dispatch)
  const {score, setScore, rows, setRows, level, setLevel} = useGameStatus(rowsCleared, dispatch)


  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 })
    }
  }

  const startGame = () => {
    dispatch({
      type: 'GAMESTART',
    })
    dispatch({
      type: 'STAGE_1'
    })
    setStage(createStage());
    setDropTime(1000)
    resetPlayer()
    setGameOver(false)
    setScore(0)
    setRows(0)
    setLevel(0)
  }

  const drop = () => {
    if (rows > (level + 1) * 10) {
      setLevel(prev => prev + 1)
      setDropTime(1000 / (level + 1) + 200)
    }
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false })
    } else {
      if (player.pos.y < 1) {
        setGameOver(true)
        setDropTime(null)
        dispatch({
          type: 'GAMEOVER'
        })
      }
      updatePlayerPos({ x: 0, y: 0, collided: true})
    }
  }

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40) {
        setDropTime(1000 / (level + 1) + 200)
      }
    }
  }

  const dropPlayer = () => {
    setDropTime(null)
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
      } else if (keyCode === 38) {
        playerRotate(stage, 1)
      }
    }
  }

  useInterval(() => {
    drop()
  }, dropTime)


  return (
    <div 
      tabIndex={0}
      className='tetris' 
      role='button'
      onKeyUp={e => keyUp(e)}
      onKeyDown={e => move(e)}
    >
      <main className="main">
        <div className="main__container">
          <div className="main__body">
            <Stage stage={stage} />
          </div>
        </div>
      </main>
      <Aside 
        gameOver={gameOver} 
        startGame={startGame}
        score={score}
        rows={rows}
        level={level}
      />
    </div>
  )
}

export default Tetris