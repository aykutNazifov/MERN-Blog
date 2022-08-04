import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 50px;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 40px;
  }
`;

export const Wrapper = styled.form`
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  button {
    background-color: orange;
    color: #fff;
    width: 150px;
    padding: 10px 0;

    border: none;

    border-radius: 5px;
    cursor: pointer;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  input {
    border: 1px solid orange;
    font-size: 22px;
  }

  textarea {
    width: 500px;
    height: 200px;
    padding: 10px;
    border: 1px solid orange;
    outline: none;
    font-size: 18px;
    border-radius: 5px;
  }

  select {
    width: 300px;
    height: 70px;
  }
`;
