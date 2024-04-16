import React, { useState, useEffect } from 'react';
import './App.css'; // Import CSS file with table styles
import collegesData from './colleges.json'; // Import dummy data
import TableComponent from './Components/TableComponent.js';
import SearchComponent from './Components/SearchComponent.js';
import SortComponent from './Components/SortComponent.js';

const App = () => {
  const [colleges, setColleges] = useState([]);
  const [displayedColleges, setDisplayedColleges] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const [perPage, setPerPage] = useState(10); // Number of colleges to display per page

  useEffect(() => {
    setColleges(collegesData);
  }, []);

  useEffect(() => {
    const filteredColleges = colleges.filter(college =>
      college.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const sortedColleges = sortBy ? sortColleges(filteredColleges, sortBy) : filteredColleges;
    setDisplayedColleges(sortedColleges.slice(0, perPage));
  }, [colleges, searchTerm, sortBy, perPage]);


  const sortColleges = (colleges, criteria) => {
    return [...colleges].sort((a, b) => {
      if (sortBy === criteria) {
        return a[criteria] - b[criteria]; // Toggle between ascending and descending order
      }
      return b[criteria] - a[criteria];
    });
  };


  const handleSort = (criteria) => {
    setSortBy(criteria);
  };
const handleSearch = (value) => {
    setSearchTerm(value);
  };


  //infinite Scrolling 
  const handleScroll = (e) => {
    const bottom =
      Math.ceil(e.target.scrollHeight - e.target.scrollTop) === e.target.clientHeight;
    if (bottom) {
      // Load more colleges
      const nextPage = perPage + 10; // Increase number of colleges per page
      if (nextPage <= displayedColleges.length) {
        setPerPage(nextPage);
      }
    }
  };

  return (
    <div className="App" onScroll={handleScroll}>
      <SearchComponent handleSearch={handleSearch} />
      <SortComponent handleSort={handleSort} />
      <TableComponent colleges={displayedColleges} />
    </div>
  );
};

export default App;