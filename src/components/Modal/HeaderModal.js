import React from "react";

const HeaderModal = ({ children, onClose }) => {
  return (
    <div className="modal-header">
      <div className="modal-title d-flex justify-content-center">
        {children ? children : "Modal title"}
      </div>
      <button
        type="button"
        className="btn-close btn"
        data-bs-dismiss="modal"
        aria-label="Close"
        onClick={() => onClose(false)}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default HeaderModal;
