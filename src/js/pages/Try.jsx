import React from "react";
import { Col, Form, FormGroup, Input, InputGroup } from "reactstrap";
import { useForm } from "react-hook-form";

const Try = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <form
        onSubmit={handleSubmit((values) => {
          console.log(values);
        })}
      >

          <input
            {...register("username", { required: true })}
            placeholder="username"
            id="username"
            
          />

          <input
            {...register("email", { required: true })}
            placeholder="email"
            id="email"
          />

          <input
            {...register("password", { required: true })}
            placeholder="password"
            id="password"
          />




        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Try;
