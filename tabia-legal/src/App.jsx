import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import {About} from "./pages/About.jsx";
import {OurTeam} from "./pages/OurTeam.jsx";
import {Services} from "./pages/Services.jsx";
import {Industries} from "./pages/Industries.jsx";
import {News} from "./pages/News.jsx";
import {Home} from "./pages/Home.jsx";
import Employee from "./pages/Employee.jsx";


const App = () => {
    return (
        <Router>
            <AppLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/our-team" element={<OurTeam />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/industries" element={<Industries />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/our-team/:name" element={<Employee />} />
                </Routes>
            </AppLayout>
        </Router>
    );
};

export default App;
