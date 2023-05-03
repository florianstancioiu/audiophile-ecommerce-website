import classes from './Footer.module.css';
import AudiophileLogo from '../images/logo-white.svg';
import FacebookIcon from '../images/icon-facebook.svg';
import TwitterIcon from '../images/icon-twitter.svg';
import InstagramIcon from '../images/icon-instagram.svg';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <div className={classes['inner-wrapper']}>
        <a className={classes.logo} href='#' aria-label='Visit Home Page'>
          <img src={AudiophileLogo} alt='Audiophile Logo' />
        </a>

        <div className={classes.links}>
          <a className={classes.link} href='#'>
            Home
          </a>
          <a className={classes.link} href='#'>
            Headphones
          </a>
          <a className={classes.link} href='#'>
            Speakers
          </a>
          <a className={classes.link} href='#'>
            Earphones
          </a>
        </div>
        <p className={classes.description}>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p className={classes.copyright}>
          Copyright {year}. All Rights Reserved
        </p>
        <div className={classes['social-icons']}>
          <a
            className={classes['social-link']}
            href='#'
            aria-label='Visit us on Facebook'
          >
            <img src={FacebookIcon} alt='' />
          </a>
          <a
            className={classes['social-link']}
            href='#'
            aria-label='Visit us on Twitter'
          >
            <img src={TwitterIcon} alt='' />
          </a>
          <a
            className={classes['social-link']}
            href='#'
            aria-label='Visit us on Instagram'
          >
            <img src={InstagramIcon} alt='' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
