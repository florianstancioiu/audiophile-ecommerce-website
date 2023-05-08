import classes from './ProductPictures.module.css';

const ProductPictures = ({ pictures }) => {
  return (
    <div className={classes.wrapper}>
      {pictures.map((picture) => (
        <img
          key={picture.id}
          src={picture.image}
          className={classes.image}
          alt={picture.altText}
        />
      ))}
    </div>
  );
};

export default ProductPictures;
