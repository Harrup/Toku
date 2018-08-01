import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

import StatusArea from './StatusArea';
import Updates from './Updates';
import LoadingScreen from './LoadingScreen';


export default class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount(){
        this.setState({
          initialData:this.props.initialData
        },()=>{
          console.log(this.state)
        })
      }
  render() {
    return (
      <div className='content-area'>
        <StatusArea initialData={(this.state.initialData == undefined) ? 'loading' : this.state.initialData }/>
        <Updates initialData={(this.state.initialData == undefined) ? 'loading' : this.state.initialData }/>
      </div>
    );
  }
}
