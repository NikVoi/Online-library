import { React, useContext } from "react";
import { Link } from "react-router-dom";

import { ClickContext } from "@/app";
import Select from "@components/Select/Select";
import sideContest from "@/contexts/sideContext";
import "./style.scss";

const searchImg = import.meta.env.VITE_SEARCH_IMG_PATH;
const logo = import.meta.env.VITE_LOGO_PATH;
const apiStart = import.meta.env.VITE_API_PATH_START;
const apiEnd = import.meta.env.VITE_API_PATH_END;

const selectOptionsSeconde = [
  { value: "all", label: "all" },
  { value: "art", label: "art" },
  { value: "biography", label: "biography" },
  { value: "computers", label: "computers" },
  { value: "history", label: "history" },
  { value: "medical", label: "medical" },
  { value: "poetry", label: "poetry" },
];

export const Side = ({ activeSideMenu, search, setSearch, searchBook }) => {
  const { bookData, setData, bookDataGlobal } = useContext(ClickContext);
  const { MenuRef, SideBGRef, deleteClass } = useContext(sideContest);

  const handleSortChang = (e) => {
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

  const handleCategoriesChange = (e) => {
    const value = e.target.value;
    if (e.target.value === "all") {
      fetch(apiStart + "subject:" + apiEnd)
        .then((res) => res.json())
        .then((data) => setData(data.items));
    } else {
      fetch(apiStart + "subject:" + value + apiEnd)
        .then((res) => res.json())
        .then((data) => setData(data.items));
    }
  };

  return (
    <div className="side__block">
      <aside ref={MenuRef} className={activeSideMenu ? "side active" : "side"}>
         
        <div className="side__wrapper">
          <Link to="/" className="side__link" onClick={deleteClass}>
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
            <span>Select sort</span>
          </label>

          <div className="side__select">
            <select onChange={handleSortChang}>
              <option value="init">relevance</option>

              <option value="date">newest</option>
            </select>
          </div>

          <label htmlFor="book" className="SelectText">
            <span>Select categories</span>
          </label>

          <div className="side__select">
            <Select
              onChange={handleCategoriesChange}
              options={selectOptionsSeconde}
            />
          </div>
        </div>

        <div className="side__footer">© 2023 BookFinder</div>
      </aside>

      <div ref={SideBGRef} className={activeSideMenu ? "side__BG active" : "side__BG"} onClick={deleteClass}></div>
    </div>

  );
};

export default Side;
