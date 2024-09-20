import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const ResultModel = forwardRef(function ResultModel({score,targetTime},ref) {
    
    const dialog = useRef();
    console.log('ref', ref);

  useImperativeHandle(ref,(val) => {
    console.log('val',val);
    return {
        open(){
            dialog.current.showModal();
        }
    }
  });

  return (
    <dialog ref={dialog} className='result-modal'>
        <h2>Your Score: { score }</h2>
        <p>The Target time was <strong>{targetTime}</strong>seconds. </p>
        <p>You stopped the timer with <strong>X seconds left.</strong></p>

        <form method='dialog'>
            <button>close</button>
        </form>

    </dialog>
  )
});

export default ResultModel;


