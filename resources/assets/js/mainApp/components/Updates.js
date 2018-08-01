import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Updates extends Component {
  constructor() {
    super();
    this.state = {};
  }
  loopPosts = () => {
    if(this.props.initialData.recentPosts != undefined){
      return this.props.initialData.recentPosts.map((item, index)=>{
        let post = item.posts
        let user = item.users
        return(
          <div className="update-container" key={index}>
            <div className="author-info">
              <a href={`/profile/${user.id}`} className="author-image" style={{
                backgroundImage:`url('${user.image_url}')`
              }} />
              <div className="author-name">
                <a href={`/profile/${user.id}`}>{`${user.firstname} ${user.lastname}`}</a> shared
                <a href="#">{(post.type == 'text') ? ' a story' : ' an image'}</a>
              </div>
              <div className="update-time">1hr</div>
            </div>
            <div
              className="media-image"
              style={{
                background:
                  'url("https://images.unsplash.com/photo-1532121032426-855c544b816f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9e58c9a24299191000624b06d5579979&auto=format&fit=crop&w=800&q=60") no-repeat center center',
                backgroundSize: "cover"
              }}
            />
            <div className="padding-container">
              <div className="grey-container">
                <h3>
                  These photos are why I am trapped in Tokyo forever know
                </h3>
                <p>
                  {post.content}
                </p>
                <hr />
                <div className="update-stats">
                  <div className="emoji-area">
                    <a className="emoji" href="#">
                      <i className="fas fa-thumbs-up" />
                    </a>
                  </div>
                  <div className="likes">
                    Sarah Russel and 23 others liked
                  </div>
                  <div className="comments-stats">4 comments</div>
                </div>
                <hr />
                <div className="comment-section">
                  <textarea
                    name="comment"
                    rows={8}
                    cols={60}
                    defaultValue={""}
                  />
                  <div className="button-share">
                    <i className="fas fa-share" />
                  </div>
                  <div className="button-thumbsup">
                    <i className="fas fa-thumbs-up" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })
    }else{
      return 'error'
    }
  }
  render() {
    return (
          <section id="updates">
            {this.loopPosts()}
          </section>
    );
  }
}
