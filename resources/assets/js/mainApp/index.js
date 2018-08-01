import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import axios from 'axios';
import LeftMenu from './components/LeftMenu';
import SearchHeader from './components/SearchHeader';

import Home from './components/Home';
import Profile from './components/Profile';

import StatusArea from './components/StatusArea';
import Updates from './components/Updates';
import Messenger from './components/Messenger';
import LoadingScreen from './components/LoadingScreen';


class Layout extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount(){
    const self = this
    const getInitialData = async function(){
      try{
        const initialData = await axios.get('/api/initialApp')
        self.setState({
          initialData:initialData.data
        },()=>{
          console.log(self.state)
        })
      }
      catch(error){
        console.log(error)
      }
    }
    getInitialData()
  }

  clickedBtn = () => {};
  render() {
    return (
      <Router>
        <div className="app-container home-page">
          <LoadingScreen initialData={(this.state.initialData == undefined) ? 'loading' : this.state.initialData } />
          <LeftMenu initialData={(this.state.initialData == undefined) ? 'loading' : this.state.initialData } />
          <section id="content-container">
            <SearchHeader />

            <Route exact path='/' component={(props) => <Home routeProps={props} initialData={(this.state.initialData == undefined) ? 'loading' : this.state.initialData} />} />
            <Route exact path='/profile/:id' component={(props) => <Profile routeProps={props} initialData={(this.state.initialData == undefined) ? 'loading' : this.state.initialData} />} />

          </section>
          <Messenger />
        </div>
      </Router>
    );
  }
}

const app = document.getElementById("app");

ReactDOM.render(<Layout />, app);
