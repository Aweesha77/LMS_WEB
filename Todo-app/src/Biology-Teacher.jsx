// Filename: src/PhyTeach.js
import React from 'react';
import Footer from './Footer'; // Ensure you have a Footer component
import tree1 from './Asserts/images.jpeg'; // Adjust the path as necessary
import tree2 from './Asserts/logo.jpeg'; // Adjust the path as necessary

import math1 from './Asserts/math1.jpeg'; 
import math2 from './Asserts/math2.jpeg'; 
import phy1 from './Asserts/phy1.jpeg'; 

const PhyTeach = () => {
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
                    <h3 className="text-3xl font-serif mb-16">Mathematics Teachers</h3> {/* Title for Subjects */}
                    <div className="grid grid-cols-3 gap-24 p-4"> {/* Create a grid with 3 columns and spacing */}
                        {/* Images with names and subjects */}
                        <div className="flex flex-col items-center">
                        <img src={math1} alt="Tree 1" alt="Biology Teacher" className="h-40 w-40 object-cover mb-2" />                            
                        <span className="text-lg font-semibold">Thusitha Jayanath</span>
                        <span className="text-lg ">Bandarawela-Saturday & Sunday</span>

                        </div>
                        <div className="flex flex-col items-center">
                        <img src={math2} alt="Tree 1" alt="Biology Teacher" className="h-40 w-40 object-cover mb-2" />     
                        <span className="text-lg font-semibold">Dammika Sri Bandara</span>
                        <span className="text-lg ">Waliwada-Monday & Thursday</span>
                        </div>
                        <div className="flex flex-col items-center">
                        <img src={phy1} alt="Tree 1" alt="Biology Teacher" className="h-40 w-40 object-cover mb-2" />                            
                        <span className="text-lg font-semibold">Kamal Sahabandu</span>
                        <span className="text-lg ">Badulla-Tuesday & Friday</span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PhyTeach;