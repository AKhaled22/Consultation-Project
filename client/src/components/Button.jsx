import React from "react";

const Button = ({ buttText, onClick, className }) => {
  return (
    <button className={`rounded-pill blue-butt ${className}`} onClick={onClick}>
      {buttText}
    </button>
  );
};

export default Button;
