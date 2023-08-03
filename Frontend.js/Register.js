import React, { useState, useEffect } from "react";
import { registerUser } from 


const Register = ({ setIsLoggedIn, setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, SetConfirmPassword] = useState('');
  const [response, setResponse] = useState('');

  useEffect(() => {
    console.log(response)
  }, [response]);

  return (
    <Form onSubmit={async (event)=> {
      event.preventDefault();
      if (username.length >= 6 && password.length >= 6 && password === confirmPassword)
    }}

  )
}

export default Register; 