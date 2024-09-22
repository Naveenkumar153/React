import { useState } from "react";
import { useEffect } from "react";

let TIMER = 3000; 
export default function DeleteConfirmation({ onConfirm, onCancel }) {

  const [ remaingTime, setRemaingTime ] = useState(TIMER)

  
  // useEffect(() => {
  //   console.log('timer start');
  //   const interval =  setInterval(() => {
  //     setRemaingTime(prevTime => prevTime - 10);
  //   },10);

  //   return () => {
  //     clearInterval(interval); 
  //   }

  // },[]);

  useEffect(() => {
    console.log('timer set')
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    return () => {
      console.log('cleanup');
      clearTimeout(timer);
    };

  },[onConfirm])

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={remaingTime} max={TIMER}/> 
    </div>
  );
}
