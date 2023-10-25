import img1 from '../../../../assets/images/banner/1.jpg';
import img2 from '../../../../assets/images/banner/2.jpg';
import img3 from '../../../../assets/images/banner/3.jpg';
import img4 from '../../../../assets/images/banner/4.jpg';
import img5 from '../../../../assets/images/banner/5.jpg';
import img6 from '../../../../assets/images/banner/6.jpg';
import { AiOutlineArrowRight,AiOutlineArrowLeft } from "react-icons/ai";


const Banner = () => {
    return (
        <div className="carousel w-full my-10 rounded-lg h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full object-cover" />
                <div className="h-full bg-gradient-to-r from-[#000000] to-[21, 21, 21, 0.00] absolute flex flex-col gap-4 justify-center pl-20 space-y-2">
                    <h2 className="text-5xl text-white font-bold tracking-wide">Affordable <br /> Price for Car <br /> Servicing</h2>
                     <p className='text-md text-white'>There are many variations of passages of  available, But <br />  the majority have suffered alteration in some form</p>
                     <div className='flex gap-2'>
                        <button className='btn bg-[#FF3811] text-white font-bold border-0 hover:bg-white hover:text-black'>Discover More</button>
                        <button className='btn font-bold hover:bg-[#FF3811] border-0 hover:text-black '>Latest Project</button>
                     </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-10 bottom-0">
                    <a href="#slide6" className="btn btn-circle text-xl hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811]"><AiOutlineArrowLeft></AiOutlineArrowLeft> </a>
                    <a href="#slide2" className="btn btn-circle bg-[#FF3811] border-[#FF3811] text-white hover:text-black text-xl"><AiOutlineArrowRight></AiOutlineArrowRight></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full object-cover" />
                <div className="h-full bg-gradient-to-r from-[#000000] to-[21, 21, 21, 0.00] absolute flex flex-col gap-4 justify-center pl-20 space-y-2">
                    <h2 className="text-5xl text-white font-bold tracking-wide">Affordable <br /> Price for Car <br /> Servicing</h2>
                     <p className='text-md text-white'>There are many variations of passages of  available, But <br />  the majority have suffered alteration in some form</p>
                     <div className='flex gap-2'>
                        <button className='btn bg-[#FF3811] text-white font-bold border-0 hover:bg-white hover:text-black'>Discover More</button>
                        <button className='btn font-bold hover:bg-[#FF3811] border-0 hover:text-black '>Latest Project</button>
                     </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-10 bottom-0">
                    <a href="#slide1" className="btn btn-circle text-xl hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811]"><AiOutlineArrowLeft></AiOutlineArrowLeft> </a>
                    <a href="#slide3" className="btn btn-circle bg-[#FF3811] border-[#FF3811] text-white hover:text-black text-xl"><AiOutlineArrowRight></AiOutlineArrowRight></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full object-cover" />
                <div className="h-full bg-gradient-to-r from-[#000000] to-[21, 21, 21, 0.00] absolute flex flex-col gap-4 justify-center pl-20 space-y-2">
                    <h2 className="text-5xl text-white font-bold tracking-wide">Affordable <br /> Price for Car <br /> Servicing</h2>
                     <p className='text-md text-white'>There are many variations of passages of  available, But <br />  the majority have suffered alteration in some form</p>
                     <div className='flex gap-2'>
                        <button className='btn bg-[#FF3811] text-white font-bold border-0 hover:bg-white hover:text-black'>Discover More</button>
                        <button className='btn font-bold hover:bg-[#FF3811] border-0 hover:text-black '>Latest Project</button>
                     </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-10 bottom-0">
                    <a href="#slide2" className="btn btn-circle text-xl hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811]"><AiOutlineArrowLeft></AiOutlineArrowLeft> </a>
                    <a href="#slide4" className="btn btn-circle bg-[#FF3811] border-[#FF3811] text-white hover:text-black text-xl"><AiOutlineArrowRight></AiOutlineArrowRight></a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full object-cover" />
                <div className="h-full bg-gradient-to-r from-[#000000] to-[21, 21, 21, 0.00] absolute flex flex-col gap-4 justify-center pl-20 space-y-2">
                    <h2 className="text-5xl text-white font-bold tracking-wide">Affordable <br /> Price for Car <br /> Servicing</h2>
                     <p className='text-md text-white'>There are many variations of passages of  available, But <br />  the majority have suffered alteration in some form</p>
                     <div className='flex gap-2'>
                        <button className='btn bg-[#FF3811] text-white font-bold border-0 hover:bg-white hover:text-black'>Discover More</button>
                        <button className='btn font-bold hover:bg-[#FF3811] border-0 hover:text-black '>Latest Project</button>
                     </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-10 bottom-0">
                    <a href="#slide3" className="btn btn-circle text-xl hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811]"><AiOutlineArrowLeft></AiOutlineArrowLeft> </a>
                    <a href="#slide5" className="btn btn-circle bg-[#FF3811] border-[#FF3811] text-white hover:text-black text-xl"><AiOutlineArrowRight></AiOutlineArrowRight></a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full object-cover" />
                <div className="h-full bg-gradient-to-r from-[#000000] to-[21, 21, 21, 0.00] absolute flex flex-col gap-4 justify-center pl-20 space-y-2">
                    <h2 className="text-5xl text-white font-bold tracking-wide">Affordable <br /> Price for Car <br /> Servicing</h2>
                     <p className='text-md text-white'>There are many variations of passages of  available, But <br />  the majority have suffered alteration in some form</p>
                     <div className='flex gap-2'>
                        <button className='btn bg-[#FF3811] text-white font-bold border-0 hover:bg-white hover:text-black'>Discover More</button>
                        <button className='btn font-bold hover:bg-[#FF3811] border-0 hover:text-black '>Latest Project</button>
                     </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-10 bottom-0">
                    <a href="#slide4" className="btn btn-circle text-xl hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811]"><AiOutlineArrowLeft></AiOutlineArrowLeft> </a>
                    <a href="#slide6" className="btn btn-circle bg-[#FF3811] border-[#FF3811] text-white hover:text-black text-xl"><AiOutlineArrowRight></AiOutlineArrowRight></a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full object-cover" />
                <div className="h-full bg-gradient-to-r from-[#000000] to-[21, 21, 21, 0.00] absolute flex flex-col gap-4 justify-center pl-20 space-y-2">
                    <h2 className="text-5xl text-white font-bold tracking-wide">Affordable <br /> Price for Car <br /> Servicing</h2>
                     <p className='text-md text-white'>There are many variations of passages of  available, But <br />  the majority have suffered alteration in some form</p>
                     <div className='flex gap-2'>
                        <button className='btn bg-[#FF3811] text-white font-bold border-0 hover:bg-white hover:text-black'>Discover More</button>
                        <button className='btn font-bold hover:bg-[#FF3811] border-0 hover:text-black '>Latest Project</button>
                     </div>
                </div>
                <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-10 bottom-0">
                    <a href="#slide5" className="btn btn-circle text-xl hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811]"><AiOutlineArrowLeft></AiOutlineArrowLeft> </a>
                    <a href="#slide1" className="btn btn-circle bg-[#FF3811] border-[#FF3811] text-white hover:text-black text-xl"><AiOutlineArrowRight></AiOutlineArrowRight></a>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;