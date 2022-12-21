import React from 'react';


const Products = ({product,setModalProduct}) => {
    const{date,img,location,orginal_price,product_name, resell_price,year_of_use,seller
    }=product;
    return (
        <div>
            <div className="card mb-12  w-96 bg-base-100 shadow-xl">
                <figure><img className='h-56' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Model:{product_name}</h2>
                    <p>Seller Name:{seller}</p>
                    <p>Location:{location}</p>
                    <p>Orginal Price:{orginal_price} Tk</p>
                    <p>Resell Price:{resell_price} Tk</p>
                    <p>Use Duration:{year_of_use} year</p>
                    <p>Entry Date:{date}</p>
                    <div className="card-actions justify-end">
                        
                        <label onClick={()=>setModalProduct(product)} htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Products;