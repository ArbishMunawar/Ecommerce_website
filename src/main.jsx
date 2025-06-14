import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";

import "./index.css";
import Root from "./App.jsx";
import HomePage from "./ui/Pages/homePage/index.jsx";
import ProductsDetailPage from "./ui/Pages/ProductsDetailPage/index.jsx";
import ShopPage from "./ui/Pages/ShopPage/index.jsx";
import BlogPage from "./ui/Pages/blogPage/index.jsx";
import Cart from "./ui/Pages/cartPage/index.jsx";
import ContactUs from "./ui/Pages/contactus/index.jsx";
import MyAccountPage from "./ui/Pages/myAccountPage/index.jsx";
import {CartProvider} from './hooks/useContext/cartContext.jsx';
import {SearchProvider} from './hooks/useContext/searchContet.jsx';

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
      // { path: "signin/", element: <SignIn /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <SearchProvider>
    <RouterProvider router={router} />
    </SearchProvider>
    </CartProvider>
  </StrictMode>
);
