import { Link } from "react-router-dom";


const FirstSection = () => {
    return (
        <div>
            <div className="px-14  grid gap-4 grid-cols-2 pt-8">
                <div className="h-[436px] rounded-[12px]" style={{ backgroundImage: 'url(https://i.ibb.co/T4kJFqN/Rectangle-34624326.png)' }}>
                    <div className="bg-[#4d525d40] pl-4 pt-4 w-[310px] h-[260px]">
                        <p className=" text-[22px] font-normal  text-white w-[250px]">AIR FORCE</p>
                        <p className=" text-[49px] font-bold text-white w-[280px]">Nike Air Force 1 Mid</p>
                        <Link to="/shop">
                            <button className="bg-[#EC721A] hover:bg-orange-400 mt-2 px-4 py-2 rounded-[4px] text-white">Shop Now</button>
                        </Link>
                    </div>
                </div>
                <div className="grid-cols-2 gap-4 grid">
                    <div className="h-[436px] rounded-[12px]" style={{ backgroundImage: 'url(https://i.ibb.co/km7J9gY/Rectangle-34624327.png)' }}>
                        <div className="bg-[#4d525d40] mt-[327px] pl-3 pt-2 w-[185px] h-[110px]">
                            <p className=" text-[22px] font-medium  text-white w-[250px]">TerziAdemAltun</p>
                            <Link to="/shop">
                                <button className="bg-[#EC721A] hover:bg-orange-400 mt-2 px-4 py-2 rounded-[4px] text-white">Shop Now</button>
                            </Link>
                        </div>
                    </div>
                    <div className="">
                        <div className="h-[220px] bg-repeat-x rounded-[12px]" style={{ backgroundImage: 'url(https://i.ibb.co/KqLH49Z/Rectangle-34624328.png)' }}>
                            <div className="pt-[85px]">
                                <div className="bg-[#4d525d40] ml-14  pl-3 pt-2 w-[189px] h-[110px]">
                                    <p className=" text-[22px] font-medium  text-white w-[250px]">Grey Polo T-shirt</p>
                                    <Link to="/shop">
                                        <button className="bg-[#EC721A] hover:bg-orange-400 mt-2 px-4 py-2 rounded-[4px] text-white">Shop Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="h-[220px] bg-repeat-x mt-1 rounded-[12px]" style={{ backgroundImage: 'url(https://i.ibb.co/s6S6SFH/Rectangle-34624329.png)' }}>
                            <div className="pt-[85px] pl-14">
                                <div className="bg-[#4d525d40] pl-3 pt-2 w-[185px] h-[110px]">
                                    <p className=" text-[22px] pl-8 font-medium  text-white w-[250px]">Pink Shirt</p>
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