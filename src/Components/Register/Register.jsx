import { BsFacebook, BsLinkedin, BsGoogle } from "react-icons/bs";
import loginImg from '../../assets/images/login/login.svg';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProviders/AuthProviders";

const Register = () => {
    
    const {createUser} = useContext(AuthContext);

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=>{
            console.log(error);
        })

    }

    return (
        <div className="hero min-h-screen mt-[50px] mb-[100px]">
            <div className="hero-content flex-col lg:flex-row gap-20">
                <div className="text-center lg:text-left w-1/2">
                    <img className="w-[600px] " src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-lg bg-base-100 rounded-lg border">
                    <h1 className="text-3xl font-semibold text-center pt-14">Sign Up</h1>
                    <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name="password"  placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-[#FF3811] text-white font-bold hover:text-[#FF3811] hover:bg-white hover:border-[#FF3811]" type="submit" value="Sign Up" />
                        </div>
                        <div className="mt-2 text-center">
                            <p>Or Sign in With</p>
                        </div>
                        <div className="flex gap-10 items-center justify-center text-3xl mt-5">
                            <BsFacebook className="text-[#FF3811] hover:text-blue-800"></BsFacebook>
                            <BsLinkedin className="text-[#FF3811] hover:text-blue-800"></BsLinkedin>
                            <BsGoogle className="text-[#FF3811] hover:text-blue-800"></BsGoogle>
                        </div>
                        <div className="text-center mt-6">
                            <p className="font-semibold text-gray-400">Have an account? <Link to="/login"><span className="text-[#FF3811]">Login</span></Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;