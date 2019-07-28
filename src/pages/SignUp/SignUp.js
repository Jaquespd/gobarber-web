import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '@/assets/img/gobarber_logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Please enter your name'),
  email: Yup.string()
    .email('Invalid e-mail address')
    .required('E-mail is required'),
  password: Yup.string()
    .min(6, 'Password must have at least 6 characters')
    .required('Password is required'),
});

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <h1>
        <img src={logo} alt="GoBarber" />
      </h1>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Your name" />
        <Input name="email" type="email" placeholder="Your e-mail" />
        <Input name="password" type="password" placeholder="Your password" />
        <button type="submit">Create Account</button>
        <Link to="/">I already have an account</Link>
      </Form>
    </>
  );
}
