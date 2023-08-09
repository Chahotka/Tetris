import React, { useContext, useEffect, useRef, useState } from 'react'
import stack1 from '../../video/1rows-stack-vid.mp4'
import stack2 from '../../video/2rows-stack-vid.mp4'
import stack3 from '../../video/3rows-stack-vid.mp4'
import stack4 from '../../video/4rows-stack-vid.mp4'
import { MediaContext } from '../../context/MediaContext'

const videos = {
  stack1: {
    video: stack1,
    duration: 1400,
    transit: '1.4s'
  },
  stack2: {
    video: stack2,
    duration: 1000,
    transit: '1.5s'
  },
  stack3: {
    video: stack3,
    duration: 9000,
    transit: '9s'
  },
  stack4: {
    video: stack4,
    duration: 7000,
    transit: '7s'
  }
}


// получить стэк обработать и вывести видео
// duration есть осталось накинуть анимацию и не проебать гифку
function StackBackground() {
  const videoRef = useRef()
  const [video, setVideo] = useState(null)
  const [fade, setFade] = useState(null)
  const { stack, dispatch } = useContext(MediaContext)

  const getVideo = (stack) => {
    setFade(videos[`stack${stack}`].transit)
    setVideo(videos[`stack${stack}`].video)
  }

  useEffect(() => {
    if (stack !== 0) {
      getVideo(stack)
      setTimeout(() => {
        setVideo(null)
        setFade(null)
        dispatch({
          type: 'CLEAR_STACK'
        })
      }, videos[`stack${stack}`].duration)
    }
  }, [stack])

  return (
    <div className='stage__stack-container'>
    <video 
      ref={videoRef} 
      src={video} 
      className={video 
        ? 'stage__stack-vid'
        : 'stage__stack-vid stage__stack-vid_end'
      }
      autoPlay
      muted
    >
    </video>
    </div>
  )
}

export default StackBackground