import React from 'react';
import {Link} from 'react-router-dom';

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ? 'grid grid-rows-4 text-center items-center bg-cusRed text-white'  : 'hidden'} onClick={toggle}>
            <Link className="p-4" to="/">Home</Link>
            <Link className="p-4" to="/portfolio">Portfolio</Link>
            <Link><button className="border py-1 px-3 cusFont text-black font-bold">HIRE ME</button></Link>
        </div>
    );
};

export default Dropdown;