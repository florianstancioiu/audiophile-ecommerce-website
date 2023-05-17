import classes from './Input.module.css';

const Input = ({ id, title, type, placeholder, className }) => {
  const wrapperClasses = className
    ? `${classes.wrapper} ${className}`
    : classes.wrapper;

  return (
    <div className={wrapperClasses}>
      <label htmlFor={id}>{title}</label>
      <input id={id} type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
