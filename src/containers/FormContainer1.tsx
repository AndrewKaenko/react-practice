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

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    return console.log(data);
  };

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regExp =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    setData({ ...data, email: event.target.value });
    if (!regExp.test(data.email)) {
      setErrorEmail("Incorrect email");
    } else {
      setErrorEmail("");
    }
  };

  const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regExp = /(?!.*[\.\-\_]{5,})^[a-z\.\-\_]{5,30}$/;
    setData({ ...data, username: event.target.value });
    if (!regExp.test(event.target.value)) {
      setErrorUsername("Incorrect username");
    } else {
      setErrorUsername("");
    }
  };

  const onChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regExp = /^(\+380)(50|66|67|98|97|96|68|39|63|93|99|95){1}[0-9]{7}$/;
    setData({ ...data, phoneNumber: event.target.value });
    if (!regExp.test(event.target.value)) {
      setErrorPhone("Incorrect phone number");
    } else {
      setErrorPhone("");
    }
  };

  const onChangeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regExp = /^\d{1,3}$/;
    setData({ ...data, age: event.target.value });
    if (
      !regExp.test(event.target.value) &&
      Number(event.target.value) >= 18 &&
      Number(event.target.value) <= 122
    ) {
      setErrorAge("Incorrect age");
    } else {
      setErrorAge("");
    }
  };

  const onChangeMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData({ ...data, message: event.target.value });
    if (event.target.value.length >= 100 && event.target.value.length <= 1000) {
      setErrorMessage("Incorrect message");
    } else {
      setErrorMessage("");
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
      </Group>
      <Group>
        <label htmlFor="phoneNumber">phone number</label>
        <input
          value={data.phoneNumber}
          onChange={onChangePhone}
          min={18}
          max={122}
          id="phoneNumber"
          type="phone"
          placeholder="+380123456789"
        />
      </Group>
      <Group>
        <label htmlFor="age">years old</label>
        <input
          value={data.age}
          onChange={onChangeAge}
          id="age"
          type="number"
          placeholder="25"
        />
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
      </Group>
      <Button type="submit">SEND</Button>
    </Form>
  );
};

export default FormContainer1;
