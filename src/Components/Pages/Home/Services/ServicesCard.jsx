/* eslint-disable react/prop-types */
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
    const { _id ,img, title, price } = service;
    return (
        <div className="card w-80 bg-base-100 border border-gray-300 rounded-lg">
            <figure className="px-5 pt-5">
                <img src={img} alt="Shoes" className="rounded-lg object-cover w-80 h-48" />
            </figure>
            <div className=" px-6 py-5 space-y-2 items-start text-center">
                <h2 className="card-title text-2xl font-semibold">{title}</h2>
                <div className="flex items-center justify-between text-[#FF3811] font-bold text-lg">
                    <p>Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}><AiOutlineArrowRight className="text-2xl hover:text-black"></AiOutlineArrowRight></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;