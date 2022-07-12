import React, { useState } from "react";

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
  email: yup.string().email("E-mail must be a valid e-mail.").required("E-mail is a required field."),
  password: yup.string().min(8, "Password must be at least 8 characters.").max(16, "Password must be at most 16 characters.").required("Password is a required field."),
  terms: yup.boolean().oneOf([true], "You need to accept terms for continue.")
}).required();

const Signin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = data => console.log(JSON.stringify(data));

  return (
    <div className="u-max-width u-max-height-vh u-d-flex u-flex-direction-row u-align-center u-justify-center">
      <form className="u-d-inline-block" onSubmit={handleSubmit(onSubmit)}>
        <div className="form">
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