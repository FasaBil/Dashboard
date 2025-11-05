import React from 'react';
import { Search, Menu, Filter } from 'lucide-react';
import './Header.css';

const Header = ({ searchQuery, onSearchChange, onMenuClick, onFilterClick }) => {
  return (
    <header className="main-header">
      <div className="header-left">
        <button className="mobile-btn" onClick={onMenuClick}>
          <Menu size={24} />
        </button>
        
        <div className="search-bar">
          <input 
            id="search-input" 
            type="text" 
            placeholder="Cari lagu atau album..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <div className="search-icon">
            <Search size={20} />
          </div>
        </div>
      </div>
      
      <div className="header-profile">
        <button className="mobile-btn filter-btn" onClick={onFilterClick}>
          <Filter size={24} />
        </button>
        <span className="profile-greeting">Hi, MOA!</span>
        <img 
          src="/member-hueningkai.png" 
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/40x40/fecdd3/e11d48?text=MOA';
          }}
          alt="Profile" 
        />
      </div>
    </header>
  );
};

export default Header;
