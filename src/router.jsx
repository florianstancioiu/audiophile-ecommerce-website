import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Category from './pages/Category';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/category/:id',
    element: <Category />,
  },
]);

export default router;
