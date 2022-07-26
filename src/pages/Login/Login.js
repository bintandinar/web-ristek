import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./index.css";

export default function Login() {
  const initialData = {
    name: "",
    token: "",
  };
  const [inputData, setInputData] = useState(initialData);
  const navigate = useNavigate();

  const handleInput = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    if (
      inputData.name === process.env.REACT_APP_NAME &&
      inputData.token === process.env.REACT_APP_TOKEN
    ) {
      localStorage.setItem("token", inputData.token);
      navigate(`/`);
    }
  };
  return (
    <>
      <Navbar />
      <div className="login">
        <div className="login-form">
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <div className="form-floating">
                <input
                  className="form-control"
                  name="name"
                  onChange={handleInput}
                  placeholder="Name"
                  type="text"
                  value={inputData?.name}
                />
                <label htmlFor="floatingInput">Name</label>
              </div>
              <div className="form-floating">
                <input
                  className="form-control"
                  name="token"
                  onChange={handleInput}
                  placeholder="Token"
                  type="text"
                  value={inputData?.token}
                />
                <label htmlFor="floatingInput">Token</label>
              </div>
            </div>
            <button className="login-btn">Login</button>
          </form>
        </div>
      </div>
    </>
  );
}
