import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Messenger extends Component {
  constructor() {
    super();
    this.state = {};
  }
  clickedBtn = () => {};
  render() {
    return (
      <section id="messenger">
        <div className="title-section">
          <div className="icon">
            <i className="fab fa-facebook-messenger" />
          </div>
          <div className="title">Messenger</div>
          <div className="dots">
            <i className="fas fa-ellipsis-v" />
          </div>
        </div>
        <div className="friends-section">
          <div className="friend active">
            <div
              className="user-image"
              style={{
                background:
                  'url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5…&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c3…") no-repeat center center',
                backgroundSize: "cover",
                height: 25,
                width: 25,
                borderRadius: "50%"
              }}
            />
            <div className="name">Rodney Little</div>
            <div className="chat-icon">
              <i className="fas fa-comment-dots" />
            </div>
          </div>
        // additional friends for testing
          <div className="friend ">
            <div
              className="user-image"
              style={{
                background:
                  'url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5…&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c3…") no-repeat center center',
                backgroundSize: "cover",
                height: 25,
                width: 25,
                borderRadius: "50%"
              }}
            />
            <div className="name">Rodney Little</div>
            <div className="chat-icon">
              <i className="fas fa-comment-dots" />
            </div>
          </div>
          <div className="friend active">
            <div
              className="user-image"
              style={{
                background:
                  'url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5…&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c3…") no-repeat center center',
                backgroundSize: "cover",
                height: 25,
                width: 25,
                borderRadius: "50%"
              }}
            />
            <div className="name">Rodney Little</div>
            <div className="chat-icon">
              <i className="fas fa-comment-dots" />
            </div>
          </div>
          <div className="friend ">
            <div
              className="user-image"
              style={{
                background:
                  'url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5…&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c3…") no-repeat center center',
                backgroundSize: "cover",
                height: 25,
                width: 25,
                borderRadius: "50%"
              }}
            />
            <div className="name">Rodney Little</div>
            <div className="chat-icon">
              <i className="fas fa-comment-dots" />
            </div>
          </div>
          <div className="friend ">
            <div
              className="user-image"
              style={{
                background:
                  'url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5…&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c3…") no-repeat center center',
                backgroundSize: "cover",
                height: 25,
                width: 25,
                borderRadius: "50%"
              }}
            />
            <div className="name">Rodney Little</div>
            <div className="chat-icon">
              <i className="fas fa-comment-dots" />
            </div>
          </div>
          <div className="friend active">
            <div
              className="user-image"
              style={{
                background:
                  'url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5…&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c3…") no-repeat center center',
                backgroundSize: "cover",
                height: 25,
                width: 25,
                borderRadius: "50%"
              }}
            />
            <div className="name">Rodney Little</div>
            <div className="chat-icon">
              <i className="fas fa-comment-dots" />
            </div>
          </div>
          <div className="friend ">
            <div
              className="user-image"
              style={{
                background:
                  'url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5…&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c3…") no-repeat center center',
                backgroundSize: "cover",
                height: 25,
                width: 25,
                borderRadius: "50%"
              }}
            />
            <div className="name">Rodney Little</div>
            <div className="chat-icon">
              <i className="fas fa-comment-dots" />
            </div>
          </div>
        </div>
        <div className="search-section">
          <input
            type="text"
            name="search"
            placeholder="search"
            defaultValue
          />
        </div>
      </section>
    );
  }
}
