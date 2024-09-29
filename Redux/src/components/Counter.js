import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);
  const toggleCounterHandler = () => {
    dispatch({ type: 'TOGGLE_COUNTER' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     { show &&  <div className={classes.value}>{ counter }</div>}
      <div>
        <button className={show ? "" : classes.disabled} onClick={ () => dispatch({ type: 'INCREMENT', payload: 10 })}>Increment</button>
        <button className={show ? "" : classes.disabled} onClick={ () => dispatch({ type: 'DECREMENT', payload: 10  })}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}> { show ? 'Hide' : 'Show' } Toggle Counter</button>
    </main>
  );
};

export default Counter;
