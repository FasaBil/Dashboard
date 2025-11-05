import React from 'react';
import { X } from 'lucide-react';
import './FilterSidebar.css';

const FilterSidebar = ({ 
  isOpen, 
  onClose, 
  genreFilter, 
  memberFilter, 
  onGenreChange, 
  onMemberChange,
  genres,
  members 
}) => {
  return (
    <>
      {isOpen && <div className="filter-backdrop" onClick={onClose}></div>}
      
      <aside className={`sidebar-filter ${isOpen ? 'open' : ''}`}>
        <button className="close-filter-btn" onClick={onClose}>
          <X size={24} />
        </button>
        
        <h2 className="filter-title">Filter</h2>

        <h3 className="filter-section-title">Genre</h3>
        <div className="filter-list">
          <button 
            className={`filter-btn ${genreFilter === 'all' ? 'active' : ''}`}
            onClick={() => onGenreChange('all')}
          >
            Semua Genre
          </button>
          {genres.map(genre => (
            <button 
              key={genre}
              className={`filter-btn ${genreFilter === genre ? 'active' : ''}`}
              onClick={() => onGenreChange(genre)}
            >
              {genre}
            </button>
          ))}
        </div>

        <h3 className="filter-section-title">Fokus Member</h3>
        <div className="filter-list">
          <button 
            className={`filter-btn ${memberFilter === 'all' ? 'active' : ''}`}
            onClick={() => onMemberChange('all')}
          >
            Semua Member
          </button>
          {members.map(member => (
            <button 
              key={member}
              className={`filter-btn ${memberFilter === member ? 'active' : ''}`}
              onClick={() => onMemberChange(member)}
            >
              {member}
            </button>
          ))}
        </div>
      </aside>
    </>
  );
};

export default FilterSidebar;
