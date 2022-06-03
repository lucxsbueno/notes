import React from "react";

//Routes
import {
  Link
} from "react-router-dom";

//Form
import {
  useForm
} from "react-hook-form";

//Yup resolver
import { 
  yupResolver
} from '@hookform/resolvers/yup';

import * as yup from "yup";

//Input validations
const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16).required(),
}).required();

const Signin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
  
  const onSubmit = data => console.log(data);

  return (
    <div className="w-h-100 d-flex flex-direction-row align-center justify-center">
      <form className="d-inline-block" onSubmit={handleSubmit(onSubmit)}>
        <div className="signin-form">
          <h1>Signin</h1>
          <Link to="signup">Create an account</Link>

          <input placeholder="john@doe.com" {...register("email")} />
          {errors.email && <span>{errors.email?.message}</span>}

          <input placeholder="Your secret password" {...register("password")} />
          {errors.password && <span>{errors.email?.password}</span>}

          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
}

export default Signin;