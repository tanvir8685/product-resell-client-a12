import {createBrowserRouter} from 'react-router-dom';
import Main from '../../Layout/Main';
import Blog from '../../Pages/Blog/Blog';
import CategoryProduct from '../../Pages/CategoryProduct/CategoryProduct';
import DashBoard from '../../Pages/DashBoard/DashBoard';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import SignUp from '../../Pages/SignUp/SignUp';

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
                element:<CategoryProduct></CategoryProduct>,
                loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path:"/dashboard",
                element:<DashBoard></DashBoard>
            }
        ]
    }
])

export default router;