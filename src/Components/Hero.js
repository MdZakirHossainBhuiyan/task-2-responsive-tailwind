import React from 'react';
import bgImage from '../Images/Shape_06@2x.png';
import heroImage from '../Images/image_03.png';

const Hero = () => {
    return (
        <div>
            <div className="bg-cusRed h-80 flex justify-center items-center">
                <div className="ml-32 text-white h-96 mt-40 w-screen grid justify-center items-center">
                    <p className="uppercase text-sm font-bold">business workflow</p>
                    <p className="text-5xl font-bold">Get the most efficient UI design for your business now!</p>
                    <p className="text-lg">Hire me to design a clean and modern UI for your product's website</p>
                    <div className="grid grid-cols-2">
                        <button type="button" className="bg-white box-shadow shadow-lx text-black font-bold items-center py-1">HIRE ME</button>
                        <button type="button" className="border border-white-500 box-shadow shadow-lx text-black font-bold items-center mx-2 py-1">Portfolio</button>
                    </div>
                </div>
                <div className="mt-40 h-96 w-screen flex items-center">
                    <img className="h-96 w-96 pl-10" src={heroImage} alt="" />
                </div>
            </div>
            <div className="bg-cusRed">
                <img src={bgImage} alt="" />
            </div>
        </div>

    );
};

export default Hero;