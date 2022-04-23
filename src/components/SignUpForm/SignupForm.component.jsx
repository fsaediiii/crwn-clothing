import React, { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../FormInput/FormInput.component";
import Button from "../Button/Button.component";
import "./SignupForm.styles.scss";

const SignupForm = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const resetForm = (event) => {
    setUserCredentials({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const res = await createUserDocumentFromAuth(user, { displayName });
      resetForm();
    } catch (error) {}
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputOptions={{
            type: "text",
            name: "displayName",
            value: displayName,
            onChange: handleChange,
            required: true,
          }}
        />

        <FormInput
          label="Email"
          inputOptions={{
            type: "email",
            name: "email",
            value: email,
            onChange: handleChange,
            required: true,
          }}
        />

        <FormInput
          label="Password"
          inputOptions={{
            type: "password",
            name: "password",
            value: password,
            onChange: handleChange,
            required: true,
          }}
        />

        <FormInput
          label="Confirm Password"
          inputOptions={{
            type: "password",
            name: "confirmPassword",
            value: confirmPassword,
            onChange: handleChange,
            required: true,
          }}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignupForm;
