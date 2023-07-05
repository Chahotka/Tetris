import React from 'react'
import Cell from './Cell'
import '../../styles/stage.scss'
import Background from './Background'

function Stage({ stage }) {
  return (
    <section className='stage'>
    <Background />
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