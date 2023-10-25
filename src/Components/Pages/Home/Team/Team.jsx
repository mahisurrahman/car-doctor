import team1 from '../../../../assets/images/team/1.jpg';
import team2 from '../../../../assets/images/team/2.jpg';
import team3 from '../../../../assets/images/team/3.jpg';

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Team = () => {
    return (
        <div className="w-10/12 mx-auto">
            <div className="text-center mb-10 ">
                <p className='-mt-2 text-lg font-bold text-[#FF3811]'>Team</p>
                <h3 className="text-4xl font-bold">Meet Our Team</h3>
                <p className="pt-4 text-md font-thin tracking-widest w-[600px] mx-auto">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-3 gap-10 mb-10">
                <div className="card w-80 bg-base-100 border border-gray-300 rounded-lg">
                    <figure className="px-5 pt-5">
                        <img src={team1} alt="Shoes" className="rounded-lg object-cover w-80 h-48" />
                    </figure>
                    <div className=" px-6 py-5 space-y-2">
                        <div className='flex justify-center'>
                            <h2 className="card-title text-2xl font-bold">Car Engine Plug</h2>
                        </div>
                        <div className="text-center font-normal text-lg">
                            <p className='text-sm tracking-wider'>Engine Expert</p>
                            <div className='text-3xl flex gap-5 text-[#FF3811] items-center justify-center mt-6'>
                                <FaFacebook className=' hover:text-blue-700 hover:cursor-pointer'></FaFacebook>
                                <FaTwitter className=' hover:text-blue-700 hover:cursor-pointer'></FaTwitter>
                                <FaInstagram className=' hover:text-blue-700 hover:cursor-pointer'></FaInstagram>
                                <FaLinkedin className=' hover:text-blue-700 hover:cursor-pointer'></FaLinkedin>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 border border-gray-300 rounded-lg">
                    <figure className="px-5 pt-5">
                        <img src={team2} alt="Shoes" className="rounded-lg object-cover w-80 h-48" />
                    </figure>
                    <div className=" px-6 py-5 space-y-2">
                        <div className='flex justify-center'>
                            <h2 className="card-title text-2xl font-bold">Car Modification</h2>
                        </div>
                        <div className="text-center  font-normal text-lg">
                            <p className='text-sm tracking-wider'>Modification Expert</p>
                            <div className='text-3xl flex gap-5 text-[#FF3811] items-center justify-center mt-6'>
                                <FaFacebook className=' hover:text-blue-700 hover:cursor-pointer'></FaFacebook>
                                <FaTwitter className=' hover:text-blue-700 hover:cursor-pointer'></FaTwitter>
                                <FaInstagram className=' hover:text-blue-700 hover:cursor-pointer'></FaInstagram>
                                <FaLinkedin className=' hover:text-blue-700 hover:cursor-pointer'></FaLinkedin>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 border border-gray-300 rounded-lg">
                    <figure className="px-5 pt-5">
                        <img src={team3} alt="Shoes" className="rounded-lg object-cover w-80 h-48" />
                    </figure>
                    <div className=" px-6 py-5 space-y-2">
                        <div className='flex justify-center'>
                            <h2 className="card-title text-2xl font-bold">Car Repairer</h2>
                        </div>
                        <div className="text-center font-normal text-lg">
                            <p className='text-sm tracking-wider'>Repairing Expert</p>
                            <div className='text-3xl flex gap-5 text-[#FF3811] items-center justify-center mt-6'>
                                <FaFacebook className=' hover:text-blue-700 hover:cursor-pointer'></FaFacebook>
                                <FaTwitter className=' hover:text-blue-700 hover:cursor-pointer'></FaTwitter>
                                <FaInstagram className=' hover:text-blue-700 hover:cursor-pointer'></FaInstagram>
                                <FaLinkedin className=' hover:text-blue-700 hover:cursor-pointer'></FaLinkedin>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Team;