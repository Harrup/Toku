webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(213);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = __webpack_require__(69);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(68);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(20);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(23);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(22);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _axios = __webpack_require__(66);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StatusArea = function (_Component) {
  (0, _inherits3.default)(StatusArea, _Component);

  function StatusArea() {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, StatusArea);

    var _this = (0, _possibleConstructorReturn3.default)(this, (StatusArea.__proto__ || Object.getPrototypeOf(StatusArea)).call(this));

    _this.postToDatabase = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var post;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _axios2.default.post('/api/post', {
                user_id: _this.props.initialData.userInfo.id,
                type: 'text',
                content: _this.state.status
              });

            case 3:
              post = _context.sent;

              console.log(post);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);

              console.log(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2, [[0, 7]]);
    }));

    _this.change = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
        var name, value;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                name = event.target.name;
                value = event.target.type == 'checkbox' ? event.target.checked : event.target.value;


                _this.setState((0, _defineProperty3.default)({}, name, value), function () {
                  console.log(_this.state);
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }();

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(StatusArea, [{
    key: "render",
    value: function render() {
      if (this.props.initialData.userInfo !== undefined) {
        return _react2.default.createElement(
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
              value: this.state.status,
              onChange: this.change
            }),
            _react2.default.createElement("div", { className: "user-img", style: {
                background: "url(" + this.props.initialData.userInfo.image_url + ")", backgroundSize: 'cover', backgroundPosition: 'center'
              } }),
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
                { className: "button send-btn", onClick: this.postToDatabase },
                _react2.default.createElement(
                  "a",
                  null,
                  _react2.default.createElement("i", { className: "fas fa-paper-plane" })
                )
              )
            )
          )
        );
      } else {
        return _react2.default.createElement(
          "div",
          { className: "status-area" },
          "loading.."
        );
      }
    }
  }]);
  return StatusArea;
}(_react.Component);

exports.default = StatusArea;

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(20);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(23);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(22);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Updates = function (_Component) {
  (0, _inherits3.default)(Updates, _Component);

  function Updates() {
    (0, _classCallCheck3.default)(this, Updates);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Updates.__proto__ || Object.getPrototypeOf(Updates)).call(this));

    _this.loopPosts = function () {
      if (_this.props.initialData.recentPosts != undefined) {
        return _this.props.initialData.recentPosts.map(function (item, index) {
          var post = item.posts;
          var user = item.users;
          return _react2.default.createElement(
            "div",
            { className: "update-container", key: index },
            _react2.default.createElement(
              "div",
              { className: "author-info" },
              _react2.default.createElement("a", { href: "/profile/" + user.id, className: "author-image", style: {
                  backgroundImage: "url('" + user.image_url + "')"
                } }),
              _react2.default.createElement(
                "div",
                { className: "author-name" },
                _react2.default.createElement(
                  "a",
                  { href: "/profile/" + user.id },
                  user.firstname + " " + user.lastname
                ),
                " shared",
                _react2.default.createElement(
                  "a",
                  { href: "#" },
                  post.type == 'text' ? ' a story' : ' an image'
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
                  post.content
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
          );
        });
      } else {
        return 'error';
      }
    };

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(Updates, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "updates" },
        this.loopPosts()
      );
    }
  }]);
  return Updates;
}(_react.Component);

exports.default = Updates;

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(20);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(23);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(22);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(70);

var _StatusArea = __webpack_require__(109);

var _StatusArea2 = _interopRequireDefault(_StatusArea);

var _Updates = __webpack_require__(110);

var _Updates2 = _interopRequireDefault(_Updates);

var _LoadingScreen = __webpack_require__(67);

