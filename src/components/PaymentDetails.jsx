import classes from './PaymentDetails.module.css';
import Input from './UI/Input';

const PaymentDetails = () => {
  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>Payment Details</p>
      <Input
        id='e-money-number'
        title='e-Money Number'
        type='text'
        placeholder='238521993'
      />
      <Input
        id='e-money-pin'
        title='e-Money PIN'
        type='text'
        placeholder='6891'
      />
    </div>
  );
};

export default PaymentDetails;
