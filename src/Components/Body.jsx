import React from "react";
import "../Css/Body.css";

import WeeklyHit from "../img/maroon_5.jpg";

import Header from "../Components/Header";
import SongRow from "../Components/SongRow";
import { useDataLayerValue } from "../dataLayer";
import {
  FavoriteOutlined,
  MoreHoriz,
  PlayCircleFilled,
} from "@material-ui/icons";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  console.log(discover_weekly);
  return (
    <>
      <div className="body">
        <Header spotify={spotify} />

        <div className="body_info">
          <img src={discover_weekly?.images[0].url} alt="weekly hit" />
          <div className="body_infoText">
            <strong>Playlist</strong>
            <h2>Discover weekly</h2>
            <p>{discover_weekly?.name}</p>
          </div>
        </div>
        <div className="body_songs">
          <div className="body_icons">
            <PlayCircleFilled className="body_shuffle" />
            <FavoriteOutlined fontSize="large" className="" />
            <MoreHoriz className="" />
          </div>
          {/* LIST OF SONGS */}
          {discover_weekly?.tracks.items.map((item) => (
            <SongRow track={item.track} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Body;
