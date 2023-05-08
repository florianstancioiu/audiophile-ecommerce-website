import classes from './GoBack.module.css';
import { Link } from 'react-router-dom';

const GoBack = ({ link }) => {
  return (
    <div className={classes.wrapper}>
      <Link className={classes.link} to={link}>
        Go Back
      </Link>
    </div>
  );
};

export default GoBack;
