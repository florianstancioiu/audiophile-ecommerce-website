import classes from './SeeProductZX7.module.css';
import Button from './UI/Button';

const SeeProductZX7 = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes['inner-wrapper']}>
        <h3 className={classes.title}>ZX7 SPEAKER</h3>
        <Button title='See Product' type='ternary' />
      </div>
    </div>
  );
};

export default SeeProductZX7;
