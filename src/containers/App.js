import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from '../components/Profile/Profile'

function App() {
    return(
        <div className="flex flex-auto">
            <Router>
                <Routes>
                    <Route path="/" name="profile" element={<Profile/>}/>
                </Routes>
            </Router>
        </div>
    )
}
 
export default App;