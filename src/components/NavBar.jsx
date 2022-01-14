import { useEffect, useState } from "react";
import { supabase } from "../client";
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

  const [user, setUser] = useState(null);

  useEffect(() => {
    /* when the app loads, check to see if the user is signed in */
    checkUser();
    /* check user on OAuth redirect */
    window.addEventListener("hashchange", function () {
      checkUser();
    });
  }, [user,supabase.auth.user()]);

  async function checkUser() {
    /* if a user is signed in, update local state */
    const user = supabase.auth.user();
    setUser(user);
  }
  async function signOut() {
    /* sign the user out */
    await supabase.auth.signOut();
    setUser(null);
  }
  return (
    <>
      {login && (
        <Login login={login} setLogin={setLogin} setSignup={setSignup} />
      )}
      {signup && (
        <Signup signup={signup} setSignup={setSignup} setLogin={setLogin} />
      )}
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
            {user ? (
              <>
                <h4 style={{ margin: "0 2%" }}>Hello, {user?.email}</h4>
                <a href="#" className="navbar_signup" onClick={signOut}>
                  Sign Out
                </a>
              </>
            ) : (
              <>
                <a
                  href="#"
                  className="navbar_login"
                  onClick={() => setLogin(true)}
                >
                  Login
                </a>
                <a
                  href="#"
                  className="navbar_signup"
                  onClick={() => setSignup(true)}
                >
                  Sign Up
                </a>
              </>
            )}
            {menu ? (
              <i className="bi bi-x-lg" onClick={() => setMenu(false)}></i>
            ) : (
              <i className="bi bi-list" onClick={() => setMenu(true)}></i>
            )}
          </div>
        </div>
      </nav>
      {/* <div style={{ position: "fixed" }}> */}
      <SideNav menu={menu} setMenu={setMenu} />
      {/* </div> */}
    </>
  );
};

export default NavBar;
