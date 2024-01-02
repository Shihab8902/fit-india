
import { createBrowserRouter } from "react-router-dom";


import axios from "axios";
import Root from "../Layouts/Root";
import Home from "../pages/home/Home";
import SignIn from "../pages/sign in/SignIn";
import SignUp from "../pages/sign up/SignUp";
import Shop from "../pages/shop/Shop";
import AboutUs from "../pages/about us/AboutUs";
import Verification from "../pages/verification/Verification";
import Otp from "../pages/otp/Otp";
import ProductDetails from "../pages/home/product details/ProductDetails";
import Dashboard from "../pages/dahsboard/Dashboard";
import AdminHome from "../pages/dahsboard/AdminHome";
import Allusers from "../pages/dahsboard/Allusers";
import PaymentHistory from "../pages/dahsboard/PaymentHistory";
import Additems from "../pages/dahsboard/Additems";
import ManageItems from "../pages/dahsboard/ManageItems";
import AddDeliveryAddress from "../pages/add-delivery-address/AddDeliveryAddress";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
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
            },
            {
                path: "/adddeliveryaddress",
                element: <AddDeliveryAddress></AddDeliveryAddress>
            },
        ]
    },

    // admin related router
    {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "/dashboard/adminhome",
                element: <AdminHome></AdminHome>
            },
            {
                path: "allusers",
                element: <Allusers></Allusers>
            },
            {
                path: "paymenthhistory",
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: "additems",
                element: <Additems></Additems>
            },
            {
                path: "manageitems",
                element: <ManageItems></ManageItems>
            },
        ]
    }
])