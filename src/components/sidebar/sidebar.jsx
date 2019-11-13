import React, { Component } from "react";
import "./sidebar.scss";

class sidebar extends Component {
  state = {};
  render() {
    return(
      <div id="sidebar" className="col-md-2  bg-secondary text-white">
        Sidebar
      </div>
    );
  }
}

export default sidebar;
