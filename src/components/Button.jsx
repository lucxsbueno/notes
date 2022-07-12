import React from "react";

const Button = ({ title, type, isLoading }) => {

  return (
    <button className="btn btn--primary u-txt-bold" type={type} disabled={isLoading}>{title}</button>
  );
}

export default Button;