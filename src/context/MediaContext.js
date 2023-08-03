import React, { createContext, useReducer } from 'react'

// Stage images
import stageImage1 from '../images/Kanye-background.jpg'

// Collide images
// Audios
import phonk from '../audio/Bg-audio.mp3'
import loose from '../audio/loose-audio.mp3'
import drop from '../audio/stack-sound.mp3'
import black from '../audio/stage1.mp3'
import row1 from '../audio/1row-stack.mp3'
import row2 from '../audio/2rows-stack.mp3'
import row3 from '../audio/3rows-stack.mp3'
import row4 from '../audio/4rows-stack.mp3'



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
      if (action.collided) {
        if (state.audio.collide) {
          state.audio.collide.currentTime = 0
        }
        state.audio.collide.volume = 0.6
        state.audio.collide.play()
      }


      return {
        ...state,
        collided: action.collided
      }

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
  collided: false
}

export const MediaContext = createContext()

export const MediaProvider = (props) => {
  const [state, dispatch] = useReducer(MediaReducer, initialState)

  return (
    <MediaContext.Provider
      value={{
        stageImg: state.stateImage,
        collided: state.collided,
        dispatch
      }}
    >
      { props.children }
    </MediaContext.Provider>
  )
}

