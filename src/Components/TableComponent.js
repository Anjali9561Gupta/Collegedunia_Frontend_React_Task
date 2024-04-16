import React from 'react';


import RowComponent from "./RowComponent"; // Assuming RowComponent is defined in a separate file



const TableComponent = ({ colleges, handleSort }) => {
  return (
    <table>
      <thead>
        <tr>
          
          <th onClick={() => handleSort('cdRank')}>CD Rank</th>
          <th onClick={() => handleSort('name')}>College Name</th>
          {/* <th onClick={() => handleSort('colleges')}>Number of Colleges</th> */}
          <th onClick={() => handleSort('courseFees')}>Course Fees</th>
          <th onClick={() => handleSort('placement')}>Placement</th>
          <th onClick={() => handleSort('userReviews')}>User Reviews</th>
          <th onClick={() => handleSort('ranking')}>Overall Ranking</th>
        </tr>
      </thead>
      <tbody>
        {colleges.map(college => (
          <RowComponent key={college.id} college={college} />
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;