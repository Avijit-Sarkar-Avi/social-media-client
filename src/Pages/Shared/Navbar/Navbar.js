import React, { useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Navbar = () => {

    const menuItem = <React.Fragment>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/media'>Media</Link>
        </li>
        <li>
            <Link to='/message'>Message</Link>
        </li>
        <li>
            <Link to='/about'>About</Link>
        </li>
    </React.Fragment>

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Social App</Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItem}
                </ul>
            </div>



            <div className="navbar-end">
                <div className="avatar-group -space-x-6">
                    <div className="avatar">
                        <div className="w-12">

                            {
                                user?.photoURL ?
                                    <img src={user?.photoURL} alt='' />
                                    :
                                    <FaUserAlt className='w-12' />
                            }


                        </div>
                    </div>
                </div>
                {
                    user?.uid ?
                        <Link onClick={handleLogOut} className="btn btn-sm btn-info">LogOut</Link>
                        :
                        <Link to='/login' className="btn btn-sm btn-info">LogIn</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;