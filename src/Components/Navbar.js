import React from 'react';
import { Link } from 'react-router-dom';
import navLogo from '../Images/logo_white.png';

const Navbar = ({toggle}) => {
    return (
        <nav className="flex justify-between items-center h-16 bg-cusRed border border-white border-t-0 border-r-0 border-l-0 text-white relative shadow-sm cusFont">
            <Link className="ml-20 pl-10" to='/'>
                <img src={navLogo} alt="" className=""/>
            </Link>
            <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className="justify-between justify-center md:block hidden">
                <Link className="p-4" to="/">Home</Link>
                <Link className="p-4" to="/">Portfolio</Link>
            </div>
            <div>
                <button className="border py-1 px-3 cusFont mr-28 text-black font-bold md:block hidden">HIRE ME</button>
            </div>
        </nav>
    );
};

export default Navbar;