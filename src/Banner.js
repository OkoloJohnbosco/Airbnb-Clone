import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Search from "./Search";
import "./Banner.css";
import { useHistory } from "react-router-dom";

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch((prevState) => !prevState);
  };

  const goToSearch = () => {
    history.push("/searchpage");
  };

  return (
    <div className="banner">
      <div className="banner__search">
        <div className="banner__DatePickerContainer">
          {showSearch && <Search />}
        </div>
        <Button
          variant="outlined"
          onClick={toggleSearch}
          className="banner__searchButton"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and strectch your imagination</h1>
        <p>
          Plan a different kind of getaway to uncover the hidden gems near you
        </p>
        <Button onClick={goToSearch} variant="outlined">
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
