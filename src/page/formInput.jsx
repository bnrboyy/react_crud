import React from "react";

function FormInput(props) {
  return (
    <>
      <label htmlFor={props.name}>{props.name}</label>
      <input
        className={props.className}
        type=""
        name={props.name}
        value={props.value}
        onChange={e => props.setShowEdit({ ...props.showEdit, id: e.target.value })}
      />
    </>
  );
}

export default FormInput;
