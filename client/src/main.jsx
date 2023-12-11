import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Route from './components/route/Route';
import Home from './components/pages/home/Home';
import SignIn from './components/pages/sign in/SignIn';
import SignUp from './components/pages/sign up/SignUp';
import Shop from './components/pages/shop/Shop';
import AboutUs from './components/pages/about us/AboutUs';
import Verification from './components/pages/verification/Verification';
import Otp from './components/pages/otp/Otp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    children: [
       {
        path: "/",
        element: <Home></Home>,
       },
       {
        path: "/signin",
        element: <SignIn></SignIn>,
       },
       {
        path: "/signup",
        element: <SignUp></SignUp>,
       },
       {
        path: "/shop",
        element: <Shop></Shop>,
       },
       {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
       },
       {
        path: "/verification",
        element: <Verification></Verification>,
       },
       {
        path: "/otp",
        element: <Otp></Otp>,
       }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
