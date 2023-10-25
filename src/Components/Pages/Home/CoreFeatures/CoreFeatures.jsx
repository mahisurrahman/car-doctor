import { RiTeamFill } from "react-icons/ri";
import { LuClock7 } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { FaTools,FaBlackTie } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";

const CoreFeatures = () => {
    return (
        <div className="w-10/12 mx-auto mb-[100px]">
            <div className="text-center mb-10 ">
                <p className='-mt-2 text-lg font-bold text-[#FF3811]'>Core Features</p>
                <h3 className="text-4xl font-bold">Why Choose Us</h3>
                <p className="pt-4 text-md font-thin tracking-widest w-[600px] mx-auto">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-6 gap-2 mt-10">
                <div className="flex flex-col justify-center items-center px-3 py-5 border rounded-lg">
                    <RiTeamFill className="text-4xl text-[#FF3811]"></RiTeamFill>
                    <p className="text-md my-4 font-bold">Expert Team</p>
                </div>
                <div className="flex flex-col bg-[#FF3811] justify-center items-center px-3 py-5 border rounded-lg">
                    <LuClock7 className="text-4xl text-white"></LuClock7>
                    <p className="text-white text-md my-4 font-bold">Time Delivery</p>
                </div>
                <div className="flex flex-col justify-center items-center px-3 py-5 border rounded-lg">
                    <BiSupport className="text-4xl text-[#FF3811]"></BiSupport>
                    <p className="text-md my-4 font-bold">24/7 Support</p>
                </div>
                <div className="flex flex-col justify-center items-center px-3 py-5 border rounded-lg">
                    <FaTools className="text-4xl text-[#FF3811]"></FaTools>
                    <p className="text-md my-4 font-bold">Best Equipment</p>
                </div>
                <div className="flex flex-col justify-center items-center px-3 py-5 border rounded-lg">
                    <FaBlackTie className="text-4xl text-[#FF3811]"></FaBlackTie>
                    <p className="text-md my-4 font-bold">100% Guarantee</p>
                </div>
                <div className="flex flex-col justify-center items-center px-3 py-5 border rounded-lg">
                    <CiDeliveryTruck className="text-4xl text-[#FF3811]"></CiDeliveryTruck>
                    <p className="text-md my-4 font-bold">Timely Delivery</p>
                </div>
            </div>
        </div>
    );
};

export default CoreFeatures;