import classes from './ProductMain.module.css';
import AddToCartButton from './UI/AddToCartButton';

const ProductMain = ({ product }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes['image-wrapper']}>
        <img src={product.image} alt={product.title} />
      </div>
      {product.new && <p className={classes['new-product']}>New Product</p>}
      <h3 className={classes.title}>{product.title}</h3>
      <p className={classes.description}>{product.description}</p>
      <p className={classes.price}>
        <span className={classes['price-currency']}>
          {product.priceCurrency}
        </span>{' '}
        <span>{product.price}</span>
      </p>
      <AddToCartButton />
    </div>
  );
};

export default ProductMain;