var _LoadingScreen2 = _interopRequireDefault(_LoadingScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(Home, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      this.setState({
        initialData: this.props.initialData
      }, function () {
        console.log(_this2.state);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "content-area" },
        _react2.default.createElement(_StatusArea2.default, { initialData: this.state.initialData == undefined ? 'loading' : this.state.initialData }),
        _react2.default.createElement(_Updates2.default, { initialData: this.state.initialData == undefined ? 'loading' : this.state.initialData })
      );
    }
  }]);
  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(20);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(23);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(22);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LeftMenu = function (_Component) {
  (0, _inherits3.default)(LeftMenu, _Component);

  function LeftMenu() {
    (0, _classCallCheck3.default)(this, LeftMenu);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LeftMenu.__proto__ || Object.getPrototypeOf(LeftMenu)).call(this));

    _this.clickDropdown = function () {
      _this.setState({
        dropdown: !_this.state.dropdown
      });
    };

    _this.state = {
      dropdown: false
    };
    return _this;
  }

  (0, _createClass3.default)(LeftMenu, [{
    key: "render",
    value: function render() {
      if (this.props.initialData.userInfo == undefined) {
        return _react2.default.createElement(
          "div",
          null,
          "Loading.."
        );
      } else {
        var _props$initialData$us = this.props.initialData.userInfo,
            firstname = _props$initialData$us.firstname,
            lastname = _props$initialData$us.lastname;

        return _react2.default.createElement(
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
              { className: "name", onClick: this.clickDropdown },
              firstname + " " + lastname
            ),
            _react2.default.createElement(
              "div",
              { className: "icon", onClick: this.clickDropdown },
              _react2.default.createElement("i", { className: "fas fa-chevron-down" })
            ),
            _react2.default.createElement(
              "div",
              { className: "dropdown " + (this.state.dropdown ? 'active' : '') },
              _react2.default.createElement(
                "nav",
                null,
                _react2.default.createElement(
                  "a",
                  { href: "/account" },
                  "Account"
                ),
                _react2.default.createElement(
                  "a",
                  { href: "/logout" },
                  "Logout"
                )
              )
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
        );
      }
    }
  }]);
  return LeftMenu;
}(_react.Component);

exports.default = LeftMenu;

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(20);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(23);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(22);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Messenger = function (_Component) {
  (0, _inherits3.default)(Messenger, _Component);

  function Messenger() {
    (0, _classCallCheck3.default)(this, Messenger);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Messenger.__proto__ || Object.getPrototypeOf(Messenger)).call(this));

    _this.clickedBtn = function () {};

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(Messenger, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
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
      );
    }
  }]);
  return Messenger;
}(_react.Component);

exports.default = Messenger;

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(69);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(68);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(20);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(23);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(22);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(70);

var _LoadingScreen = __webpack_require__(67);

var _LoadingScreen2 = _interopRequireDefault(_LoadingScreen);

var _axios = __webpack_require__(66);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Profile = function (_Component) {
  (0, _inherits3.default)(Profile, _Component);

  function Profile() {
    (0, _classCallCheck3.default)(this, Profile);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(Profile, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var self = this;
      var _self$props$routeProp = self.props.routeProps,
          match = _self$props$routeProp.match,
          location = _self$props$routeProp.location,
          history = _self$props$routeProp.history;

      var getUserData = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var userProfile;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _axios2.default.get("/api/user/" + match.params.id);

                case 3:
                  userProfile = _context.sent;

                  self.setState({
                    initialData: self.props.initialData,
                    userProfile: userProfile.data[0]
                  }, function () {
                    console.log(self.state);
                  });
                  _context.next = 10;
                  break;

                case 7:
                  _context.prev = 7;
                  _context.t0 = _context["catch"](0);

                  console.log(_context.t0);

                case 10:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 7]]);
        }));

        return function getUserData() {
          return _ref.apply(this, arguments);
        };
      }();
      getUserData();
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.userProfile !== undefined) {
        return _react2.default.createElement(
          "div",
          { className: "content-area profile" },
          _react2.default.createElement(
            "div",
            { className: "user-profile" },
            _react2.default.createElement(
              "div",
              { className: "user-img" },
              _react2.default.createElement("img", { src: "" + this.state.userProfile.image_url })
            ),
            _react2.default.createElement(
              "div",
              { className: "user-info" },
              _react2.default.createElement(
                "h1",
                null,
                this.state.userProfile.firstname + " " + this.state.userProfile.lastname
              ),
              _react2.default.createElement(
                "div",
                { className: "follow-btn" },
                "Follow"
              )
            )
          )
        );
      } else {
        return _react2.default.createElement(
          "div",
          { className: "content-area profile" },
          "Loading.."
        );
      }
    }
  }]);
  return Profile;
}(_react.Component);

