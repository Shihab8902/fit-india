import { GoCheck } from "react-icons/go";
import { GoAlert } from "react-icons/go";


const AddDeliveryAddress = () => {
    return (
        <div className="pt-14 container mx-auto  px-10 h-screen">
            <ol class="flex items-center w-full">
                <li class="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
                    <span class="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                        <svg class="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                        </svg>
                    </span>
                </li>
                <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                    <span class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                        02
                    </span>
                </li>
                <li class="flex items-center w-full">
                    <span class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                        03
                    </span>
                </li>
            </ol>

            {/*  */}
            <div className="pt-12">
                <h1 className="text-3xl text-black font-medium"><span className="text-gray-300">02.</span>Delivery Address</h1>
                <div className="md:flex gap-4">
                    <div className="border-[1px] mt-4 p-3 rounded-xl bg-[#fff9ed] border-orange-200 w-fit">
                        <h2 className=" w-fit text-orange-500 bg-orange-100 rounded-xl flex items-center gap-4 font-medium px-3 py-2">Last delivered by this address <GoAlert /></h2>
                        <h1 className="font-bold py-1 pl-1">Aravindh N</h1>
                        <p className="text-sm pl-1">No: 2/326, Malayanoor(Vill), Ramagondahalli <br /> (PO), Pennagaram (Tk)</p>
                        <p className="pt-1 pb-2">Tamil nadu - 636 810</p>
                        <div className="flex gap-3">
                            <button className="bg-orange-400 p-0 px-4 text-base text-white rounded-md">Delete</button>
                            <button className="bg-orange-400 p-0 px-4 text-base text-white rounded-md">Edit</button>
                        </div>
                    </div>
                    <div className="border-[1px] mt-4 p-3 rounded-xl bg-[#ffffff] border-[#dadada] w-fit">
                        <h1 className="font-bold py-1 pl-1">Aravindh N</h1>
                        <p className="text-sm pl-1">No: 2/326, Malayanoor(Vill), Ramagondahalli <br /> (PO), Pennagaram (Tk)</p>
                        <p className="pt-1 pb-2">Tamil nadu - 636 810</p>
                        <div className="flex gap-3">
                            <button className="border-[2px] p-0 px-4 text-base text-balance rounded-md">Delete</button>
                            <button className="border-[2px] p-0 px-4 text-base text-balance rounded-md">Edit</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <div className="text-center pt-8">
                <button className="btn text-orange-500 hover:bg-orange-500 hover:text-white hover:border-orange-50 bg-white" onClick={() => document.getElementById('my_modal_1').showModal()}>See all address</button>
                <dialog id="my_modal_1" className="modal">
                    <div className="bg-white px-16 py-16 rounded-xl">
                        <div className="md:flex gap-4">
                            <div className="border-[1px] mt-4 p-3 rounded-xl bg-[#fff9ed] border-orange-200 w-fit">
                                <h2 className=" w-fit text-orange-500 bg-orange-100 rounded-xl flex items-center gap-4 font-medium px-3 py-2">Last delivered by this address <GoAlert /></h2>
                                <h1 className="font-bold py-1 pl-1">Aravindh N</h1>
                                <p className="text-sm pl-1">No: 2/326, Malayanoor(Vill), Ramagondahalli <br /> (PO), Pennagaram (Tk)</p>
                                <p className="pt-1 pb-2">Tamil nadu - 636 810</p>
                                <div className="flex gap-3">
                                    <button className="bg-orange-400 p-0 px-4 text-base text-white rounded-md">Delete</button>
                                    <button className="bg-orange-400 p-0 px-4 text-base text-white rounded-md">Edit</button>
                                </div>
                            </div>
                            <div className="border-[1px] mt-4 p-3 rounded-xl bg-[#ffffff] border-[#dadada] w-fit">
                                <h1 className="font-bold py-1 pl-1">Aravindh N</h1>
                                <p className="text-sm pl-1">No: 2/326, Malayanoor(Vill), Ramagondahalli <br /> (PO), Pennagaram (Tk)</p>
                                <p className="pt-1 pb-2">Tamil nadu - 636 810</p>
                                <div className="flex gap-3">
                                    <button className="border-[2px] p-0 px-4 text-base text-balance rounded-md">Delete</button>
                                    <button className="border-[2px] p-0 px-4 text-base text-balance rounded-md">Edit</button>
                                </div>
                            </div>
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                <div className="text-center">
                                    <button className="btn">Confirm</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>

            {/*  */}
            <div className="pt-10">
                <h1 className="text-xl font-bold pb-4">Or New Address</h1>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <h1 className="pb-2">Name</h1>
                        <input type="text" placeholder="Full Name" className="input input-bordered w-full " />
                    </div>
                    <div>
                        <h1 className="pb-2">Phone Number</h1>
                        <input type="number" placeholder="Enter Phone Number" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="grid pt-6 md:grid-cols-2 gap-4">
                    <div>
                        <h1 className="pb-2">District</h1>
                        <input type="text" placeholder="Enter District" className="input input-bordered w-full " />
                    </div>
                    <div>
                        <h1 className="pb-2">Street</h1>
                        <input type="number" placeholder="Enter Street address" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="grid pt-6 items-center md:grid-cols-2 gap-4">
                    <div>
                        <h1 className="pb-2">City</h1>
                        <input type="location" placeholder="Enter City address" className="input input-bordered w-full " />
                    </div>
                    <div>
                        <h1 className="pb-2">Select Address Type</h1>
                        <select className="select select-bordered w-full">
                            <option disabled selected>Who shot first?</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </div>
                </div>

            </div>

            {/*  */}
            <div className="text-center pt-8">
                <button className="bg-orange-400 text-white text-xl font-medium px-36 py-2 rounded-md">Next</button>
            </div>
        </div>
    )
}

export default AddDeliveryAddress