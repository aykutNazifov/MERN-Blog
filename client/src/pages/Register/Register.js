import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as S from "./Register.styled";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      return alert("You must give username and password!");
    }
    const user = { username, password };

    try {
      await axios.post("http://localhost:5000/auth/register", user);

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <S.Container>
      <form onSubmit={handleSubmit}>
        <S.FormGroup>
          <label>Username</label>
          <input
            type="text"
            placeholder="Username..."
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </S.FormGroup>
        <S.FormGroup>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password..."
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </S.FormGroup>
        <button className="btn">Register </button>
      </form>
    </S.Container>
  );
};

export default Register;
