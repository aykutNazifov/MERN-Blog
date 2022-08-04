import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 40px;
`;

export const SinglePost = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
`;

export const Author = styled.p`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 14px;

  span {
    font-size: 16px;
    color: purple;
  }
`;

export const Desc = styled.p`
  padding: 0 20px;
  font-size: 20px;
  font-family: "Times New Roman", Times, serif;
  margin-top: 25px;
  line-height: 30px;
  font-style: normal;
`;

export const Cat = styled.span`
  margin-top: 30px;
  display: inline-block;
  width: 120px;
  height: 40px;
  background-color: blue;
  color: #fff;
  display: grid;
  align-content: center;
  cursor: pointer;
`;

export const CatWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const EditIcons = styled.div`
  display: flex;
  position: absolute;
  top: -5px;
  left: 60px;
  gap: 30px;
`;

export const Edit = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0px 60px;

  input {
    height: 40px;
    border: 1px solid grey;
    outline: none;
    padding: 5px;
    border-radius: 10px;
  }

  textarea {
    border: 1px solid grey;
    outline: none;
    padding: 5px;
    border-radius: 10px;
  }

  button {
    width: 30%;
    padding: 15px 0;
    background-color: yellow;
    color: blue;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 10px;
    align-self: center;
  }
`;

export const Date = styled.div``;
