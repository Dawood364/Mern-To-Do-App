import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppName from "./components/AppName";
import AddTask from "./components/AddToDo";
import To_Do_Items from "./components/To-Do-Items";
import "./app.css";
import Welcomemsg from "./components/Welcomemsg";
function App() {
  let [item, setitem] = useState([]);

  // const onNewItem = (itemname, itemduedate) => {
  //   const newitem = [
  //     ...item,
  //     {
  //       name: itemname,
  //       date: itemduedate,
  //     },
  //   ];
  //   setitem(newitem);
  // };

  // const onNewItem = (itemname, itemduedate) => {
  //   setitem((curritem) => {
  //     const newitem = [
  //       ...curritem,
  //       {
  //         name: itemname,
  //         date: itemduedate,
  //       },
  //     ];
  //     return newitem;
  //   });
  // };

  const onNewItem = (itemname, itemduedate) => {
    setitem((curritem) => [
      ...curritem,
      {
        name: itemname,
        date: itemduedate,
      },
    ]);
  };

  const ondelete = (itemname) => {
    const filtredarray = item.filter((item) => item.name != itemname);
    setitem(filtredarray);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTask ToDoItemss={onNewItem} />
      <Welcomemsg item={item} />
      <To_Do_Items ToDoItemss={item} ondeletehandle={ondelete} />
    </center>
  );
}

export default App;
