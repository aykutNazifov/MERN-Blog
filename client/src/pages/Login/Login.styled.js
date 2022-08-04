import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  background-color: rgb(2, 2, 22);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    padding: 10px 0;
    width: 100%;
    border: none;
    background-color: green;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  input {
    width: 330px;
    height: 45px;
    margin-top: 5px;
    padding: 0 10px;
    border: none;
    outline: none;
    border-radius: 6px;
  }
`;
