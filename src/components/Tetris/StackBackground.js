import React, { useContext, useEffect, useRef, useState } from 'react'
import stack1 from '../../video/1rows-stack-vid.mp4'
import stack2 from '../../video/2rows-stack-gif.gif'
import stack3 from '../../video/3rows-stack-vid.mp4'
import stack4 from '../../video/4rows-stack-vid.mp4'
import { MediaContext } from '../../context/MediaContext'

const va = stack1

// получить стэк обработать и вывести видео
function StackBackground() {
  const videoRef = useRef()
  const [video, setVideo] = useState()
  const { stack } = useContext(MediaContext)

  useEffect(() => {
    if (stack === 1) {
      setVideo(stack1)
    } else if (stack === 2) {
      setVideo(stack2)
    } else if (stack === 3) {
      setVideo(stack3)
    } else if (stack === 4) {
      setVideo(stack4)
    }
  }, [stack])


  return (
    <div className='stage__stack-container'>
      <video 
        ref={videoRef}
        src={video}
        autoPlay
      >
      </video>
    </div>
  )
}

export default StackBackground