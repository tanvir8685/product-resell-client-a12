import React from 'react';

const BookingModal = () => {
   
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">title</h3>
                    <p className="py-4">info</p>
                </div>
            </div>
        </>
    );
};

export default BookingModal;