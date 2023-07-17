import React, { useContext } from 'react';
import sideContest from '@/contexts/sideContext';
import './style.scss';
import { routes } from "@constants/constants";

const Header = ({ setMenuActive, activeSideMenu, activeMenuButton, setMenuButton }) => {
  const { MenuClose } = useContext(sideContest);

  const handleClick = () => {
    setMenuActive(activeSideMenu => !activeSideMenu);
    setMenuButton(activeMenuButton => !activeMenuButton);
  };

  return (
    <div className='header'>
      <div ref={MenuClose}
        className={
          activeMenuButton ? 'header__mobile active' : 'header__mobile'
        }
        onClick={handleClick}
      >
        <span></span>
      </div>

      <div className='header__title'>Search for books</div>
    </div>
  );
};

export default Header;
