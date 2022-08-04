import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import * as S from "./Write.styled";

const Write = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      return alert("You must write anything");
    }
    const newPost = { title, description, categories };

    try {
      await axios.post("http://localhost:5000/post", {
        ...newPost,
        user: user.username,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCatChange = (e) => {
    if (!categories.includes(e.target.value)) {
      setCategories([...categories, e.target.value]);
    } else {
      setCategories(categories.filter((c) => c !== e.target.value));
    }
  };
  return (
    <S.Container>
      <img
        src="https://images.unsplash.com/photo-1461773518188-b3e86f98242f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
        alt="asd"
      />
      <S.Wrapper onSubmit={handleSubmit}>
        <S.FormGroup>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </S.FormGroup>
        <S.FormGroup>
          <label>Description</label>
          <textarea
            cols="30"
            rows="10"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </S.FormGroup>
        <S.FormGroup>
          <label>Categories</label>
          <select
            name="categories"
            multiple
            value={categories}
            onChange={handleCatChange}
          >
            <option value="HTML">HTML</option>
            <option value="JavaScript">JavaScript</option>
            <option value="CSS">CSS</option>
            <option value="React">React</option>
          </select>
        </S.FormGroup>
        <button className="btn">Add Post</button>
      </S.Wrapper>
    </S.Container>
  );
};

export default Write;
