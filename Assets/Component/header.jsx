import { Link } from "react-router-dom";
import Login from "./auth/login";

const Header = () => {
  const user = localStorage.getItem("user");
  return (
    <header>
      <div class="nav">
        <ul>
          <p>
            Fast<span>Math</span>
          </p>
        </ul>
        <div class="centernav">
          <ul>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/"}>
              <li>Materi</li>
            </Link>
            <Link to={"/about_us"}>
              <li>About Us</li>
            </Link>
            <a href="">
              <li>Contact</li>
            </a>
          </ul>
        </div>
        {localStorage.getItem("user") ? (
          <Link to={"/profile"}>
            <i className="fa-solid fa-user user-profile-icon"></i>
          </Link>
        ) : (
          <Link to={"/Login"}>
            <button className="btn-login">Login</button>
          </Link>
        )}
      </div>
    </header>
  );
};
export default Header;
