import React from "react";

const ItemGroup = ({ children, title, value }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{title}</div>
      </div>
      {children ? (
        <div>{children}</div>
      ) : (
        <span className="badge bg-info rounded-pill p-1">{value}</span>
      )}
    </li>
  );
};

export default ItemGroup;
