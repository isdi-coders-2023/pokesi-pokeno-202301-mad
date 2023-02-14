/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import "./pagination.scss";

interface PaginationProps {
  items: any[];
  pageSize: number;
}

const Pagination: React.FC<PaginationProps> = ({ items, pageSize }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageCount = Math.ceil(items.length / pageSize);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(
      <button key={i} onClick={() => handlePageClick(i)}>
        {i}
      </button>
    );
  }

  const startIndex = (currentPage - 1) * pageSize;
  const paginatedItems = items.slice(startIndex, startIndex + pageSize);

  return (
    <ul>
      {paginatedItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default Pagination;