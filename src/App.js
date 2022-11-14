import React from 'react';
import Header from './components/common/Header'
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Sidebar from './components/common/Sidebar';
import Home from './components/pages/Index';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentDashboard from './components/pages/StudentDashboard';
import Socials from './components/pages/Socials';
import Feedback from './components/pages/Feedback';
import Enquiry from './components/pages/Enquiry';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Navbar />
        <Sidebar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/studentdashboard" element={<StudentDashboard />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/enquiry" element={<Enquiry />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App