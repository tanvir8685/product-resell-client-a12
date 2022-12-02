import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const AllUser = () => {
    const { data: users = [],refetch,isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch('https://products-resale-server-pi.vercel.app/alluser?categori=user');
            const data = await res.json();
            return data;
        }
    });
    if (isLoading){
        return <Loading></Loading>
    }
    const handleDeleteUser=id=>{
        fetch(`https://products-resale-server-pi.vercel.app/alluser/${id}`,{
            method:'DELETE',
            headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                refetch()
                toast.success('deleted successfully')
            }
        })
    }

    const handleMakeAdmin=(id)=>{
        fetch(`https://products-resale-server-pi.vercel.app/alluser/admin/${id}`,{
            method:'PUT',
            headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                toast.success('make admin successfull')
                refetch();
            }
            console.log(data)
        })

    }
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
                            <th></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            users.map(user=><tr key={user._id}>
                                <td><button onClick={()=>handleDeleteUser(user._id)} className='btn btn-primary'>Delete</button></td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{ user?.role !=='admin' &&  <button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-primary'>Make Admin</button>}</td>
                                
                            </tr>)
                        }
                       
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;