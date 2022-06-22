import React from "react";

import {
  Link
} from "react-router-dom";

import {
  useForm
} from "react-hook-form";

import {
  yupResolver
} from "@hookform/resolvers/yup";

import * as yup from "yup";

//components
import {
  Input,
  Button,
  Checkbox
} from "../components";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16).required(),
  terms: yup.boolean().oneOf([true], "Você precisa aceitar os termos para continuar.")
}).required();

const Signin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = data => console.log(JSON.stringify(data));

  return (
    <div className="w-h-100 d-flex flex-direction-row align-center justify-center">
      <form className="d-inline-block" onSubmit={handleSubmit(onSubmit)}>
        <div className="signin-form">
          <h1>Signin</h1>

          <Link to="signup">Create an account</Link>

          <Input label="E-mail" name="email" example="john@doe.com" register={register} error={errors.email} />

          <Input label="Password" name="password" example="default pass" register={register} error={errors.password} />

          <Checkbox name="terms" register={register} error={errors.terms}>
            <p>Eu aceito os <a href="">termos</a> de uso e <a href="">privacidade</a></p>
          </Checkbox>

          <Button title="Sign in" type="submit" isLoading={false} />
        </div>
      </form>
    </div>
  );
}

export default Signin;