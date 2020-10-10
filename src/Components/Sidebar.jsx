import React from "react";
import "../Css/Sidebar.css";

import Logo from "../img/Spotify_Logo.png";
import SidebarOption from "../Components/SidebarOption";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../dataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <>
      <div className="sidebar">
        <img className="sidebar_logo" src={Logo} alt="" />
        <SidebarOption Icon={HomeIcon} title="Home" />
        <SidebarOption Icon={SearchIcon} title="Search" />
        <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
        <br />
        <strong className="sidebar_playlist">PLAYLISTS</strong>
        <hr />
        {playlists?.items?.map((playlist) => (
          <SidebarOption title={playlist.name} />
        ))}
      </div>
    </>
  );
}

export default Sidebar;
