import React from 'react'
import { TETROMINOS } from '../../tetrominos'
import '../../styles/stage-cell.scss'

function Cell({ type }) {
  const color = TETROMINOS[type].color

  // последняя остановка useStage разобраться как рендеряться ячейки
  return (
    <li
      style={{
        background: color === '0, 0, 0' ? `rgba(${color}, 0.5)` : `rgba(${color}, 1)`,
        border: type === 0 ? `1px solid #ffffff71` : `4px solid ${color}`,
      }}
      className='stage__cell'
    >

    </li>
  )
}

export default Cell