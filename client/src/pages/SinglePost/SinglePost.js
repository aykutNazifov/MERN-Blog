import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useSelector } from "react-redux";
import * as S from "./SinglePost.styled";

const SinglePost = () => {
  const [post, setPost] = useState({});
  const [updateMode, setUpdateMode] = useState(false);
  const { user } = useSelector((state) => state.user);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  const id = useParams().id;

  const fetchPost = async () => {
    const res = await axios(`http://localhost:5000/post/${id}`);
    setPost(res.data);
    setTitle(res.data.title);
    setDescription(res.data.description);
    setCategories([...res.data.categories]);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/post/${id}`, {
        data: { user: user.username },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async () => {
    const newPost = { title, description, categories };

    try {
      await axios.put(`http://localhost:5000/post/${id}`, {
        ...newPost,
        user: user.username,
      });
      setUpdateMode(false);
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

  useEffect(() => {
    fetchPost();
  }, [id]);

  return (
    <S.Container>
      {updateMode ? (
        <S.Edit>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            cols="30"
            rows="10"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
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
          <button onClick={handleUpdate}>Update</button>
        </S.Edit>
      ) : (
        <S.SinglePost>
          <h1>{post.title}</h1>
          {post.user === user?.username && (
            <S.EditIcons>
              <AiFillDelete
                onClick={handleDelete}
                size={25}
                style={{ cursor: "pointer", color: "red" }}
              />
              <AiFillEdit
                onClick={() => setUpdateMode(true)}
                size={25}
                style={{ cursor: "pointer", color: "yellow" }}
              />
            </S.EditIcons>
          )}

          <S.Author>
            Author: <span>{post.user}</span>
          </S.Author>
          <S.Desc>{post.description}</S.Desc>
          <S.CatWrapper>
            {post?.categories?.map((cat) => (
              <S.Cat key={cat}>
                <Link to={`/?cat=${cat}`}>{cat}</Link>
              </S.Cat>
            ))}
          </S.CatWrapper>
          <S.Date>{new Date(post.createdAt).toDateString()}</S.Date>
        </S.SinglePost>
      )}
    </S.Container>
  );
};

export default SinglePost;
