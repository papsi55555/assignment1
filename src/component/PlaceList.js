import React from "react";
import line_placelist from "../img/PlaceList/line-PlaceList.png";
import search from "../img/PlaceList/search.png";
import { Dropdown } from 'react-bootstrap';
// import { BsSearch } from "react-icons/bs";

export default function PlaceList() {
  return (
    <div className="placelist">

      <div className="list">Place List</div>

      <div className="box-search">


        <Dropdown>
          <Dropdown.Toggle
            style={{
              backgroundColor: "white",
              borderRadius: "50px",
              width: "185px",
              height: "40px",
              borderColor: "#134b8a"
            }} variant="white" id="dropdown-basic">
            All
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Restaurent</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Bakery</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Cafe</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div className="line-p">
          <img src={line_placelist}></img>
        </div>
        <div class="inner-addon right-addon">
          <i class="glyphicon uil uil-search"></i>
          <input type="text" class="form-control" placeholder="Search name..." />
        </div>
      </div>
    </div>

  );
}
