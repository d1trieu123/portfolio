import React from "react";
import { useState } from "react";


const AddTask = ({ onAdd }) => {
  const [shiftType, setShiftType] = useState("");
  const [day, setDay] = useState("");
  const [date, setDate] = useState("");
  const [cashTip, setCashTip] = useState("");
  const [sales, setSales] = useState("");
  const [creditTip, setCreditTip] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!day) {
      alert("Please add tip details");
      return;
    }

    onAdd({ shiftType, day, date, cashTip, sales, creditTip });
    setDay("");
    setDate("");
    setCashTip("");
    setSales("");
    setCreditTip("");
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div>
        <label>Shift Type: </label>
        <input
          value="AM"
          onChange={(e) => setShiftType(e.target.value)}
          type="radio"
          id="AM"
          name="AM/PM"
        />
        <label>AM</label>
        <input
          value="PM"
          onChange={(e) => setShiftType(e.target.value)}
          type="radio"
          id="PM"
          name="AM/PM"
        />
        <label>PM</label>
      </div>
      <div className="form-control">
        <label>Day: </label>
        <input
          value={day}
          onChange={(e) => setDay(e.target.value)}
          type="text"
          placeholder="Day of the Week"
        />
      </div>
      <div className="form-control">
        <label>Date: </label>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="text"
          placeholder="MM//DD/YYYY"
        />
      </div>
      <div className="form-control">
        <label>Sales: $</label>
        <input
          value={sales}
          onChange={(e) => setSales(e.target.value)}
          type="number"
          placeholder="Net Sales"
        />
      </div>
      <div className="form-control">
        <label>Cash: $</label>
        <input
          value={cashTip}
          onChange={(e) => setCashTip(e.target.value)}
          type="number"
          placeholder="Cash Tip"
        />
      </div>
      <div className="form-control">
        <label>Credit: $</label>
        <input
          value={creditTip}
          onChange={(e) => setCreditTip(e.target.value)}
          type="number"
          placeholder="Credit Tip"
        />
      </div>

      <input type="submit" value="Log Tip" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
