import React from 'react';
import Content from './Content';
import Footer from './Footer';
import tree2 from './Asserts/logo.jpeg';

const Home = () => {
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
                    style={{ backgroundColor: 'white', border: '2px solid #3E737A' }} // White background and border color
                    className="text-[#3E737A] hover:bg-[#3E737A] hover:text-black px-4 py-2 rounded transition" 
                >
                    Login
                </a>
            </div>

            <Content/>
            <Footer/>
        </div>
    );
};

export default Home;