import { React, useState, useEffect, createContext } from "react";
import { Route, Routes } from "react-router-dom";

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

  // state & func for search books
  const [bookData, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [bookDataGlobal, setBookDataGlobal] = useState([]);

  const searchBook = async (event) => {
    if (event.key === "Enter") {
      setLoading(true);
      fetch(apiStart + search + apiEnd)
        .then((res) => res.json())
        .then((data) => setData(data.items));
      setLoading(false);
    }
  };

  // Hook for get info with API
  useEffect(() => {
    const getBook = async () => {
      setLoading(true);
      fetch(apiStart + "JS" + apiEnd)
        .then((res) => res.json())
        .then((data) => {
          setData(data.items);
          setBookDataGlobal(data.items);
        });
      setLoading(false);
    };
    getBook();
  }, []);

  // get number pages & current page
  const lastBookIndex = currentPage * booksItemsPage;
  const firstBookIndex = lastBookIndex - booksItemsPage;
  const currentBooks = bookData.slice(firstBookIndex, lastBookIndex);

  // realization pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // set active side bar on mobile page
  const [activeSideMenu, setMenuActive] = useState(false);

  return (
    <div className={activeSideMenu ? "potishion state" : "potishion"}>
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
