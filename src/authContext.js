// import { createContext } from "react";
// import { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import { supabase } from "./client";

// const AuthContext = createContext();

// export const AuthProvider = (props) => {
//   const [user, setUser] = useState(null);
//   const history = useHistory();
//   useEffect(() => {
//     /* when the app loads, check to see if the user is signed in */
//     checkUser();
//     /* check user on OAuth redirect */
//     window.addEventListener("hashchange", function () {
//       checkUser();
//     });
//   }, []);

//   async function checkUser() {
//     /* if a user is signed in, update local state */
//     const user = supabase.auth.user();
//     setUser(user);
//   }

//   async function signInWithGoogle() {
//       const user = await supabase.auth.signIn({
//         provider: "google",
//       });
//       setUser(user);
//       history.push("/");
//   }
//   async function signInWithDiscord() {
//       const user = await supabase.auth.signIn({
//         provider: "discord",
//       });
//       setUser(user);
//       history.push("/");
//   }

//   async function signInWithTwitch() {
//       await supabase.auth.signIn({
//         provider: "twitch",
//       });
//       history.push("/");
//   }

//   async function signOut() {
//     /* sign the user out */
//     await supabase.auth.signOut();
//     setUser(null);
//   }
//   if (user) {
//       // history.push("/home");
//       return(
//         <>
//         <h1>{user.email}</h1>
//         <button onClick={signOut}>signout</button>
//         </>
//       )
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         signInWithGoogle,
//         signInWithDiscord,
//         signInWithTwitch,
//         signOut,
//       }}
//     >
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;
