import React, { memo } from 'react'
import { TETROMINOS } from '../../tetrominos'

function Cell({ type }) {
  const color = TETROMINOS[type].color

  
  return (
    <li
      style={{
        background: color === '0, 0, 0' ? `rgba(${color}, 0.3)` : `rgba(${color}, 1)`,
        border: type === 0 ? `1px solid #ffffff22` : `3px solid rgba(0, 0, 0, 0.1)`,
      }}
      className='stage__cell'
    >
    </li>
  )
}

export default memo(Cell)