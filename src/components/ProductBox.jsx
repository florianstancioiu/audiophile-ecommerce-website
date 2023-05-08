import classes from './ProductBox.module.css';

const ProductBox = ({ box }) => {
  return (
    <div className={classes.wrapper}>
      <h3 className={classes.title}>In the box</h3>
      {box.map((item) => (
        <div key={item.id} className={classes.item}>
          <span className={classes['item-quantity']}>{item.count}x</span>
          <span className={classes['item-title']}>{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default ProductBox;
