import { SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";


const ShoesTitle = () => {
    return (
        <div>
            <div className="px-12 pb-10 pt-14 flex justify-between">
                <h1 className="text-[28px] font-bold">Top Rated Shoes</h1>
                <Link to="/shop"><button className="bg-[#FAFAFA] py-2 hover:bg-blue-600 hover:text-white px-6 rounded-full border-2 border-[#E7E7E8] flex items-center gap-3">View All<SlArrowRight />
                </button></Link>
            </div>
        </div>
    );
};

export default ShoesTitle;