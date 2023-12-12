import { CiFilter } from "react-icons/ci";
import { TfiMenuAlt } from "react-icons/tfi";
import { AiOutlineAppstore } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";



const Shop = () => {
    return (
        <div className="flex  gap-14 px-12">
            <div className="pt-14">
                <div className="w-[180px]">
                    <div className="flex gap-3 pb-5 items-center">
                        <div className="bg-[#01031a] shadow-lg shadow-[#0f0f2184] rounded-full">
                            <CiFilter className=" text-white font-bold text-3xl m-2" />
                        </div>
                        <h1 className="font-bold text-xl text-orange-600">Filter</h1>
                    </div>
                    <div className="pb-6" >
                        <input type="text" placeholder="Search" className=" p-2 rounded-md bg-[#efefef] outline-none  w-full " />
                    </div>
                    <div className="pb-8">
                        <h1 className="text-xl font-bold">Pick Color</h1>
                        <div className=" flex pt-2  gap-4">
                            <div className="w-[22px] h-[22px] shadow-lg shadow-[#e7b00d] rounded-full bg-[#e7b00d]">
                            </div>
                            <div className="w-[22px] h-[22px] rounded-full shadow-lg shadow-[#0db4e7] bg-[#0db4e7]">
                            </div>
                            <div className="w-[22px] h-[22px] rounded-full shadow-lg shadow-[#e70db4] bg-[#e70db4]">
                            </div>
                            <div className="w-[22px] h-[22px] rounded-full shadow-lg shadow-[#35e70d] bg-[#35e70d]">
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-xl pb-4 font-bold">Pick Color</h1>
                        <div>
                            <div className="form-control">
                                <label className="flex gap-2">
                                    <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
                                    <p className="font-medium">Pent</p>
                                </label>
                            </div>
                            <div className="form-control py-3">
                                <label className="flex gap-2">
                                    <input type="radio" name="radio-10" className="radio checked:bg-green-500" checked />
                                    <p className="font-medium">Shoes</p>
                                </label>
                            </div>
                            <div className="form-control pb-3">
                                <label className="flex gap-2">
                                    <input type="radio" name="radio-10" className="radio checked:bg-orange-500" checked />
                                    <p className="font-medium">T-shirt</p>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="flex gap-2">
                                    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                    <p className="font-medium">Shirt</p>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="py-10">
                        <h1 className="text-xl pb-4 font-bold">Pick Color</h1>
                        <div>
                            <input type="range" min={0} max="100" value="40" className="range mb-8 range-error" />
                        </div>
                        <div>
                            <div className="form-control">
                                <label className="flex gap-2">
                                    <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
                                    <p className="font-medium">50-70</p>
                                </label>
                            </div>
                            <div className="form-control py-3">
                                <label className="flex gap-2">
                                    <input type="radio" name="radio-10" className="radio checked:bg-green-500" checked />
                                    <p className="font-medium">70-80</p>
                                </label>
                            </div>
                            <div className="form-control pb-3">
                                <label className="flex gap-2">
                                    <input type="radio" name="radio-10" className="radio checked:bg-orange-500" checked />
                                    <p className="font-medium">80-90</p>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="flex gap-2">
                                    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                                    <p className="font-medium">90-100</p>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pl-6">
                <div className="flex items-center h-fit w-[932px] justify-between pt-[66px]">
                    <div>
                        <h1 className="text-2xl font-bold">Product List <span className="text-orange-600">(16)</span> </h1>
                    </div>
                    <div className="flex items-center h-fit gap-2">
                        <h2 className="font-medium text-orange-600">Shory by</h2>
                        <div className=" flex gap-6">
                            <div>
                                <select className="p-2 rounded-lg border-2">
                                    <option className="" disabled selected>Who shot first?</option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>
                            </div>
                            <div className="flex gap-2">
                                <div className="border-2 hover:bg-orange-600 hover:border-orange-600 hover:text-white rounded-lg p-3 h-fit">
                                    <TfiMenuAlt />
                                </div>
                                <div className="border-2  hover:bg-orange-600 hover:border-orange-600 hover:text-white rounded-lg p-3 h-fit">
                                    <AiOutlineAppstore />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[] mt-10">
                    <div className="flex gap-6">
                        <div className=" pb-12">
                            <div className="bg-[#FAFAFA] rounded-lg border-2 border-gray-300 w-[294px] pt-4 pl-4 pb-4">
                                <div className="flex gap-40">
                                    <div>
                                        <div className="w-12 h-12 rounded-full bg-red-600">
                                            <h1 className="pt-2 text-white pl-2">-32$</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-12 h-12 pt-3 pl-3 rounded-full bg-white">
                                            <GoHeart className="text-2xl text-black" />
                                        </div>
                                    </div>
                                </div>
                                <img className="pl-[70px]" src="https://i.ibb.co/HpnGw11/cart.png" alt="" />
                            </div>
                            <div>
                                <div>
                                    <h1 className="text-xl w-[230px] font-bold py-2">Gold Standard Whey Protein</h1>
                                    <div className=" pb-3 flex gap-3">
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        <p>(350)</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <h2 className="pb-4 font-bold">$2,236</h2>
                                        <h2 className="pb-4 text-gray-400">$2,236</h2>
                                    </div>
                                    <button className="border-2 flex items-center gap-3 py-2 px-[90px] rounded-xl hover:bg-[#0242E8] hover:text-white font-medium text-gray-600"><FiShoppingCart />Add to cart</button>
                                </div>
                            </div>
                        </div>
                        <div className=" pb-12">
                            <div className="bg-[#FAFAFA] rounded-lg border-2 border-gray-300 w-[294px] pt-4 pl-4 pb-4">
                                <div className="flex gap-40">
                                    <div>
                                        <div className="w-12 h-12 rounded-full bg-red-600">
                                            <h1 className="pt-2 text-white pl-2">-32$</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-12 h-12 pt-3 pl-3 rounded-full bg-white">
                                            <GoHeart className="text-2xl text-black" />
                                        </div>
                                    </div>
                                </div>
                                <img className="pl-[70px]" src="https://i.ibb.co/HpnGw11/cart.png" alt="" />
                            </div>
                            <div>
                                <div>
                                    <h1 className="text-xl w-[230px] font-bold py-2">Gold Standard Whey Protein</h1>
                                    <div className=" pb-3 flex gap-3">
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        <p>(350)</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <h2 className="pb-4">$2,236</h2>
                                        <h2 className="pb-4">$2,236</h2>
                                    </div>
                                    <button className="border-2 flex items-center gap-3 py-2 px-[90px] rounded-xl font-medium text-gray-600"><FiShoppingCart />Add to cart</button>
                                </div>
                            </div>
                        </div>
                        <div className=" pb-12">
                            <div className="bg-[#FAFAFA] rounded-lg border-2 border-gray-300 w-[294px] pt-4 pl-4 pb-4">
                                <div className="flex gap-40">
                                    <div>
                                        <div className="w-12 h-12 rounded-full bg-red-600">
                                            <h1 className="pt-2 text-white pl-2">-32$</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-12 h-12 pt-3 pl-3 rounded-full bg-white">
                                            <GoHeart className="text-2xl text-black" />
                                        </div>
                                    </div>
                                </div>
                                <img className="pl-[70px]" src="https://i.ibb.co/HpnGw11/cart.png" alt="" />
                            </div>
                            <div>
                                <div>
                                    <h1 className="text-xl w-[230px] font-bold py-2">Gold Standard Whey Protein</h1>
                                    <div className=" pb-3 flex gap-3">
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        <p>(350)</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <h2 className="pb-4">$2,236</h2>
                                        <h2 className="pb-4">$2,236</h2>
                                    </div>
                                    <button className="border-2 flex items-center gap-3 py-2 px-[90px] rounded-xl font-medium text-gray-600"><FiShoppingCart />Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className=" pb-12">
                            <div className="bg-[#FAFAFA] rounded-lg border-2 border-gray-300 w-[294px] pt-4 pl-4 pb-4">
                                <div className="flex gap-40">
                                    <div>
                                        <div className="w-12 h-12 rounded-full bg-red-600">
                                            <h1 className="pt-2 text-white pl-2">-32$</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-12 h-12 pt-3 pl-3 rounded-full bg-white">
                                            <GoHeart className="text-2xl text-black" />
                                        </div>
                                    </div>
                                </div>
                                <img className="pl-[70px]" src="https://i.ibb.co/HpnGw11/cart.png" alt="" />
                            </div>
                            <div>
                                <div>
                                    <h1 className="text-xl w-[230px] font-bold py-2">Gold Standard Whey Protein</h1>
                                    <div className=" pb-3 flex gap-3">
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        <p>(350)</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <h2 className="pb-4 font-bold">$2,236</h2>
                                        <h2 className="pb-4 text-gray-400">$2,236</h2>
                                    </div>
                                    <button className="border-2 flex items-center gap-3 py-2 px-[90px] rounded-xl hover:bg-[#0242E8] hover:text-white font-medium text-gray-600"><FiShoppingCart />Add to cart</button>
                                </div>
                            </div>
                        </div>
                        <div className=" pb-12">
                            <div className="bg-[#FAFAFA] rounded-lg border-2 border-gray-300 w-[294px] pt-4 pl-4 pb-4">
                                <div className="flex gap-40">
                                    <div>
                                        <div className="w-12 h-12 rounded-full bg-red-600">
                                            <h1 className="pt-2 text-white pl-2">-32$</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-12 h-12 pt-3 pl-3 rounded-full bg-white">
                                            <GoHeart className="text-2xl text-black" />
                                        </div>
                                    </div>
                                </div>
                                <img className="pl-[70px]" src="https://i.ibb.co/HpnGw11/cart.png" alt="" />
                            </div>
                            <div>
                                <div>
                                    <h1 className="text-xl w-[230px] font-bold py-2">Gold Standard Whey Protein</h1>
                                    <div className=" pb-3 flex gap-3">
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        <p>(350)</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <h2 className="pb-4">$2,236</h2>
                                        <h2 className="pb-4">$2,236</h2>
                                    </div>
                                    <button className="border-2 flex items-center gap-3 py-2 px-[90px] rounded-xl font-medium text-gray-600"><FiShoppingCart />Add to cart</button>
                                </div>
                            </div>
                        </div>
                        <div className=" pb-12">
                            <div className="bg-[#FAFAFA] rounded-lg border-2 border-gray-300 w-[294px] pt-4 pl-4 pb-4">
                                <div className="flex gap-40">
                                    <div>
                                        <div className="w-12 h-12 rounded-full bg-red-600">
                                            <h1 className="pt-2 text-white pl-2">-32$</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-12 h-12 pt-3 pl-3 rounded-full bg-white">
                                            <GoHeart className="text-2xl text-black" />
                                        </div>
                                    </div>
                                </div>
                                <img className="pl-[70px]" src="https://i.ibb.co/HpnGw11/cart.png" alt="" />
                            </div>
                            <div>
                                <div>
                                    <h1 className="text-xl w-[230px] font-bold py-2">Gold Standard Whey Protein</h1>
                                    <div className=" pb-3 flex gap-3">
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        <p>(350)</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <h2 className="pb-4">$2,236</h2>
                                        <h2 className="pb-4">$2,236</h2>
                                    </div>
                                    <button className="border-2 flex items-center gap-3 py-2 px-[90px] rounded-xl font-medium text-gray-600"><FiShoppingCart />Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className=" pb-12">
                            <div className="bg-[#FAFAFA] rounded-lg border-2 border-gray-300 w-[294px] pt-4 pl-4 pb-4">
                                <div className="flex gap-40">
                                    <div>
                                        <div className="w-12 h-12 rounded-full bg-red-600">
                                            <h1 className="pt-2 text-white pl-2">-32$</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-12 h-12 pt-3 pl-3 rounded-full bg-white">
                                            <GoHeart className="text-2xl text-black" />
                                        </div>
                                    </div>
                                </div>
                                <img className="pl-[70px]" src="https://i.ibb.co/HpnGw11/cart.png" alt="" />
                            </div>
                            <div>
                                <div>
                                    <h1 className="text-xl w-[230px] font-bold py-2">Gold Standard Whey Protein</h1>
                                    <div className=" pb-3 flex gap-3">
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        <p>(350)</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <h2 className="pb-4 font-bold">$2,236</h2>
                                        <h2 className="pb-4 text-gray-400">$2,236</h2>
                                    </div>
                                    <button className="border-2 flex items-center gap-3 py-2 px-[90px] rounded-xl hover:bg-[#0242E8] hover:text-white font-medium text-gray-600"><FiShoppingCart />Add to cart</button>
                                </div>
                            </div>
                        </div>
                        <div className=" pb-12">
                            <div className="bg-[#FAFAFA] rounded-lg border-2 border-gray-300 w-[294px] pt-4 pl-4 pb-4">
                                <div className="flex gap-40">
                                    <div>
                                        <div className="w-12 h-12 rounded-full bg-red-600">
                                            <h1 className="pt-2 text-white pl-2">-32$</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-12 h-12 pt-3 pl-3 rounded-full bg-white">
                                            <GoHeart className="text-2xl text-black" />
                                        </div>
                                    </div>
                                </div>
                                <img className="pl-[70px]" src="https://i.ibb.co/HpnGw11/cart.png" alt="" />
                            </div>
                            <div>
                                <div>
                                    <h1 className="text-xl w-[230px] font-bold py-2">Gold Standard Whey Protein</h1>
                                    <div className=" pb-3 flex gap-3">
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        <p>(350)</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <h2 className="pb-4">$2,236</h2>
                                        <h2 className="pb-4">$2,236</h2>
                                    </div>
                                    <button className="border-2 flex items-center gap-3 py-2 px-[90px] rounded-xl font-medium text-gray-600"><FiShoppingCart />Add to cart</button>
                                </div>
                            </div>
                        </div>
                        <div className=" pb-12">
                            <div className="bg-[#FAFAFA] rounded-lg border-2 border-gray-300 w-[294px] pt-4 pl-4 pb-4">
                                <div className="flex gap-40">
                                    <div>
                                        <div className="w-12 h-12 rounded-full bg-red-600">
                                            <h1 className="pt-2 text-white pl-2">-32$</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-12 h-12 pt-3 pl-3 rounded-full bg-white">
                                            <GoHeart className="text-2xl text-black" />
                                        </div>
                                    </div>
                                </div>
                                <img className="pl-[70px]" src="https://i.ibb.co/HpnGw11/cart.png" alt="" />
                            </div>
                            <div>
                                <div>
                                    <h1 className="text-xl w-[230px] font-bold py-2">Gold Standard Whey Protein</h1>
                                    <div className=" pb-3 flex gap-3">
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        <p>(350)</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <h2 className="pb-4">$2,236</h2>
                                        <h2 className="pb-4">$2,236</h2>
                                    </div>
                                    <button className="border-2 flex items-center gap-3 py-2 px-[90px] rounded-xl font-medium text-gray-600"><FiShoppingCart />Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className=" pb-12">
                            <div className="bg-[#FAFAFA] rounded-lg border-2 border-gray-300 w-[294px] pt-4 pl-4 pb-4">
                                <div className="flex gap-40">
                                    <div>
                                        <div className="w-12 h-12 rounded-full bg-red-600">
                                            <h1 className="pt-2 text-white pl-2">-32$</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-12 h-12 pt-3 pl-3 rounded-full bg-white">
                                            <GoHeart className="text-2xl text-black" />
                                        </div>
                                    </div>
                                </div>
                                <img className="pl-[70px]" src="https://i.ibb.co/HpnGw11/cart.png" alt="" />
                            </div>
                            <div>
                                <div>
                                    <h1 className="text-xl w-[230px] font-bold py-2">Gold Standard Whey Protein</h1>
                                    <div className=" pb-3 flex gap-3">
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        <p>(350)</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <h2 className="pb-4 font-bold">$2,236</h2>
                                        <h2 className="pb-4 text-gray-400">$2,236</h2>
                                    </div>
                                    <button className="border-2 flex items-center gap-3 py-2 px-[90px] rounded-xl hover:bg-[#0242E8] hover:text-white font-medium text-gray-600"><FiShoppingCart />Add to cart</button>
                                </div>
                            </div>
                        </div>
                        <div className=" pb-12">
                            <div className="bg-[#FAFAFA] rounded-lg border-2 border-gray-300 w-[294px] pt-4 pl-4 pb-4">
                                <div className="flex gap-40">
                                    <div>
                                        <div className="w-12 h-12 rounded-full bg-red-600">
                                            <h1 className="pt-2 text-white pl-2">-32$</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-12 h-12 pt-3 pl-3 rounded-full bg-white">
                                            <GoHeart className="text-2xl text-black" />
                                        </div>
                                    </div>
                                </div>
                                <img className="pl-[70px]" src="https://i.ibb.co/HpnGw11/cart.png" alt="" />
                            </div>
                            <div>
                                <div>
                                    <h1 className="text-xl w-[230px] font-bold py-2">Gold Standard Whey Protein</h1>
                                    <div className=" pb-3 flex gap-3">
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        <p>(350)</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <h2 className="pb-4">$2,236</h2>
                                        <h2 className="pb-4">$2,236</h2>
                                    </div>
                                    <button className="border-2 flex items-center gap-3 py-2 px-[90px] rounded-xl font-medium text-gray-600"><FiShoppingCart />Add to cart</button>
                                </div>
                            </div>
                        </div>
                        <div className=" pb-12">
                            <div className="bg-[#FAFAFA] rounded-lg border-2 border-gray-300 w-[294px] pt-4 pl-4 pb-4">
                                <div className="flex gap-40">
                                    <div>
                                        <div className="w-12 h-12 rounded-full bg-red-600">
                                            <h1 className="pt-2 text-white pl-2">-32$</h1>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-12 h-12 pt-3 pl-3 rounded-full bg-white">
                                            <GoHeart className="text-2xl text-black" />
                                        </div>
                                    </div>
                                </div>
                                <img className="pl-[70px]" src="https://i.ibb.co/HpnGw11/cart.png" alt="" />
                            </div>
                            <div>
                                <div>
                                    <h1 className="text-xl w-[230px] font-bold py-2">Gold Standard Whey Protein</h1>
                                    <div className=" pb-3 flex gap-3">
                                        <div className="rating">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        <p>(350)</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <h2 className="pb-4">$2,236</h2>
                                        <h2 className="pb-4">$2,236</h2>
                                    </div>
                                    <button className="border-2 flex items-center gap-3 py-2 px-[90px] rounded-xl font-medium text-gray-600"><FiShoppingCart />Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;