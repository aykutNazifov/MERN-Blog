import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import * as S from "./Login.styled";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      return alert("You must give username and password!");
    }
    const user = { username, password };

    try {
      const res = await axios.post("http://localhost:5000/auth/login", user);
      localStorage.setItem("user", JSON.stringify(res.data));
      dispatch(login(res.data));
      navigate("/");
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
        <button type="submit" className="btn">
          Login{" "}
        </button>
      </form>
    </S.Container>
  );
};

export default Login;
