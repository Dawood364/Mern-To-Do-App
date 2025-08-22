import React, { useEffect } from "react";

const EditModal = ({
  show,
  item_name,
  itemdate,
  FetchModelData,
  DisappearModel,
  setitemname,
  setitemdate,
}) => {
  useEffect(() => {
    const modalEl = document.getElementById("editModal");
    const modal = new window.bootstrap.Modal(modalEl);
    if (show) {
      modal.show();
    } else {
      modal.hide();
    }
    return () => {
      modal.hide();
    };
  }, [show]);

  return (
    <>
      <div
        className="modal fade"
        id="editModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Todo</h5>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Task name"
                value={item_name}
                onChange={(e) => setitemname(e.target.value)}
              />
              <input
                type="date"
                className="form-control"
                value={itemdate}
                onChange={(e) => setitemdate(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={DisappearModel}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={FetchModelData}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditModal;
