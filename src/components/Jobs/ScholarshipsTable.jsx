import "./jobs.css"
import React, { useState } from 'react';

const ScholarshipsTable = ({ scholarships }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // Number of items per page

  // Calculate total number of pages
  const totalPages = Math.ceil(scholarships.length / pageSize);

  // Calculate start and end index of current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize - 1, scholarships.length - 1);

  // Function to change current page
  const setPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <table summary="Awards and Value associated with Scholarships">
        <thead>
          <tr>
            <th scope="col">AWARD</th>
            <th scope="col">AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          {scholarships.slice(startIndex, endIndex + 1).map((scholarship, index) => (
            <tr key={startIndex + index}>
              <td>
                <p><strong><a href={scholarship.link} title={scholarship.title}>{scholarship.title}</a></strong>&nbsp;<br />
                {scholarship.description}</p>
              </td>
              <td>{scholarship.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
  <button onClick={() => setPage(Math.max(currentPage - 1, 1))}>{'<'}</button>
  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
    <button key={page} onClick={() => setPage(page)} className={currentPage === page ? 'current-page' : ''}>
      {page}
    </button>
  ))}
  <button onClick={() => setPage(Math.min(currentPage + 1, totalPages))}>{'>'}</button>
</div>
        
        



    </div>
  );
}

export default ScholarshipsTable;
