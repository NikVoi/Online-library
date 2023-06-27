import { React, useContext } from "react";
import "./style.scss";

import { Link } from "react-router-dom";
import Loader from "./Loader/Loader";
import { ClickContext } from "../../../app";

const Item = ({ loading }) => {
  const { setSelectedItem, currentBooks } = useContext(ClickContext);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className="List">
        {currentBooks.map((item) => {
          const thumbnail =
            item.volumeInfo.imageLinks &&
            item.volumeInfo.imageLinks.smallThumbnail;
          const isAuthor = item.volumeInfo.authors;
          let newA = null;
          isAuthor !== undefined ? (newA = isAuthor.join(" ")) : isAuthor;

          if (thumbnail != undefined) {
            return (
              <div
                className="item"
                key={item.id}
                onClick={() => handleItemClick(item)}
              >
                <Link to="/About" className="item__link">
                  <div className="item__img">
                    <img src={thumbnail} alt="book img" />
                  </div>
                  <div className="item__name">{item.volumeInfo.title}</div>
                  <div className="item__descr">
                    {item.volumeInfo.categories}
                  </div>
                  <div className="item__writer">{newA}</div>
                </Link>
              </div>
            );
          }
        })}
      </div>
    );
  }
};

export default Item;
