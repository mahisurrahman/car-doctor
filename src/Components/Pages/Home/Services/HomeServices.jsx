import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";
import { Link } from "react-router-dom";



const HomeServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res=> res.json())
        .then(data=> setServices(data));
    }, [])
    return (
        <div className="w-10/12 mx-auto">
            <div className="text-center mb-10 ">
                <p className='-mt-2 text-lg font-bold text-[#FF3811]'>Services</p>
                <h3 className="text-4xl font-bold">Our Service Area</h3>
                <p className="pt-4 text-md font-thin tracking-widest w-[600px] mx-auto">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-3 gap-10 mb-10">
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
            <div className=" mb-[100px] text-center">
                <Link><button className="btn btn-outline border-[#FF3811] text-[#FF3811] font-semibold hover:bg-[#FF3811] hover:text-white hover:border-white">More Services</button></Link>
            </div>
        </div>
    );
};

export default HomeServices;