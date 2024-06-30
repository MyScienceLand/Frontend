import React from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
const Pagination = ({
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
  onPageChange,
  hasNext,
  hasPrev,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="p-4 sm:p-6 xl:p-7.5  flex items-center justify-center">
      <nav>
        <ul className="flex flex-wrap items-center bg-white rounded-md">
          <li>
            <button
              onClick={onPrevPage}
              disabled={!hasPrev}
              className="flex h-9 w-9 items-center justify-center rounded-l-md  hover:border-primary hover:text-primary disabled:cursor-not-allowed "
            >
              <GrFormPrevious />
            </button>
          </li>
          {pages.map((page) => (
            <li key={page}>
              <button
                onClick={() => onPageChange(page)}
                className={`flex items-center justify-center py-[5px] px-4 font-medium${
                  page === currentPage
                    ? 'border-primary bg-primary text-white'
                    : ''
                }`}
              >
                {page}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={onNextPage}
              disabled={!hasNext}
              className="flex h-9 w-9 items-center justify-center hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:bg-gray"
            >
              <GrFormNext />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Pagination;
