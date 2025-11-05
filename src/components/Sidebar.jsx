import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Disc3, Users, Music2, ListMusic, X } from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose, isMobile }) => {
  const handleLinkClick = () => {
    if (isMobile) {
      onClose();
    }
  };

  return (
    <>
      {isMobile && isOpen && <div className="sidebar-backdrop" onClick={onClose}></div>}
      
      <aside className={`sidebar-nav ${isMobile ? 'mobile' : ''} ${isOpen ? 'open' : ''}`}>
        {isMobile && (
          <button className="close-sidebar-btn" onClick={onClose}>
            <X size={24} />
          </button>
        )}
        
        <h1 className="sidebar-nav-header">MOA ♡ TXT</h1>
        
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" onClick={handleLinkClick}>
                <Home size={20} />
                Beranda
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/album" onClick={handleLinkClick}>
                <Disc3 size={20} />
                Album
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/member" onClick={handleLinkClick}>
                <Users size={20} />
                Member
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/genre" onClick={handleLinkClick}>
                <Music2 size={20} />
                Genre
              </NavLink>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="nav-section-title">Playlist Kamu</h2>
          <ul className="playlist-list">
            <li>
              <a href="#" onClick={(e) => e.preventDefault()}>
                <ListMusic size={16} />
                Lagu Favorit
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()}>
                <ListMusic size={16} />
                Belajar Bareng TXT
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()}>
                <ListMusic size={16} />
                Sad Hour 💧
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
