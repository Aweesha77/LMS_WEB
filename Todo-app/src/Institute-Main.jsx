// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Footer from './Footer';
import tree1 from './Asserts/images.jpeg'; // Adjust the path as necessary
import tree2 from './Asserts/logo.jpeg'; // Adjust the path as necessary

import inst1 from './Asserts/inst1.jpeg'; 
import inst2 from './Asserts/inst2.jpeg'; 
import inst3 from './Asserts/inst3.jpeg'; 


const InstituteMain = () => {
    return (
        <div className="flex-1 p-4">
            {/* Top Section with Logo, Name, and Login Button */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                    <img src={tree2} alt="Logo" className="h-14 w-14" style={{ marginRight: '300px' }} />
                    <h1 className="text-2xl font-serif font-bold text-center flex-1">IDEAL Institute Of Higher Education</h1>
                </div>
                <button 
                    onClick={() => window.location.href = "https://shilpa-lms-project.vercel.app/"} // Redirect to Google login page
                    className="bg-[#3E737A] text-white px-10 py-3 rounded hover:bg-[#4AB8B0] transition" // Set styles
                >
                    Login
                </button>
            </div>

            <div className="bg-gray-200 min-h-[500px] w-full flex items-center justify-center"> {/* Grey background with min height of 500px, centered */}
                <div className="flex flex-col items-center"> {/* Center the title and images */}
                    <h3 className="text-3xl font-serif mb-16">Institutes</h3> {/* Title for Subjects */}
                    <div className="grid grid-cols-3 gap-24 p-4"> {/* Create a grid with 3 columns and spacing */}
                        {/* Images with names and subjects */}
                        <div className="flex flex-col items-center">
                        <img src={inst1} alt="Tree 1" alt="Biology Teacher" className="h-50 w-50 object-cover mb-2" />                            
                        <span className="text-lg font-semibold">IDEAL Insitute of Higher Education</span>
                        <span className="text-lg ">Bandarawela</span>
                        </div>
                        <div className="flex flex-col items-center">
                        <img src={inst3} alt="Tree 1" alt="Biology Teacher" className="h-50 w-50 object-cover mb-2" />     
                        <span className="text-lg font-semibold">IDEAL Insitute of Higher Education</span>
                        <span className="text-lg ">Waliwada</span>
                        </div>
                        <div className="flex flex-col items-center">
                        <img src={inst2} alt="Tree 1" alt="Biology Teacher" className="h-50 w-50 object-cover mb-2" />                            
                        <span className="text-lg font-semibold">IDEAL Insitute of Higher Education</span>
                        <span className="text-lg ">Badulla</span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default InstituteMain;