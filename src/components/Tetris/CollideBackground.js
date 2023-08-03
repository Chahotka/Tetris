import React, { useContext, useEffect, useState } from 'react'
import { MediaContext } from '../../context/MediaContext'
import stackImage1 from '../../images/stack/stack1.jpg'
import stackImage2 from '../../images/stack/stack2.jpg'
import stackImage3 from '../../images/stack/stack3.jpg'
import stackImage4 from '../../images/stack/stack4.jpg'
import stackImage5 from '../../images/stack/stack5.jpg'
import stackImage6 from '../../images/stack/stack6.jpg'
import stackImage7 from '../../images/stack/stack7.jpg'
import stackImage8 from '../../images/stack/stack8.jpg'
import stackImage9 from '../../images/stack/stack9.jpg'
import stackImage10 from '../../images/stack/stack10.jpg'
import stackImage11 from '../../images/stack/stack11.jpg'
import stackImage12 from '../../images/stack/stack12.jpg'
import stackImage13 from '../../images/stack/stack13.jpg'
import stackImage14 from '../../images/stack/stack14.jpg'
import stackImage15 from '../../images/stack/stack15.jpg'
import stackImage16 from '../../images/stack/stack16.jpg'

const collideImages = [
  stackImage1, stackImage2, stackImage3, stackImage4,
  stackImage5, stackImage6, stackImage7, stackImage8,
  stackImage9, stackImage10, stackImage11, stackImage12,
  stackImage13, stackImage14, stackImage15, stackImage16
]

// vse ravno ebuchaya zaderjka

function CollideBackground() {
  const [show, setShow] = useState(false)
  const [index, setIndex] = useState(0)
  const [image, setImage] = useState(null)
  const { collided } = useContext(MediaContext)

  useEffect(() => {
    if (collided) {
      if (index > collideImages.length - 1) {
        setIndex(0)
      }
      setShow(true)
      setImage(collideImages[index])
      setIndex(prev => prev + 1)

      var collideTimer = setTimeout(() => {
        setShow(false)
      }, 600)
    }
  }, [collided])


  return (
    <>
      <img 
        src={image} 
        className={show ? 'stage__collide stage__collide_show' : 'stage__collide'}
      />
    </>
  )
}

export default CollideBackground