import React from 'react';

// Sidebar.js
const SideBar = () => {
    return (
        <nav className="w-64 bg-blue-600 shadow-md h-screen-full flex flex-col items-center p-4"> {/* Changed background color to blue */}
            <h1 className="text-xl font-bold mb-4 text-center"></h1> {/* Small gap */}
            <ul className="flex flex-col items-center mt-10"> {/* Added margin-top to push items down */}
                <li className="mb-8"> {/* Small gap between buttons */}
                    <a href="#home" className="block w-full py-4 px-20 text-gray-700 bg-gray-200 rounded hover:bg-gray-400 hover:text-white transition">
                        Home<span className="text-gray-800 hover:text-white">__</span>
                    </a>
                </li>
                <li className="mb-8"> {/* Small gap between buttons */}
                    <a href="#teachers" className="block w-full py-4 px-20 text-gray-800 bg-gray-200 rounded hover:bg-gray-400 hover:text-white transition">Teachers</a>
                </li>
                <li className="mb-8"> {/* Small gap between buttons */}
                    <a href="#institute" className="block w-full py-4 px-20 text-gray-800 bg-gray-200 rounded hover:bg-gray-400 hover:text-white transition">Institute</a>
                </li>
                <li className="mb-8"> {/* Small gap between buttons */}
                    <a href="#subjects" className="block w-full py-4 px-20 text-gray-800 bg-gray-200 rounded hover:bg-gray-400 hover:text-white transition">Subjects</a>
                </li>
            </ul>
        </nav>
    );
};

export default SideBar;