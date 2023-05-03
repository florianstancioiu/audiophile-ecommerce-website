import classes from './CategoryProduct.module.css';
import Button from './UI/Button';

const CategoryProduct = ({ title, image, description, link, newProduct }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes['image-wrapper']}>
        <img src={image} alt={title} />
      </div>
      {newProduct && <p className={classes['new-product']}>New Product</p>}
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.description}>{description}</p>
      <Button title='See Product' link={link} />
    </div>
  );
};

export default CategoryProduct;
