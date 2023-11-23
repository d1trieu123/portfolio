import { FaTimes } from "react-icons/fa";
import Button from "./Button";
import { useState } from "react";
import ShowTip from "./ShowTip";
import EditTip from "./EditTip";

const Tip = ({ id, onEdit, tip, onDelete }) => {
  const [showTip, setShowTip] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const closeEdit = () => {
    setShowEdit(false);
  };
  return (
    <div className="tip">
      <span>
        <h2 className="left-side">
          {tip.day} {tip.shiftType} {tip.date}
        </h2>

        <div className="right-side">
          <Button
            color="grey"
            onClick={() => setShowTip(!showTip)}
            style={{ cursor: "pointer" }}
            text="More"
          />
          <Button
            onClick={() => setShowEdit(!showEdit)}
            color="blue"
            style={{ cursor: "pointer" }}
            text="Edit"
          />
          <FaTimes
            onClick={() => onDelete(tip.id)}
            style={{ fontSize: 50, color: "red", cursor: "pointer" }}
          />
        </div>
      </span>

      {showTip && <ShowTip tip={tip} />}
      <div className="editor">
        {showEdit && (
          <EditTip
            id={id}
            closeEdit={closeEdit}
            showEdit={showEdit}
            onEdit={onEdit}
            tip={tip}
          />
        )}
      </div>
    </div>
  );
};

export default Tip;
