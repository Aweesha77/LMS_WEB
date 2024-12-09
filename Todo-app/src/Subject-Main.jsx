// Filename: src/SubMain.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Footer from './Footer';
import tree2 from './Asserts/logo.jpeg'; // Adjust the path as necessary

const SubMain = () => {
    return (
        <div className="flex-1 p-4">
            {/* Top Section with Logo, Name, and Login Button */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                    <img src={tree2} alt="Logo" className="h-14 w-14" style={{ marginRight: '300px' }} />
                    <h1 className="text-2xl font-serif font-bold text-center flex-1">IDEAL Institute Of Higher Education</h1>
                </div>
                <a 
                    href="#login" 
                    className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded transition" 
                >
                    Login
                </a>
            </div>

            <div className="bg-gray-200 min-h-[500px] w-full flex items-center justify-center">
                <div className="flex flex-col items-center">
                    <h3 className="text-3xl font-serif mb-16">Select the Subject</h3>
                    <div className="grid grid-cols-3 gap-24 p-4">
                        <Link to="/physicsteachers" className="bg-blue-600 text-white px-16 py-4 rounded hover:bg-blue-700 transition text-center">
                            Physics
                        </Link>
                        <Link to="/chemistryteachers" className="bg-blue-600 text-white px-16 py-4 rounded hover:bg-blue-700 transition text-center">
                            Chemistry
                        </Link>
                        <Link to="/biologyteachers" className="bg-blue-600 text-white px-16 py-4 rounded hover:bg-blue-700 transition text-center">
                            Biology
                        </Link>
                        <Link to="/iconteachers" className="bg-blue-600 text-white px-16 py-4 rounded hover:bg-blue-700 transition text-center">
                            Icon
                        </Link>
                        <Link to="/ictteachers" className="bg-blue-600 text-white px-16 py-4 rounded hover:bg-blue-700 transition text-center">
                            ICT
                        </Link>
                        <Link to="/sinhalateachers" className="bg-blue-600 text-white px-16 py-4 rounded hover:bg-blue-700 transition text-center">
                            Sinhala
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SubMain;