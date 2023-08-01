import React, { createContext, useReducer } from 'react'

// Stage images
import stageImage1 from '../images/Kanye-background.jpg'

// Collide images
import stackImage1 from '../images/stack/stack1.jpg'
import stackImage2 from '../images/stack/stack2.jpg'
import stackImage3 from '../images/stack/stack3.jpg'
import stackImage4 from '../images/stack/stack4.jpg'
import stackImage5 from '../images/stack/stack5.jpg'
import stackImage6 from '../images/stack/stack6.jpg'
import stackImage7 from '../images/stack/stack7.jpg'
import stackImage8 from '../images/stack/stack8.jpg'
import stackImage9 from '../images/stack/stack9.jpg'
import stackImage10 from '../images/stack/stack10.jpg'
import stackImage11 from '../images/stack/stack11.jpg'
import stackImage12 from '../images/stack/stack12.jpg'
import stackImage13 from '../images/stack/stack13.jpg'
import stackImage14 from '../images/stack/stack14.jpg'
import stackImage15 from '../images/stack/stack15.jpg'
import stackImage16 from '../images/stack/stack16.jpg'

// Audios
import phonk from '../audio/Bg-audio.mp3'
import loose from '../audio/loose-audio.mp3'
import drop from '../audio/stack-sound.mp3'
import black from '../audio/stage1.mp3'
import row1 from '../audio/1row-stack.mp3'
import row2 from '../audio/2rows-stack.mp3'
import row3 from '../audio/3rows-stack.mp3'
import row4 from '../audio/4rows-stack.mp3'


const collideImages = [
  stackImage1, stackImage2, stackImage3, stackImage4,
  stackImage5, stackImage6, stackImage7, stackImage8,
  stackImage9, stackImage10, stackImage11, stackImage12,
  stackImage13, stackImage14, stackImage15, stackImage16
]

const MediaReducer = (state, action) => {
  switch(action.type) {
    case 'GAMESTART':
      for (let key in state.audio) {
        state.audio[key].pause()
        state.audio[key].currentTime = 0
      }
      
      state.audio.backgroundAudio.play()
      state.audio.backgroundAudio.volume = 0.4
      state.audio.backgroundAudio.loop = true

      return state

    case 'GAMEOVER':
      state.audio.backgroundAudio.pause()
      state.audio.defeat.play()
      state.audio.defeat.loop = true

      return state

    case 'COLLIDE':
      const randomImg = collideImages[Math.floor(Math.random() * collideImages.length)]

      if (!state.audio.collide.paused) {
        state.audio.collide.currentTime = 0
      }
      state.audio.collide.volume = 0.6
      state.audio.collide.play()

      return {
        ...state,
        collideImage: randomImg
      }

    case 'STAGE_1':
      state.audio.stage1.play()
      return state

    case 'STACK_1':
      state.audio.stack1.play()
      return state
        
    case 'STACK_2':
      state.audio.stack2.play()
      return state
      
    case 'STACK_3':
      state.audio.stack3.play()
      return state
      
    case 'STACK_4':
      state.audio.stack4.play()
      return state

    default:
      return state
  }
}

const initialState = {
  audio: {
    backgroundAudio: new Audio(phonk),
    defeat: new Audio(loose),
    collide: new Audio(drop),
    stage1: new Audio(black),
    stack1: new Audio(row1),
    stack2: new Audio(row2),
    stack3: new Audio(row3),
    stack4: new Audio(row4)
  },
  stateImage: stageImage1,
  collideImage: null,
}

export const MediaContext = createContext()

export const MediaProvider = (props) => {
  const [state, dispatch] = useReducer(MediaReducer, initialState)

  return (
    <MediaContext.Provider
      value={{
        stageImg: state.stateImage,
        collideImg: state.collideImage,
        dispatch
      }}
    >
      { props.children }
    </MediaContext.Provider>
  )
}

