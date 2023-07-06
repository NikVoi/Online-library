import { React, useContext } from "react";
import { Link } from "react-router-dom";

import Loader from "@components/Loader/Loader";

import "./style.scss";
import ClickContext from "@/contexts/ClickContext";
import { about } from "@constants/constants";

const Item = () => {
  const { setSelectedItem, currentBooks, loading } = useContext(ClickContext);

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
                <Link to={about} className="item__link">
                  <div className="item__img">
                    <img src={thumbnail} alt="book img" />
                  </div>
                  <div className="item__name">{item.volumeInfo.title}</div>
                  <div className="item__description">
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
