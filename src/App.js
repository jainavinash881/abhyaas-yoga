import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import './index.css';

// Simple Placeholder for other pages to avoid errors
const Placeholder = ({ title }) => (
  <div className="container section-padding" style={{textAlign: 'center'}}>
    <h1>{title}</h1>
    <p>Coming Soon...</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/about" element={<Placeholder title="About Abhyaas" />} />
          <Route path="/online" element={<Placeholder title="Online Programs" />} />
          <Route path="/corporate" element={<Placeholder title="Corporate Wellness" />} />
          <Route path="/contact" element={<Placeholder title="Contact Us" />} />
        </Routes>
        
        {/* Simple Footer */}
        <footer style={{ background: 'var(--deep-burgundy)', color: 'var(--blush-nude)', padding: '40px 0', textAlign: 'center' }}>
          <p>© 2025 Abhyaas Yoga Studio. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;