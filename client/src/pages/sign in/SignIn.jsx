import { Link } from "react-router-dom";


const SignIn = () => {
    return (
        <div className="container mx-auto">
            <div className="hero min-h-screen px-12 bg-base-200">
                <div className="hero-content gap-16 flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="text-center">
                                <h1 className="text-4xl pb-5 font-bold">Log In to your account</h1>
                                <p className=" pb-1">OR SIGN UP WITH EMAIL PASSWORD ETC.</p>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label pl-[221px]">
                                    <Link to="/verification">
                                        <a href="#" className="label-text-alt text-orange-600 link link-hover">Forgot password?</a>
                                    </Link>
                                </label>
                            </div>
                            <div className="form-control mt-10">
                                <button className="btn btn-primary">Sign In</button>
                            </div>
                        </form>
                        <h1 className="pb-12 -mt-4 text-center">Already don t have an account? <Link to="/signup" className="underline text-orange-600 font-bold">Sign Up</Link></h1>
                    </div>
                    <div className="text-center w-full items-center flex gap-4 lg:text-left">
                        <img src="https://i.ibb.co/8b3mhtJ/image-887-1.png" alt="" />
                        <h1 className="text-5xl font-bold">Online Shop</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;