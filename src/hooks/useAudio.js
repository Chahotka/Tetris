import React, { useEffect, useState } from 'react'
import phonk from '../audio/Bg-audio.mp3'
import loose from '../audio/loose-audio.mp3'

// Додумать как проигрывать звуки

function useAudio() {
  const [playing, setPlaying] = useState(false)

  const sounds = {
    background: {
      audio: new Audio(phonk),
      play: () => setPlaying(!playing)
    },
    defeat: {
      audio: new Audio(loose),
      play: () => setPlaying(!playing)
    },
  }

  useEffect(() => {

  }, [playing])
}

export default useAudio