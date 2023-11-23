import { useState } from "react";

import React from "react";

const EditTip = ({ closeEdit, tip, onEdit, id }) => {
  const [shiftType, setShiftType] = useState(tip.shiftType);
  const [day, setDay] = useState(tip.day);
  const [date, setDate] = useState(tip.date);
  const [cashTip, setCashTip] = useState(tip.cashTip);
  const [sales, setSales] = useState(tip.sales);
  const [creditTip, setCreditTip] = useState(tip.creditTip);

  const onSubmit = (e) => {
    e.preventDefault();
    onEdit({ shiftType, day, date, cashTip, sales, creditTip }, id);
    closeEdit();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
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
            onChange={(e) => setDate(e.target.value)}
            value={date}
            type="text"
          />
        </div>
        <div className="form-control">
          <label>Sales: $</label>
          <input
            onChange={(e) => setSales(e.target.value)}
            value={sales}
            type="number"
          />
        </div>
        <div className="form-control">
          <label>Cash: $</label>
          <input
            onChange={(e) => setCashTip(e.target.value)}
            value={cashTip}
            type="number"
          />
        </div>
        <div className="form-control">
          <label>Credit: $</label>
          <input
            onChange={(e) => setCreditTip(e.target.value)}
            value={creditTip}
            type="number"
          />
        </div>

        <input type="submit" value="Edit" className="btn btn-block" />
      </form>
    </div>
  );
};

export default EditTip;
