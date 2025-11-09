import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Parralax1 = () => {
  useEffect(() => {
    const btn1 = document.getElementById("button-1");
    const btn2 = document.getElementById("button-2");
    const btn3 = document.getElementById("button-3");

    const materi = document.querySelector(".container-materi");
    const contohSoal = document.querySelector(".container-contoh_soal");
    const soalLatihan = document.querySelector(".container-soal_latihan");

    function showBtn(acativeBtn, showElm) {
      [btn1, btn2, btn3].forEach((btn) => btn.classList.remove("btnHover"));

      acativeBtn.classList.add("btnHover");

      [materi, contohSoal, soalLatihan].forEach((el) => {
        el.classList.add("btnSelectHidden");
        el.classList.remove("btnSelectShow");
      });

      showElm.classList.add("btnSelectShow");
    }

    btn1?.addEventListener("click", () => showBtn(btn1, materi));
    btn2?.addEventListener("click", () => showBtn(btn2, contohSoal));
    btn3?.addEventListener("click", () => showBtn(btn3, soalLatihan));

    return () => {
      btn1?.removeEventListener("click", () => showBtn(btn1, materi));
      btn2?.removeEventListener("click", () => showBtn(btn2, contohSoal));
      btn3?.removeEventListener("click", () => showBtn(btn3, soalLatihan));
    };
  }, []);

  const [course, setCourse] = useState([]);
  const [courseContohSoal, setCourseContohSoal] = useState([]);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios("http://localhost:3000/course/materi");
        setCourse(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCourse();
  }, []);

  console.log(course);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios("http://localhost:3000/course/contoh-soal");
        setCourseContohSoal(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCourse();
  }, []);

  return (
    <>
      <div class="parralax-1" id="parralax-1">
        <div className="parralax-1-header">
          <div class="header-title">
            <h1>Materi Bunga Majemuk</h1>
            <p>Tiada investasi tanpa matematika, tiada hari tanpa bekerja</p>
          </div>
          <ul>
            <li id="button-1">Materi</li>
            <li id="button-2">Contoh Soal</li>
            <li id="button-3">Soal Latihan</li>
          </ul>
        </div>
        <main>
          <div class="container-materi">
            {course.map((item) => (
              <div class="materi-cards">
                <div class="item-header">
                  <h1 class="uploader">{item.uploader}</h1>
                  <p class="check">Final</p>
                </div>
                <h1 class="title">{item.judul}</h1>
                <p class="description">{item.deskripsi}</p>
                <div class="item-bottom">
                  {localStorage.getItem("user") ? (
                    <Link to={`/materi/${item.id}`}>
                      <button>start</button>
                    </Link>
                  ) : (
                    <Link to={`/login`}>
                      <button>start</button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div class="container-contoh_soal">
            {courseContohSoal.map((item) => (
              <div class="contoh_soal-cards">
                <div class="item-header">
                  <h1 class="uploader">{item.uploader}</h1>
                  <p class="check">Completed</p>
                </div>
                <h1 class="title">{item.judul}</h1>
                <p class="description">{item.deskripsi}</p>
                <div class="item-bottom">
                  {localStorage.getItem("user") ? (
                    <Link to={`/materi/${item.id}`}>
                      <button>start</button>
                    </Link>
                  ) : (
                    <Link to={`/login`}>
                      <button>start</button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div class="container-soal_latihan">
            <div class="soal_latihan-cards">
              <div class="item-header">
                <h1 class="uploader">Admin</h1>
                <p class="check">Completed</p>
              </div>
              <h1 class="title">Soal Latihan 1</h1>
              <p class="description">Menghitung tabungan dan hasil investasi</p>
              <div class="item-bottom">
                {localStorage.getItem("user") ? (
                  <Link to={`/soal-latihan1`}>
                    <button>start</button>
                  </Link>
                ) : (
                  <Link to={`/login`}>
                    <button>start</button>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <button class="more-course">More Course</button>
        </main>
      </div>
    </>
  );
};

export default Parralax1;
