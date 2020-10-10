import React from "react";
import "../Css/SongRow.css";

function SongRow({ track = "test" }) {
  return (
    <div className="song_row">
      <img className="songRowAlbum" src={track.album.images[0].url} alt="" />
      <div className="songRow_info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
