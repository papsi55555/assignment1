import React from "react";

import profile from "../img/bartop/profile.png";
import bell from "../img/bartop/bell.png";
import Vector from "../img/bartop/Vector.png";
import dot from "../img/bartop/dot.png";

export default function Bartop() {
  return (
    <div className="bartop">
      <div className="bargroup">
        <div className="bell">
          <div>
            <img src={dot}></img>
          </div>
          <img src={bell}></img>
        </div>
        <div className="profile">
          <img src={profile}></img>
        </div>
        <div className="name">Akkarapol</div>
        <div className="vector">
          <img src={Vector}></img>
        </div>
      </div>
    </div>
  );
}
