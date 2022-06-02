import React from "react";
import logo from "../img/menu/logo.png";
import line_menu from "../img/menu/line-menu.png";
import icon1 from "../img/menu/icon1.png";
import icon2 from "../img/menu/icon2.png";
import icon3 from "../img/menu/icon3.png";

export default function Manu() {
  return (
    <div className="menu">
      <div className="menu-group">
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div className="line-m1">
          <img src={line_menu}></img>
        </div>
        <div className="icon1">
          <div className="icon2">
            <div className="icon3">
              <img src={icon3}></img>
            </div>
            <img src={icon2}></img>
          </div>
          <img src={icon1}></img>
        </div>
        <div className="place">Place</div>
        <div className="line-m2">
          <img src={line_menu}></img>
        </div>
      </div>
    </div>
  );
}
