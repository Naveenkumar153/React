import React, { useRef, useState } from 'react'
import ResultModel from './ResultModel';
export default function TimerChallenge({ titile, targetTime }) {
  let timer = useRef();
  let dialog = useRef();

  const [ timerStarted, setTimerStarted ] = useState(false);
  const [ timerExp, setTimerExp ] = useState(false);
  
  function handleStart(){
    timer.current = setTimeout(() => {
       setTimerExp(true);
       dialog.current.open();
    }, targetTime * 1000);
    setTimerStarted(true);
  };

  function handleStop(){
    clearTimeout(timer.current);
    setTimerStarted(false);
    setTimerExp(false);
  }

  return (
    <>
    { timerExp &&  <ResultModel ref={dialog} targetTime={timerExp} score={'lost'}/> }
    <section className='challenge'>
        <h2>{titile}</h2>
        { timerExp && <p>Your lost!</p> }
        <p className="challenge-time">{targetTime} second{ targetTime > 1 ?'s' : '' }</p>
        <p>
            <button onClick={ timerStarted ? handleStop : handleStart }> { timerStarted ? "Stop" : "Start" }  Challenge</button>
        </p>
        <p className={timerStarted ? 'active' : undefined}>
            { timerStarted ? 'Time is running' : 'Time inactive'}
        </p>
    </section>
    </>
  )
}
