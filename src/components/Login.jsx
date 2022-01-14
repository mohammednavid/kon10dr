import "../styles/Auth.scss";
import Auth from "../Auth";
import { useState } from "react";
import { supabase } from "../client";
import { useHistory } from "react-router-dom";

const Login = ({ login, setLogin, setSignup }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const { user, session, error } = await supabase.auth.signIn({
      email: email,
      password: password,
    });
    if (user) {
      setLogin(false)
      history.push("/");
    }
  };
  return (
    <div className="auth">
      <div className="auth_bg" onClick={() => setLogin(false)}></div>
      <div className="auth_container">
        <i className="bi bi-x-lg close" onClick={() => setLogin(false)}></i>
        <h1 className="title">Login in to your KON10DR account</h1>
        <p className="descp">
          Don’t have an account?{" "}
          <span
            className="type"
            onClick={() => setLogin(false) || setSignup(true)}
          >
            Signup
          </span>
        </p>
        <br />
        <Auth login />
        <div className="divider">or</div>
        <form onSubmit={handleLogin}>
          {/* <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
          <br /> */}
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
          <br />
          <button className="submit" type="submit">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
