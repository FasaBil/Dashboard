import React from 'react';
import SongCard from './SongCard';
import { Frown } from 'lucide-react';
import './SongGrid.css';

const SongGrid = ({ songs }) => {
  if (songs.length === 0) {
    return (
      <div id="no-results">
        <Frown size={64} className="no-results-icon" />
        <h3>Oops! Tidak ditemukan</h3>
        <p>Coba kata kunci atau filter yang lain ya.</p>
      </div>
    );
  }

  return (
    <div className="song-grid">
      {songs.map(song => (
        <SongCard key={song.id} song={song} />
      ))}
    </div>
  );
};

export default SongGrid;
