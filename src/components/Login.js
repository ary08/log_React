import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [massage, setMassage] = useState({});

  const handleOnClick = (event) => {
    event.preventDefault();
    setMassage({
      email: email,
      password: password
    });
  };
  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleOnClick}>
        Email: <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <br />
        <br />
        Password:{" "}
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <div>
        <p>{massage.email}</p>
        <p>{massage.password}</p>
      </div>
      {/* <h1>{massage}</h1> */}
    </div>
  );
};

export default Login;
