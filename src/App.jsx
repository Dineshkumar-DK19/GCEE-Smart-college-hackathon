import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import from your components barrel file
import { Navbar, Home, Contribute, Guidelines, YoutubeVideo, Timeline, Footer } from './components';

// Import from your pages barrel file
import ProblemStatements from './pages/ProblemStatements';

import './index.css'; 

function App() {
  const [theme, setTheme] = useState('dark');

  // Apply the theme to the HTML tag
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Toggle Function
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <BrowserRouter>
      <main className="app-container">
        {/* Navbar is outside Routes so it's always visible */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <Routes>
          {/* --- ROUTE 1: LANDING PAGE (Scrollable Sections) --- */}
          <Route path="/" element={
            <>
              {/* We wrap components in Sections with IDs for scrolling */}
              <section id="home">
                <Home />
              </section>

              <section id="about">
                {/* Placeholder for About until you create About.jsx */}
                <div className="layout-box"><h2>About Section</h2></div>
              </section>

              <section id="contribute">
                <Contribute />
              </section>

              <section id="guidelines">
                <Guidelines />
              </section>

              <section id="timeline">
                <Timeline />
              </section>

              <YoutubeVideo />
              <Footer />
            </>
          } />

          {/* --- ROUTE 2: SEPARATE PAGES --- */}
          <Route path="/problems" element={<ProblemStatements />} />
          
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;     