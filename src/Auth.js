import { useHistory } from "react-router-dom";
import { supabase } from "./client";

const Auth = ({ login }) => {
  const history = useHistory();

  async function signInWithGoogle() {
      await supabase.auth.signIn({
        provider: "google",
      });
      history.push("/");
  }
  async function signInWithDiscord() {
      await supabase.auth.signIn({
        provider: "discord",
      });
      history.push("/");
  }

  async function signInWithTwitch() {
      await supabase.auth.signIn({
        provider: "twitch",
      });
      history.push("/");
  }

  return (
    <>
      <button className="google" onClick={signInWithGoogle}>
        <i className="bi bi-google"></i>
        {login ? "LOGIN" : "SIGN UP"} WITH GOOGLE
      </button>
      <button className="discord" onClick={signInWithDiscord}>
        <i className="bi bi-discord"></i>
        {login ? "LOGIN" : "SIGN UP"} WITH DISCORD
      </button>
      <button className="twitch" onClick={signInWithTwitch}>
        <i className="bi bi-twitch"></i>
        {login ? "LOGIN" : "SIGN UP"} WITH TWITCH
      </button>
    </>
  );
};

export default Auth;
