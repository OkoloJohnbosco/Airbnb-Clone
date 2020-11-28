import React from "react";
import "./Header.css";
import LanguageIcon from "@material-ui/icons/Language";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Avatar from "@material-ui/core/Avatar";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();

  const goHome = () => history.push("/");
  return (
    <div className="header">
      <img
        onClick={goHome}
        className="header__icon"
        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
        alt=""
      />
      <div className="header__center">
        <input type="text" placeholder="Start your search" />
        <div className="header__iconContainer">
          <SearchIcon />
        </div>
      </div>

      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
