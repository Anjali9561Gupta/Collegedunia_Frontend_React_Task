import React from 'react';

const RowComponent = ({ college }) => {
  return (
    <tr>
      
      <td>{college.cdRank}</td>
      <td>{college.name}</td>
      {/* <td>{college.colleges}</td> */}
      <td>{college.courseFees}</td>
      <td>{college.placement}</td>
      <td>{college.userReviews}</td>
      <td>{college.ranking}</td>
      <td>{college.featured ? 'Featured' : ''}</td>
    </tr>
  );
};

export default RowComponent;