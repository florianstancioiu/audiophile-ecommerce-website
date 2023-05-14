import { createPortal } from 'react-dom';

import classes from './Menu.module.css';
import Categories from './Categories';

const Menu = () => {
  return createPortal(
    <div className={classes.wrapper}>
      <div className={classes.overlay}></div>
      <div className={classes.menu}>
        <Categories />
      </div>
    </div>,
    document.querySelector('#overlays-root')
  );
};

export default Menu;
