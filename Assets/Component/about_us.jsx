import Fasterino from "../Image/team/Fasterino.jpg";
import Rehan from "../Image/team/Pak_poh.jpg";
import Rosyad from "../Image/team/Rosyad.jpg";
import Nazwa from "../Image/team/Nazwa.jpg";
import Header from "./header";
import "./about_us.css";
import Footer from "./footer";
const AboutUs = () => {
  const TeamBers = [
    {
      name: "Fasterino Rafael V.",
      role: "Developer Of FasthMath",
      email: "rinofaster89@gmail.com",
      img: Fasterino,
      alt: "Young Asian male software engineer...",
    },
    {
      name: "M. Wildan Rosyadi",
      role: "Developer Of FasthMath",
      email: "akunbaruku@gmail.com",
      img: Rosyad,
      alt: "Young Asian male software engineer...",
    },
    {
      name: "M. Rehan Ardiansyah",
      role: "Developer Of FasthMath",
      email: "rehan@gmail.com",
      img: Rehan,
      alt: "Young Asian male software engineer...",
    },
    {
      name: "Nazwa Dini",
      role: "Developer Of FasthMath",
      email: "nazwa@gmail.com",
      img: Nazwa,
      alt: "Young Asian male software engineer...",
    },
  ];

  return (
    <>
      <Header />
      <div className="container-aboutUs">
        <h1 className="title">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-7 lg:grid-cols-4 gap-5">
          {TeamBers.map((member, index) => (
            <div
              key={index}
              className="team-card bg-white p-6 shadow-md hover:shadow-lg"
            >
              <div className="w-full h-60 mb-4 rounded-lg overflow-hidden cursor-pointer">
                <img
                  src={member.img}
                  alt={member.alt}
                  className="w-full h-full object-cover"
                  onError={(e) =>
                    (e.target.src = "https://placehold.co/300x300")
                  }
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-500 mb-4">{member.role}</p>
              <a href={`mailto:${member.email}`} className="text-blue-500">
                {member.email}
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
