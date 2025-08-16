import { RiDeleteBin6Line } from "react-icons/ri";
function To_Do_Item({ item_name, date, ondeletehandle }) {
  return (
    <div className="container">
      <div className="row row-cols-4">
        <div className="col-sm-4">{item_name}</div>
        <div className="col-sm-4">{date}</div>
        <div className="col-sm-2">
          <button
            type="button"
            className="btn btn-danger to-do-button "
            onClick={() => {
              ondeletehandle(item_name);
            }}
          >
            <RiDeleteBin6Line />
          </button>
        </div>
      </div>
    </div>
  );
}
export default To_Do_Item;
