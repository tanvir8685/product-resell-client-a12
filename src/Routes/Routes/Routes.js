import {createBrowserRouter} from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import Blog from '../../Pages/Blog/Blog';
import CategoryProduct from '../../Pages/CategoryProduct/CategoryProduct';
import AddProduct from '../../Pages/DashBoard/AddProduct/AddProduct';
import AllSeller from '../../Pages/DashBoard/AllSeller/AllSeller';
import AllUser from '../../Pages/DashBoard/AllUser/AllUser';
import DashBoard from '../../Pages/DashBoard/DashBoard/DashBoard';
import MyBooking from '../../Pages/DashBoard/MyBooking/MyBooking';

import Home from '../../Pages/Home/Home/Home';
import InvalidPage from '../../Pages/InvalidPage/InvalidPage';
import Login from '../../Pages/Login/Login';
import SignUp from '../../Pages/SignUp/SignUp';
import AdminRoute from '../AdminRoute/AdminRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import SellerRoute from '../SellerRoute/SellerRoute';
import UserRoute from '../UserRoute/UserRoute';

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
                element:<AdminRoute><AllUser></AllUser></AdminRoute>
            },
            {
                path:'/dashboard/seller',
                element:<AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path:'/dashboard/addproduct',
                element:<SellerRoute><AddProduct></AddProduct></SellerRoute>

            }
        ]
    },
    {
    
            path:'*',
            element:<InvalidPage></InvalidPage>
           
    }
])

export default router;