import { RiDeleteBin6Line } from "react-icons/ri";

function To_Do_Item({ item_name, date, ondeletehandle, id, OneEditClick }) {
  return (
    <div className="todo-card shadow-sm">
      <div className="todo-info">
        <h6 className="todo-title">{item_name}</h6>
        <p className="todo-date">{date}</p>
      </div>
      <div className="todo-actions">
        <button
          type="button"
          className="btn btn-danger action-btn"
          onClick={() => ondeletehandle(id)}
        >
          <RiDeleteBin6Line />
        </button>
        <button
          type="button"
          className="btn btn-info action-btn"
          onClick={() => OneEditClick(id, item_name, date)}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default To_Do_Item;
