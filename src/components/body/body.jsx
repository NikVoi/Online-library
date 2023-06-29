import React from "react";
import "./style.scss";
import Pagination from "../pagination/Pagination";
import Item from "../item/item";

const Main = ({ booksItemsPage, totalBook, paginate }) => {
  return (
    <main className="main">
      <div className="main__title">All Playlists</div>

      <div className="main__wrapper">
        <Item />
      </div>

      <Pagination
        booksItemsPage={booksItemsPage}
        totalBook={totalBook}
        paginate={paginate}
      />
    </main>
  );
};

export default Main;
