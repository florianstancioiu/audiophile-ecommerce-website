import classes from './AddToCartButton.module.css';
import Button from './Button';
import Counter from './Counter';

const AddToCartButton = () => {
  return (
    <div className={classes.wrapper}>
      <Counter />
      <Button title='Add to cart' />
    </div>
  );
};

export default AddToCartButton;
