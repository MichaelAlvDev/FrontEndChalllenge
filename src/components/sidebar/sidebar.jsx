import React, { Component } from "react";
import "./sidebar.scss";
import Sortby from "../sort_by/sort_by";
import MenuCategories from "../menu_categories/menu_categories";

class sidebar extends Component {
  state = {};
  render() {
    return (
      <div id="sidebar" className="col-md-2  bg-secondary text-white">
       <Sortby/>
       <MenuCategories/>
      </div>
    );
  }
}

export default sidebar;
