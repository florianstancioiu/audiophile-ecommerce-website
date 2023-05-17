import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';
import Checkout from './pages/Checkout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/categories/:id',
    element: <Category />,
  },
  {
    path: '/products/:id',
    element: <Product />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
]);

export default router;
