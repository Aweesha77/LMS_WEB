import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#3E737A' }} className=" text-white p-4 mt-8 w-full"> {/* Changed w-screen-full to w-full */}
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h3 className="font-bold text-lg">Follow Us</h3>
                    <div className="flex space-x-4 mt-2">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
                        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:underline">TikTok</a>
                    </div>
                </div>

                {/* Contact Us Section */}
                <div className="text-center mt-2">
                    <h3 className="font-bold text-left">Contact Us</h3>
                    <p className="mt-2">Phone: 098988874827  Address: No: 98, EHFghbdj, HDGS</p>
                    <p className="mt-2"></p>
                </div>

                <div>
                    <h3 className="font-bold text-lg">Navigation</h3>
                    <div className="flex space-x-4 mt-2">
                        <a href="#home" className="hover:underline">Home</a>
                        <a href="#about" className="hover:underline">Teachers</a>
                        <a href="#services" className="hover:underline">Institute</a>
                        <a href="#contact" className="hover:underline">Subjects</a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <p>&copy; {new Date().getFullYear()} IDEAL Institute of Higher Education. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;