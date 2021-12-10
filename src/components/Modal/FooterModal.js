import React from "react";

const FooterModal = ({ children, onClose }) => {
  return (
    <div className="modal-footer">
      {children || (
        <button
          onClose={onClose}
          type="button"
          className="btn btn-info"
          data-dismiss="modal"
        >
          Close
        </button>
      )}
    </div>
  );
};

export default FooterModal;
