import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home/Home';
import Category from '../Pages/Home/Category/Category';
import ProductLayout from '../Layouts/ProductLayout';
import Products from '../Pages/Products/Products/Products';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Cart from '../Pages/Cart/Cart';
import { productsAndCartData } from '../CustomLoaders/getCart&ProductData';
import CheckOut from '../Pages/CheckOut/CheckOut';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/category/:id',
        element: <Category />,
        loader: ({ params }) =>
          fetch(
            `https://exclusive-ecommerce-reactjs-server-shakibhossainmuhammad.vercel.app/categories/${params.id}`
          ),
      },
      {
        path: '/cart',
        element: <Cart />,
        loader: productsAndCartData,
      },
      {
        path: '/checkout',
        element: <CheckOut />,
      },
    ],
  },
  {
    path: 'product',
    element: <ProductLayout />,
    children: [
      {
        path: ':id',
        element: <Products />,
        loader: ({ params }) =>
          fetch(
            `https://exclusive-ecommerce-reactjs-server-shakibhossainmuhammad.vercel.app/product/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
