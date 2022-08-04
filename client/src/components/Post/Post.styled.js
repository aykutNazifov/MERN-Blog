import styled from "styled-components";

export const Container = styled.div`
  text-decoration: none;
  padding: 25px 20px;
  width: 30%;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid purple;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 22px;
  margin-bottom: 10px;
  text-align: center;
`;

export const Author = styled.p`
  position: absolute;
  bottom: 5px;
  right: 5px;

  span {
    color: purple;
  }
`;
