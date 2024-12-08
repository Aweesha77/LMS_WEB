// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Footer from './Footer';
import tree1 from './Asserts/images.jpeg'; // Adjust the path as necessary


const SubTeacher = () => {
    return (
        <div className="flex-1 p-4">
            {/* Top Section with Logo, Name, and Login Button */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                    <img src="path/to/logo.png" alt="Logo" className="h-10 w-10" style={{ marginRight: '300px' }} /> {/* Logo with 30px gap */}
                    <h1 className="text-2xl font-serif font-bold text-center flex-1">IDEAL Institute Of Higher Education</h1> {/* Centered Name with Serif Font and Bigger Size */}
                </div>
                <a 
                    href="#login" 
                    className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded transition" 
                >
                    Login
                </a> {/* Login Button with Border */}
            </div>

            <div className="bg-gray-200 min-h-[500px] w-full flex items-center justify-center"> {/* Grey background with min height of 500px, centered */}
                <div className="flex flex-col items-center"> {/* Center the title and images */}
                    <h3 className="text-3xl font-serif mb-16">Institutes</h3> {/* Title for Subjects */}
                    <div className="grid grid-cols-3 gap-24 p-4"> {/* Create a grid with 3 columns and spacing */}
                        {/* Images with names and subjects */}
                        <div className="flex flex-col items-center">
                        <img src={tree1} alt="Tree 1" alt="Biology Teacher" className="h-40 w-40 object-cover mb-2" />                            
                        <span className="text-lg font-semibold">IDEAL Insitute of Higher Education</span>
                        <span className="text-lg ">Bandarawela</span>
                        </div>
                        <div className="flex flex-col items-center">
                        <img src={tree1} alt="Tree 1" alt="Biology Teacher" className="h-40 w-40 object-cover mb-2" />     
                        <span className="text-lg font-semibold">IDEAL Insitute of Higher Education</span>
                        <span className="text-lg ">Waliwada</span>
                        </div>
                        <div className="flex flex-col items-center">
                        <img src={tree1} alt="Tree 1" alt="Biology Teacher" className="h-40 w-40 object-cover mb-2" />                            
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

export default SubTeacher;