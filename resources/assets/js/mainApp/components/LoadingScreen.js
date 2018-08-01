import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class LoadingScreen extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
        <section id="loading-screen" className={(this.props.userData == 'loading') ? 'active' : ''}>
          <div className="lds-css ng-scope">
            <div style={{width:'100%',height:'100%'}} className="lds-eclipse">
              <div>
              </div>
            </div>
          </div>
          <div className="loading-text">
            Loading..
          </div>
        </section>
    );
  }
}
