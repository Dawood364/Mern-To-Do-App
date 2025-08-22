import { IoMdAddCircle } from "react-icons/io";
import { useRef } from "react";

function AddTask({ ToDoItemss }) {
  const ToDoElemment = useRef();
  const DueDateElemment = useRef();

  const hamdlebuttonclick = (event) => {
    event.preventDefault();
    const todoname = ToDoElemment.current.value;
    const tododate = DueDateElemment.current.value;

    if (!todoname || !tododate) return;

    ToDoItemss(todoname, tododate);
    ToDoElemment.current.value = "";
    DueDateElemment.current.value = "";
  };

  return (
    <form onSubmit={hamdlebuttonclick} className="add-task-form">
      <input ref={ToDoElemment} type="text" placeholder="Enter Task..." />
      <input ref={DueDateElemment} type="date" />
      <button className="btn btn-success add-btn">
        <IoMdAddCircle size={20} />
      </button>
    </form>
  );
}

export default AddTask;
