import { Outlet } from "react-router-dom";
import Navbar from "../pages/home/navbar/Navbar";
import Footer from "../pages/home/footer/Footer";


const Route = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Route;