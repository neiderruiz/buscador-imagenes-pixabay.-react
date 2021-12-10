import React from "react";

const ListGroup = ({ children }) => {
  return <ol className="list-group list-group-numbered">{children}</ol>;
};

export default ListGroup;
