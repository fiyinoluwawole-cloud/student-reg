import React from "react";

const Input = ({
  placeholder,
  type = "text",
  value,
  onChange,
  name,
  id,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
      style={{
        padding: "10px",
        width: "100%",
        maxWidth: "300px",
        display: "block",
        marginBottom: "15px",
        borderRadius: "5px",
        border: "1px solid #ccc",
      }}
    />
  );
};

export default Input;