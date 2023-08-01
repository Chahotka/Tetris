import React, { useContext } from 'react'
import { MediaContext } from '../../context/MediaContext'

function CollideBackground() {
  const { collideImg } = useContext(MediaContext)
  return (
    <>
      {collideImg
      ? <img 
          src={collideImg} 
          alt="Stage-collide-background" 
          className="stage__collide"
        />  
      : null
      }
    </>
  )
}

export default CollideBackground