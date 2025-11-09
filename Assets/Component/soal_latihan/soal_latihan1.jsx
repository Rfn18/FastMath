import { Link } from "react-router-dom";
import Header from "../header";
import { useEffect, useState } from "react";

const SoalLatihan = () => {
  const questions = [
    {
      pertanyaan:
        "Tabungan awal Rp 1.500.000 dengan bunga majemuk 6% per tahun selama 4 tahun. Berapa total tabungan akhirnya?",
      options: ["Rp 1.893.750", "Rp 1.993.750", "Rp 2.800.000", "Rp 1.113.000"],
      answer: "Rp 1.893.750",
    },
    {
      pertanyaan:
        "Investasi Rp 3.000.000 menghasilkan bunga majemuk 8% per tahun. Hitung nilai akhir setelah 6 tahun.",
      options: ["Rp 893.750", "Rp 4.760.700", "Rp 4.800.000", "Rp 5.113.000"],
      answer: "Rp 4.760.700",
    },
    {
      pertanyaan:
        "Seorang pelajar menabung Rp 1.000.000 dengan bunga majemuk 10% per tahun. Setelah 2 tahun, berapa bunga yang didapat?",
      options: ["150.000", "220.000", "Rp 200.000", "Rp 210.000"],
      answer: "Rp 210.000",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showResult, setShowResult] = useState(false);
  const handleAnswer = () => {
    if (selectedOption === questions[currentIndex].answer) {
      setScore(score + 1);
    }
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption("");
    } else {
      setShowResult(true);
    }
  };

  // nilai

  const nilaiSatuan = 100 / questions.length;
  const nilaiAhir = nilaiSatuan * score;

  return (
    <>
      <Header />

      <div className="container-latihan-soal">
        {showResult ? (
          <div className="container-result">
            <h2>Nilai kamu = {nilaiAhir}</h2>
          </div>
        ) : (
          <>
            <h1>Soal Latihan 1</h1>
            <p>{questions[currentIndex].pertanyaan}</p>
            <div className="container-soal">
              {questions[currentIndex].options.map((option, index) => (
                <div key={index} className="container-jawaban">
                  <label>
                    <input
                      type="radio"
                      name="option"
                      value={option}
                      checked={selectedOption === option}
                      onChange={(e) => setSelectedOption(e.target.value)}
                    />
                    <p>{option}</p>
                  </label>
                </div>
              ))}
            </div>
          </>
        )}
        <div className="latihan-soal-bottom">
          <Link to={"/"}>
            <button className="btn-back">kembali</button>
          </Link>
          <button
            onClick={handleAnswer}
            disabled={!selectedOption}
            className="btn-finish"
          >
            {currentIndex + 1 === questions.length ? "Selesai" : "Lanjut"}
          </button>
        </div>
      </div>
    </>
  );
};

export default SoalLatihan;
