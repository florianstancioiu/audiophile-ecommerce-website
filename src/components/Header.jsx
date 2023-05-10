import { useState } from 'react';

import classes from './Header.module.css';
import CartIcon from '../images/icon-cart.svg';
import HamburgerIcon from '../images/icon-hamburger.svg';
import LogoWhite from '../images/logo-white.svg';
import Cart from './Cart';
import ThankYouOrder from './ThankYouOrder';

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const toggleShowCart = () => {
    setShowCart((prevValue) => !prevValue);
  };

  return (
    <header className={classes.header}>
      <div className={classes['inner-wrapper']}>
        <img className={classes.menu} src={HamburgerIcon} alt='' />
        <img src={LogoWhite} alt='Audiophile Ecommerce Website Logo' />
        <img
          className={classes.cart}
          onClick={toggleShowCart}
          src={CartIcon}
          alt=''
        />
      </div>
      {showCart && <Cart />}
      <ThankYouOrder />
    </header>
  );
};

export default Header;
