import React from 'react';
import Content from './Content';
import Footer from './Footer';

const Home = () => {
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

            <Content/>
            <Footer/>
            
            

            
        </div>
    );
};

export default Home;