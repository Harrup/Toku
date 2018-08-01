import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class SearchHeader extends Component {
  constructor() {
    super();
    this.state = {};
  }
  clickedBtn = () => {};
  render() {
    return (
        <div className="search-header">
          <div className="search-box">
            <input type="text" name="seach" placeholder="search toku" />
          </div>
          <div className="icon-section">
            <div className="icon">
              <a>
                <i className="fas fa-bell" />
              </a>
              <div className="noti ">3</div>
            </div>
            <div className="icon">
              <a>
                <i className="fas fa-comment" />
              </a>
              <div className="noti ">3</div>
            </div>
            <div className="icon">
              <a>
                <i className="fas fa-user" />
              </a>
              <div className="noti active">3</div>
            </div>
          </div>
        </div>

    );
  }
}
