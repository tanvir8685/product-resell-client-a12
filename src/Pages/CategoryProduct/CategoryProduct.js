import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryProduct = () => {
    const products=useLoaderData();
    console.log(products)
    return (
        <div>
            <h1>There are {products.length} product</h1>
        </div>
    );
};

export default CategoryProduct;