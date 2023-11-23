import Button from "./Button";
import { useState } from "react";
const Header = ({ sorted, searchAndFilter, showAdd, onAdd }) => {
  const [day, setDay] = useState("Filter-by-Day");
  const [sort, setSort] = useState("Sort");
  const [shiftType, setShiftType] = useState("Shift-Type");
  const changeShiftType = (e) => {
    setShiftType(e.target.value);
    searchAndFilter(day, e.target.value, sort);
  };
  const changeDay = (e) => {
    setDay(e.target.value);
    searchAndFilter(e.target.value, shiftType, sort);
  };

  const changeSort = (e) => {
    setSort(e.target.value);
    searchAndFilter(day, shiftType, e.target.value);
  };
  return (
    <header className="header">
      <h1>Tip Tracker</h1>

      <select
        onChange={changeDay}
        className="dropbtn"
        name="daySort"
        id="day-sort"
        value={day}
      >
        <option value="Filter-by-Day">Filter by Day</option>
        <option value="Sunday">Sunday</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
      </select>
      <select
        value={shiftType}
        onChange={changeShiftType}
        className="dropbtn"
        name="shiftType"
        id="shiftType"
      >
        <option value="Shift-Type">Shift Type</option>
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
      <select
        value={sort}
        onChange={changeSort}
        className="dropbtn"
        name="saleSort"
        id="sale-sort"
      >
        <option value="Sort">Sort by</option>
        <option value="Highest-sales">Highest Sales</option>
        <option value="Lowest-sales">Lowest Sales</option>
        <option value="Highest-tips">Highest Tip%</option>
        <option value="Lowest-tips">Lowest Tip%</option>
        <option value="Highest-take">Highest Take</option>
        <option value="Lowest-take">Lowest Take</option>
      </select>

      <Button
        onClick={onAdd}
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add Day"}
      />
    </header>
  );
};

export default Header;
