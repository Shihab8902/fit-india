import { Link } from "react-router-dom";


const Shop3Items = () => {
    return (
        <div className="mt-20 px-5 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className=" rounded-xl w-full bg-no-repeat bg-center bg-cover h-60" style={{ backgroundImage: 'url(https://i.ibb.co/KwX7GTp/Rectangle-34624331.png)' }}>
                <Link to="/shop">
                    <div className="w-full h-full flex justify-center items-center">
                        <button className="px-4 bg-orange-500 bg-opacity-50 hover:bg-opacity-100 text-white py-2 rounded-lg ">Shop Now</button>
                    </div>
                </Link>
            </div>

            <div className="text-center rounded-xl w-full bg-no-repeat bg-center bg-cover h-60" style={{ backgroundImage: 'url(https://i.ibb.co/YT7dL4v/Rectangle-34624332.png)' }}>
                <Link to="/shop">
                    <div className="w-full h-full flex justify-center items-center">
                        <button className="px-4 bg-orange-500 bg-opacity-50 hover:bg-opacity-100 text-white py-2 rounded-lg ">Shop Now</button>
                    </div>
                </Link>
            </div>

            <div className="text-center rounded-xl w-full bg-center bg-cover bg-no-repeat h-60" style={{ backgroundImage: 'url(https://i.ibb.co/7bFn7Qr/Rectangle-34624332-1.png)' }}>
                <Link to="/shop">
                    <div className="w-full h-full flex justify-center items-center">
                        <button className="px-4 bg-orange-500 bg-opacity-50 hover:bg-opacity-100 text-white py-2 rounded-lg ">Shop Now</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Shop3Items;