import "../styles/Auth.scss";

const Signup = ({ signup, setSignup }) => {
  return (
    <div className="auth">
      <div className="auth_bg" onClick={() => setSignup(false)}></div>
      <div className="auth_container">
        <i className="bi bi-x-lg close" onClick={() => setSignup(false)}></i>
        <h1 className="title">Create your KON10DR account</h1>
        <p className="descp">
          Already have an account? <span className="type">Login</span>
        </p>
        <br />
        <button className="google">
          <i className="bi bi-google"></i> SIGN UP WITH GOOGLE
        </button>
        <button className="discord">
          <i className="bi bi-discord"></i> SIGN UP WITH DISCORD
        </button>
        <button className="twitch">
          <i className="bi bi-twitch"></i> SIGN UP WITH TWITCH
        </button>
        <div className="divider">or</div>
        <form action="">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
          <br />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <br />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
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
