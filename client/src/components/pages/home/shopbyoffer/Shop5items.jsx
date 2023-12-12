import { Link } from "react-router-dom";


const Shop5items = () => {
    return (
        <div className="px-14 w-[1000px] pt-24 pb-8 gap-5 flex">
            <div className="w-[800px]">
                <div className="flex pb-5 gap-5">
                    <div className="text-center rounded-[12px] w-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/zfJccd1/Rectangle-34624333.png)' }}>
                        <Link to="/shop">
                            <div className="my-20">
                                <h1 className="text-white text-2xl font-medium pb-1">50% Off</h1>
                                <button className="px-4 bg-[#ec711a51] hover:bg-orange-500 text-white py-2 rounded-lg ">Shop Now</button>
                            </div>
                        </Link>
                    </div>
                    <div className="text-center rounded-[12px] w-[376px]" style={{ backgroundImage: 'url(https://i.ibb.co/Lv0dpQ9/Rectangle-34624334.png)' }}>
                        <Link to="/shop">
                            <div className="my-20">
                                <h1 className="text-white text-2xl font-medium pb-1">50% Off</h1>
                                <button className="px-4 bg-[#ec711a51] hover:bg-orange-500 text-white py-2 rounded-lg ">Shop Now</button>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="text-center rounded-[12px] w-[340px]" style={{ backgroundImage: 'url(https://i.ibb.co/svYQHdr/Rectangle-34624337.png)' }}>
                        <Link to="/shop">
                            <div className="my-20">
                                <h1 className="text-white text-2xl font-medium pb-1">50% Off</h1>
                                <button className="px-4 bg-[#ec711a51] hover:bg-orange-500 text-white py-2 rounded-lg ">Shop Now</button>
                            </div>
                        </Link>
                    </div>
                    <div className="text-center rounded-[12px] w-[439px]" style={{ backgroundImage: 'url(https://i.ibb.co/ZY4WfKw/Rectangle-34624336.png)' }}>
                        <Link to="/shop">
                            <div className="my-20">
                                <h1 className="text-white text-2xl font-medium pb-1">50% Off</h1>
                                <button className="px-4 bg-[#ec711a51] hover:bg-orange-500 text-white py-2 rounded-lg ">Shop Now</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <div className="text-center rounded-[12px] w-[396px] h-[498px]" style={{ backgroundImage: 'url(https://i.ibb.co/hWjvyh8/Rectangle-34624335.png)' }}>
                    <Link to="/shop">
                        <div className="pt-[199px]">
                            <h1 className="text-white text-2xl font-medium pb-1">50% Off</h1>
                            <button className="px-4 bg-[#ec711a51] hover:bg-orange-500 text-white py-2 rounded-lg ">Shop Now</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Shop5items;