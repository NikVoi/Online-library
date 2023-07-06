import { React, useContext } from "react";
import { Link } from "react-router-dom";
import ClickContext from "@contexts/ClickContext";
import { booksItemsPage} from "@constants/constants"
import "./style.scss";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Pagination = ({paginate}) => {
  const { loading, bookData } = useContext(ClickContext);
  
  const pageNumbers = Array.from(
    { length: Math.ceil(bookData.length / booksItemsPage) },
    (_, i) => i + 1
  );
    
  if (!loading) {
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
  }
};

export default Pagination;
