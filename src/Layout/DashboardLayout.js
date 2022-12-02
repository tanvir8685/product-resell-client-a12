import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/UseAdmin';
import useBuyer from '../hooks/UseBuyer';
import useSeller from '../hooks/UseSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller]=useSeller(user?.email);
    const[isBuyer]=useBuyer(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                    {/* <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {
                            isBuyer && <li> <Link to='/dashboard'>My Bookings</Link>  </li>
                        }
                        
                        {
                            isAdmin && <>
                                <li> <Link to='/dashboard/user'>All User</Link>  </li>
                                <li> <Link to='/dashboard/seller'>All Seller</Link>  </li>
                            </>
                        }

                        {
                            isSeller && <li> <Link to='/dashboard/addproduct'>Add Product</Link>  </li>
                        }
                        



                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;