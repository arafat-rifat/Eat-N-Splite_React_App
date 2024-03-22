import React from "react";
import "../index.css";

const Button = ({ children , onHandleAddFrom}) => {
  return <button className="button" onClick={onHandleAddFrom}>{children}</button>;
};

export default Button;
