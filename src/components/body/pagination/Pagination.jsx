import { React } from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Pagination = ({ booksItemsPage, totalBook, paginate }) => {
  // const pageNumbers = Array.from({ length: Math.ceil(totalBook / booksItemsPage) }, (_, i) => i + 1);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBook / booksItemsPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <div className="pagination__item" key={number} onClick={scrollToTop}>
          <Link
            to="/"
            className="pagination__item-link"
            onClick={() => paginate(number)}
          >
            {number}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
