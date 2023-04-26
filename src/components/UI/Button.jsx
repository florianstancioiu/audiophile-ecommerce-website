import classes from './Button.module.css';

const Button = ({ title, type }) => {
  let btnClasses = `${classes.btn} `;

  switch (type) {
    case 'secondary':
      btnClasses += `${classes.secondary}`;
      break;
    case 'ternary':
      btnClasses += `${classes.ternary}`;
      break;
  }

  return <button className={btnClasses}>{title}</button>;
};

export default Button;
