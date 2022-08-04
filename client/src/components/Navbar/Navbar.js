import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";
import * as S from "./Navbar.styled";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = () => {
    localStorage.removeItem("user");
    dispatch(logout());
  };

  return (
    <S.Container>
      {!user ? (
        <>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/register"}>Register</Link>
            </li>
            <S.Text>Welcome, Guest</S.Text>
          </ul>
        </>
      ) : (
        <>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/write"}>Write</Link>
            </li>
            <li>
              <S.LogOut onClick={handleClick}>Log out</S.LogOut>
            </li>
            <S.Text>Welcome, {user?.username}</S.Text>
          </ul>
        </>
      )}
    </S.Container>
  );
};

export default Navbar;
