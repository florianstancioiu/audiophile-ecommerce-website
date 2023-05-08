import { useState } from 'react';
import classes from './Counter.module.css';

const Counter = () => {
  const [count, setCount] = useState(1);
  const decrease = () => {
    if (count === 1) {
      return;
    }

    setCount((prevValue) => (prevValue -= 1));
  };

  const increase = () => {
    setCount((prevValue) => (prevValue += 1));
  };

  return (
    <div className={classes['quantity-wrapper']}>
      <div onClick={decrease} className={classes.decrease}>
        -
      </div>
      <div className={classes.count}>{count}</div>
      <div onClick={increase} className={classes.increase}>
        +
      </div>
    </div>
  );
};

export default Counter;
