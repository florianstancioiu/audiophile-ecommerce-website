import classes from './Header.module.css';
import CartIcon from '../images/icon-cart.svg';
import HamburgerIcon from '../images/icon-hamburger.svg';
import LogoWhite from '../images/logo-white.svg';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes['inner-wrapper']}>
        <img src={HamburgerIcon} alt='' />
        <img src={LogoWhite} alt='Audiophile Ecommerce Website Logo' />
        <img src={CartIcon} alt='' />
      </div>
    </header>
  );
};

export default Header;
