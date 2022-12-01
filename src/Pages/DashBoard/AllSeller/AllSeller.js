import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSeller = () => {
    const { data: sellers = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/alluser?categori=seller');
            const data = await res.json();
            return data;
        }
    }

    )
    return (
        <div>
            <h2>This is all sell er</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            sellers.map(seller=><tr key={seller._id}>
                                <td><button className='btn btn-primary'>Delete</button></td>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td><button className='btn btn-primary'>Make Admin</button></td>
                                
                            </tr>)
                        }
                       
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;