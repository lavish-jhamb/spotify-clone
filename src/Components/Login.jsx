import React from "react";

import Logo from "../img/Spotify_Logo.png";

import { loginUrl } from "../spotify";

import "../Css/Login.css";

function Login() {
  return (
    <>
      <div className="login">
        <img src={Logo} alt="LOGO" />
        <a href={loginUrl}> LOGIN WITH SPOTIFY</a>
      </div>
    </>
  );
}

export default Login;
