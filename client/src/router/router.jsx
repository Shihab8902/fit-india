

import { createBrowserRouter } from "react-router-dom";
import Route from "../components/route/Route";
import Home from "../components/pages/home/Home";
import SignIn from "../components/pages/sign in/SignIn";
import SignUp from "../components/pages/sign up/SignUp";
import Shop from "../components/pages/shop/Shop";
import AboutUs from "../components/pages/about us/AboutUs";
import Verification from "../components/pages/verification/Verification";
import Otp from "../components/pages/otp/Otp";
import ProductDetails from "../components/pages/home/product details/ProductDetails";
import axios from "axios";

export const router = createBrowserRouter([
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
            },
            {
                path: "/product/:id",
                element: <ProductDetails />,
                loader: ({ params }) => axios.get(`http://localhost:9000/api/product?id=${params.id}`)
            }
        ]
    },
])