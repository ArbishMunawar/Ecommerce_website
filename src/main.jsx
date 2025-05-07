import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router';

import './index.css';
import Root from './App.jsx'; 
import HomePage from './ui/Pages/HomePage/index.jsx';
import ProductsDetailPage from './ui/Pages/ProductsDetailPage/index.jsx';
import ShopPage from './ui/Pages/ShopPage/index.jsx';
import BlogPage from './ui/Pages/BlogPage/index.jsx';
import Cart from './ui/Pages/CartPage/index.jsx';
import ContactUs from './ui/Pages/Contactus/index.jsx';
import MyAccountPage from './ui/Pages/MyAccountPage/index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/products/:id", element: <ProductsDetailPage /> },
      { path: "shop/", element: <ShopPage /> },
      { path: "blog/", element: <BlogPage /> },
      { path: "cart/", element: <Cart /> },
      { path: "contact/", element: <ContactUs /> },
      { path: "account/", element: <MyAccountPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
