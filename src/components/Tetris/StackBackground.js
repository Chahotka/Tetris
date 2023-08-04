import React, { useContext, useEffect, useRef, useState } from 'react'
import stack1 from '../../video/1rows-stack-vid.mp4'
import stack2 from '../../video/2rows-stack-gif.gif'
import stack3 from '../../video/3rows-stack-vid.mp4'
import stack4 from '../../video/4rows-stack-vid.mp4'
import { MediaContext } from '../../context/MediaContext'

const video = {
  vid1: {
    video: new Video,
    duration: '1s'
  }, 
  gif2: {
    video: stack2,
    duration: '2s'
  },
  vid3: {
    video: stack3,
    duration: '9s'
  },
  vid4: {
    video: stack4,
    duration: '7s'
  }
}


function StackBackground() {
  const videoRef = useRef()
  const [videoPlay, setVideoPlay] = useState()
  const { stack } = useContext(MediaContext)

  console.log(typeof video.gif2.video)

  console.log(stack)

  return (
    <div className='stage__stack-container'>
      { 0 ? 
        <video 
          ref={videoRef}
          className='stage__stack' 
          src={stack4} 
          muted={true}
        >
        </video>
      : 
        null
      }
    </div>
  )
}

export default StackBackground