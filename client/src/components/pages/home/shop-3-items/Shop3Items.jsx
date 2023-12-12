import { Link } from "react-router-dom";


const Shop3Items = () => {
    return (
        <div className="mt-20 flex w-[1278px] gap-[20px] px-14">
            <div className="text-center rounded-[12px] w-[427px]" style={{ backgroundImage: 'url(https://i.ibb.co/KwX7GTp/Rectangle-34624331.png)' }}>
                <Link to="/shop">
                    <div className="">
                        <button className="px-4 bg-[#ec711a51] hover:bg-orange-500 text-white py-2 rounded-lg my-[100px]">Shop Now</button>
                    </div>
                </Link>
            </div>
            <div className="text-center rounded-[12px] w-[427px]" style={{ backgroundImage: 'url(https://i.ibb.co/YT7dL4v/Rectangle-34624332.png)' }}>
                <Link to="/shop">
                    <div className="">
                        <button className="px-4 bg-[#ec711a51] hover:bg-orange-500 text-white py-2 rounded-lg my-[100px]">Shop Now</button>
                    </div>
                </Link>
            </div>
            <div className="text-center rounded-[12px] w-[427px]" style={{ backgroundImage: 'url(https://i.ibb.co/7bFn7Qr/Rectangle-34624332-1.png)' }}>
                <Link to="/shop">
                    <div className="">
                        <button className="px-4 bg-[#ec711a51] hover:bg-orange-500 text-white py-2 rounded-lg my-[100px]">Shop Now</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Shop3Items;