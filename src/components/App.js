import { MediaProvider } from '../context/MediaContext';
import '../styles/app.scss'
import Tetris from './Tetris';

function App() {
  return (
    <MediaProvider>
      <Tetris />
    </MediaProvider>
  )
}

export default App;
