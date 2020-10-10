import React from "react";
import "../Css/Player.css";

import Sidebar from "../Components/Sidebar";
import Body from "../Components/Body";
import Footer from "../Components/Footer";

function Player({ spotify }) {
  return (
    <>
      <div className="player">
        <div className="player_body">
          <Sidebar />
          <Body spotify={spotify} />
          {/* sidebar */}
          {/* body */}
        </div>
        <Footer />
        {/* footer */}
      </div>
    </>
  );
}

export default Player;
