import React from 'react'
import { TETROMINOS } from '../../tetrominos'
import '../../styles/stage-cell.scss'

function Cell({ type }) {
  const color = TETROMINOS['L'].color

  console.log(color)

  return (
    <li
      style={{
        background: `rgba(${color}, 0.8)`,
        border: type === 0 ? '0px solid' : '4px solid',
        borderRightColor: `rgba(${color}, 1)`,
        borderLeftColor: `rgba(${color}, 0.3)`,
        borderTopColor: `rgba(${color}, 1)`,
        borderBottomColor: `rgba(${color}, 0.1)`
      }}
      className='stage__cell'
    >

    </li>
  )
}

export default Cell