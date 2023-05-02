import classes from './SeeProductZX9.module.css';
import ZX9SpeakerImage from '../images/home/mobile/zx9-speaker.png';
import Button from './UI/Button';

const SeeProductZX9 = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes['inner-wrapper']}>
        <img
          className={classes.image}
          src={ZX9SpeakerImage}
          alt='ZX9 Speaker'
        />
        <h2 className={classes.title}>ZX9 SPEAKER</h2>
        <p className={classes.description}>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button title='See Product' type='secondary' />
      </div>
    </div>
  );
};

export default SeeProductZX9;
