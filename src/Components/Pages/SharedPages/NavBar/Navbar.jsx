import { Link } from "react-router-dom";
import logo from '../../../../assets/logo.svg';
import { BsBag,BsSearch } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../../../AuthProviders/AuthProviders";


const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);

  const handleLogOut = ()=>{
    logOut()
    .then(()=>{})
    .catch(error=>{
      console.log(error);
    })
  }

  const navItems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/services">Services</Link></li>
    <li><Link to="/blog">Blog</Link></li>
    <li><Link to="/contact">Contact</Link></li>
    {
      user?.email? <li className=" border border-black rounded-lg"><button onClick={handleLogOut}>Log Out</button></li>:<li className=" border border-black rounded-lg"><Link to="/login">Login</Link></li>
    }
  </>
  return (
    <div className="navbar bg-base-100 h-20 pt-10">
      <div className="navbar-start -mx-6">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl"> <img className="w-20" src={logo} alt="" /> </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl flex items-center">
            {navItems}
        </ul>
      </div>
      <div className="navbar-end flex gap-5 items-center">
        <BsBag></BsBag>
        <BsSearch></BsSearch>
        <button className="btn btn-outline border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:border-white">Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
