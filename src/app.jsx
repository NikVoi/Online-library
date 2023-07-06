import { React, useState, useEffect, createContext, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Side from "@components/Side/Side";
import Main from "@components/body/Body";
import Header from "@components/Header/header";
import CardBook from "@components/CardBook/CardBook";
import NotFound from "@components/NotFound/NotFound";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

import SideContext from "@contexts/SideContext";
import ClickContext from "@contexts/ClickContext";

import { booksItemsPage, mainPage, allLink, about } from "@constants/constants";

const apiStart = import.meta.env.VITE_API_PATH_START;
const apiEnd = import.meta.env.VITE_API_PATH_END;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeSideMenu, setMenuActive] = useState(false);
  const [activeMenuButton, setMenuButton] = useState(false);
  const [bookData, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [bookDataGlobal, setBookDataGlobal] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const lastBookIndex = currentPage * booksItemsPage;
  const firstBookIndex = lastBookIndex - booksItemsPage;
  const currentBooks = bookData.slice(firstBookIndex, lastBookIndex);

  const MenuClose = useRef(null);

  const searchBook = async (event) => {
    if (event.key === "Enter") {
      setLoading(true);
      try {
        const searchTerm = search || "JS";
        const response = await axios.get(apiStart + searchTerm + apiEnd);
        setData(response.data.items);
        console.log(response.data.items);
        setBookDataGlobal(response.data.items);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    searchBook({ key: "Enter" });
  }, []);

  const deleteClass = () => {
    MenuClose.current.classList.remove("active");
    setMenuActive(false);
    setMenuButton(false);
  };

  return (
    <ErrorBoundary>
      <SideContext.Provider
        value={{
          deleteClass,
          MenuClose,
        }}
      >
        <div
          ref={MenuClose}
          className={activeSideMenu ? "position state" : "position"}
        >
          <ClickContext.Provider
            value={{
              selectedItem,
              setSelectedItem,
              bookData,
              setData,
              currentBooks,
              bookDataGlobal,
              loading,
            }}
          >
            <Side
              activeSideMenu={activeSideMenu}
              search={search}
              setSearch={setSearch}
              searchBook={searchBook}
            />

            <Header
              activeSideMenu={activeSideMenu}
              setMenuActive={setMenuActive}
              activeMenuButton={activeMenuButton}
              setMenuButton={setMenuButton}
            />

            <Routes>
              <Route path={mainPage} element={<Main paginate={paginate} />} />

              <Route path={about} element={<CardBook />} />
              <Route path={allLink} element={<NotFound />} />
            </Routes>
          </ClickContext.Provider>
        </div>
      </SideContext.Provider>
    </ErrorBoundary>
  );
};

export default App;
