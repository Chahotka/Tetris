import React from 'react'
import Cell from './Cell'
import '../../styles/stage.scss'
import Background from './Background'
import CollideBackground from './CollideBackground'
import StackBackground from './StackBackground'

function Stage({ stage }) {

  return (
    <section className='stage'>
    <Background />
    <CollideBackground />
    <StackBackground />
      <ul className="stage__list">
        {
          stage.map(row =>
              row.map((cell, x) =>
                <Cell key={x} type={cell[0]}/>
              )
            )
        }
      </ul>
    </section>
  )
}

export default Stage