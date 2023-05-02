import classes from './SeeProductYX1.module.css';
import YX1EarphonesImage from '../images/home/mobile/yx1-earphones.png';
import Button from './UI/Button';

const SeeProductYX1 = () => {
  return (
    <div className={classes.wrapper}>
      <img
        className={classes.image}
        src={YX1EarphonesImage}
        alt='YX1 Earphones'
      />

      <div className={classes['inner-wrapper']}>
        <h3 className={classes.title}>YX1 EARPHONES</h3>
        <Button title='See Product' type='ternary' />
      </div>
    </div>
  );
};

export default SeeProductYX1;
