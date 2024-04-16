import React, { useState } from 'react';


const SearchComponent = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by college name"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchComponent;