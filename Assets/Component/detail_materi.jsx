import { Link, useParams } from "react-router-dom";
import Header from "./header";
import "./detail_materi.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./footer";

const Materi = () => {
  const [course, setCourse] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios(`http://localhost:3000/course/id/${id}`);
        setCourse(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCourse();
  }, [id]);
  console.log(course);
  if (!course) return <p>Loading...</p>;

  const lanjut = course.id + 1;

  return (
    <>
      <Header />
      <div className="container-materi">
        <div className="container-main">
          <div className="materi-image">
            <img src={course.gambar_materi} alt="gambar" />
          </div>
          <div className="text-section">
            <h2 className="text-3xl antialiased font-bold">{course.judul}</h2>
            <p className="text-lg mt-2 deskripsi">
              {course.deskripsi?.replace(/\\n/g, "\n")}
            </p>
            <h1 className="text-lg font-bold kategori">
              kategori : {course.kategori}
            </h1>
          </div>
        </div>
        <div className="container-bottom">
          <div className="uploader-bottom">
            <i className="fa-solid fa-user"></i>
            <p>{course.uploader}</p>
          </div>
          <div className="button-bottom">
            <Link to={"/#parralax-1"}>
              <button className="back">Kembali</button>
            </Link>
            <Link to={`/materi/${lanjut}`}>
              <button>Lanjut</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Materi;
