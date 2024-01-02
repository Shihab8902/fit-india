import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const User = () => {

    const user = false;



    return <div>

        {
            user ? <div className="flex items-center gap-3">


                <div>
                    <button className="text-lg bg-gray-200 rounded-full p-4"><FaRegHeart /></button>
                </div>




                <div className="indicator">
                    <button className="text-lg bg-gray-200 rounded-full p-4"> <FaCartShopping /></button>
                    <span className="badge badge-sm indicator-item">0</span>
                </div>




                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-12 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>







            </div>
                :
                <div>
                    <NavLink to="/signin" className="lg:text-white font-semibold hidden lg:inline">Sign In</NavLink>
                    <NavLink to="/signin" className="lg:text-white font-semibold lg:hidden text-2xl"><FaUserPlus /></NavLink>
                </div>
        }









    </div>


}

export default User