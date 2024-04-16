import React from 'react';


const SortComponent = ({ handleSort }) => {
  const handleChange = (e) => {
    handleSort(e.target.value);
  };

  return (
    <div>
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" onChange={handleChange}>
        
        <option value="cdRank">CD Rank</option>
        <option value="name">College Name</option>
        {/* <option value="colleges">Number of Colleges</option> */}
        <option value="courseFees">Course Fees</option>
        <option value="placement">Placement</option>
        <option value="userReviews">User Reviews</option>
        <option value="ranking">Overall Ranking</option>
      </select>
    </div>
  );
};

export default SortComponent;