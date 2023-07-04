import { React, useContext } from "react";
import { ClickContext } from "@/app";
import "./style.scss";

const CardBook = () => {
  const { selectedItem } = useContext(ClickContext);

  const thumbnail =
    selectedItem.volumeInfo.imageLinks &&
    selectedItem.volumeInfo.imageLinks.smallThumbnail;

  const isAuthor = selectedItem.volumeInfo.authors;
  let newA = null;
  selectedItem.volumeInfo.authors !== undefined
    ? (newA = isAuthor.join(" "))
    : isAuthor;

  return (
    <>
      <div className="card">
        <div className="card__left">
          <div className="card__name">{selectedItem.volumeInfo.title}</div>
          <div className="card__author">{newA}</div>
          <div className="card__categories">
            {selectedItem.volumeInfo.categories}
          </div>
          <div className="card__description">
            {selectedItem.volumeInfo.description}
          </div>
        </div>
        <div className="card__right">
          <img src={thumbnail} alt="Book image" />
        </div>
      </div>
    </>
  );
};

export default CardBook;
