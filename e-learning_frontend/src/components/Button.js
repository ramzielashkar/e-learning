import { useState } from "react";

const Button = ({ text, onClick, color }) => {
  return (
    <button className={color + " btn"} onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "default",
};

export default Button;
