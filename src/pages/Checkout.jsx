import Header from '../components/Header';
import GoBack from '../components/GoBack';
import CheckoutSummary from '../components/CheckoutSummary';
import { default as CheckoutComponent } from '../components/Checkout';
import Footer from '../components/Footer';

const Checkout = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <GoBack link='/' />
        <CheckoutComponent />
      </main>
      <Footer />
    </>
  );
};

export default Checkout;
