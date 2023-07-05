import React, { useState } from 'react'
import kanye from '../../images/EbanutiiRobloebKot.jpg'

function Background() {
  const [image, setImage] = useState(kanye)

  return (
    <img 
      src={image} 
      alt="Stage-background"
      className="stage__background"
    />
  )
}

export default Background