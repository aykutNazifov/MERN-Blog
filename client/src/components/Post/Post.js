import React from "react";
import { Link } from "react-router-dom";
import * as S from "./Post.styled";

const Post = ({ post }) => {
  const truncText = (desc) => {
    if (desc.length > 100) {
      return desc.slice(0, 100) + "...";
    } else {
      return desc;
    }
  };
  return (
    <S.Container>
      <Link to={`/post/${post._id}`}>
        <S.Title>{post.title}</S.Title>
        <p>{truncText(post.description)} </p>
        <S.Author>
          Author: <span>{post.user}</span>
        </S.Author>
      </Link>
    </S.Container>
  );
};

export default Post;
