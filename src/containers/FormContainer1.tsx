import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  background-color: #fff;
  width: 30%;
  border: solid 2px rgba(4, 6, 135, 0.8);
  border-radius: 5px;
  padding: 20px 15px;
`;

const Group = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: rgba(4, 6, 135, 0.8);
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  transition: 0.5s;
  font-weight: bold;
  &:hover {
    background-color: rgba(4, 6, 135, 0.6);
  }
`;

const Error = styled.p`
  color: red;
`;

interface FormData {
  email: string;
  username: string;
  phoneNumber?: string;
  age?: string;
  message: string;
}

const FormContainer1 = () => {
  const [data, setData] = useState<FormData>({
    email: "",
    username: "",
    phoneNumber: "",
    age: "",
    message: "",
  });

  const [errorEmail, setErrorEmail] = useState<string>("");
  const [errorUsername, setErrorUsername] = useState<string>("");
  const [errorPhone, setErrorPhone] = useState<string>("");
  const [errorAge, setErrorAge] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [errorValidation, setErrorValidation] = useState<string>("");
  const [uniqueEmeil, setUniqueEmail] = useState(true);

  const arrEmailUnique = ["admin@test.com", "hacker@anonim.us"];

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (
      errorEmail ||
      errorUsername ||
      errorPhone ||
      errorAge ||
      errorMessage ||
      !uniqueEmeil
    ) {
      setErrorValidation("Fields filled out incorrectly");
    } else {
      setErrorValidation("");
      return console.log(data);
    }
  };

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regExp =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    setData({ ...data, email: event.target.value });
    if (
      !regExp.test(data.email) ||
      arrEmailUnique.includes(event.target.value)
    ) {
      setUniqueEmail(false);
      setErrorEmail("Incorrect email or email is not unique");
    } else {
      setErrorEmail("");
      setErrorValidation("");
      setUniqueEmail(true);
    }
  };

  const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regExp = /(?!.*[.\-_]{5,})^[a-z.\-_]{5,30}$/;
    setData({ ...data, username: event.target.value });
    if (!regExp.test(event.target.value)) {
      setErrorUsername("Incorrect username");
    } else {
      setErrorUsername("");
      setErrorValidation("");
    }
  };

  const onChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regExp = /^(\+380)(50|66|67|98|97|96|68|39|63|93|99|95){1}[0-9]{7}$/;
    setData({ ...data, phoneNumber: event.target.value });
    if (!regExp.test(event.target.value)) {
      setErrorPhone("Incorrect phone number");
    } else {
      setErrorPhone("");
      setErrorValidation("");
    }
  };

  const onChangeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regExp = /^\d{1,3}$/;
    setData({ ...data, age: event.target.value });
    if (
      !regExp.test(event.target.value) ||
      Number(event.target.value) <= 17 ||
      Number(event.target.value) >= 123
    ) {
      setErrorAge("Incorrect age");
    } else {
      setErrorAge("");
      setErrorValidation("");
    }
  };

  const onChangeMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData({ ...data, message: event.target.value });
    if (
      Number(event.target.value.length) <= 100 ||
      Number(event.target.value.length) >= 1000
    ) {
      setErrorMessage("Incorrect message");
    } else {
      setErrorMessage("");
      setErrorValidation("");
    }
  };

  return (
    <Form id="form" onSubmit={handleSubmit}>
      <Group>
        <label htmlFor="email">email*</label>
        <input
          value={data.email}
          onChange={onChangeEmail}
          id="email"
          type="email"
          placeholder="name@mail.com"
          required
        />
        {errorEmail ? <Error>{errorEmail}</Error> : null}
      </Group>
      <Group>
        <label htmlFor="username">username*</label>
        <input
          value={data.username}
          onChange={onChangeUsername}
          minLength={5}
          maxLength={30}
          id="username"
          type="text"
          placeholder="user_name"
          required
        />
        {errorUsername ? <Error>{errorUsername}</Error> : null}
      </Group>
      <Group>
        <label htmlFor="phoneNumber">phone number</label>
        <input
          value={data.phoneNumber}
          onChange={onChangePhone}
          id="phoneNumber"
          type="phone"
          placeholder="+380123456789"
        />
        {errorPhone ? <Error>{errorPhone}</Error> : null}
      </Group>
      <Group>
        <label htmlFor="age">years old</label>
        <input
          value={data.age}
          onChange={onChangeAge}
          id="age"
          type="number"
          min={1}
          placeholder="25"
        />
        {errorAge ? <Error>{errorAge}</Error> : null}
      </Group>
      <Group>
        <label htmlFor="message">message*</label>
        <textarea
          value={data.message}
          onChange={onChangeMessage}
          id="message"
          rows={5}
          placeholder="one more thing..."
          required
        />
        {errorMessage ? <Error>{errorMessage}</Error> : null}
      </Group>
      <Button type="submit">SEND</Button>
      {errorValidation ? <Error>{errorValidation}</Error> : null}
    </Form>
  );
};

export default FormContainer1;