exports.default = Profile;

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(20);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(23);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(22);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchHeader = function (_Component) {
  (0, _inherits3.default)(SearchHeader, _Component);

  function SearchHeader() {
    (0, _classCallCheck3.default)(this, SearchHeader);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SearchHeader.__proto__ || Object.getPrototypeOf(SearchHeader)).call(this));

    _this.clickedBtn = function () {};

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(SearchHeader, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
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
      );
    }
  }]);
  return SearchHeader;
}(_react.Component);

exports.default = SearchHeader;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(69);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(68);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(20);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(23);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(22);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = __webpack_require__(70);

var _axios = __webpack_require__(66);

var _axios2 = _interopRequireDefault(_axios);

var _LeftMenu = __webpack_require__(185);

var _LeftMenu2 = _interopRequireDefault(_LeftMenu);

var _SearchHeader = __webpack_require__(188);

var _SearchHeader2 = _interopRequireDefault(_SearchHeader);

var _Home = __webpack_require__(184);

var _Home2 = _interopRequireDefault(_Home);

var _Profile = __webpack_require__(187);

var _Profile2 = _interopRequireDefault(_Profile);

var _StatusArea = __webpack_require__(109);

var _StatusArea2 = _interopRequireDefault(_StatusArea);

var _Updates = __webpack_require__(110);

var _Updates2 = _interopRequireDefault(_Updates);

var _Messenger = __webpack_require__(186);

var _Messenger2 = _interopRequireDefault(_Messenger);

var _LoadingScreen = __webpack_require__(67);

var _LoadingScreen2 = _interopRequireDefault(_LoadingScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout() {
    (0, _classCallCheck3.default)(this, Layout);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.clickedBtn = function () {};

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(Layout, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var self = this;
      var getInitialData = function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var initialData;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _axios2.default.get('/api/initialApp');

                case 3:
                  initialData = _context.sent;

                  self.setState({
                    initialData: initialData.data
                  }, function () {
                    console.log(self.state);
                  });
                  _context.next = 10;
                  break;

                case 7:
                  _context.prev = 7;
                  _context.t0 = _context["catch"](0);

                  console.log(_context.t0);

                case 10:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 7]]);
        }));

        return function getInitialData() {
          return _ref.apply(this, arguments);
        };
      }();
      getInitialData();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          "div",
          { className: "app-container home-page" },
          _react2.default.createElement(_LoadingScreen2.default, { initialData: this.state.initialData == undefined ? 'loading' : this.state.initialData }),
          _react2.default.createElement(_LeftMenu2.default, { initialData: this.state.initialData == undefined ? 'loading' : this.state.initialData }),
          _react2.default.createElement(
            "section",
            { id: "content-container" },
            _react2.default.createElement(_SearchHeader2.default, null),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/", component: function component(props) {
                return _react2.default.createElement(_Home2.default, { routeProps: props, initialData: _this2.state.initialData == undefined ? 'loading' : _this2.state.initialData });
              } }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/profile/:id", component: function component(props) {
                return _react2.default.createElement(_Profile2.default, { routeProps: props, initialData: _this2.state.initialData == undefined ? 'loading' : _this2.state.initialData });
              } })
          ),
          _react2.default.createElement(_Messenger2.default, null)
        )
      );
    }
  }]);
  return Layout;
}(_react.Component);

var app = document.getElementById("app");

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(20);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(21);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(23);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(22);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(15);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadingScreen = function (_Component) {
  (0, _inherits3.default)(LoadingScreen, _Component);

  function LoadingScreen() {
    (0, _classCallCheck3.default)(this, LoadingScreen);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LoadingScreen.__proto__ || Object.getPrototypeOf(LoadingScreen)).call(this));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(LoadingScreen, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "loading-screen", className: this.props.userData == 'loading' ? 'active' : '' },
        _react2.default.createElement(
          "div",
          { className: "lds-css ng-scope" },
          _react2.default.createElement(
            "div",
            { style: { width: '100%', height: '100%' }, className: "lds-eclipse" },
            _react2.default.createElement("div", null)
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "loading-text" },
          "Loading.."
        )
      );
    }
  }]);
  return LoadingScreen;
}(_react.Component);

exports.default = LoadingScreen;

/***/ })

},[207]);