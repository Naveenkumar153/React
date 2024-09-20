import { useEffect, useState } from 'react';
import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

const timer = [
  { title:'Easy', targetTime:1 },
  { title:'Not Easy', targetTime:5 },
  { title:'Getting tough', targetTime:10 },
  { title:'Pros only', targetTime:15},
];

function App() {

  const [ timerValues, setTimerValues ] = useState([]);

  useEffect(() => {
    setTimerValues(timer);
  },[]);

  return (
    <>
      <Player />
      <div id="challenges">
        {
           timerValues.map((timer,idx) => {
            return  <TimerChallenge key={idx} titile={timer.title} targetTime={timer.targetTime} />
          })
        }
      </div>
    </>
  );
}

export default App;
