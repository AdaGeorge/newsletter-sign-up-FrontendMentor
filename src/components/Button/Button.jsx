import React from "react";
import "./button.sass";

const Button = ({ children, ...otherProps }) => {
  return (
    <button {...otherProps} className="btn">
      {children}
    </button>
  );
};

export default Button;
