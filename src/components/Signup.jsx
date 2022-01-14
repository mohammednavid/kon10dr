import { useState } from "react";
import Auth from "../Auth";
import { supabase } from "../client";
import "../styles/Auth.scss";

const Signup = ({ signup, setSignup, setLogin }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    const { user, session, error } = await supabase.auth.signUp(
      {
        email: email,
        password: password,
      },
      {
        data: {
          username: username,
        },
      }
    );
    if(user){
      setSignup(false)
      alert(user.email)
    }
  };
  return (
    <div className="auth">
      <div className="auth_bg" onClick={() => setSignup(false)}></div>
      <div className="auth_container">
        <i className="bi bi-x-lg close" onClick={() => setSignup(false)}></i>
        <h1 className="title">Create your KON10DR account</h1>
        <p className="descp">
          Already have an account?{" "}
          <span
            className="type"
            onClick={() => setSignup(false) || setLogin(true)}
          >
            Login
          </span>
        </p>
        <br />
        <Auth />
        <div className="divider">or</div>
        <form onSubmit={handleSignup}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button className="submit" type="submit">
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
