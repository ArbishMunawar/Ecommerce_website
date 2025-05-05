import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router';

import './index.css';
import Root from './App.jsx'; 
import HomePage from './ui/Pages/HomePage/index.jsx';
import ProductsDetailPage from './ui/Pages/ProductsDetailPage/index.jsx';
import ShopPage from './ui/Pages/ShopPage/index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/products/:id", element: <ProductsDetailPage /> },
      { path: "shop/", element: <ShopPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
