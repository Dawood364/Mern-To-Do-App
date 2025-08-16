import React from "react";
import To_Do_Item from "./To_Do_item";
const To_Do_Items = ({ ToDoItemss, ondeletehandle }) => {
  return (
    <>
      <div className="main">
        {ToDoItemss.map((item) => (
          <To_Do_Item
            item_name={item.name}
            date={item.date}
            ondeletehandle={ondeletehandle}
          />
        ))}
      </div>
    </>
  );
};

export default To_Do_Items;
