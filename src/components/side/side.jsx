import { React, useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import { ClickContext } from "../../app";

const searchImg = import.meta.env.VITE_SEARCH_IMG_PATH;
const logo = import.meta.env.VITE_LOGO_PATH;

const func = (a) => {
  a.forEach((element) => {
    console.log(element.volumeInfo.publishedDate);
  });
  console.log("sort");
};

export const Side = ({ activeSideMenu, search, setSearch, searchBook }) => {
  const { bookData, setData, bookDataGlobal } = useContext(ClickContext);

  const handleSortChange = (e) => {
    const sortByDate = (a, b) => {
      const dateA = new Date(a.volumeInfo.publishedDate);
      const dateB = new Date(b.volumeInfo.publishedDate);
      return dateB - dateA;
    };

    if (e.target.value === "date") {
      const sortedArray = [...bookData].sort(sortByDate);
      setData(sortedArray);
    } else if (e.target.value === "init") {
      setData([...bookDataGlobal]);
    }
  };

  return (
    <aside className={activeSideMenu ? "side active" : "side"}>
      <div className="side__wrapper">
        <Link to="/" className="side__link">
          <div className="side__logo">
            <img src={logo} alt="Logo" />
            BookFinder
          </div>
        </Link>

        <label htmlFor="book">
          <span>What's book your search</span>
        </label>

        <div className="side__search">
          <input
            type="text"
            name="book"
            className="side__input"
            required
            autoComplete="off"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyUp={searchBook}
          />

          <button className="button--search">
            <img src={searchImg} alt="search button" />
          </button>
        </div>

        <label htmlFor="book" className="SelectText">
          Select sort<span></span>
        </label>

        <div className="side__select">
          <select onChange={handleSortChange}>
            <option value="init">relevance</option>

            <option value="date">newest</option>
          </select>
        </div>

        <label htmlFor="book" className="SelectText">
          Select categories<span></span>
        </label>

        <div className="side__select">
          <select>
            <option value="someOption">all</option>
            <option value="otherOption">art</option>
            <option value="otherOption">biography</option>
            <option value="otherOption">computers</option>
            <option value="otherOption">history</option>
            <option value="otherOption">medical</option>
            <option value="otherOption">poetry</option>
          </select>
        </div>
      </div>

      <div className="side__footer">© 2023 BookFinder</div>
    </aside>
  );
};

export default Side;
