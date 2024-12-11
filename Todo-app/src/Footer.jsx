import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#3E737A' }} className="text-white p-2 mt-4 w-full pb-4"> {/* Added padding-bottom */}
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-2 md:mb-0"> {/* Reduced bottom margin */}
                    <h3 className="font-bold text-lg">Follow Us</h3>
                    <div className="flex space-x-4 mt-1"> {/* Reduced top margin */}
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a>
                        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            <FontAwesomeIcon icon={faTiktok} size="lg" />
                        </a>
                    </div>
                </div>

                {/* Contact Us Section */}
                <div className="text-le mt-2">
                    <h3 className="font-bold text-left">Contact Us</h3>
                    <p className="mt-1">Phone: 0572230022  </p> {/* Reduced top margin */}
                    <p className="mt-1">Address: No: 187, Main Street, Bandarawela</p> 
                </div>

                <div>
                    <h3 className="font-bold text-lg">Navigation</h3>
                    <div className="flex space-x-4 mt-1"> {/* Reduced top margin */}
                        <Link to="/home" className="hover:underline">Home</Link>
                        <Link to="/teachers" className="hover:underline">Teachers</Link>
                        <Link to="/institute" className="hover:underline">Institute</Link>
                        <Link to="/subjects" className="hover:underline">Subjects</Link>
                    </div>
                </div>
            </div>
            <div className="text-center mt-2 text-black"> {/* Reduced top margin */}
                <p>&copy; {new Date().getFullYear()} IDEAL Institute of Higher Education. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;