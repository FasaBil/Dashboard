import React from 'react';
import { Play } from 'lucide-react';
import './SongCard.css';

const getGenreClass = (genre) => {
  switch (genre) {
    case 'Pop': return 'genre-pop';
    case 'Rock': return 'genre-rock';
    case 'R&B': return 'genre-r-b';
    case 'Ballad': return 'genre-ballad';
    case 'Afro-pop': return 'genre-afro-pop';
    default: return 'genre-default';
  }
};

const SongCard = ({ song }) => {
  return (
    <div className="song-card">
      <div className="card-image-wrapper">
        <img 
          src={`/${song.image}`} 
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/300x300/fecdd3/e11d48?text=MOA';
          }}
          alt={song.album} 
          className="card-image"
        />
        <div className="card-play-button">
          <button className="play-button">
            <Play size={28} fill="white" style={{ marginLeft: '4px' }} />
          </button>
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title" title={song.title}>{song.title}</h3>
        <p className="card-album" title={song.album}>{song.album}</p>
        <span className={`card-genre-tag ${getGenreClass(song.genre)}`}>
          {song.genre}
        </span>
      </div>
    </div>
  );
};

export default SongCard;
