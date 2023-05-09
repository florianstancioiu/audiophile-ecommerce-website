import { createPortal } from 'react-dom';

import classes from './Cart.module.css';
import Button from './UI/Button';
import Counter from './UI/Counter';

const Cart = () => {
  return createPortal(
    <div className={classes.wrapper}>
      <div className={classes.overlay}></div>
      <div className={classes.cart}>
        <div className={classes['cart-header']}>
          <p className={classes.title}>Cart (3)</p>
          <p className={classes['remove-all']}>Remove all</p>
        </div>
        <div className={classes['cart-body']}>
          <div className={classes['cart-item']}>
            <div className={classes['item-image-title-wrapper']}>
              <div className={classes['item-image-wrapper']}>
                <img
                  className={classes['item-image']}
                  src='/images/products/xx99-mark-2-headphones.png'
                  alt='xx99-mark-2-headphones'
                />
              </div>
              <div className={classes['item-title-wrapper']}>
                <p className={classes['item-title']}>XX99 MK II</p>
                <p className={classes['item-price']}>$ 2,999</p>
              </div>
            </div>
            <div className={classes['item-counter-wrapper']}>
              <Counter />
            </div>
          </div>

          <div className={classes['cart-item']}>
            <div className={classes['item-image-title-wrapper']}>
              <div className={classes['item-image-wrapper']}>
                <img
                  className={classes['item-image']}
                  src='/images/products/xx99-mark-2-headphones.png'
                  alt='xx99-mark-2-headphones'
                />
              </div>
              <div className={classes['item-title-wrapper']}>
                <p className={classes['item-title']}>XX99 MK II</p>
                <p className={classes['item-price']}>$ 2,999</p>
              </div>
            </div>
            <div className={classes['item-counter-wrapper']}>
              <Counter />
            </div>
          </div>

          <div className={classes['cart-item']}>
            <div className={classes['item-image-title-wrapper']}>
              <div className={classes['item-image-wrapper']}>
                <img
                  className={classes['item-image']}
                  src='/images/products/xx99-mark-2-headphones.png'
                  alt='xx99-mark-2-headphones'
                />
              </div>
              <div className={classes['item-title-wrapper']}>
                <p className={classes['item-title']}>XX99 MK II</p>
                <p className={classes['item-price']}>$ 2,999</p>
              </div>
            </div>
            <div className={classes['item-counter-wrapper']}>
              <Counter />
            </div>
          </div>
        </div>
        <div className={classes['cart-footer']}>
          <div className={classes['cart-total-wrapper']}>
            <p className={classes['cart-total']}>Total</p>
            <p className={classes['cart-total-price']}>$ 5,396</p>
          </div>
          <Button title='Checkout' />
        </div>
      </div>
    </div>,
    document.querySelector('#overlays-root')
  );
};

export default Cart;
