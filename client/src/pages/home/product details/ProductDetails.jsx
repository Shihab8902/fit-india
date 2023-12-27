import { GoHeart } from "react-icons/go";
import { Link, useLoaderData, useNavigate } from "react-router-dom"
import { useState } from 'react';
import { FiShoppingCart } from "react-icons/fi";

import ReactStars from "react-rating-stars-component";
import ShirtTitle from "../shirt cart/ShirtTitle";
import useGetPublic from "../../../hooks/useGetPublic";



const ProductDetails = () => {
    const product = useLoaderData()?.data;
    const navigate = useNavigate();
    const { data: bestSelling } = useGetPublic(["bestSellingProducts"], `/api/bestSelling`);




    console.log(product);

    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };




    return (
        <div>
            <div className="grid pt-12 pb-[100px] gap-8 md:grid-cols-2 md:px-14">
                <div className=" relative  rounded-lg">
                    <div className="absolute left-0 top-0 flex justify-between items-center w-full px-5 pt-5 overflow-hidden ">
                        {
                            product.discountedPercentage > 0 && <div style={{ backgroundImage: `url(${product.star})` }} className=" w-16 h-16 flex justify-center items-center bg-cover">
                                <span className=" text-white font-semibold">-{product.discountedPercentage}%</span>
                            </div>
                        }

                        <div className="w-12 h-12 pt-3 pl-3 rounded-full bg-gray-200 bg-opacity-40">
                            <button>
                                <GoHeart className="text-2xl text-black" />
                            </button>
                        </div>
                    </div>
                    <img className="w-full h-[460px] rounded-lg" src={product.images?.[0]} alt="" />
                    <div className="flex gap-3 pt-4">
                        <img className="w-[132px] h-[132px] rounded-lg" src={product.images?.[1]} alt="" />
                        <img className="w-[132px] h-[132px] rounded-lg" src={product.images?.[2]} alt="" />
                        <img className="w-[132px] h-[132px] rounded-lg" src={product.images?.[3]} alt="" />
                        <img className="w-[132px] h-[132px] rounded-lg" src={product.images?.[4]} alt="" />
                    </div>
                </div>

                <div>
                    <h1 className="text-3xl font-bold w-[300px] pb-2">{product.name}</h1>
                    <p className="w-[300px] pb-2">{product.description}</p>
                    <p className="pb-2">{product.totalRatings}Ratting</p>
                    <div className="flex gap-2">
                        <h1 className="font-bold">{product.discountedPrice}</h1>
                        <h1>{product.regularPrice}</h1>
                    </div>
                    <div className="flex items-center gap-4 pt-4">
                        <h1 className="text-xl font-bold">Size:</h1>
                        <div className="flex gap-2">
                            <div className="px-[14px] py-1 rounded-full bg-slate-500 w-fit">
                                <h1 className="text-white text-2xl">
                                    {
                                        product?.sizes?.map(size => <div key={size.id}>
                                            <h1>{size}</h1>
                                        </div>
                                        )
                                    }
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center py-4 gap-2">
                        <h1>Quantity</h1>
                        <div className="border-2 rounded-md p-2 w-fit">
                            <button className="pr-16" onClick={decreaseQuantity}>-</button>
                            <input
                                type="text"
                                id="quantity"
                                value={quantity}
                                readOnly
                            />
                            <button onClick={increaseQuantity}>+</button>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button className="border-2 flex items-center gap-3 py-3  w-[240px] justify-center rounded-xl hover:bg-[#444852] hover:text-white font-medium text-gray-600"><FiShoppingCart />Add To Cart</button>
                        <button className="border-2 flex items-center gap-3 py-3  w-[240px] justify-center rounded-xl text-white bg-[#444852] hover:text-white font-medium hover:bg-orange-600 hover:border-orange-600">Buy Now</button>
                    </div>
                </div>
            </div>

            {/* Review section */}
            <div className="px-14">
                <h1 className="text-2xl font-bold pb-8">All Reviews <span className="text-orange-600">(120)</span> </h1>
                {
                    product.customerReview.map((review, index) => <div key={review._id}>
                        <div className="pb-8 md:flex gap-16">
                            <div className="">
                                <h1 className="font-bold pb-4 text-xl w-[200px]">{review.name}</h1>
                                <h1>{review.rating}</h1>
                            </div>

                            <div className="">
                                <div className=" gap-96 text-">
                                    <h1 className="font-medium pb-4 text-xl text-black">{review.title}</h1>
                                    <div className="flex gap-44">
                                        <p>{review.description}</p>
                                        <p className="w-[199px] justify-start">{review.commentDate}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="pb-4 mx-14" />
                    </div>)
                }
            </div>

            {/* 5 items section */}
            <div className="px-14 w-full my-24 grid  lg:grid-cols-4 gap-5  ">
                <div className="lg:col-span-3">
                    <div className="grid md:grid-cols-3 pb-5 gap-5">
                        <div className="text-center md:col-span-2 rounded-[12px] w-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/zfJccd1/Rectangle-34624333.png)' }}>
                            <Link to="/shop">
                                <div className="my-20">
                                    <h1 className="text-white text-2xl font-medium pb-1">50% Off</h1>
                                    <button className="px-4 bg-[#ec711a51] hover:bg-orange-500 text-white py-2 rounded-lg ">Shop Now</button>
                                </div>
                            </Link>
                        </div>
                        <div className="text-center rounded-[12px] w-full bg-center bg-cover bg-no-repeat" style={{ backgroundImage: 'url(https://i.ibb.co/Lv0dpQ9/Rectangle-34624334.png)' }}>
                            <Link to="/shop">
                                <div className="my-20">
                                    <h1 className="text-white text-2xl font-medium pb-1">50% Off</h1>
                                    <button className="px-4 bg-[#ec711a51] hover:bg-orange-500 text-white py-2 rounded-lg ">Shop Now</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3  gap-5">
                        <div className="text-center rounded-[12px] w-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/svYQHdr/Rectangle-34624337.png)' }}>
                            <Link to="/shop">
                                <div className="my-20">
                                    <h1 className="text-white text-2xl font-medium pb-1">50% Off</h1>
                                    <button className="px-4 bg-[#ec711a51] hover:bg-orange-500 text-white py-2 rounded-lg ">Shop Now</button>
                                </div>
                            </Link>
                        </div>
                        <div className="text-center rounded-[12px] w-full md:col-span-2 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: 'url(https://i.ibb.co/ZY4WfKw/Rectangle-34624336.png)' }}>
                            <Link to="/shop">
                                <div className="my-20">
                                    <h1 className="text-white text-2xl font-medium pb-1">50% Off</h1>
                                    <button className="px-4 bg-[#ec711a51] hover:bg-orange-500 text-white py-2 rounded-lg ">Shop Now</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:block">
                    <div className="text-center rounded-xl w-full h-full bg-center bg-cover bg-no-repeat" style={{ backgroundImage: 'url(https://i.ibb.co/hWjvyh8/Rectangle-34624335.png)' }}>
                        <Link to="/shop">
                            <div className="w-full h-full flex flex-col items-center justify-center">
                                <h1 className="text-white text-2xl font-medium pb-1">50% Off</h1>
                                <button className="px-4 bg-[#ec711a51] hover:bg-orange-500 text-white py-2 rounded-lg ">Shop Now</button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* featured cart section */}
            <ShirtTitle></ShirtTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                {
                    bestSelling?.length > 0 ?

                        bestSelling.map(product => {

                            const { _id, name, images, customerReview, regularPrice, discountedPrice } = product;

                            const totalReview = customerReview?.reduce((acc, review) => review.rating + acc, 0);
                            const averageReview = Math.floor(totalReview / customerReview.length);
                            const priceDiff = ((regularPrice - discountedPrice) / regularPrice) * 100;
                            const discountedPercentage = Math.floor((priceDiff * 100) / 100);


                            return <div key={_id} className=" pb-12">
                                <div >
                                    <div className=" relative bg-[#E8E8E8] rounded-lg">
                                        <div className="absolute left-0 top-0 flex justify-between items-center w-full px-5 pt-5 overflow-hidden ">
                                            {
                                                discountedPercentage > 0 && <div style={{ backgroundImage: `url(${product.star})` }} className=" w-16 h-16 flex justify-center items-center bg-cover">
                                                    <span className=" text-white font-semibold">-{discountedPercentage}%</span>
                                                </div>
                                            }

                                            <div className="w-12 h-12 pt-3 pl-3 rounded-full bg-gray-200 bg-opacity-40">
                                                <button>
                                                    <GoHeart className="text-2xl text-black" />
                                                </button>
                                            </div>
                                        </div>
                                        <img className="w-full h-64 rounded-lg" src={images?.[0]} alt="" />
                                    </div>

                                </div>
                                <div>
                                    <div>
                                        <h1 className="text-xl text-[#25282e] font-medium  py-2">{name}</h1>
                                        <div >
                                            {customerReview.length > 0 ? <div className="flex items-center mb-4">

                                                <ReactStars
                                                    count={5}
                                                    edit={false}
                                                    value={averageReview}
                                                    size={24}
                                                    activeColor="#F49F00"
                                                /> <span>({customerReview.length})</span>
                                            </div> : <p className="text-sm text-gray-400 font-medium mb-6 mt-2">Not reviewed yet</p>}
                                        </div>
                                        <div className="flex gap-2">
                                            <h2 className="pb-4 font-bold">${discountedPrice}</h2>
                                            <h2 className="pb-4 text-gray-400 line-through">${regularPrice}</h2>
                                        </div>
                                        <button onClick={() => navigate(`/product/${_id}`)} className="border-2 flex items-center gap-3 py-3 px-16 rounded-xl hover:bg-[#444852] hover:text-white font-medium text-gray-600 w-full"><FiShoppingCart />View Product</button>
                                    </div>
                                </div>
                            </div>
                        })


                        : ''
                }

            </div>

        </div>

    )
}

export default ProductDetails