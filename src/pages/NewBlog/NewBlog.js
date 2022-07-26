import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./index.css";
import axios from "axios";
import { PuffLoader } from "react-spinners";

export default function NewBlog() {
  const initialData = {
    title: "",
    content: "",
  };
  const [inputData, setInputData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const handleInput = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
    e.preventDefault();
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    axios
      .post("https://sistech-api.vercel.app/blog", inputData, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
        },
      })
      .then((res) => {
        setIsLoading(false);
        console.log(res.data);
        navigate(`/blog/${res.data.id}`, { state: { blog: res.data } });
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
              value={inputData?.title}
            />
            <label htmlFor="floatingInput">Title</label>
          </div>
          <div className="form-floating">
            <textarea
              className="form-control"
              name="content"
              onChange={handleInput}
              placeholder="What's the content?"
              value={inputData?.content}
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
