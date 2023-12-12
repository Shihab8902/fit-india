import { NavLink } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";


const Navbar = () => {

    const navlinks = <>
        <div className=" gap-8 items-center flex">
            <div className="flex">
                <li><NavLink to="/">Home</NavLink></li>
                <li ><NavLink to="/shop">Shop</NavLink></li>
                <li><NavLink to="/aboutus">About Us</NavLink></li>
            </div>
            <div className="flex pl-56 items-center">
                <input type="text" placeholder="search here" className=" text-white p-2 border-2 bg-[#ffffff31] border-white rounded-md" />
                <div className="flex">
                    <li><NavLink to="/signin">Sign In</NavLink></li>
                    <li><NavLink to="/signup">Sign Up</NavLink></li>
                </div>
            </div>
        </div>
    </>

    return (
        <div>
            <div className="navbar container px-12 mx-auto bg-[#444852]">
                <div className="">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu pl-6 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <div className="flex w-[168px] items-center gap-3">
                        <img className="w-[50px] rounded-full h-[50px]" src="https://i.ibb.co/B6Ms54X/image-887.png" alt="" />
                        <h1 className="text-white font-bold">Online Shop</h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-white pl-6 menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <div className="bg-white p-4 rounded-full"><FaRegHeart /></div>
                    <div className="bg-white p-4 rounded-full"><FaCartArrowDown /></div>
                    <img className="w-[50px] rounded-full " src="https://i.ibb.co/GCgqhRT/e8e64141f4c0ae39c32f9701ccea9a2e.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;