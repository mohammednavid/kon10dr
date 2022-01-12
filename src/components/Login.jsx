import "../styles/Auth.scss";

const Login = ({login,setLogin}) => {
  return (
    <div className="auth">
      <div className="auth_bg" onClick={() => setLogin(false)}></div>
      <div className="auth_container">
      <i className="bi bi-x-lg close" onClick={() => setLogin(false)}></i>
        <h1 className="title">Login in to your KON10DR account</h1>
        <p className="descp">
          Don’t have an account? <span className="type">LOGIN</span>
        </p>
        <br />
        <button className="google">
          <i className="bi bi-google"></i> LOGIN WITH GOOGLE
        </button>
        <button className="discord">
          <i className="bi bi-discord"></i> LOGIN WITH DISCORD
        </button>
        <button className="twitch">
          <i className="bi bi-twitch"></i> LOGIN WITH TWITCH
        </button>
        <div className="divider">or</div>
        <form action="">
          {/* <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
          <br /> */}
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <br />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
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
