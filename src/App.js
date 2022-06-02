import logo from "./logo.svg";
import "./App.css";
import data from "./example_data.json";
import Bartop from "./component/Bartop.js";
import Menu from "./component/Menu.js";
import PlaceList from "./component/PlaceList";
import React, { Component } from "react";

function App() {
  console.log(data);
  data.map((data) => {});
  return (
    <div>
      <Bartop />
      <div className="content">
        <Menu />
        <div className="top-down">
          
          <PlaceList />
        </div>
      </div>
    </div>
  );
}

export default App;
