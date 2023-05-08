import classes from './Hero.module.css';
import Button from './UI/Button';

const Hero = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes['inner-wrapper']}>
        <p className={classes['new-product']}>New Product</p>
        <h2 className={classes.title}>XX99 Mark II HeadphoneS</h2>
        <p className={classes.description}>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button title='See Product' />
      </div>
    </div>
  );
};

export default Hero;
