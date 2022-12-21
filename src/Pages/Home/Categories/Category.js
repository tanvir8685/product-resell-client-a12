import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const {name,cat_img,id}=category;
    return (
        <div>
            <div className="card h-52 w-94 bg-base-100 shadow-xl image-full m-5">
                <figure><img src={cat_img} alt="Shoes" /></figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{`There are many ${name} collection in our website`}</p>
                    <div className="card-actions justify-end ">
                        <Link to={`category/${id}`} className="btn btn-primary">More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;