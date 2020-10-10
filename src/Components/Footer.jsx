import React from "react";
import "../Css/Footer.css";

import AlbumPhoto from "../img/maroon_5.jpg";

import PlayCircleFilledWhiteOutlinedIcon from "@material-ui/icons/PlayCircleFilledWhiteOutlined";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { PlayCircleOutlineOutlined, VolumeDown } from "@material-ui/icons";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import Grid from "@material-ui/core/Grid";
import { Slider } from "@material-ui/core";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer_left">
          <img src={AlbumPhoto} alt="album photo" />
          <div className="footer_songInfo">
            <h4>Yeahh..</h4>
            <p>Usher</p>
          </div>
        </div>
        <div className="footer_center">
          <ShuffleIcon className="footer_green" />
          <SkipPreviousIcon className="footer_icon" />
          <PlayCircleOutlineOutlined className="footer_icon" />
          <SkipNextIcon className="footer_icon" />
          <RepeatIcon className="footer_green" />
        </div>
        <div className="footer_right">
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon />
            </Grid>
            <Grid item>
              <VolumeDown />
            </Grid>
            <Grid item xs>
              <Slider />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Footer;
