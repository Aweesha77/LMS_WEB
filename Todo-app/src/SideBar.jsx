// Filename: src/SideBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <nav style={{ backgroundColor: '#3E737A' }} className="w-64 bg-teal-500 shadow-md h-screen-full flex flex-col items-center p-4">
            <h1 className="text-xl font-bold mb-4 text-center">   </h1>
            <ul className="flex flex-col items-center mt-10">
                <li className="mb-8">
                    <Link to="/home" className="block w-full py-4 px-20 text-gray-700 bg-gray-200 rounded hover:bg-gray-400 hover:text-white transition">
                        Home<span className="text-gray-800 hover:text-white">--</span>
                    </Link>
                </li>
                <li className="mb-8">
                    <Link to="/teachers" className="block w-full py-4 px-20 text-gray-800 bg-gray-200 rounded hover:bg-gray-400 hover:text-white transition">Teachers</Link>
                </li>
                <li className="mb-8">
                    <Link to="/institute" className="block w-full py-4 px-20 text-gray-800 bg-gray-200 rounded hover:bg-gray-400 hover:text-white transition">Institute</Link>
                </li>
                <li className="mb-8">
                    <Link to="/subjects" className="block w-full py-4 px-20 text-gray-800 bg-gray-200 rounded hover:bg-gray-400 hover:text-white transition">Subjects</Link>
                </li>
            </ul>
        </nav>
    );
};

export default SideBar;