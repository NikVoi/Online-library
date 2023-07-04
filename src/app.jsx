import { React, useState, useEffect, createContext, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Side from "@components/Side/Side";
import Main from "@components/body/Body";
import Header from "@components/Header/header";
import CardBook from "@components/CardBook/CardBook";
import NotFound from "@components/NotFound/NotFound";

import sideContext from "@contexts/sideContext";
import { booksItemsPage } from "@constants/constants";

const apiStart = import.meta.env.VITE_API_PATH_START;
const apiEnd = import.meta.env.VITE_API_PATH_END;

export const ClickContext = createContext();

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

  const MenuRef = useRef(null);
  const SideBGRef = useRef(null);
  const mobileNavRef = useRef(null);
  const positionRef = useRef(null);

  const searchBook = async (event) => {
    if (event.key === "Enter") {
      setLoading(true);
      try {
        const response = await axios.get(apiStart + search + apiEnd);
        setData(() => response.data.items);
        setBookDataGlobal(() => response.data.items);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const getBook = async () => {
      setLoading(true);
      try {
        const response = await axios.get(apiStart + "JS" + apiEnd);
        setData(() => response.data.items);
        setBookDataGlobal(() => response.data.items);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getBook();
  }, []);

  const deleteClass = () => {
    MenuRef.current.classList.remove("active");
    SideBGRef.current.classList.remove("active");
    mobileNavRef.current.classList.remove("active");
    positionRef.current.classList.remove("active");
    setMenuActive(false);
    setMenuButton(false);
  };

  const currentBooks = bookData.slice(firstBookIndex, lastBookIndex);

  return (
    <sideContext.Provider
      value={{ MenuRef, SideBGRef, mobileNavRef, positionRef, deleteClass }}
    >
      <div
        ref={positionRef}
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
            <Route path="/" element={<Main paginate={paginate} />} />

            <Route path="/About" element={<CardBook />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ClickContext.Provider>
      </div>
    </sideContext.Provider>
  );
};

export default App;
