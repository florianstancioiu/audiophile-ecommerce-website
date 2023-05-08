import { useState } from 'react';
import classes from './AddToCartButton.module.css';
import Button from './Button';

const AddToCartButton = () => {
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
    <div className={classes.wrapper}>
      <div className={classes['quantity-wrapper']}>
        <div onClick={decrease} className={classes.decrease}>
          -
        </div>
        <div className={classes.count}>{count}</div>
        <div onClick={increase} className={classes.increase}>
          +
        </div>
      </div>
      <Button title='Add to cart' />
    </div>
  );
};

export default AddToCartButton;
