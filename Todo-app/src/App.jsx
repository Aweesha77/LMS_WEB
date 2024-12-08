// Filename: src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './SideBar';
import Home from './Home'; // Ensure this component exists
import Teachers from './Teachers'; // Ensure this component exists
import Institute from './Institutes'; // Ensure this component exists
import Subjects from './Subjects'; // Ensure this component exists

const App = () => {
    return (
        <Router>
            <div className="flex">
                <SideBar />
                <div className="flex-grow p-4">
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/teachers" element={<Teachers />} />
                        <Route path="/institute" element={<Institute />} />
                        <Route path="/subjects" element={<Subjects />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;