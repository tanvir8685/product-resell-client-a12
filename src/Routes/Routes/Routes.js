import {createBrowserRouter} from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import Blog from '../../Pages/Blog/Blog';
import CategoryProduct from '../../Pages/CategoryProduct/CategoryProduct';
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
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path:'/dashboard',
                element:<MyBooking></MyBooking>
            }
        ]
    }
])

export default router;