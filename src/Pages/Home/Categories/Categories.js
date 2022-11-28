import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {
    const [vehicleCategories,setVehicleCategories]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/vehaicel-categories')
        .then(res=>res.json())
        .then(data=>setVehicleCategories(data))
    },[])

    
    return (
        <div className='my-5'>
            <h1 className='text-center text-5xl text-bold'>There is Our Vehicle Categories</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    vehicleCategories.map(category => <Category key={category.id} category={category} ></Category>)
                }

            </div>
        </div>
    );
};

export default Categories;