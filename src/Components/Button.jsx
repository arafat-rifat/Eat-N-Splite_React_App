import React from "react";
import "../index.css";

const Button = ({ children , onHandleAddFrom , onClick}) => {
  return <button className="button" onClick={onClick}>
    {children}</button>;
};

export default Button;
