import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import SoalLatihan from "../public/Assets/Component/soal_latihan/soal_latihan1";
import Login from "../public/Assets/Component/auth/login";
import Profile from "../public/Assets/Component/profile";
import AboutUs from "../public/Assets/Component/about_us";
import Materi from "../public/Assets/Component/detail_materi";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/FastMath">
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
