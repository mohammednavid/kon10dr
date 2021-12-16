import { useEffect, useState } from "react";
import "../styles/NavBar.scss";
import SideNav from "./SideNav";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [matches, setMatches] = useState();

  useEffect(() => {
    window
      .matchMedia("(min-width: 901px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <>
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
            <a href="#" className="navbar_login">
              Login
            </a>
            <a href="#" className="navbar_signup">
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
      {menu && <SideNav />}
      {matches && <SideNav />}
    </>
  );
};

export default NavBar;
