import React, { useState } from "react";
// import Navbar from '../components/Navbar'
// import Hero from '../components/Hero'
// import Buttons from '../components/Buttons'
// import Example from '../components/Modal'
// import Button from '../components/Button'
// import Box from '../components/Box'

import Input from "../components/Input.jsx";

const Landingpage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    console.log({ name, email, password, phone });

    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Sign In</h2>

      
        <Input
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Input
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Landingpage;