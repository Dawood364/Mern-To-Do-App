import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppName from "./components/AppName";
import AddTask from "./components/AddToDo";
import To_Do_Items from "./components/To-Do-Items";
import "./app.css";
import Welcomemsg from "./components/Welcomemsg";
import EditModal from "./components/EditModal";
function App() {
  let [item, setitem] = useState([]);
  let [show, setshow] = useState(false);
  let [itemname, setitemname] = useState([]);
  let [itemdate, setitemdate] = useState([]);
  let [itemid, setitemid] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos/get")
      .then((response) => response.json())
      .then((data) => setitem(data));
  }, []);

  const OnEditClick = (id, item_name, date) => {
    setitemname(item_name);
    setitemdate(date);
    setitemid(id);
    setshow(true);
  };
  const DisappearModel = () => {
    setshow(false);
  };
  const FetchModelData = async () => {
    const response = await fetch(`http://localhost:3000/todos/${itemid}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: itemname, date: itemdate }),
    });
    const Todoapp = await response.json();
    setitem((prevItems) =>
      prevItems.map((todo) => (todo._id === itemid ? Todoapp : todo))
    );
    DisappearModel();
  };
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

  const onNewItem = async (itemname, itemduedate) => {
    // setitem((curritem) => [
    //   ...curritem,
    //   {
    //     name: itemname,
    //     date: itemduedate,
    //   },
    // ]);

    const response = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: itemname,
        date: itemduedate,
      }),
    });
    const data = await response.json();
    setitem((prev) => [...prev, data]);
  };

  const ondelete = async (id) => {
    await fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    });
    setitem((curritem) => {
      return curritem.filter((item) => item._id !== id);
    });
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTask ToDoItemss={onNewItem} />
      <Welcomemsg item={item} />
      <To_Do_Items
        ToDoItemss={item}
        ondeletehandle={ondelete}
        OneEditClick={OnEditClick}
      />
      <EditModal
        show={show}
        item_name={itemname}
        itemdate={itemdate}
        FetchModelData={FetchModelData}
        DisappearModel={DisappearModel}
        setitemname={setitemname}
        setitemdate={setitemdate}
      />
    </center>
  );
}

export default App;
