import Header from '../components/Header';
import GoBack from '../components/GoBack';
import ProductMain from '../components/ProductMain';
import ProductFeatures from '../components/ProductFeatures';
import ProductBox from '../components/ProductBox';
import ProductPictures from '../components/ProductPictures';
import MayAlsoLike from '../components/MayAlsoLike';
import BestAudioGear from '../components/BestAudioGear';
import Footer from '../components/Footer';

const product = {
  id: 3,
  title: 'XX59 Headphones',
  image: '/images/products/xx59-headphones.png',
  description:
    'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
  link: '/products/xx59-headphones',
  price: '899',
  priceCurrency: '$',
  new: true,
  features: `These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos. \n More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the  XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.`,
  box: [
    {
      id: 1,
      title: 'Headphone Unit',
      count: 1,
    },
    {
      id: 2,
      title: 'Replacement Earcups',
      count: 2,
    },
    {
      id: 3,
      title: 'User Manual',
      count: 1,
    },
    {
      id: 4,
      title: '3.5mm 5m Audio Cable',
      count: 1,
    },
  ],
  pictures: [
    {
      id: 1,
      link: '/images/product-pictures/xx59-headphones-1.png',
    },
    {
      id: 2,
      link: '/images/product-pictures/xx59-headphones-2.png',
    },
    {
      id: 3,
      link: '/images/product-pictures/xx59-headphones-3.png',
    },
  ],
  similarProducts: [
    {
      id: 1,
      title: 'XX99 MARK II',
      image: '/images/products/xx99-mark-2-headphones.png',
      link: '/products/xx99-mark-2',
    },
    {
      id: 2,
      title: 'XX99 MARK I',
      image: '/images/products/xx99-mark-1-headphones.png',
      link: '/products/xx99-mark-1',
    },
    {
      id: 3,
      title: 'ZX9 SPEAKER',
      image: '/images/products/zx9-speaker.png',
      link: '/products/zx9-speaker',
    },
  ],
};

const Product = () => {
  return (
    <>
      <Header />
      <main>
        <GoBack link='/' />
        <ProductMain product={product} />
        <ProductFeatures features={product.features} />
        <ProductBox box={product.box} />
        <ProductPictures pictures={product.pictures} />
        <MayAlsoLike products={product.similarProducts} />
        <BestAudioGear />
      </main>
      <Footer />
    </>
  );
};

export default Product;
