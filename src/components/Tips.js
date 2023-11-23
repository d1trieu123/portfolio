import React from "react";
import Tip from "./Tip";

const Tips = ({ tips, onDelete, onEdit }) => {
  return (
    <div className="tipList">
      {tips.map((tip) => (
        <Tip
          id={tip.id}
          onEdit={onEdit}
          onDelete={onDelete}
          key={tip.id}
          tip={tip}
        />
      ))}
    </div>
  );
};

export default Tips;
