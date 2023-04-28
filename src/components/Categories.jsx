import classes from './Categories.module.css';
import Category from './Category';

import HeadphonesCategoryImg from '../images/home/mobile/category-headphones.png';
import SpeakersCategoryImg from '../images/home/mobile/category-speakers.png';
import EarphonesCategoryImg from '../images/home/mobile/category-earphones.png';

const categories = [
  {
    id: 1,
    title: 'Headphones',
    image: HeadphonesCategoryImg,
    imageAltText: 'Headphones Category Image',
    link: '/categories/headphones',
  },
  {
    id: 2,
    title: 'Speakers',
    image: SpeakersCategoryImg,
    imageAltText: 'Speakers Category Image',
    link: '/categories/speakers',
  },
  {
    id: 3,
    title: 'Earphones',
    image: EarphonesCategoryImg,
    imageAltText: 'Earphones Category Image',
    link: '/categories/earphones',
  },
];

const Categories = () => {
  return (
    <div className={classes.wrapper}>
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          image={category.image}
          imageAltText={category.imageAltText}
          link={category.link}
        />
      ))}
    </div>
  );
};

export default Categories;
