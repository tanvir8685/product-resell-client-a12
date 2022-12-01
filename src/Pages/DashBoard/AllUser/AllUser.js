import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUser = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/alluser?categori=user');
            const data = await res.json();
            return data;
        }
    }

    )
    return (
        <div>
            <h2>This is all user</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Name</th>
                            <th>Email</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            users.map(user=><tr key={user._id}>
                                <button className='btn btn-primary'>Delete</button>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                
                            </tr>)
                        }
                       
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;