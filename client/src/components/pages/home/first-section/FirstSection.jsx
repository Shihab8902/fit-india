import { Link } from "react-router-dom";


const FirstSection = () => {
    return (
        <div className="px-4">
            <div className="  grid gap-4 lg:grid-cols-2 pt-8 lg:h-[480px]">
                <div className=" rounded-xl bg-center bg-no-repeat w-full h-full bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/T4kJFqN/Rectangle-34624326.png)' }}>
                    <div className=" p-5 bg-[#4D525D33] rounded-tl-xl w-max h-max">
                        <p className=" text-[22px] font-normal  text-white w-[250px]">AIR FORCE</p>
                        <p className=" text-[49px] font-bold text-white w-[280px]">Nike Air Force 1 Mid</p>
                        <Link to="/shop">
                            <button className="bg-[#EC721A] hover:bg-orange-400 mt-2 px-4 py-2 rounded-[4px] text-white">Shop Now</button>
                        </Link>
                    </div>
                </div>
                <div className="md:grid-cols-2 gap-4 grid">
                    <div className=" rounded-xl bg-center w-full h-full bg-no-repeat bg-cover flex items-end" style={{ backgroundImage: 'url(https://i.ibb.co/km7J9gY/Rectangle-34624327.png)' }}>
                        <div className=" p-5  bg-[#24252733] rounded-bl-xl  w-max h-max">
                            <p className="text-xl   font-semibold  text-white ">TerziAdemAltun</p>
                            <Link to="/shop">
                                <button className="bg-[#EC721A] hover:bg-orange-400 mt-2 px-4 py-2 rounded-[4px] text-white">Shop Now</button>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:grid md:grid-rows-2 gap-3">
                        <div className="  rounded-[12px] bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/KqLH49Z/Rectangle-34624328.png)' }}>
                            <div className="flex justify-center items-end  h-full">
                                <div className="bg-[#4d525d40] w-max h-max p-5 mb-5">
                                    <p className="  font-semibold text-xl  text-white ">Grey Polo T-shirt</p>
                                    <Link to="/shop">
                                        <button className="bg-[#EC721A] hover:bg-orange-400 mt-2 px-4 py-2 rounded-[4px] text-white">Shop Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className=" bg-center bg-no-repeat bg-cover mt-1 rounded-[12px]" style={{ backgroundImage: 'url(https://i.ibb.co/s6S6SFH/Rectangle-34624329.png)' }}>
                            <div className="pt-[85px] pl-14">
                                <div className="bg-[#4d525d40] pl-3 pt-2 w-[185px] h-[110px]">
                                    <p className=" text-[22px] pl-8 font-medium  text-white ">Pink Shirt</p>
                                    <Link to="/shop">
                                        <button className="bg-[#EC721A] hover:bg-orange-400 mt-2 px-4 py-2 rounded-[4px] text-white">Shop Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FirstSection;