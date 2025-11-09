import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import SoalLatihan from "../Assets/Component/soal_latihan/soal_latihan1";
import Login from "../Assets/Component/auth/login";
import Profile from "../Assets/Component/profile";
import AboutUs from "../Assets/Component/about_us";
import Materi from "../Assets/Component/detail_materi";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />,
      <Route path="/soal-latihan1" element={<SoalLatihan />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about_us" element={<AboutUs />} />
      <Route path="/materi/:id" element={<Materi />} />
    </Routes>
  </BrowserRouter>
);
