import React, { useEffect, useState } from "react";

// COMPONENTS
import Login from "../Components/Login";
import Player from "../Components/Player";

// DEPENDICES
import spotifyWebApi from "spotify-web-api-js";

// UTILITY FUNCTION
import { getTokenFromUrl } from "../spotify";
import SpotifyWebApi from "spotify-web-api-js";

import { useDataLayerValue } from "../dataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("5rW7NyCeDwrLCEBlhHb8Cb").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, []);

  return (
    <>
      <div className="app">
        {token ? <Player spotify={spotify} /> : <Login />}
      </div>
    </>
  );
}
export default App;
