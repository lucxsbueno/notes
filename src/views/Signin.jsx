import React from "react";

import {
  Link
} from "react-router-dom";

import {
  useForm
} from "react-hook-form";

import {
  yupResolver
} from '@hookform/resolvers/yup';

import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16).required(),
  terms: yup.boolean().oneOf([true], "Você precisa aceitar os termos para continuar.")
}).required();

const Signin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = data => alert(JSON.stringify(data));

  return (
    <div className="w-h-100 d-flex flex-direction-row align-center justify-center">
      <form className="d-inline-block" onSubmit={handleSubmit(onSubmit)}>
        <div className="signin-form">
          <h1>Signin</h1>

          <Link to="signup">Create an account</Link>

          <label className="form-input">
            <span>E-mail</span>
            <input placeholder="john@doe.com" type="text" {...register("email")} />
            {errors.email && <p>{errors.email?.message}</p>}
          </label>

          <label className="form-input">
            <span>Password</span>
            <input placeholder="Your secret password" type="password" {...register("password")} />
            {errors.password && <p>{errors.password?.message}</p>}
          </label>

          <label className="form-input">
            <input type="checkbox" {...register("terms")} />
            <span>Eu aceito os termos de uso da plataforma</span>
            {errors.terms && <p>{errors.terms?.message}</p>}
          </label>

          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
}

export default Signin;