import React, { useEffect, useReducer, useState } from 'react'
import phonk from '../audio/Bg-audio.mp3'
import loose from '../audio/loose-audio.mp3'
import drop from '../audio/stack-sound.mp3'
import row1 from '../audio/1row-stack.mp3'
import row2 from '../audio/2rows-stack.mp3'
import row3 from '../audio/3rows-stack.mp3'
import row4 from '../audio/4rows-stack.mp3'

// Есть вариант попробовать useReducer

const AudioReducer = (state, action) => {
  switch(action.type) {
    case 'GAMESTART':
      for (let key in state) {
        state[key].pause()
        state[key].currentTime = 0
      }
      
      state.background.play()
      state.background.volume = 0.4
      state.background.loop = true

      return state

    case 'GAMEOVER':
      state.background.pause()
      state.defeat.play()
      state.defeat.loop = true

      return state

    case 'COLLIDE':
      if (!state.collide.paused) {
        state.collide.currentTime = 0
      }
      state.collide.volume = 0.6
      state.collide.play()
      return state
    case 'STAGE_1': 

      return state

    case 'STACK_1':
      state.stack1.play()
      return state
        
    case 'STACK_2':
      state.stack2.play()
      return state
      
    case 'STACK_3':
      state.stack3.play()
      return state
      
    case 'STACK_4':
      state.stack4.play()
      return state

    default:
      return state
  }
}

const initialState = {
  background: new Audio(phonk),
  defeat: new Audio(loose),
  collide: new Audio(drop),
  stack1: new Audio(row1),
  stack2: new Audio(row2),
  stack3: new Audio(row3),
  stack4: new Audio(row4)

}

function useAudio() {
  const [state, dispatch] = useReducer(AudioReducer, initialState)

  return { dispatch }
}

export default useAudio