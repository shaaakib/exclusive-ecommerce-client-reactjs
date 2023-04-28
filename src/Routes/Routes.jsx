import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home/Home';
import Category from '../Pages/Home/Category/Category';
import ProductLayout from '../Layouts/ProductLayout';
import Products from '../Pages/Products/Products/Products';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/category/:id',
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  {
    path: 'products',
    element: <ProductLayout />,
    children: [
      {
        path: ':id',
        element: <Products />,
      },
    ],
  },
]);

export default router;