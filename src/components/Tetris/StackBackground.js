import React, { useContext, useEffect, useRef, useState } from 'react'
import stack1 from '../../video/1rows-stack-vid.mp4'
import stack2 from '../../video/2rows-stack-gif.gif'
import stack3 from '../../video/3rows-stack-vid.mp4'
import stack4 from '../../video/4rows-stack-vid.mp4'
import { MediaContext } from '../../context/MediaContext'

const videos = {
  stack1: {
    video: stack1,
    duration: 1000,
    type: 'vid'
  },
  stack2: {
    gif: stack2,
    duration: 1000,
    type: 'gif'
  },
  stack3: {
    video: stack3,
    duration: 9000,
    type: 'vid'
  },
  stack4: {
    video: stack4,
    duration: 7000,
    type: 'vid'
  }
}


// получить стэк обработать и вывести видео
// duration есть осталось накинуть анимацию и не проебать гифку
function StackBackground() {
  const videoRef = useRef()
  const [video, setVideo] = useState(null)
  const { stack, dispatch } = useContext(MediaContext)

  const getVideo = (stack) => {
    if (stack !== 0) {
      setVideo(videos[`stack${stack}`].video)
      console.log(videos[`stack${stack}`].duration)
    }


  }

  useEffect(() => {
    getVideo(stack)
  }, [stack])


  return (
    <div className='stage__stack-container'>
      {/* <video 
        ref={videoRef} 
        src={video} 
        className={video 
          ? 'stage__stack-vid'
          : 'stage__stack-vid stage__stack-vid_end'
        }
        muted
      >
      </video> */}
    </div>
  )
}

export default StackBackground