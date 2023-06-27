import { React, useState, useEffect, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Side from "./components/Side/Side";
import Main from "./components/body/Body";
import Header from "./components/header/header";
import CardBook from "./components/CardBook/CardBook";
import NotFound from "./components/NotFound/NotFound";

const apiStart = import.meta.env.VITE_API_PATH_START;
const apiEnd = import.meta.env.VITE_API_PATH_END;

export const ClickContext = createContext();

const App = () => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksItemsPage] = useState(15);
  const [selectedItem, setSelectedItem] = useState(null);
  // realization pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // set active side bar on mobile page
  const [activeSideMenu, setMenuActive] = useState(false);
  // state & func for search books
  const [bookData, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [bookDataGlobal, setBookDataGlobal] = useState([]);

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

  // get number pages & current page
  const lastBookIndex = currentPage * booksItemsPage;
  const firstBookIndex = lastBookIndex - booksItemsPage;
  const currentBooks = bookData.slice(firstBookIndex, lastBookIndex);

  return (
    <div className={activeSideMenu ? "position state" : "position"}>
      <ClickContext.Provider
        value={{
          selectedItem,
          setSelectedItem,
          bookData,
          setData,
          currentBooks,
          bookDataGlobal,
        }}
      >
        <Side
          activeSideMenu={activeSideMenu}
          search={search}
          setSearch={setSearch}
          searchBook={searchBook}
        />

        <Header activeSideMenu={activeSideMenu} setMenuActive={setMenuActive} />

        <Routes>
          <Route
            path="/"
            element={
              <div className="wrapper__body">
                <Main
                  loading={loading}
                  booksItemsPage={booksItemsPage}
                  totalBook={bookData.length}
                  paginate={paginate}
                />
              </div>
            }
          />

          <Route path="/About" element={<CardBook />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ClickContext.Provider>
    </div>
  );
};

export default App;
