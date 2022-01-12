import { useEffect, useState } from "react";
import "../styles/NavBar.scss";
import Login from "./Login";
import SideNav from "./SideNav";
import Signup from "./Signup";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  useEffect(() => {
    window
      .matchMedia("(min-width: 901px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, [matches]);

  return (
    <>
      {login && <Login login={login} setLogin={setLogin} />}
      {signup && <Signup signup={signup} setSignup={setSignup} />}
      <nav className="navbar">
        <div className="navbar_container">
          <ul className="navbar_left">
            <li className="navbar_logo">
              <img src="/logo.svg" alt="Kon10dr" />
            </li>
            <li className="navbar_link">Home</li>
            <li className="navbar_link">Games</li>
            <li className="navbar_link">About Us</li>
            <li className="navbar_link">Tournaments</li>
          </ul>
          <div className="navbar_center">
            {/* <i className="bi bi-search"/>Search here</i> */}
            <input type="text" placeholder="Search here..." />
          </div>
          <div className="navbar_right">
            <a href="#" className="navbar_login" onClick={() =>setLogin(true)}>
              Login
            </a>
            <a href="#" className="navbar_signup" onClick={() =>setSignup(true)}>
              Sign Up
            </a>
            {menu ? (
              <i className="bi bi-x-lg" onClick={() => setMenu(false)}></i>
            ) : (
              <i className="bi bi-list" onClick={() => setMenu(!menu)}></i>
            )}
          </div>
        </div>
      </nav>
      {(menu || matches) && <SideNav />}
    </>
  );
};

export default NavBar;
