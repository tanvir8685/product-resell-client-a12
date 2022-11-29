import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ modalProduct,setModalProduct }) => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const { product_name, resell_price } = modalProduct;
    const handleBooking=event=>{
        event.preventDefault();
        const form=event.target;
        const product_name=form.product_name.value;
        const customer_name=form.customer_name.value;
        const email=form.email.value;
        const resell_price=form.resell_price.value;
        const phone_number=form.phone_number.value;
        const location=form.location.value;
        const booking={
            product_name,
            customer_name,
            email,resell_price,
            phone_number
            ,
            location
        }
        // aferServer set perfect toast 
        console.log(booking)
        setModalProduct(null)
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
                        <input name='product_name' type="text"  value={product_name} disabled className="input w-full " />
                        <input name='customer_name' type="text" value={user?.displayName} disabled  className="input w-full " />
                        <input name='email' type="email" value={user?.email} disabled className="input w-full " />
                        <input name='resell_price' type="text" value={resell_price} disabled className="input w-full " />
                        <input name='phone_number' type="text" placeholder="Phone Number" className="input w-full " />
                        <input name='location' type="text" placeholder="Location" className="input w-full " />
                        <br />
                        <input className="input w-full  btn-primary" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;