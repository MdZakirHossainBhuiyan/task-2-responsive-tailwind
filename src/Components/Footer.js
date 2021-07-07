import React from 'react';
import bgImageFooter from '../Images/Mask Group 14@1X.png';
import headerLine from '../Images/Rectangle 17@2X.png';

const Footer = () => {
    return (
        <div className="text-white h-80 text-center">
            <div className="absolute">
                <img className="w-screen h-80" src={bgImageFooter} alt="" />
            </div>
            <div className="relative h-80 flex justify-center items-end">
                <div className="h-52 w-96 grid justify-center items-center">
                    <h1 className="text-2xl font-bold">Start a project with me</h1>
                    <img className="px-8" src={headerLine} alt="" />
                    <p className="font-bold text-lg">let’s discuss our ideas for presenting your business to the world in an attractive,  efficient and effective way.</p>
                    <button type="button" className="bg-white box-shadow shadow-lx text-black font-bold items-center mx-28 py-1">HIRE ME</button>
                </div>
            </div>
        </div>
    );
};

export default Footer;