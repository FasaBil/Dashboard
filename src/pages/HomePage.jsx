import React, { useState, useEffect } from 'react';
import { allSongs, genres, members } from '../data/songsData';
import SongGrid from '../components/SongGrid';
import FilterSidebar from '../components/FilterSidebar';

const HomePage = ({ searchQuery, isFilterOpen, onFilterClose }) => {
  const [genreFilter, setGenreFilter] = useState('all');
  const [memberFilter, setMemberFilter] = useState('all');
  const [filteredSongs, setFilteredSongs] = useState(allSongs);

  useEffect(() => {
    const filtered = allSongs.filter(song => {
      const matchesSearch = song.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            song.album.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesGenre = genreFilter === 'all' || song.genre === genreFilter;
      const matchesMember = memberFilter === 'all' || song.members.includes(memberFilter);
      
      return matchesSearch && matchesGenre && matchesMember;
    });
    
    setFilteredSongs(filtered);
  }, [searchQuery, genreFilter, memberFilter]);

  return (
    <>
      <h2 className="content-title">Semua Lagu TXT</h2>
      <SongGrid songs={filteredSongs} />
      
      <FilterSidebar 
        isOpen={isFilterOpen}
        onClose={onFilterClose}
        genreFilter={genreFilter}
        memberFilter={memberFilter}
        onGenreChange={setGenreFilter}
        onMemberChange={setMemberFilter}
        genres={genres}
        members={members}
      />
    </>
  );
};

export default HomePage;
