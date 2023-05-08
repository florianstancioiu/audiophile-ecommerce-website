import classes from './MayAlsoLike.module.css';
import Button from './UI/Button';

const MayAlsoLike = ({ products }) => {
  return (
    <div className={classes.wrapper}>
      <h3 className={classes.title}>You may also like</h3>
      <div className={classes['products-wrapper']}>
        {products.map((product) => (
          <div key={product.id} className={classes.product}>
            <div className={classes['image-wrapper']}>
              <img
                className={classes.image}
                src={product.image}
                alt={product.title}
              />
            </div>
            <h3 className={classes['product-title']}>{product.title}</h3>
            <Button title='See Product' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MayAlsoLike;
