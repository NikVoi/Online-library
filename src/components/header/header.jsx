import React, { useContext } from "react";
import sideContest from "@/contexts/sideContext";
import "./style.scss";

const Header = ({ setMenuActive, activeSideMenu, activeMenuButton, setMenuButton }) => {
  const { mobileNavRef, MenuClose } = useContext(sideContest);

  const doActive = () => {
    setMenuActive(!activeSideMenu);
    setMenuButton(!activeMenuButton);
  };

  return (
    <div className="header">
      <div ref={MenuClose}
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
