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
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16).required(),
  terms: yup.boolean().oneOf([true], "Você precisa aceitar para continuar.")
}).required();

const Signup = (props) => {

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = data => console.log(data);

  return (
    <div className="w-h-100 d-flex flex-direction-row align-center justify-center">
      <form className="d-inline-block" onSubmit={handleSubmit(onSubmit)}>
        <div className="signin-form">
          <h1>Signup</h1>
          <Link to="/">Go back</Link>

          <input placeholder="John Doe" {...register("name")} />
          {errors.name && <span>{errors.name?.message}</span>}

          <input placeholder="john@doe.com" {...register("email")} />
          {errors.email && <span>{errors.email?.message}</span>}

          <input placeholder="Your secret password" {...register("password")} />
          {errors.password && <span>{errors.password?.message}</span>}

          <label>
            <input type="checkbox" {...register("terms")} />
            <span>Eu aceito os termos de uso da plataforma</span>
            {errors.terms && <span>{errors.terms?.message}</span>}
          </label>

          <button type="submit">Create account</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;