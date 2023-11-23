import React from "react";

const ShowTip = ({ tip }) => {
  const tipPercent = (
    ((Number(tip.creditTip) + Number(tip.cashTip)) / tip.sales) *
    100
  ).toFixed(2);
  const takeHome = (
    Number(tip.creditTip) -
    Number(tip.sales) * 0.0625 +
    Number(tip.cashTip)
  ).toFixed(2);
  return (
    <table className="table-view" border="1">
      <tr>
        <th className="table-part">Sales</th>
        <th className="table-part">Credit Tip</th>
        <th className="table-part">Cash Tip</th>
        <th className="table-part">% Tip</th>
        <th className="table-part">Take Home</th>
      </tr>
      <tr>
        <td className="table-part">{tip.sales}</td>
        <td className="table-part">{tip.creditTip}</td>
        <td className="table-part">{tip.cashTip}</td>
        <td className="table-part">{tipPercent}</td>
        <td className="table-part">{takeHome}</td>
      </tr>
    </table>
  );
};

export default ShowTip;
