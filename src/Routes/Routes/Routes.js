import {createBrowserRouter} from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import Blog from '../../Pages/Blog/Blog';
import CategoryProduct from '../../Pages/CategoryProduct/CategoryProduct';
import AllSeller from '../../Pages/DashBoard/AllSeller/AllSeller';
import AllUser from '../../Pages/DashBoard/AllUser/AllUser';
import DashBoard from '../../Pages/DashBoard/DashBoard/DashBoard';
import MyBooking from '../../Pages/DashBoard/MyBooking/MyBooking';

import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import SignUp from '../../Pages/SignUp/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/category/:id',
                element:<PrivateRoute><CategoryProduct></CategoryProduct></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)
            },
            
        ]
       
    },
    {
        path:"/dashboard",
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<MyBooking></MyBooking>
            },
            {
                path:'/dashboard/user',
                element:<AllUser></AllUser>
            },
            {
                path:'/dashboard/seller',
                element:<AllSeller></AllSeller>
            }
        ]
    }
])

export default router;