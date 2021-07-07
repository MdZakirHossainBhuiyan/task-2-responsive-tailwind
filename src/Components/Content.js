import React from 'react';
import Line from '../Images/Rectangle 17@1X.png';

const Content = () => {
    return (
        <div>
            <div className="grid justify justify-center items-center font-bold text-gray-500 text-2xl">
                <h1 className="text-center pt-3 pb-4">Packages</h1>
                <img src={Line} alt="" />
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 items-center bg-white text-black mt-10 lg:mx-40 mx-8 mb-40">
                <div className="center-content m-3">
                    <div className="border rounded-lg shadow-xl p-6">
                        <p className="text-cusRed text-xs">GETTING STARTED</p>
                        <h1 className="text-black font-bold text-lg mt-2">Singularity</h1>
                        <p className="text-gray-500 text-xs mt-2">This package will suit you if you want a single page  simple website for you product. It  will cover only one web UI.  You can  revise the design for 2 times  after  the initial draft  discussion session…</p>
                        <button className="bg-cusRed mt-8 py-2 px-5 text-white text-sm">See more</button>
                    </div>
                </div>

                <div className="center-content m-3">
                    <div className="border rounded-lg shadow-xl p-6">
                        <p className="text-cusRed text-xs">BUSINESS WORKFLOW</p>
                        <h1 className="text-black font-bold text-lg mt-2">Plurality</h1>
                        <p className="text-gray-500 text-xs mt-2">This package will suit you if you want a single page  simple website for you product. It  will cover only one web UI.  You can  revise the design for 2 times  after  the initial draft  discussion session…</p>
                        <button className="bg-gradient-to-r from-cusRed via-cusRed to-yellow-500 mt-8 py-2 px-5 text-white text-sm">See more</button>
                    </div>
                </div>

                <div className="center-content m-3">
                    <div className="border rounded-lg shadow-xl p-6">
                        <p className="text-cusRed text-xs">INTERACTIONS</p>
                        <h1 className="text-black font-bold text-lg mt-2">Professional</h1>
                        <p className="text-gray-500 text-xs mt-2">This package will suit you if you want a single page  simple website for you product. It  will cover only one web UI.  You can  revise the design for 2 times  after  the initial draft  discussion session…</p>
                        <button className="bg-gradient-to-r from-cusRed via-cusRed to-yellow-500 mt-8 py-2 px-5 text-white text-sm">See more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;