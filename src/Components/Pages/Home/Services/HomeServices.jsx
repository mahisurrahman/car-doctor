import { useEffect, useState } from "react";



const HomeServices = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
        .then(res=> res.json())
        .then(data=> setServices(data));
    }, [])
    return (
        <div>
            <div className="text-center mb-[100px]">
                <p className='-mt-2 text-lg font-bold text-[#FF3811]'>Services</p>
                <h3 className="text-4xl font-bold">Our Service Area</h3>
                <p className="pt-4 text-md font-thin tracking-widest w-[600px] mx-auto">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div>
                <p>services: {services.length}</p>
            </div>
        </div>
    );
};

export default HomeServices;