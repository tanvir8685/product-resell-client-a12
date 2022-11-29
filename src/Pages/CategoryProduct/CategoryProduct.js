import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import Products from './Products';

const CategoryProduct = () => {
    const [modalProduct, setModalProduct] = useState(null);
    const products = useLoaderData();
    console.log(products)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>


            {
                products.map(product => <Products key={product._id} product={product} setModalProduct={setModalProduct}></Products>)
            }

            {
                modalProduct&&
                <BookingModal setModalProduct={setModalProduct} modalProduct={modalProduct}></BookingModal>

            }

        </div>
    );
};

export default CategoryProduct;