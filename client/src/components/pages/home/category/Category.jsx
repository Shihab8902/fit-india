import { Link } from "react-router-dom";


const Category = () => {
    return (
        <div>
            <div className="h-[519px]" style={{ backgroundImage: 'url(https://i.ibb.co/qWHyd05/Group-427320657.png)' }}>
                <div className="pt-16 text-center">
                    <h1 className="text-3xl pb-2 font-bold text-[#000000]">Shop by Category</h1>
                    <p className="text-gray-950">Shop by category like your mind.</p>
                </div>
                <div className="md:flex justify-center">
                    <div className="text-center">
                        <Link to="/shop">
                            <img src="https://i.ibb.co/jHmj6Fy/Group-427320658.png" alt="" />
                        </Link>
                        <h1 className="-mt-16 text-xl font-medium">Shoes</h1>
                    </div>
                    <div className="text-center  -ml-16">
                        <Link to="/shop">
                            <img src="https://i.ibb.co/G2KBxtn/Group-427320659.png" alt="" />
                        </Link>
                        <h1 className="-mt-16 text-xl font-medium">T-shirt</h1>
                    </div>

                    <div className="text-center -ml-16">
                        <Link to="/shop">
                            <img src="https://i.ibb.co/cxvWnm3/Group-427320660.png" alt="" />
                        </Link>
                        <h1 className="-mt-6 text-xl font-medium">Shirt</h1>
                    </div>
                    <div className="text-center -ml-16">
                        <Link to="/shop">
                            <img src="https://i.ibb.co/z6KwXCT/Group-427320661.png" alt="" />
                        </Link>
                        <h1 className="-mt-7 text-xl font-medium">Pent</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;