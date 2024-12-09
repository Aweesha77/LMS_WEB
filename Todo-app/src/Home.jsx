import React from 'react';
import Content from './Content';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            {/* Top Section with Logo, Name, and Login Button */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                    <img src={tree2} alt="Logo" className="h-14 w-14" alt="Logo" style={{ marginRight: '300px' }} /> {/* Logo with 30px gap */}
                    <h1 className="text-2xl font-serif font-bold text-center flex-1">IDEAL Institute Of Higher Education</h1> {/* Centered Name with Serif Font and Bigger Size */}
                </div>
                <a 
                    href="#login" 
                    style={{ borderColor: '#3E737A', color: '#3E737A' }} // Change border and text color
                    className="border hover:bg-[#5f979e] hover:bg-[#5f979e] px-4 py-2 rounded transition" 
                >
                    Login
                </a> {/* Login Button with Border */}
            </div>

            <Content/>
            <Footer/>
        </div>
    );
};

export default Home;