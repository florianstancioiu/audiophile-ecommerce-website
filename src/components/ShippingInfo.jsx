import classes from './ShippingInfo.module.css';
import Input from './UI/Input';

const ShippingInfo = () => {
  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>Shipping Info</p>
      <Input
        id='your-address'
        title='Your Address'
        type='text'
        placeholder='1137 Williams Avenue'
      />
      <Input id='zip-code' title='Zip Code' type='text' placeholder='10001' />
      <Input id='city' title='City' type='text' placeholder='New York' />
      <Input
        id='country'
        title='Country'
        type='text'
        placeholder='United States'
      />
    </div>
  );
};

export default ShippingInfo;
