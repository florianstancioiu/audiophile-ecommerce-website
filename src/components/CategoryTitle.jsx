import classes from './CategoryTitle.module.css';

const CategoryTitle = ({ title }) => {
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.title}>{title}</h2>
    </div>
  );
};

export default CategoryTitle;
