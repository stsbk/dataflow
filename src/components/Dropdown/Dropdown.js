import React from "react";
import './styles.css';

export default function Dropdown() {
    return(
      <div className="dropdown">
          <button className="dropbtn">Name Here ˅</button>
          <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
          </div>
      </div>
    )
}
