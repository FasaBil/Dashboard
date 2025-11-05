import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AlbumPage from './pages/AlbumPage';
import MemberPage from './pages/MemberPage';
import GenrePage from './pages/GenrePage';
import './index.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);
  
  const closeSidebar = () => setIsSidebarOpen(false);
  const closeFilter = () => setIsFilterOpen(false);

  return (
    <Router>
      <div className="app-container">
        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={closeSidebar} 
          isMobile={isMobile}
        />
        
        <div className="main-content-wrapper">
          <Header 
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onMenuClick={toggleSidebar}
            onFilterClick={toggleFilter}
          />
          
          <main className="content-area">
            <Routes>
              <Route 
                path="/" 
                element={
                  <HomePage 
                    searchQuery={searchQuery}
                    isFilterOpen={isFilterOpen}
                    onFilterClose={closeFilter}
                  />
                } 
              />
              <Route path="/album" element={<AlbumPage />} />
              <Route path="/member" element={<MemberPage />} />
              <Route path="/genre" element={<GenrePage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
