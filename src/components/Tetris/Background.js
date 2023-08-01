import React, { useContext, useState } from 'react'
import { MediaContext } from '../../context/MediaContext'

function Background() {
  const { stageImg } = useContext(MediaContext)

  return (
    <img 
      src={stageImg} 
      alt="Stage-background"
      className="stage__background"
    />
  )
}

export default Background