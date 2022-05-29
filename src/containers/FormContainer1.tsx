import React from "react";
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


const FormContainer1 = () => {

  const forma = document.forms['form'];

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(forma);
    const data = Object.fromEntries(formData.entries());

    return console.log(data);
  };

  return (
    <Form id="form" onSubmit={handleSubmit}>
      <Group>
        <label htmlFor="email">email*</label>
        <input id="email" type="email" placeholder="name@mail.com" required />
      </Group>
      <Group>
        <label htmlFor="username">username*</label>
        <input id="username" type="text" placeholder="user_name" required />
      </Group>
      <Group>
        <label htmlFor="phoneNumber">phone number</label>
        <input id="phoneNumber" type="phone" placeholder="+380123456789" />
      </Group>
      <Group>
        <label htmlFor="email">years old</label>
        <input id="email" type="number" placeholder="25" />
      </Group>
      <Group>
        <label htmlFor="message">message*</label>
        <textarea
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
