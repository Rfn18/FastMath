import React, { useState, useEffect } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  useEffect(() => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  }, []);

  const [values, setValues] = useState({
    nama: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/login", values)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem("user", JSON.stringify(res.data));
          alert("Login successful");
          navigate("/");
        } else {
          alert("Login failed");
        }
      })
      .catch((err) => console.error(err));
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/register", values)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("Register successful");
          navigate("/login");
        } else {
          alert("Register failed");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container-auth">
      <div className="container" id="container">
        {/* Sign Up */}
        <div className="form-container sign-up-container">
          <form onSubmit={handleSubmitRegister} action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setValues({ ...values, nama: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              required
            />
            <button>Sign Up</button>
          </form>
        </div>

        {/* Sign In */}
        <div className="form-container sign-in-container">
          <form onSubmit={handleSubmitLogin} action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              required
            />
            <a href="#">Make sure your password is strong!</a>
            <button>Sign In</button>
          </form>
        </div>

        {/* Overlay */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
