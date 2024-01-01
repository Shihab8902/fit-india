import { Link, useNavigate } from 'react-router-dom'
import image from '../../assets/images/logo.png'

const SignUp = () => {

    const navigate = useNavigate();



    return (
        <div className='min-h-screen bg-base-200 '>
            <div className="  flex flex-col lg:flex-row gap-10 lg:gap-0  items-center justify-evenly container mx-auto px-5 py-10">

                <div onClick={() => navigate("/")} className="text-center cursor-pointer lg:text-left flex items-center ">
                    <img className=' h-14 w-14 rounded-full' src={image} alt="" />
                    <h3 className=' md:text-5xl font-kaushan'>Online Shop</h3>
                </div>

                <div className='md:bg-white py-8 md:px-14 rounded-xl '>
                    <h3 className='text-center text-4xl font-medium '>Create Account</h3>
                    <div className="divider">Or sign in with email</div>
                    <form >
                        <div className="form-control mt-3">
                            <label className="label">
                                <span className="label-text">Full name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered  md:w-80" required />
                        </div>

                        <div className="form-control mt-3">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered md:w-80" required />
                        </div>

                        <div className="form-control mt-3">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="text" placeholder="Phone" className="input input-bordered md:w-80" required />

                        </div>

                        <div className="form-control mt-3">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="******" className="input input-bordered md:w-80" required />

                        </div>
                        <div className='mt-4 flex items-center gap-1'>
                            <input type="checkbox" className="checkbox checkbox-sm border border-slate-700" />
                            <p className='text-xs font-medium'>I agree to Online shop's <a className='font-bold hover:underline' href="">Terms and Use</a> and <a className='font-bold hover:underline' href="">Privacy Policy</a></p>
                        </div>

                        <div className="form-control mt-5">
                            <button className="btn btn-neutral text-white">Sign up</button>
                        </div>

                    </form>

                    <p className='text-center mt-5  text-[#8A9099]'>Already have an account? <Link to="/signin" className='text-black hover:underline'>Sign in</Link></p>
                </div>


            </div>
        </div>
    )
}

export default SignUp