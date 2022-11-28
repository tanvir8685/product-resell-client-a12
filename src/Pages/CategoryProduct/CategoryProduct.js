import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Products from './Products';

const CategoryProduct = () => {
    const products=useLoaderData();
    console.log(products)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
            {
                products.map(product=><Products key={product._id} product={product}></Products>)
            }
        </div>
    );
};

export default CategoryProduct;