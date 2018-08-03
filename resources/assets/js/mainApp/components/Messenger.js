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

          <div className="friend ">
            <div
              className="user-image"
              style={{
                background:
                  'url("https://tinyfac.es/data/avatars/B0298C36-9751-48EF-BE15-80FB9CD11143-500w.jpeg") no-repeat center center',
                backgroundSize: "cover",
                height: 25,
                width: 25,
                borderRadius: "50%"
              }}
            />
            <div className="name">Eli Adams</div>
            <div className="chat-icon">
              <i className="fas fa-comment-dots" />
            </div>
          </div>
          <div className="friend active">
            <div
              className="user-image"
              style={{
                background:
                  'url("https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb") no-repeat center center',
                backgroundSize: "cover",
                height: 25,
                width: 25,
                borderRadius: "50%"
              }}
            />
          {/* Additional friends for testing */}
            <div className="name">Virginia Watson</div>
            <div className="chat-icon">
              <i className="fas fa-comment-dots" />
            </div>
          </div>
          <div className="friend ">
            <div
              className="user-image"
              style={{
                background:
                  'url("https://d3iw72m71ie81c.cloudfront.net/female-17.jpg") no-repeat center center',
                backgroundSize: "cover",
                height: 25,
                width: 25,
                borderRadius: "50%"
              }}
            />
            <div className="name">Lauren Thomas</div>
            <div className="chat-icon">
              <i className="fas fa-comment-dots" />
            </div>
          </div>
          <div className="friend ">
            <div
              className="user-image"
              style={{
                background:
                  'url("https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg") no-repeat center center',
                backgroundSize: "cover",
                height: 25,
                width: 25,
                borderRadius: "50%"
              }}
            />
            <div className="name">Jackie Kaufman</div>
            <div className="chat-icon">
              <i className="fas fa-comment-dots" />
            </div>
          </div>
          <div className="friend active">
            <div
              className="user-image"
              style={{
                background:
                  'url("https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=14fb764d9ef775a25cc55bb578b9a483") no-repeat center center',
                backgroundSize: "cover",
                height: 25,
                width: 25,
                borderRadius: "50%"
              }}
            />
            <div className="name">Bent Kruse</div>
            <div className="chat-icon">
              <i className="fas fa-comment-dots" />
            </div>
          </div>
          <div className="friend ">
            <div
              className="user-image"
              style={{
                background:
                  'url("https://d3iw72m71ie81c.cloudfront.net/abcdef.jpg") no-repeat center center',
                backgroundSize: "cover",
                height: 25,
                width: 25,
                borderRadius: "50%"
              }}
            />
            <div className="name">Viola Spicer</div>
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
