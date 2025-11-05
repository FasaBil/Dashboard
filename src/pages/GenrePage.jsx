import React from 'react';
import { allSongs } from '../data/songsData';
import SongGrid from '../components/SongGrid';

const GenrePage = () => {
  const genres = [...new Set(allSongs.map(song => song.genre))];
  
  return (
    <div>
      <h2 className="content-title">Genre Musik TXT</h2>
      <div style={{ marginBottom: '32px' }}>
        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          flexWrap: 'wrap',
          marginBottom: '24px'
        }}>
          {genres.map(genre => {
            const count = allSongs.filter(s => s.genre === genre).length;
            return (
              <div key={genre} style={{
                backgroundColor: 'white',
                padding: '12px 20px',
                borderRadius: '8px',
                boxShadow: 'var(--shadow-sm)',
                border: '2px solid var(--moa-pink-200)'
              }}>
                <span style={{ fontWeight: '600', color: 'var(--moa-pink-600)' }}>
                  {genre}
                </span>
                <span style={{ marginLeft: '8px', color: 'var(--grey-500)', fontSize: '0.875rem' }}>
                  ({count} lagu)
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '16px' }}>
        Semua Lagu
      </h3>
      <SongGrid songs={allSongs} />
    </div>
  );
};

export default GenrePage;
