import React, { useState } from "react";
import PeopleIcon from "@material-ui/icons/People";
import "./Search.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const history = useHistory();

  const goToSearch = () => {
    history.push("/searchpage");
  };

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    const {
      selection: { startDate, endDate },
    } = ranges;
    // console.log(startDate, endDate);
    setStartDate(startDate);
    setEndDate(endDate);
  };
  return (
    <motion.div
      initial={{ y: "80px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      className="search"
    >
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of guests
        <PeopleIcon />
      </h2>
      <input type="number" min={0} defaultValue={2} />
      <Button onClick={goToSearch}>Search Airbnb</Button>
    </motion.div>
  );
}

export default Search;
