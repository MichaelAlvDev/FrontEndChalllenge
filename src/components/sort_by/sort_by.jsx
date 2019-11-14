import React, { Component } from "react";
import './sort_by.scss';

class sortby extends Component {
  state = {};
  render() {
    return (
      <div className="btn-group sort_by_cont mt-3" role="group">
        <button type="button" className="btn btn-primary text-white"  data-toggle="tooltip" data-placement="left" title="tool" data-original-title="Tooltip on left">
          <i className="fas fa-sort-amount-down"></i>
          {/* <i className="fas fa-sort-amount-down-alt"></i> */}
        </button>
        <button type="button" className="btn btn-primary text-white">
          <i className="fas fa-sort-amount-down"></i>
          {/* <i className="fas fa-sort-amount-down-alt"></i> */}
        </button>
        <button type="button" className="btn btn-primary text-white">
          {/* <i className="fas fa-sort-amount-down"></i> */}
          <i className="fas fa-sort-amount-down-alt"></i>
        </button>
      </div>
    );
  }
}

export default sortby;
