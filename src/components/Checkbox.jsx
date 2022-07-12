import React from "react";

const Checkbox = ({ children, name, register, error }) => {

  return (
    <label className="form__input">
      <input type="checkbox" {...register(name)} name={name} />
      <div>
        {children}
      </div>
      {error && <p>{error.message}</p>}
    </label>
  );
}

export default Checkbox;