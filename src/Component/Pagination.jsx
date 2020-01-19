import React from "react";
import classes from "./Style/Issues.module.scss";
import { NavLink } from "react-router-dom";

const Pagination = ({ IssuesPerPage, totalIssues, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalIssues / IssuesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className={classes.PaginationContainer}>
      <ul>
        {currentPage <= 1 ? (
          <li style={{cursor:"not-allowed", backgroundColor:'#fafbfc'}}>
            <a style={{cursor:"not-allowed",color:'#d1d5da'}}>Previous</a>
          </li>
        ) : (
          <li onClick={() => paginate(currentPage - 1)}>
            <a>Previous</a>
          </li>
        )}
        {pageNumbers.map(number => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className={
              number === currentPage ? classes.paginationPageActive : null
            }
          >
            {number}
          </li>
        ))}
        {currentPage === totalIssues / IssuesPerPage ? (
            <li style={{cursor:"not-allowed", backgroundColor:'#fafbfc'}}>
              <a style={{cursor:"not-allowed",color:'#d1d5da'}}>Next</a>
            </li>
        ) : (
            <li onClick={() => paginate(currentPage + 1)}>
              <a>Next</a>
            </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
