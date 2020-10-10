import React from "react";
import "../Css/SidebarOption.css";

function SidebarOption({ title, Icon }) {
  return (
    <div className="sidebarOption">
      {Icon ? (
        <div className="sidebarWraper">
          <Icon />
          <h5>{title}</h5>
        </div>
      ) : (
        <p>{title}</p>
      )}
    </div>
  );
}

export default SidebarOption;
