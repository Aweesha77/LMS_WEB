// Dashboard.js
import React from 'react';
import tree1 from './Asserts/images.jpeg'; // Adjust the path as necessary
import tree2 from './Asserts/images.jpeg'; // Adjust the path as necessary
import tree3 from './Asserts/images.jpeg'; // Adjust the path as necessary

const Content = () => {
    return (
        <div className="bg-gray-200 min-h-screen w-full"> {/* Grey background with full height and full width */}
            <div className="p-0 md:p-2"> {/* Removed left and right padding for small screens, kept for medium and larger screens */}
                {/* Tree Images Section with responsive gap */}
                <div className="flex flex-wrap justify-center mt-12 mb-12 space-x-4 md:space-x-20 lg:space-x-18"> {/* Responsive space between images */}
                    <img src={tree1} alt="Tree 1" className="h-34 w-34 md:h-34 md:w-34 lg:h-34 lg:w-34" />
                    <img src={tree2} alt="Tree 2" className="h-34 w-34 md:h-34 md:w-34 lg:h-34 lg:w-34" />
                    <img src={tree3} alt="Tree 3" className="h-34 w-34 md:h-34 md:w-34 lg:h-34 lg:w-34" />
                </div>

                {/* Main Content Area */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold">Best Tuition Classes in Sri Lanka</h2> {/* Responsive text size */}
                    <p className="mt-4 text-sm md:text-base"> {/* Responsive text size */}
                        Achieve your A/L goals with expert guidance! 
                        Our tuition classes offer personalized lessons, in-depth explanations, 
                        and exam-focused practice to help you excel in your Advanced Level subjects. 
                        Join a supportive learning environment with experienced teachers dedicated to
                        boosting your confidence and academic success. Get ready to reach your full potential!
                    </p>

                    {/* Button Section */}
                    <div className="flex justify-center mt-8 space-x-16"> {/* Increased margin-top and space between buttons */}
                        <button className="bg-blue-600 text-white px-10 py-3 rounded hover:bg-blue-700">Enroll Now</button>
                        <button className="bg-green-500 text-white px-10 py-3 rounded hover:bg-green-600">Learn More</button>
                    </div>

                    <h2 className="mt-6 text-1xl md:text-3xl font-serif font-bold">Who Are We</h2> {/* Responsive text size */}
                    <p className="mt-6 text-sm md:text-base"> {/* Responsive text size */}
                        At IDEAL Institute of Higher Education in Bandarawela, we are dedicated to guiding Advanced Level (A/L) 
                        students towards academic excellence. With three branches—our main 
                        branch in Bandarawela, along with centers in Badulla and the 
                        soon-to-open Waliwada location—we provide specialized tuition 
                        classes across key streams including Mathematics, Science, 
                        Commerce, and Technology. Serving a vibrant student community of 
                        over 3,000, supported by a dedicated faculty of 30 experienced 
                        teachers, we pride ourselves on fostering a supportive, focused, 
                        and engaging learning environment to help students achieve their 
                        highest potential in A/L exams.
                    </p>

                </div>
            </div>
        </div>
        
    );
};

export default Content;