import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Group, Error } from "./FormContainer1";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormInputs {
  email: string;
  username: string;
  phoneNumber: string;
  age?: number;
  message: string;
}

const arrBusyEmeil = ["admin@test.com", "hacker@anonim.us"];

const validationSchema = yup.object({
  email: yup
    .string()
    .email()
    .notOneOf(arrBusyEmeil, "This email already exists")
    .required()
    .matches(
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
      "Incorrect email"
    ),
  username: yup
    .string()
    .min(5, "Min = 5 characters")
    .max(30, "Max = 30 characters")
    .required("This is a required field")
    .matches(/(?!.*[.\-_]{5,})^[a-z.\-_]{5,30}$/, "Incorrect username"),
  phoneNumber: yup
    .string()
    .required("This is a required field")
    .matches(
      /^(\+380)(50|66|67|98|97|96|68|39|63|93|99|95){1}[0-9]{7}$/,
      "Incorrect phone number"
    ),
  age: yup
    .number()
    .integer()
    .nullable(true)
    .transform((v, o) => (o === "" ? null : v))
    .positive("Age must be positive")
    .min(18, "You must be at least 18 years old")
    .max(122, "How did you get to this age???"),
  message: yup
    .string()
    .required("This is a required field")
    .min(100, "Min = 100 characters")
    .max(1000, "Max = 1000 characters"),
});

const FormContainer2 = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormInputs>({
    mode: "onBlur",

    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Group>
        <label htmlFor="email">email*</label>
        <input
          {...register("email")}
          type="email"
          placeholder="name@mail.com"
        />
        {errors?.email ? <Error>{errors.email?.message}</Error> : null}
      </Group>
      <Group>
        <label htmlFor="username">username*</label>
        <input
          {...register("username")}
          type="string"
          placeholder="user_name"
        />
        {errors?.username ? <Error>{errors.username?.message}</Error> : null}
      </Group>
      <Group>
        <label htmlFor="phoneNumber">phone number</label>
        <input
          {...register("phoneNumber")}
          type="phone"
          placeholder="+380123456789"
        />
        {errors?.phoneNumber ? (
          <Error>{errors?.phoneNumber?.message}</Error>
        ) : null}
      </Group>
      <Group>
        <label htmlFor="age">years old</label>
        <input {...register("age")} type="number" placeholder="25" />
        {errors?.age ? <Error>{errors.age?.message}</Error> : null}
      </Group>
      <Group>
        <label htmlFor="message">message*</label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="one more thing..."
        />
        {errors?.message ? <Error>{errors?.message?.message}</Error> : null}
      </Group>
      <Button type="submit" disabled={!isValid}>
        SEND
      </Button>
    </Form>
  );
};

export default FormContainer2;
