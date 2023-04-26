import Header from '../components/Header';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import SeeProductZX9 from '../components/SeeProductZX9';
import SeeProductZX7 from '../components/SeeProductZX7';
import SeeProductYX1 from '../components/SeeProductYX1';
import BestAudioGear from '../components/BestAudioGear';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <SeeProductZX9 />
        <SeeProductZX7 />
        <SeeProductYX1 />
        <BestAudioGear />
      </main>
      <Footer />
    </>
  );
};

export default Home;
