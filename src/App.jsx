import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Expamples.jsx';

import Player from './components/project-2/Button.jsx';
import Gameboard from './components/project-2/Gameboard.jsx';
function App() {
  
  return (
    <>
     {/* First excerise */}
      {/* <Header />
      <main>
        <CoreConcepts/>
        <Examples/>
      </main> */}

      <main>
        <div id='game-container'>
          <ol id='players'>
            <Player name='Player 1' symbol='X'/>
            <Player name='Player 2' symbol='O'/>
          </ol>
          <Gameboard/>
        </div>
        LOG 
      </main>

    </>
  );
}

export default App;
