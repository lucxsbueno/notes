import React from "react";

const Input = ({ label, name, register, error, example }) => {

  return (
    <label className="form-input">
      <span>{label}</span>
      <input placeholder={example} type="text" name={name} {...register(name)} />
      {error && <p>{error.message}</p>}
    </label>
  );
}

export default Input;