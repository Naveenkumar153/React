import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{ counter }</div>
      <div>
        <button onClick={ () => dispatch({ type: 'INCREMENT', payload: 10 })}>Increment</button>
        <button onClick={ () => dispatch({ type: 'DECREMENT', payload: 10  })}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
