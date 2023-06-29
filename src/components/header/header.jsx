import React, { useState } from "react";
import "./style.scss";

const Header = ({ setMenuActive, activeSideMenu }) => {
  const [activeMenuButton, setMenuButton] = useState(false);

  const doActive = () => {
    setMenuActive(!activeSideMenu);
    setMenuButton(!activeMenuButton);
  };

  return (
    <div className="header">
      <div
        className={
          activeMenuButton ? "header__mobile active" : "header__mobile"
        }
        onClick={() => {
          doActive();
        }}
      >
        <span></span>
      </div>

      <div className="header__title">Search for books</div>
    </div>
  );
};

export default Header;
