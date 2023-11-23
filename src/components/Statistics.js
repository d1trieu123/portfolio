import React from "react";

const Statistics = ({ takeHome, percent, tips }) => {
  const averageSales =
    tips.reduce((sum, tip) => {
      return (sum += Number(tip.sales));
    }, 0) / tips.length;
  const averagePercent =
    tips.reduce((sum, tip) => {
      return (sum += Number(percent(tip)));
    }, 0) / tips.length;
  const averageTakeHome =
    tips.reduce((sum, tip) => {
      return (sum += takeHome(tip));
    }, 0) / tips.length;

  return (
    <div className="stats">
      <span className="statNums">
        <h3 className="numStat">Average Sales: ${averageSales.toFixed(2)}</h3>
        <h3 className="numStat">
          Average Tip Percent: {averagePercent.toFixed(2)}%
        </h3>
        <h3 className="numStat">
          Average Take home: ${averageTakeHome.toFixed(2)}
        </h3>
      </span>
    </div>
  );
};

export default Statistics;
