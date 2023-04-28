import classes from './Category.module.css';
import ShopArrowIcon from '../images/icon-shop-arrow.svg';

const Category = ({ image, imageAltText, title, link }) => {
  return (
    <div className={classes.wrapper}>
      <img className={classes.image} src={image} alt={imageAltText} />
      <div className={classes['inner-wrapper']}>
        <p className={classes.title}>{title}</p>
        <a className={classes.link} url='#'>
          <span>Shop</span>
          <img src={ShopArrowIcon} alt='' />
        </a>
      </div>
    </div>
  );
};

export default Category;
