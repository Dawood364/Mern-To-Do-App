import React from "react";
import To_Do_Item from "./To_Do_item";
const To_Do_Items = ({ ToDoItemss, ondeletehandle, OneEditClick }) => {
  return (
    <>
      <div className="main">
        {ToDoItemss.map((item) => (
          <To_Do_Item
            item_name={item.name}
            date={item.date}
            id={item._id} // Assuming each item has a unique id
            ondeletehandle={ondeletehandle}
            OneEditClick={OneEditClick}
          />
        ))}
      </div>
    </>
  );
};

export default To_Do_Items;
