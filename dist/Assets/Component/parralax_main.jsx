import "../../../src/App.css";
import Header from "./header";

const ParralaxMain = () => (
  <>
    <div class="parralax-main">
      <Header />
      <main>
        <div class="countainer">
          <h1>
            Selamat datang di <br />
            FastMath...
          </h1>
          <p>
            Anda bisa belajar tentang berbagai macam Materi Matematika di sini,
            <br />
            enjoy your skills here
          </p>
          <a href="#parralax-1">Start Learn</a>
        </div>
        <div class="img">
          <img
            src="/Assets/Image/MathCyber.png"
            alt="Logo Match Cyber"
            width="250"
            height="auto"
          />
        </div>
      </main>
      <div class="sponsor">
        <div class="main-sponsor">
          <span>Inspired By</span>
          <img src="/Assets/Image/DeepAI.png" alt="" />
          <img src="/Assets/Image/MathCity.png" alt="" />
          <img src="/Assets/Image/MathCyber.png" alt="" />
          <img src="/Assets/Image/MathOS.png" alt="" />
        </div>
      </div>
    </div>
  </>
);

export default ParralaxMain;
