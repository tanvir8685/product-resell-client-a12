import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../hooks/UseToken';

const Login = () => {
    const { register,formState: { errors }, handleSubmit } = useForm();
    const [loginError,setLoginError]=useState('');
    const {signIn, googleSignIn}=useContext(AuthContext);
    const [loginUserEmail,setLoginUserEmail]=useState('');
    const [token]=useToken(loginUserEmail);
    const location=useLocation();
    const navigate=useNavigate();
    const from=location.state?.from?.pathname|| '/';
    if (token){
        navigate(from,{replace:true});
    }
    const handleLogin = (data) => {
        console.log(data)
        setLoginError('')
        signIn(data.email,data.password)
        .then(result=>{
            const user=result.user;
            console.log(user)
            
            setLoginUserEmail(data.email)
            // navigate(from,{replace:true});
        })
        .catch(error=>{
            console.log(error.message);
            setLoginError(error.message)
        })

    }
    const googleLogIn=()=>{
        googleSignIn(provider)
          .then((result) => {
            
            const user = result.user;
            setLoginUserEmail(user.email)
            saveUser(user.displayName,user.email)
            console.log(user)
            
          }).catch((error) => {
            console.log(error)
            
          });

    }
    const saveUser=(name,email)=>{
        const user={name,email,categori:'user'};
        fetch('https://products-resale-server-pi.vercel.app/alluser',{
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
                    setLoginUserEmail(email)
                    console.log(data)
                })

    }
    const provider = new GoogleAuthProvider();
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    {/* <div className="form-control w-full max-w-xs">
                        <select {...register("category", { required: true })}>
                            <option value="user">User</option>
                            <option value="Seller">Seller</option>

                        </select>
                    </div> */}
                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p>New to VehiceHUB <Link className='text-secondary' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={googleLogIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;