import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class StatusArea extends Component {
  constructor() {
    super();
    this.state = {};
  }
  postToDatabase = async () => {
    try{
      const post = await axios.post('/api/post', {
      user_id: this.props.initialData.userInfo.id,
      type: 'text',
      content: this.state.status
      })
      console.log(post)
    }
    catch(error){
      console.log(error)
    }
  }
  change = async (event) => {
    const name = event.target.name
    const value = event.target.type == 'checkbox' ? event.target.checked : event.target.value

    this.setState({
      [name]:value
    },()=> {
      console.log(this.state)
    })
  }
  render() {
    if(this.props.initialData.userInfo !== undefined){
      return (

          <div className="status-area">
              <div className="post-box">
                <textarea
                  name="status"
                  rows={8}
                  cols={80}
                  placeholder="Write something"
                  value={this.state.status}
                  onChange={this.change}
                />
                <div className="user-img" style={{
                  background:`url(${this.props.initialData.userInfo.image_url})`,backgroundSize:'cover', backgroundPosition:'center'
                }} />
                <div className="buttons">
                  <div className="button">
                    <a>
                      <i className="fas fa-camera" />
                    </a>
                  </div>
                  <div className="button">
                    <a>
                      <i className="fas fa-video" />
                    </a>
                  </div>
                  <div className="button send-btn" onClick={this.postToDatabase}>
                    <a>
                      <i className="fas fa-paper-plane" />
                    </a>
                  </div>
                </div>
              </div>
          </div>

      );
    }else{
      return (

          <div className="status-area">
              loading..
          </div>
      );
    }
  }
}
