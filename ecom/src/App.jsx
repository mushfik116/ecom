import { useEffect, useState } from "react";
import "./App.css";
import Counter from "../src/features/counter/Counter";
import ProductList from "./features/product/ProductList";
import Navbar from "./features/navbar/Navbar";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Protected from "./features/auth/Protected";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchItemByUserIdAsync,
  selectCartItems,
} from "./features/cart/cartSlice";
import { selectloggedInUser } from "./features/auth/authSlice";
import PageNotFound from "./pages/404";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import UserOrders from "./features/user/UserOrders";
import UserProfile from "./features/user/UserProfile";
import Logout from "./features/auth/Logout";
import ForgotPassword from "./features/auth/ForgotPassword";
import AdminProductDetail from "./features/admin/AdminProductDetail";
import AdminProductList from "./features/admin/AdminProductList";
import AdminHome from "./pages/AdminHome";
import ProtectedAdmin from "./features/auth/ProtectedAdmin";
import AdminProductDetailPage from "./pages/AdminProductDetailPage";
import ProductForm from "./features/admin/ProductForm";
import AdminOrders from "./features/admin/AdminOrders";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: (
      <ProtectedAdmin>
        <AdminHome />,
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/productDetail/:id",
    element: (
      <ProtectedAdmin>
        <AdminProductDetailPage />,
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/productForm",
    element: (
      <ProtectedAdmin>
        <ProductForm />
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/productForm/edit/:id",
    element: (
      <ProtectedAdmin>
        <ProductForm />
      </ProtectedAdmin>
    ),
  },
  {
    path: "/admin/adminOrders",
    element: (
      <ProtectedAdmin>
        <AdminOrders />
      </ProtectedAdmin>
    ),
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/forgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/cart",
    element: (
      <Protected>
        <CartPage />
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <CheckoutPage />
      </Protected>
    ),
  },
  {
    path: "/product-detail/:id",
    element: (
      <Protected>
        <ProductDetailPage />,
      </Protected>
    ),
  },
  {
    path: "/order-success/:id",
    element: (
      <Protected>
        <OrderSuccessPage />,
      </Protected>
    ),
  },
  {
    path: "/orders",
    element: (
      <Protected>
        <UserOrders />
      </Protected>
    ),
  },
  {
    path: "/profile",
    element: (
      <Protected>
        <UserProfile />
      </Protected>
    ),
  },
  {
    path: "/logout",
    element: (
      <Protected>
        <Logout />
      </Protected>
    ),
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

const App = () => {
  const user = useSelector(selectloggedInUser);
  console.log("🚀 ~ file: App.jsx:67 ~ App ~ user:", user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      console.log("holaaaaaaaaaaaaaaaaaaaaaaaaaa");
      console.log(user.id);
      dispatch(fetchItemByUserIdAsync(user.id));
    }
  }, [dispatch, user?.id]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
