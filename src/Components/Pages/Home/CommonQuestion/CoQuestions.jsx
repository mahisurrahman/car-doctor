import { SlCalender } from "react-icons/sl";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

const CoQuestions = () => {
    return (
        <div className="bg-[#151515] flex justify-around gap-2 py-20 mx-auto rounded-lg mb-[100px]">
            <div className="flex gap-2 items-center">
                <SlCalender className="text-[#FF3811] text-3xl font-bold"></SlCalender>
                <div>
                    <p className="tracking-widest  text-sm text-white font-thin">We are open monday-friday</p>
                    <p className="tracking-wider text-xl text-white font-semibold">7:00 am - 9:00 pm</p>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <BiSolidPhoneCall className="text-[#FF3811] text-3xl font-bold"></BiSolidPhoneCall>
                <div>
                    <p className="tracking-widest  text-sm text-white font-thin">Have a question?</p>
                    <p className="tracking-wider text-xl text-white font-semibold">+8801621754583</p>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <FaLocationDot className="text-[#FF3811] text-3xl font-bold"></FaLocationDot>
                <div>
                    <p className="tracking-widest  text-sm text-white font-thin">Need a repair? our address</p>
                    <p className="tracking-wider text-xl text-white font-semibold">Liza Street, New York</p>
                </div>
            </div>
        </div>
    );
};

export default CoQuestions;