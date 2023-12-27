import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/navbar/Navbar";
import Footer from "../components/Shared/footer/Footer";



const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;