import Header from '../components/Header';
import Categories from '../components/Categories';
import BestAudioGear from '../components/BestAudioGear';
import Footer from '../components/Footer';
import CategoryTitle from '../components/CategoryTitle';
import CategoryProduct from '../components/CategoryProduct';

const products = [
  {
    id: 1,
    title: 'XX99 Mark II Headphones',
    image: '/images/products/xx99-mark-2-headphones.png',
    description:
      'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    link: '/products/xx99-mark-2-headphones',
    new: true,
  },
  {
    id: 2,
    title: 'XX99 Mark I Headphones',
    image: '/images/products/xx99-mark-1-headphones.png',
    description:
      'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
    link: '/products/xx99-mark-1-headphones',
    new: false,
  },
  {
    id: 3,
    title: 'XX59 Headphones',
    image: '/images/products/xx59-headphones.png',
    description:
      'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
    link: '/products/xx59-headphones',
    new: false,
  },
];

const Category = () => {
  return (
    <>
      <Header />
      <main>
        <CategoryTitle title='Headphones' />
        {products.map((product) => (
          <CategoryProduct
            key={product.id}
            title={product.title}
            image={product.image}
            description={product.description}
            link={product.link}
            newProduct={product.new}
          />
        ))}
        <Categories />
        <BestAudioGear />
      </main>
      <Footer />
    </>
  );
};

export default Category;
