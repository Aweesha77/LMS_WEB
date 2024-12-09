// Filename: src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './SideBar';
import Home from './Home'; // Ensure this component exists
import Teachers from './Teachers'; // Ensure this component exists
import Institute from './Institutes'; // Ensure this component exists
import Subjects from './Subjects'; // Ensure this component exists
import PhyTeach from './Physics-Teacher'; // Import the PhyTeach component
import ChemTeach from './Chemistry-Teacher'; // Import the PhyTeach component
import BioTeach from './Biology-Teacher'; // Import the PhyTeach component
import IconTeach from './Icon-Teacher'; // Import the PhyTeach component
import IctTeach from './ICT-Teacher'; // Import the PhyTeach component
import SinhTeach from './Sinhala-Teacher'; // Import the PhyTeach component
import SubMain from './Subject-Main'; // Import the SubMain component

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
                        <Route path="/physicsteachers" element={<PhyTeach />} /> {/* Route for PhyTeach */}
                        <Route path="/chemistryteachers" element={<ChemTeach />} /> {/* Route for PhyTeach */}
                        <Route path="/biologyteachers" element={<BioTeach />} /> {/* Route for PhyTeach */}
                        <Route path="/iconteachers" element={<IconTeach />} /> {/* Route for PhyTeach */}
                        <Route path="/ictteachers" element={<IctTeach />} /> {/* Route for PhyTeach */}
                        <Route path="/sinhalateachers" element={<SinhTeach />} /> {/* Route for PhyTeach */}
                        <Route path="/" element={<SubMain />} /> {/* Default route for SubMain */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;