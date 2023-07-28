import React, { useEffect, useReducer, useState } from 'react'
import phonk from '../audio/Bg-audio.mp3'
import loose from '../audio/loose-audio.mp3'

// Есть вариант попробовать useReducer

const AudioReducer = (state, action) => {
  switch(action.type) {
    case 'GAMESTART':
      for (let key in state) {
        state[key].pause()
        state[key].currentTime = 0
      }
      
      state.background.play()
      state.background.loop = true

      return state
    case 'GAMEOVER':
      state.background.pause()
      state.defeat.play()
      state.defeat.loop = true

      return state
    default:
      return state
  }
}

const initialState = {
  background: new Audio(phonk),
  defeat: new Audio(loose),

}

function useAudio() {
  const [state, dispatch] = useReducer(AudioReducer, initialState)

  return { dispatch }
}

export default useAudio