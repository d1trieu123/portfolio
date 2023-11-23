import React from "react";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Tips from "./components/Tips";
import AddTask from "./components/AddTask";
import Statistics from "./components/Statistics";

const App = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [tips, setTips] = useState([]);
  const [filteredTips, setFilteredTips] = useState([]);
  const [showFiltered, setShowFiltered] = useState(false);
  const [dayFiltered, setDayFiltered] = useState("Filter-by-Day");
  const [shiftFiltered, setShiftFiltered] = useState("Shift-Type");
  const [currentSort, setCurrentSort] = useState("Sort");

  const getTipPercent = (tip) => {
    return (
      ((Number(tip.creditTip) + Number(tip.cashTip)) / tip.sales) *
      (100).toFixed(2)
    );
  };

  const getTakeHome = (tip) => {
    return (
      Number(tip.creditTip) - Number(tip.sales) * 0.0625 + Number(tip.cashTip)
    );
  };

  const addTip = (tip) => {
    const id = tip.cashTip * tip.sales + Math.random();
    const newTip = { id, ...tip };
    setTips([newTip, ...tips]);
    setShowAdd(false);
  };
  const deleteTip = (id) => {
    setTips(tips.filter((tip) => tip.id !== id));

    setFilteredTips(filteredTips.filter((tip) => tip.id !== id));
  };

  const searchAndFilter = (day, shiftType, sort) => {
    setDayFiltered(day);
    setShiftFiltered(shiftType);
    setCurrentSort(sort);
  };

  useEffect(() => {
    let newFilter = [];
    let dayHold = "";
    let shiftHold = "";
    dayFiltered !== "Filter-by-Day" && (dayHold = dayFiltered);
    shiftFiltered !== "Shift-Type" && (shiftHold = shiftFiltered);

    newFilter = tips
      .filter((tip) => tip.day.includes(dayHold))
      .filter((tip) => tip.shiftType.includes(shiftHold));
    switch (currentSort) {
      case "Sort":
        newFilter.sort(function (a, b) {
          a = String(a.date).split("/").reverse().join("");
          b = String(b.date).split("/").reverse().join("");
          return a > b ? -1 : a < b ? 1 : 0;
        });
        break;
      case "Highest-sales":
        newFilter = newFilter.sort(function (a, b) {
          return b.sales - a.sales;
        });

        break;
      case "Lowest-sales":
        newFilter = newFilter.sort(function (a, b) {
          return a.sales - b.sales;
        });
        break;
      case "Highest-tips":
        newFilter = newFilter.sort(function (a, b) {
          return getTipPercent(b) - getTipPercent(a);
        });
        break;
      case "Lowest-tips":
        newFilter = newFilter.sort(function (a, b) {
          return getTipPercent(a) - getTipPercent(b);
        });
        break;
      case "Highest-take":
        newFilter = newFilter.sort(function (a, b) {
          return getTakeHome(b) - getTakeHome(a);
        });
        break;
      case "Lowest-take":
        newFilter = newFilter.sort(function (a, b) {
          return getTakeHome(a) - getTakeHome(b);
        });
        break;
      default:
        break;
    }

    setFilteredTips(newFilter);

    dayFiltered !== "Filter-by-Day" ||
    shiftFiltered !== "Shift-Type" ||
    currentSort !== "Sort"
      ? setShowFiltered(true)
      : setShowFiltered(false);
  }, [dayFiltered, currentSort, shiftFiltered]);

  const onEdit = (tip, id) => {
    const editor = tips.find((x) => x.id === id);

    editor.shiftType = tip.shiftType;
    editor.day = tip.day;
    editor.cashTip = tip.cashTip;
    editor.creditTip = tip.creditTip;
    editor.date = tip.date;
    editor.sales = tip.sales;
  };

  return (
    <div className="container">
      <div className="statistics">
        {!showFiltered && (
          <Statistics
            takeHome={getTakeHome}
            percent={getTipPercent}
            tips={tips}
          />
        )}
        {showFiltered && (
          <Statistics
            takeHome={getTakeHome}
            percent={getTipPercent}
            tips={filteredTips}
          />
        )}
      </div>
      <Header
        searchAndFilter={searchAndFilter}
        showAdd={showAdd}
        onAdd={() => setShowAdd(!showAdd)}
      />

      {showAdd && <AddTask onAdd={addTip} />}
      {showFiltered && (
        <Tips onEdit={onEdit} onDelete={deleteTip} tips={filteredTips} />
      )}
      {!showFiltered && (
        <Tips onEdit={onEdit} onDelete={deleteTip} tips={tips} />
      )}
    </div>
  );
};

export default App;
