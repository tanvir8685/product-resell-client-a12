import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const AllSeller = () => {
    const { data: sellers = [], refetch,isLoading} = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/alluser?categori=seller');
            const data = await res.json();
            return data;
        }
    })
    if (isLoading){
        return <Loading></Loading>
    }

    const handleDeleteSeller=id=>{
        fetch(`http://localhost:5000/alluser/${id}`,{
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
                                <td><button onClick={()=>handleDeleteSeller(seller._id)} className='btn btn-primary'>Delete</button></td>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                {/* <td><button className='btn btn-primary'>Make Admin</button></td> */}
                                
                            </tr>)
                        }
                       
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;