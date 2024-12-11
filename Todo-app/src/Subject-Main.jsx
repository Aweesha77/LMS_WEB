// Filename: src/SubMain.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Footer from './Footer';
import tree2 from './Asserts/logo.jpeg'; 



const SubMain = () => {
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

            <div className="bg-gray-200 min-h-[500px] w-full flex items-center justify-center">
                <div className="flex flex-col items-center">
                    <h3 className="text-3xl font-serif mb-16">Select the Subject</h3>
                    <div className="grid grid-cols-3 gap-20 p-4">
                        <Link to="/physicsteachers" style={{ backgroundColor: '#3E737A' }} className="text-white px-16 py-4 rounded hover:bg-blue-700 transition text-center">
                            Physics
                        </Link>
                        <Link to="/chemistryteachers" style={{ backgroundColor: '#3E737A' }} className="text-white px-16 py-4 rounded hover:bg-blue-700 transition text-center">
                            Chemistry
                        </Link>
                        <Link to="/biologyteachers" style={{ backgroundColor: '#3E737A' }} className="text-white px-16 py-4 rounded hover:bg-blue-700 transition text-center">
                            Biology
                        </Link>
                        <Link to="/mathsteachers" style={{ backgroundColor: '#3E737A' }} className="text-white px-16 py-4 rounded hover:bg-blue-700 transition text-center">
                            Mathematics
                        </Link>
                        <Link to="/ictteachers" style={{ backgroundColor: '#3E737A' }} className="text-white px-16 py-4 rounded hover:bg-blue-700 transition text-center">
                            ICT
                        </Link>
                        <Link to="/agriteachers" style={{ backgroundColor: '#3E737A' }} className="text-white px-16 py-4 rounded hover:bg-blue-700 transition text-center">
                            Agriculture
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SubMain;