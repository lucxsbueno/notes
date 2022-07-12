import React from "react";

const Input = ({ label, name, register, error, example }) => {

  return (
    <label className="form__field">
      <span className="form__label">{label}</span>
      <input className="form__input" placeholder={example} type="text" name={name} {...register(name)} />
      {error && <p className="form_message">{error.message}</p>}
    </label>
  );
}

export default Input;