import classes from './Checkout.module.css';

import BillingDetails from './BillingDetails';
import ShippingInfo from './ShippingInfo';
import PaymentDetails from './PaymentDetails';
import CheckoutSummary from './CheckoutSummary';

const Checkout = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes['inner-wrapper']}>
        <h3 className={classes.title}>Checkout</h3>
        <BillingDetails />
        <ShippingInfo />
        <PaymentDetails />
      </div>
      <CheckoutSummary />
    </div>
  );
};

export default Checkout;
