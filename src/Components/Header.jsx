import React from "react";
import "../Css/Header.css";

import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../dataLayer";

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <>
      <div className="header">
        <div className="header_left">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search for Artists , Songs and Album"
          />
        </div>
        <div className="header_right">
          <Avatar src="" alt="user_name" />
          <h4>{user?.display_name}</h4>
        </div>
      </div>
    </>
  );
}

export default Header;
