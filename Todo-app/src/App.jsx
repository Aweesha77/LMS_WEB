// Filename: src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SideBar from './SideBar';
import Home from './Home'; // Ensure this component exists
import Teachers from './Teachers'; // Ensure this component exists
import Institute from './Institutes'; // Ensure this component exists
import Subjects from './Subjects'; // Ensure this component exists
import PhyTeach from './Physics-Teacher'; // Import the PhyTeach component
import ChemTeach from './Chemistry-Teacher'; // Import the ChemTeach component
import BioTeach from './Biology-Teacher'; // Import the BioTeach component
import IconTeach from './Icon-Teacher'; // Import the IconTeach component
import IctTeach from './ICT-Teacher'; // Import the IctTeach component
import SinhTeach from './Sinhala-Teacher'; // Import the SinhTeach component
import SubMain from './Subject-Main'; // Import the SubMain component

const App = () => {
    return (
        <Router>
            <div className="flex">
                <SideBar />
                <div className="flex-grow p-4">
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />} /> {/* Redirect to /home */}
                        <Route path="/home" element={<Home />} />
                        <Route path="/teachers" element={<Teachers />} />
                        <Route path="/institute" element={<Institute />} />
                        <Route path="/subjects" element={<Subjects />} />
                        <Route path="/physicsteachers" element={<PhyTeach />} />
                        <Route path="/chemistryteachers" element={<ChemTeach />} />
                        <Route path="/biologyteachers" element={<BioTeach />} />
                        <Route path="/mathsteachers" element={<IconTeach />} />
                        <Route path="/ictteachers" element={<IctTeach />} />
                        <Route path="/agriteachers" element={<SinhTeach />} />
                        <Route path="/subject-main" element={<SubMain />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;