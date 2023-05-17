import classes from './CheckoutSummary.module.css';
import Button from './UI/Button';

const CheckoutSummary = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes['inner-wrapper']}>
        <p className={classes.title}>Summary</p>
        <div className={classes['products-wrapper']}>
          <div className={classes.product}>
            <div className={classes['product-inner']}>
              <div className={classes['product-image-wrapper']}>
                <img
                  className={classes['product-image']}
                  src='/images/products/xx99-mark-2-headphones.png'
                  alt='XX99 MKII'
                />
              </div>
              <div className={classes['product-title-price']}>
                <p className={classes['product-title']}>XX99 MK II</p>
                <p className={classes['product-price']}>$ 2,999</p>
              </div>
            </div>
            <div className={classes['product-quantity']}>x1</div>
          </div>

          <div className={classes.product}>
            <div className={classes['product-inner']}>
              <div className={classes['product-image-wrapper']}>
                <img
                  className={classes['product-image']}
                  src='/images/products/xx99-mark-2-headphones.png'
                  alt='XX99 MKII'
                />
              </div>
              <div className={classes['product-title-price']}>
                <p className={classes['product-title']}>XX99 MK II</p>
                <p className={classes['product-price']}>$ 2,999</p>
              </div>
            </div>
            <div className={classes['product-quantity']}>x1</div>
          </div>

          <div className={classes.product}>
            <div className={classes['product-inner']}>
              <div className={classes['product-image-wrapper']}>
                <img
                  className={classes['product-image']}
                  src='/images/products/xx99-mark-2-headphones.png'
                  alt='XX99 MKII'
                />
              </div>
              <div className={classes['product-title-price']}>
                <p className={classes['product-title']}>XX99 MK II</p>
                <p className={classes['product-price']}>$ 2,999</p>
              </div>
            </div>
            <div className={classes['product-quantity']}>x1</div>
          </div>
        </div>
        <div className={classes['totals-wrapper']}>
          <div className={classes.total}>
            <p className={classes['total-left']}>Total</p>
            <p className={classes['total-right']}>$ 5,396</p>
          </div>
          <div className={classes.total}>
            <p className={classes['total-left']}>Shipping</p>
            <p className={classes['total-right']}>$ 50</p>
          </div>
          <div className={classes.total}>
            <p className={classes['total-left']}>Vat (Included)</p>
            <p className={classes['total-right']}>$ 1,079</p>
          </div>
          <div className={classes['grand-total']}>
            <p className={classes['total-left']}>Grand Total</p>
            <p className={classes['total-right']}>$ 5,446</p>
          </div>
        </div>
        <Button title='Continue & Pay' />
      </div>
    </div>
  );
};

export default CheckoutSummary;
