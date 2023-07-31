import React, { useContext, useState } from 'react'
import { MediaContext } from '../../context/MediaContext'

function Background() {
  const { image } = useContext(MediaContext)

  return (
    <img 
      src={image} 
      alt="Stage-background"
      className="stage__background"
    />
  )
}

export default Background