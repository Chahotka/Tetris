import React, { useContext, useEffect, useState } from 'react'
import { MediaContext } from '../../context/MediaContext'

function CollideBackground() {
  const [show, setShow] = useState(false)
  const { collideImg, collided } = useContext(MediaContext)

  const collideTimeout = () => {
    setShow(false)
  }

  const showCollideBackground = () => {
    if (show) {
      setShow(false)
      clearTimeout(collideTimeout)
    }

    setShow(true)

    setTimeout(collideTimeout, 800)
  }

  useEffect(() => {
    if (collided) {
      showCollideBackground()
    }
  }, [collided])


  return (
    <>
      {collideImg
      ? <img 
          src={collideImg} 
          alt="Stage-collide-background" 
          className={show ? 'stage__collide stage__collide_show' : 'stage__collide'}
        />  
      : null
      }
    </>
  )
}

export default CollideBackground