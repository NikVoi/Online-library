import React from "react";
import Pagination from "@components/pagination/Pagination";
import Item from '@components/Item/Item';
import "./style.scss";

const Main = ({ paginate }) => {
  return (
    <main className="main">
      <div className="main__title">All Playlists</div>

      <div className="main__wrapper">
        <Item />
      </div>

      <Pagination
        paginate={paginate}
      />
    </main>
  );
};

export default Main;
