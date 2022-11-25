import React from "react";

export default function TextInput(props) {
  const { label, name, elementClass, value, required } = props;

  let elementAttributes = {};

  if (value !== undefined) {
    elementAttributes.defaultValue = value;
  }
  if (required !== undefined) {
    elementAttributes.required = required;
  }

  return (
    <div className={elementClass}>
      <label>{label}</label>
      <input
        type="text"
        name={name}
        placeholder={label}
        {...elementAttributes}
      />
    </div>
  );
}
