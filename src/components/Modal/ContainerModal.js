import React from "react";

const ContainerModal = ({ isOpen, children }) => {
  return (
    <div
      className={`${
        isOpen ? null : "d-none"
      } modal-dialog modal-xl fixed-top modal-dialog-centered text-white modal-dialog-scrollable`}
    >
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default ContainerModal;
