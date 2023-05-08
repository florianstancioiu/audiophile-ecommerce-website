import classes from './ProductFeatures.module.css';

const ProductFeatures = ({ features }) => {
  return (
    <div className={classes.wrapper}>
      <h3 className={classes.title}>Features</h3>
      <p className={classes.description}>{features}</p>
    </div>
  );
};

export default ProductFeatures;
