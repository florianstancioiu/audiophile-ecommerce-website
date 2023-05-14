import { useState } from 'react';

import classes from './Header.module.css';
import CartIcon from '../images/icon-cart.svg';
import HamburgerIcon from '../images/icon-hamburger.svg';
import LogoWhite from '../images/logo-white.svg';
import Cart from './Cart';
import Menu from './Menu';

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleShowCart = () => {
    setShowCart((prevValue) => !prevValue);
  };

  const toggleShowMenu = () => {
    setShowMenu((prevValue) => !prevValue);
  };

  return (
    <header className={classes.header}>
      <div className={classes['inner-wrapper']}>
        <img
          className={classes.menu}
          onClick={toggleShowMenu}
          src={HamburgerIcon}
          alt=''
        />
        <img src={LogoWhite} alt='Audiophile Ecommerce Website Logo' />
        <img
          className={classes.cart}
          onClick={toggleShowCart}
          src={CartIcon}
          alt=''
        />
      </div>
      {showCart && <Cart />}
      {showMenu && <Menu />}
    </header>
  );
};

export default Header;
