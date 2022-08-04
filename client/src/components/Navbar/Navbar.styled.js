import styled from "styled-components";

export const Container = styled.div`
  background-color: rgb(12, 12, 153);
  color: #fff;
  width: 100%;
  height: 60px;
  padding: 0 50px;

  ul {
    height: 100%;
    display: flex;
    align-items: center;
    list-style: none;
    gap: 20px;
  }
`;

export const Text = styled.p`
  margin-left: 50px;
  color: white;
`;

export const LogOut = styled.button`
  padding: 5px 10px;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: red;
  color: #fff;
  cursor: pointer;
`;
