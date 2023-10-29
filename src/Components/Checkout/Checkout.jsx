import { useLoaderData, useNavigate } from 'react-router-dom';
import checkoutImg from '../../assets/images/checkout/checkout.png'
import { useContext } from 'react';
import { AuthContext } from '../../AuthProviders/AuthProviders';

const Checkout = () => {
    const service = useLoaderData();
    const { _id, title, price, img } = service;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleOrderService = event => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const number = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;
        const booking = {
            customer_firstName: firstName,
            customer_lastName: lastName,
            customer_number: number,
            customer_email: email,
            customer_message: message,
            customer_orderService: _id,
            customer_serviceTitle: title,
            customer_serviceImg: img
        };
        console.log(booking);

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    alert('Service Booked Succesfully');
                    navigate('/');
                }
            })
            .catch(error => {
                console.log(error);
            });

    }
    return (
        <div className='my-10'>
            <div className='relative rounded-lg'>
                <img src={checkoutImg} alt="" />
                <div className='py-20 px-20 h-full w-full flex-col justify-center items-center absolute top-[0%] right-[0%] bg-gradient-to-r from-[#000000] to-[21, 21, 21, 0.00] rounded-lg'>
                    <h2 className='text-4xl font-bold text-white my-2'>Checkout</h2>
                    <p className='text-2xl font-bold text-white'>Product Title: <span className='font-thin'>{title}</span></p>
                    <p className='text-2xl font-bold text-white'>Product Price:  <span className='font-thin'>{price}</span></p>
                </div>
            </div>
            <div className='w-full rounded my-10 px-20 py-20 bg-[#F3F3F3]'>
                <form onSubmit={handleOrderService}>
                    <div className='flex gap-5 my-5'>
                        <input className='w-full rounded-lg h-14 px-3' placeholder='First Name' type="text" name="firstName" id="" defaultValue={user?.displayName} />
                        <input className='w-full rounded-lg h-14 px-3' placeholder='Last Name' type="text" name="lastName" id="" />
                    </div>
                    <div className='flex gap-5'>
                        <input className='w-full rounded-lg h-14 px-3' placeholder='Your Phone' type="number" name="phone" id="" />
                        <input className='w-full rounded-lg h-14 px-3' placeholder='Your Email' type="email" name="email" id="" defaultValue={user?.email} />
                    </div>
                    <div>
                        <textarea placeholder='Your Message' className='w-full rounded-lg h-60 my-5 p-3' name="message" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        <input type='submit' value='Order Confirm' className='w-full text-center h-14 border rounded-lg bg-[#FF3811] text-xl text-white font-semibold hover:text-[#FF3811] hover:bg-white hover:border-[#FF3811]' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;