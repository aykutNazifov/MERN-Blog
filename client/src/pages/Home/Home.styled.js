import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  background-color: rgb(2, 33, 98);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`;

export const SearchWrapper = styled.div`
  margin-bottom: 30px;

  h2 {
    margin-bottom: 15px;
  }

  input {
    width: 230px;
    border: none;
    padding: 10px 5px;
    outline: none;
  }

  button {
    padding: 10px 20px;
    margin-left: 5px;
    border: none;
    outline: none;
    border-radius: 15px;
    cursor: pointer;
    color: blue;
  }
`;

export const Posts = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: space-around;
  flex-wrap: wrap;
`;
