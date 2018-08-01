webpackJsonp([0],{

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(32);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.clickedBtn = function () {};

    _this.state = {};
    return _this;
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "app-container home-page" },
        _react2.default.createElement(
          "section",
          { id: "left-menu" },
          _react2.default.createElement(
            "div",
            { className: "account-dropdown" },
            _react2.default.createElement(
              "div",
              { className: "logo" },
              _react2.default.createElement("i", { className: "fab fa-typo3" })
            ),
            _react2.default.createElement(
              "div",
              { className: "name" },
              "Harrup Bamrah"
            ),
            _react2.default.createElement(
              "div",
              { className: "icon" },
              _react2.default.createElement("i", { className: "fas fa-chevron-down" })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "groups" },
            _react2.default.createElement(
              "div",
              { className: "group" },
              _react2.default.createElement(
                "div",
                { className: "title" },
                "Title"
              ),
              _react2.default.createElement(
                "ul",
                null,
                _react2.default.createElement(
                  "li",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: "/logout" },
                    "logout"
                  )
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  "Link"
                ),
                _react2.default.createElement(
                  "li",
                  null,
                  "Link"
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          "section",
          { id: "content-container" },
          _react2.default.createElement(
            "div",
            { className: "search-header" },
            _react2.default.createElement(
              "div",
              { className: "search-box" },
              _react2.default.createElement("input", { type: "text", name: "seach", placeholder: "search toku" })
            ),
            _react2.default.createElement(
              "div",
              { className: "icon-section" },
              _react2.default.createElement(
                "div",
                { className: "icon" },
                _react2.default.createElement(
                  "a",
                  null,
                  _react2.default.createElement("i", { className: "fas fa-bell" })
                ),
                _react2.default.createElement(
                  "div",
                  { className: "noti " },
                  "3"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "icon" },
                _react2.default.createElement(
                  "a",
                  null,
                  _react2.default.createElement("i", { className: "fas fa-comment" })
                ),
                _react2.default.createElement(
                  "div",
                  { className: "noti " },
                  "3"
                )
              ),
              _react2.default.createElement(
                "div",
                { className: "icon" },
                _react2.default.createElement(
                  "a",
                  null,
                  _react2.default.createElement("i", { className: "fas fa-user" })
                ),
                _react2.default.createElement(
                  "div",
                  { className: "noti active" },
                  "3"
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "content-area" },
            _react2.default.createElement(
              "div",
              { className: "status-area" },
              _react2.default.createElement(
                "div",
                { className: "post-box" },
                _react2.default.createElement("textarea", {
                  name: "status",
                  rows: 8,
                  cols: 80,
                  placeholder: "Write something",
                  defaultValue: ""
                }),
                _react2.default.createElement("div", { className: "user-img" }),
                _react2.default.createElement(
                  "div",
                  { className: "buttons" },
                  _react2.default.createElement(
                    "div",
                    { className: "button" },
                    _react2.default.createElement(
                      "a",
                      null,
                      _react2.default.createElement("i", { className: "fas fa-camera" })
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "button" },
                    _react2.default.createElement(
                      "a",
                      null,
                      _react2.default.createElement("i", { className: "fas fa-video" })
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "button send-btn" },
                    _react2.default.createElement(
                      "a",
                      null,
                      _react2.default.createElement("i", { className: "fas fa-paper-plane" })
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              "section",
              { id: "updates" },
              _react2.default.createElement(
                "div",
                { className: "update-container" },
                _react2.default.createElement(
                  "div",
                  { className: "author-info" },
                  _react2.default.createElement("a", { href: "#", className: "author-image" }),
                  _react2.default.createElement(
                    "div",
                    { className: "author-name" },
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      "Damjan Cvetkov"
                    ),
                    " shared a",
                    " ",
                    _react2.default.createElement(
                      "a",
                      { href: "#" },
                      "story"
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "update-time" },
                    "1hr"
                  )
                ),
                _react2.default.createElement("div", {
                  className: "media-image",
                  style: {
                    background: 'url("https://images.unsplash.com/photo-1532121032426-855c544b816f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9e58c9a24299191000624b06d5579979&auto=format&fit=crop&w=800&q=60") no-repeat center center',
                    backgroundSize: "cover"
                  }
                }),
                _react2.default.createElement(
                  "div",
                  { className: "padding-container" },
                  _react2.default.createElement(
                    "div",
                    { className: "grey-container" },
                    _react2.default.createElement(
                      "h3",
                      null,
                      "These photos are why I am trapped in Tokyo forever know"
                    ),
                    _react2.default.createElement(
                      "p",
                      null,
                      "Tokyo has 39 million residents, 50% more people than any other urban area, with a $2.5 trillion economy larger than that ..."
                    ),
                    _react2.default.createElement("hr", null),
                    _react2.default.createElement(
                      "div",
                      { className: "update-stats" },
                      _react2.default.createElement(
                        "div",
                        { className: "emoji-area" },
                        _react2.default.createElement(
                          "a",
                          { className: "emoji", href: "#" },
                          _react2.default.createElement("i", { className: "fas fa-thumbs-up" })
                        )
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "likes" },
                        "Sarah Russel and 23 others liked"
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "comments-stats" },
                        "4 comments"
                      )
                    ),
                    _react2.default.createElement("hr", null),
                    _react2.default.createElement(
                      "div",
                      { className: "comment-section" },
                      _react2.default.createElement("textarea", {
                        name: "comment",
                        rows: 8,
                        cols: 60,
                        defaultValue: ""
                      }),
                      _react2.default.createElement(
                        "div",
                        { className: "button-share" },
                        _react2.default.createElement("i", { className: "fas fa-share" })
                      ),
                      _react2.default.createElement(
                        "div",
                        { className: "button-thumbsup" },
                        _react2.default.createElement("i", { className: "fas fa-thumbs-up" })
                      )
                    )
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          "section",
          { id: "messenger" },
          _react2.default.createElement(
            "div",
            { className: "title-section" },
            _react2.default.createElement(
              "div",
              { className: "icon" },
              _react2.default.createElement("i", { className: "fab fa-facebook-messenger" })
            ),
            _react2.default.createElement(
              "div",
              { className: "title" },
              "Messenger"
            ),
            _react2.default.createElement(
              "div",
              { className: "dots" },
              _react2.default.createElement("i", { className: "fas fa-ellipsis-v" })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "friends-section" },
            _react2.default.createElement(
              "div",
              { className: "friend active" },
              _react2.default.createElement("div", {
                className: "user-image",
                style: {
                  background: 'url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5…&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c3…") no-repeat center center',
                  backgroundSize: "cover",
                  height: 25,
                  width: 25,
                  borderRadius: "50%"
                }
              }),
              _react2.default.createElement(
                "div",
                { className: "name" },
                "Rodney Little"
              ),
              _react2.default.createElement(
                "div",
                { className: "chat-icon" },
                _react2.default.createElement("i", { className: "fas fa-comment-dots" })
              )
            ),
            "// additional friends for testing",
            _react2.default.createElement(
              "div",
              { className: "friend " },
              _react2.default.createElement("div", {
                className: "user-image",
                style: {
                  background: 'url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5…&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c3…") no-repeat center center',
                  backgroundSize: "cover",
                  height: 25,
                  width: 25,
                  borderRadius: "50%"
                }
              }),
              _react2.default.createElement(
                "div",
                { className: "name" },
                "Rodney Little"
              ),
              _react2.default.createElement(
                "div",
                { className: "chat-icon" },
                _react2.default.createElement("i", { className: "fas fa-comment-dots" })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "friend active" },
              _react2.default.createElement("div", {
                className: "user-image",
                style: {
                  background: 'url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5…&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c3…") no-repeat center center',
                  backgroundSize: "cover",
                  height: 25,
                  width: 25,
                  borderRadius: "50%"
                }
              }),
              _react2.default.createElement(
                "div",
                { className: "name" },
                "Rodney Little"
              ),
              _react2.default.createElement(
                "div",
                { className: "chat-icon" },
                _react2.default.createElement("i", { className: "fas fa-comment-dots" })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "friend " },
              _react2.default.createElement("div", {
                className: "user-image",
                style: {
                  background: 'url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5…&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c3…") no-repeat center center',
                  backgroundSize: "cover",
                  height: 25,
                  width: 25,
                  borderRadius: "50%"
                }
              }),
              _react2.default.createElement(
                "div",
                { className: "name" },
                "Rodney Little"
              ),
              _react2.default.createElement(
                "div",
                { className: "chat-icon" },
                _react2.default.createElement("i", { className: "fas fa-comment-dots" })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "friend " },
              _react2.default.createElement("div", {
                className: "user-image",
                style: {
                  background: 'url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5…&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c3…") no-repeat center center',
                  backgroundSize: "cover",
                  height: 25,
                  width: 25,
                  borderRadius: "50%"
                }
              }),
              _react2.default.createElement(
                "div",
                { className: "name" },
                "Rodney Little"
              ),
              _react2.default.createElement(
                "div",
                { className: "chat-icon" },
                _react2.default.createElement("i", { className: "fas fa-comment-dots" })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "friend active" },
              _react2.default.createElement("div", {
                className: "user-image",
                style: {
                  background: 'url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5…&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c3…") no-repeat center center',
                  backgroundSize: "cover",
                  height: 25,
                  width: 25,
                  borderRadius: "50%"
                }
              }),
              _react2.default.createElement(
                "div",
                { className: "name" },
                "Rodney Little"
              ),
              _react2.default.createElement(
                "div",
                { className: "chat-icon" },
                _react2.default.createElement("i", { className: "fas fa-comment-dots" })
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "friend " },
              _react2.default.createElement("div", {
                className: "user-image",
                style: {
                  background: 'url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5…&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c3…") no-repeat center center',
                  backgroundSize: "cover",
                  height: 25,
                  width: 25,
                  borderRadius: "50%"
                }
              }),
              _react2.default.createElement(
                "div",
                { className: "name" },
                "Rodney Little"
              ),
              _react2.default.createElement(
                "div",
                { className: "chat-icon" },
                _react2.default.createElement("i", { className: "fas fa-comment-dots" })
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "search-section" },
            _react2.default.createElement("input", {
              type: "text",
              name: "search",
              placeholder: "search",
              defaultValue: true
            })
          )
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

var app = document.getElementById("app");

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[98]);