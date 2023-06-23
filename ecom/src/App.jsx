import { useState } from 'react'
import './App.css'
import  Counter  from '../src/features/counter/Counter'
import ProductList from './features/productList/ProductList'
import Navbar from './features/navbar/Navbar'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import ProductDetailPage from './pages/ProductDetailPage'
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
    
  },
  {
    path: "login",
    element: <LoginPage/>
  },
  {
    path: "signup",
    element: <SignupPage/>
  },
  {
    path: "cart",
    element: <CartPage/>
  },
  {
    path: "checkout",
    element: <CheckoutPage/>
  },
  {
    path: "product-detail",
    element: <ProductDetailPage/>
  },
]);


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='App'>
 
 <RouterProvider router={router} />
 
    </div>
  )
}

export default App
