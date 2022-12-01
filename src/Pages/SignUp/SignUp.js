import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/UseToken';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const[signUpError,setSignUpError]=useState('');
    const [cratedUserEmail,setCreatedUserEmail]=useState('')
    const [token]=useToken(cratedUserEmail);

    const navigate=useNavigate();

    if (token){
        navigate ('/')
    }

    const { createUser, updateUser } = useContext(AuthContext)
    const handleSignUp = data => {
        
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                console.log(data)
                
                toast('user created Successfully')
                const userInfo = {
                    displayName:data.name
                }
                updateUser(userInfo)
                    .then(() => { 
                        
                        saveUser(data.name,data.email,data.category)

                     })
                    .catch(err => console.log(err))
            })
            .catch(error => {
                console.error(error);
                setSignUpError(error.message)
            })
    }

    const saveUser=(name,email,categori)=>{
        const user={name,email,categori};
        fetch('http://localhost:5000/alluser',{
                    method:"POST",
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(user)

                })
                .then(res=>res.json())
                .then(data=>{
                    // getUserToken(email)
                    // navigate('/')
                    setCreatedUserEmail(email)
                    console.log(data)
                })

    }

    // const getUserToken =email=>{
    //     fetch(`http://localhost:5000/jwt?email=${email}`)
    //     .then(res=>res.json())
    //     .then(data=>{
    //         if(data.accessToken){
    //             localStorage.setItem('accessToken',data.accessToken)
                
    //         }
    //     })

    // }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs my-5">
                        <select {...register("category", { required: true })}>
                            <option value="user">User</option>
                            <option value="seller">Seller</option>

                        </select>
                    </div>
                    <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
                

            </div>
        </div>
    );
};

export default SignUp;