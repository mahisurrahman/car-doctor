import person from '../../../../assets/images/about_us/person.jpg';
import parts from '../../../../assets/images/about_us/parts.jpg';


const HomeAbout = () => {
    return (
        <div className="min-h-screen my-14">
            <div className="flex flex-row gap-">
                <div className='w-1/2 relative'>
                    <img src={person} className="w-3/4 h-[400px] object-cover rounded-lg" />
                    <img src={parts} className="absolute right-8 top-[200px] border-8 border-white w-1/2 h-[300px] object-cover rounded-lg" />
                </div>
                <div className='w-1/2'>
                    <p className='-mt-2 text-lg font-bold text-[#FF3811]'>About Us</p>
                    <h1 className="pt-4 text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="pt-6 text-lg font-thin tracking-widest">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='py-2 text-lg font-thin tracking-widest'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn my-4 rounded bg-[#FF3811] text-white hover:text-[#FF3811] hover:bg-white hover:border-[#FF3811]">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;