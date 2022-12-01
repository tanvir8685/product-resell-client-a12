import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyBooking = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url,{
                headers:{
                    authorization:`bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            console.log(data)
            return data;
            
        }
    })
    return (
        <div>
            <h2>Here is my all booking</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                Delete
                            </th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Buy</th>
                        </tr>
                    </thead>
                    <tbody>



                        {
                            bookings.map((booking,i) => <tr key={i}>
                                <th>

                                    <button className='btn btn-ghost'>X</button>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={booking.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {booking.product_name}
                                    <br />

                                </td>
                                <td>{booking.resell_price}</td>
                                <th>
                                    <button className="btn btn-primary">Pay</button>
                                </th>
                            </tr>
                            )
                        }











                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyBooking;