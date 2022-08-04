import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Post from "../../components/Post/Post";
import * as S from "./Home.styled";
import { useLocation } from "react-router-dom";

import axios from "axios";

const Home = () => {
  const { user } = useSelector((state) => state.user);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  const cate = useLocation().search.split("=")[1];

  const fetchPost = async () => {
    if (cate) {
      const res = await axios(`http://localhost:5000/post/?cat=${cate}`);
      setPosts(res.data);
    } else {
      const res = await axios("http://localhost:5000/post");
      setPosts(res.data);
    }
  };

  const handleSearch = async () => {
    const res = await axios(`http://localhost:5000/post/?cat=${search}`);
    setPosts(res.data);
    setSearch("");
  };

  useEffect(() => {
    fetchPost();
  }, [cate]);
  return (
    <S.Container>
      <S.SearchWrapper>
        <h2>Search by categories</h2>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button onClick={handleSearch}>Serach</button>
      </S.SearchWrapper>

      {posts.length === 0 && <h1>Dont have posts on this category</h1>}

      <S.Posts>
        {posts?.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </S.Posts>
    </S.Container>
  );
};

export default Home;
