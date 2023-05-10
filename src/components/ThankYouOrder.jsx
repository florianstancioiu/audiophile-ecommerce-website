import { createPortal } from 'react-dom';

import classes from './ThankYouOrder.module.css';
import CheckmarkIcon from '../images/icon-checkmark.svg';
import Button from './UI/Button';

const ThankYouOrder = () => {
  return createPortal(
    <div className={classes.wrapper}>
      <div className={classes.overlay}></div>
      <div className={classes.card}>
        <div className={classes['checkmark-wrapper']}>
          <img src={CheckmarkIcon} alt='' />
        </div>
        <h4 className={classes.title}>
          Thank you <br />
          for your order
        </h4>
        <p className={classes['sub-title']}>
          You will receive an email confirmation shortly.
        </p>
        <div className={classes['order-summary']}>
          <div className={classes['summary-header']}>
            <div className={classes['summary-product']}>
              <div className={classes['summary-image-and-title']}>
                <div className={classes['summary-image-wrapper']}>
                  <img
                    className={classes['summary-image']}
                    src='/images/products/xx99-mark-2-headphones.png'
                    alt=''
                  />
                </div>
                <div className={classes['summary-title-wrapper']}>
                  <p className={classes['summary-title']}>XX99 MK II</p>
                  <p className={classes['summary-sub-title']}>$ 2,999</p>
                </div>
              </div>
              <p className={classes['summary-product-quantity']}>x1</p>
            </div>
            <div className={classes['summary-other-items']}>
              <p>and 2 other item(s)</p>
            </div>
          </div>
          <div className={classes['summary-footer']}>
            <p className={classes['footer-title']}>Grand Total</p>
            <p className={classes['footer-price']}>$ 5,446</p>
          </div>
        </div>
        <Button title='Back to home' />
      </div>
    </div>,
    document.querySelector('#overlays-root')
  );
};

export default ThankYouOrder;
