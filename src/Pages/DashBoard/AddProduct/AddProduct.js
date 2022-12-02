import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const handleProduct=data=>{
        fetch('http://localhost:5000/sellerproduct',{
                    method:"POST",
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(data)

                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.acknowledged){
                        toast.success('product add succesfully')

                    }
                    console.log(data)
                })
        console.log(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(handleProduct)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Name</span></label>
                        <input type="text" {...register("productname", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {/* {errors.name && <p className='text-red-500'>{errors.name.message}</p>} */}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Price</span></label>
                        <input type="text" {...register("price", {
                            required: "price is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {/* {errors.name && <p className='text-red-500'>{errors.name.message}</p>} */}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Condition</span></label>
                        <input type="text" {...register("condition", {
                            required: "condition is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {/* {errors.name && <p className='text-red-500'>{errors.name.message}</p>} */}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Mobile Number</span></label>
                        <input type="text" {...register("mobile", {
                            required: "number is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {/* {errors.name && <p className='text-red-500'>{errors.name.message}</p>} */}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Locatio</span></label>
                        <input type="text" {...register("location", {
                            required: "location is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {/* {errors.name && <p className='text-red-500'>{errors.name.message}</p>} */}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Category</span></label>
                        <input type="text" {...register("productcategori", {
                            required: "productcategori is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {/* {errors.name && <p className='text-red-500'>{errors.name.message}</p>} */}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Description</span></label>
                        <input type="text" {...register("description", {
                            required: "description is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {/* {errors.name && <p className='text-red-500'>{errors.name.message}</p>} */}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">year of purchase</span></label>
                        <input type="text" {...register("purchase", {
                            required: "purchase  is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {/* {errors.name && <p className='text-red-500'>{errors.name.message}</p>} */}
                    </div>
                    
                    <input className='btn btn-accent w-full max-w-xs mt-4' value="Submit" type="submit" />
                    {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
                </form>
        </div>
    );
};

export default AddProduct;