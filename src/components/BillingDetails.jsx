import classes from './BillingDetails.module.css';
import Input from './UI/Input';

const BillingDetails = () => {
  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>Billing Details</p>
      <Input id='name' title='Name' type='text' placeholder='Alexei Ward' />
      <Input
        id='email-address'
        title='Email Address'
        type='email'
        placeholder='alexei@mail.com'
      />
      <Input
        id='phone-number'
        title='Phone Number'
        type='text'
        placeholder='+1 202-555-0136'
      />
    </div>
  );
};

export default BillingDetails;
