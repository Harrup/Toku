import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import LoadingScreen from './LoadingScreen';
import axios from 'axios';


export default class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount(){
    const self = this
    const {match, location, history} = self.props.routeProps
    const getUserData = async function(){
      try{
        const userProfile = await axios.get(`/api/user/${match.params.id}`)
        self.setState({
          initialData:self.props.initialData,
          userProfile: userProfile.data[0]
        },()=>{
          console.log(self.state)
        })
      }
      catch(error){
        console.log(error)
      }
    }
    getUserData()
  }
  render() {
    if(this.state.userProfile !== undefined){
      return (
        <div className='content-area profile'>
          <div className='user-profile'>
            <div className='user-img'><img src={`${this.state.userProfile.image_url}`} /></div>
            <div className='user-info'>
              <h1>{`${this.state.userProfile.firstname} ${this.state.userProfile.lastname}`}</h1>
              <div className='follow-btn'>Follow</div>
            </div>
          </div>
        </div>
      );
    }else{
      return (
        <div className='content-area profile'>
          Loading..
        </div>
      );
    }
  }
}
