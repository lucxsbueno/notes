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

//components
import {
  Input,
  Button,
  Checkbox
} from "../components";

const schema = yup.object({
  name: yup.string().required("O campo nome é obrigatório."),
  email: yup.string().email("O e-mail deve ser váilido.").required("O campo e-mail é obrigatório."),
  password: yup.string().min(8, "A senha deve conter pelo menos 8 caracteres.").max(16, "A senha deve conter no máximo 16 caracteres.").required("O campo senha é obrigatório."),
  terms: yup.boolean().oneOf([true], "Você precisa aceitar para continuar.")
}).required();

const Signup = (props) => {

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = data => console.log(data);

  return (
    <div className="u-max-width u-max-height-vh u-d-flex u-flex-direction-row u-align-center u-justify-center">
      <form className="u-d-inline-block" onSubmit={handleSubmit(onSubmit)}>
        <div className="form">
          <h1 className="form__title">Signup</h1>
          <Link to="/">Go back</Link>

          <Input
            label="Name"
            name="name"
            example="John Doe"
            register={register}
            error={errors.name} />

          <Input
            label="E-mail"
            name="email"
            example="john@doe.com"
            register={register}
            error={errors.email} />

          <Input
            label="Password"
            name="password"
            example="default pass"
            register={register}
            error={errors.password} />

          <Checkbox
            name="terms"
            register={register}
            error={errors.terms}>
            <p>Eu aceito os <a href="">termos</a> de uso e <a href="">privacidade</a></p>
          </Checkbox>

          <Button title="Create an account" type="submit" isLoading={false} />

        </div>
      </form>
    </div>
  );
}

export default Signup;