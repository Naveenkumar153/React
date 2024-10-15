import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/Counter';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     { show &&  <div className={classes.value}>{ counter }</div>}
      <div>
        <button className={show ? "" : classes.disabled} onClick={ () => dispatch(counterActions.increment(10))}>Increment</button>
        <button className={show ? "" : classes.disabled} onClick={ () => dispatch(counterActions.decrement(10))}>Decrement</button>
      </div>
      <button onClick={() => dispatch(counterActions.toggleCounter())}> { show ? 'Hide' : 'Show' } Toggle Counter</button>
    </main>
  );
};

export default Counter;
