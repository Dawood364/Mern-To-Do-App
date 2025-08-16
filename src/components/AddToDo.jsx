import { useRef, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { IoMdAddCircle } from "react-icons/io";
function AddTask({ ToDoItemss }) {
  const value = useRef(0);
  const ToDoElemment = useRef();
  const DueDateElemment = useRef();

  const hamdlebuttonclick = (event) => {
    const todoname = ToDoElemment.current.value;
    const tododate = DueDateElemment.current.value;
    event.preventDefault();
    ToDoItemss(todoname, tododate);
    ToDoElemment.current.value = "";
    DueDateElemment.current.value = "";
  };

  return (
    <form action="" onSubmit={hamdlebuttonclick}>
      <div className="container ">
        <div className="row row-cols-4">
          <div className="col-sm-4 ">
            <input ref={ToDoElemment} type="text" className="input1" />
          </div>

          <div className="col-sm-4 ">
            <input ref={DueDateElemment} type="date" className="input1" />
          </div>
          <div className="col-sm-2">
            <button className="btn btn-success to-do-button">
              <IoMdAddCircle />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default AddTask;
