import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { PuffLoader } from "react-spinners";

export default function EditBlog() {
  const { state } = useLocation();
  const [blogs, setBlogs] = useState(state.blog);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleInput = (e) => {
    setBlogs({
      ...blogs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const { like, ...newData } = await blogs;
    axios
      .put("https://sistech-api.vercel.app/blog", newData, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      })
      .then((res) => {
        setIsLoading(false);
        console.log(res.data);
        navigate(`/blog/${blogs.id}`, {
          state: { blog: { ...res.data, id: blogs.id } },
        });
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  return (
    <>
      {isLoading && (
        <>
          <div className="loading-wrapper">
            <div className="loading">
              <PuffLoader loading={isLoading} color="#14B789" size={150} />
            </div>
          </div>
          <div className="overlay"></div>
        </>
      )}
      <Navbar token={token} />
      <div className="new-blog">
        <div className="form">
          <div className="form-floating">
            <input
              className="form-control"
              name="title"
              onChange={handleInput}
              placeholder="Title"
              type="text"
              value={blogs?.title}
            />
            <label htmlFor="floatingInput">Title</label>
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              name="content"
              onChange={handleInput}
              placeholder="What's the content?"
              value={blogs?.content}
            ></textarea>
            <label htmlFor="floatingTextarea">What's the content?</label>
          </div>
          <button className="btn-save" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </>
  );
}
