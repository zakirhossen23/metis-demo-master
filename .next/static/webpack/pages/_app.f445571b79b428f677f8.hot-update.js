self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _metis_io_middleware_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @metis.io/middleware-client */ "./node_modules/@metis.io/middleware-client/dist/index.js");
/* harmony import */ var _metis_io_middleware_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_metis_io_middleware_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/NavDropdown */ "./node_modules/react-bootstrap/esm/NavDropdown.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _variables_Events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./variables/Events */ "./components/variables/Events.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\zakir\\Documents\\test\\metis-demo-master\\components\\Header.tsx",
    _s = $RefreshSig$();











function Header(_ref) {
  _s();

  var user = _ref.user;
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)(),
      pathname = _useRouter.pathname;

  var id = router.query.id;
  var c = new Date(_variables_Events__WEBPACK_IMPORTED_MODULE_7__.EVENT.EndDateTime).getTime();
  var timer = setInterval(function () {
    var n = new Date().getTime();
    var d = c - n;
    var da = Math.floor(d / (1000 * 60 * 60 * 24));
    var h = Math.floor(d % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var m = Math.floor(d % (1000 * 60 * 60) / (1000 * 60));
    var s = Math.floor(d % (1000 * 60) / 1000);

    try {
      if (document.getElementById("LeftDate") !== null) document.getElementById("LeftDate").innerHTML = da.toString() + " days " + h.toString() + " hours " + m.toString() + " minutes " + s.toString() + " seconds";
    } catch (_unused) {}
  }, 1000);

  function web3Connect() {
    return _web3Connect.apply(this, arguments);
  }

  function _web3Connect() {
    _web3Connect = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              window.ethereum.request({
                method: 'eth_requestAccounts'
              });
              _context.prev = 1;
              _context.next = 4;
              return window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{
                  chainId: '0x24C'
                }]
              });

            case 4:
              _context.next = 17;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](1);

              if (!(_context.t0.code === 4902)) {
                _context.next = 17;
                break;
              }

              _context.prev = 9;
              _context.next = 12;
              return window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                  chainId: '0x24C',
                  chainName: 'Metis Stardust Testnet',
                  nativeCurrency: {
                    name: 'Metis',
                    symbol: 'tMETIS',
                    decimals: 18
                  },
                  rpcUrls: ['https://stardust.metis.io/?owner=588']
                }]
              });

            case 12:
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t1 = _context["catch"](9);
              // handle "add" error
              console.log(_context.t1);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 6], [9, 14]]);
    }));
    return _web3Connect.apply(this, arguments);
  }

  function login() {
    return _login.apply(this, arguments);
  }

  function _login() {
    _login = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      var oauth2Client;
      return C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              oauth2Client = new _metis_io_middleware_client__WEBPACK_IMPORTED_MODULE_4__.Oauth2Client();
              oauth2Client.startOauth2("61d0c1154fbb4f000dd11c6d" || 0, "".concat("http://metisgift.com").concat(pathname));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _login.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("header", {
    className: "mb-5",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_8__.default, {
      className: "py-4",
      bg: "#74B370",
      expand: "lg",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_9__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            children: [" ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              className: "NavImg",
              src: "/Logo.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 11
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_8__.default.Brand, {
              children: "MetisGift"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_8__.default.Toggle, {
          "aria-controls": "basic-navbar-nav"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_10__.default, {
          className: "me-auto",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_11__.default, {
            title: "Donate",
            id: "project-dropdown",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
              href: "/projects/erc-721",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_11__.default.Item, {
                  as: "div",
                  children: "NFT"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
              href: "/projects/Cryptopunks",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_11__.default.Item, {
                  as: "div",
                  children: "Cryptopunks"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_8__.default.Collapse, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_10__.default, {
            children: [id ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_10__.default.Item, {
              className: "px-2",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12__.default, {
                onClick: web3Connect,
                variant: "secondary",
                children: "Activate Metamask"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 8
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 12
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_10__.default.Item, {
              className: "px-2",
              children: user ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h5", {
                className: "text-light",
                children: ["Hello, ", user.username]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 10
              }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12__.default, {
                onClick: login,
                variant: "secondary",
                children: "Metis Login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 10
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 3
  }, this);
}

_s(Header, "k2JO9r4zbgtfmGufuEAEACFCRLg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter, next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter];
});

_c = Header;

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIudHN4Il0sIm5hbWVzIjpbIkhlYWRlciIsInVzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsImlkIiwicXVlcnkiLCJjIiwiRGF0ZSIsIkVWRU5UIiwiZ2V0VGltZSIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJuIiwiZCIsImRhIiwiTWF0aCIsImZsb29yIiwiaCIsIm0iLCJzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsInRvU3RyaW5nIiwid2ViM0Nvbm5lY3QiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJwYXJhbXMiLCJjaGFpbklkIiwiY29kZSIsImNoYWluTmFtZSIsIm5hdGl2ZUN1cnJlbmN5IiwibmFtZSIsInN5bWJvbCIsImRlY2ltYWxzIiwicnBjVXJscyIsImNvbnNvbGUiLCJsb2ciLCJsb2dpbiIsIm9hdXRoMkNsaWVudCIsIk9hdXRoMkNsaWVudCIsInN0YXJ0T2F1dGgyIiwicHJvY2VzcyIsInVzZXJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsTUFBVCxPQUErQjtBQUFBOztBQUFBLE1BQWJDLElBQWEsUUFBYkEsSUFBYTtBQUM3QyxNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUQ2QyxtQkFFeEJBLHNEQUFTLEVBRmU7QUFBQSxNQUVyQ0MsUUFGcUMsY0FFckNBLFFBRnFDOztBQUFBLE1BR3JDQyxFQUhxQyxHQUc5QkgsTUFBTSxDQUFDSSxLQUh1QixDQUdyQ0QsRUFIcUM7QUFNN0MsTUFBSUUsQ0FBQyxHQUFHLElBQUlDLElBQUosQ0FBU0MsZ0VBQVQsRUFBNEJDLE9BQTVCLEVBQVI7QUFDQSxNQUFNQyxLQUFLLEdB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ZjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBPYXV0aDJDbGllbnQgfSBmcm9tICdAbWV0aXMuaW8vbWlkZGxld2FyZS1jbGllbnQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcic7XG5pbXBvcnQgTmF2IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnO1xuaW1wb3J0IE5hdmJhciBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2YmFyJztcbmltcG9ydCBOYXZEcm9wZG93biBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2RHJvcGRvd24nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcbmltcG9ydCB7IEVWRU5UIH0gZnJvbSAnLi92YXJpYWJsZXMvRXZlbnRzJztcbmRlY2xhcmUgbGV0IHdpbmRvdzogYW55O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoeyB1c2VyIH06IGFueSkge1xuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblx0Y29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKCk7XG5cdGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcblxuXG5cdHZhciBjID0gbmV3IERhdGUoRVZFTlQuRW5kRGF0ZVRpbWUpLmdldFRpbWUoKTtcblx0Y29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0XHR2YXIgZCA9IGMgLSBuO1xuXHRcdHZhciBkYSA9IE1hdGguZmxvb3IoZCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG5cdFx0dmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xuXHRcdHZhciBtID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xuXHRcdHZhciBzID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjApKSAvIDEwMDApO1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJMZWZ0RGF0ZVwiKSAhPT0gbnVsbClcblx0XHRcdFx0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTGVmdERhdGVcIikgYXMgSFRNTEhSRWxlbWVudCkuaW5uZXJIVE1MID0gKGRhLnRvU3RyaW5nKCkgKyBcIiBkYXlzIFwiICsgaC50b1N0cmluZygpICsgXCIgaG91cnMgXCIgKyBtLnRvU3RyaW5nKCkgKyBcIiBtaW51dGVzIFwiICsgcy50b1N0cmluZygpICsgXCIgc2Vjb25kc1wiKTtcblxuXHRcdH0gY2F0Y2ggeyB9XG5cdH0sIDEwMDApO1xuXG5cblx0YXN5bmMgZnVuY3Rpb24gd2ViM0Nvbm5lY3QoKSB7XG5cdFx0d2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcblxuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XG5cdFx0XHRcdG1ldGhvZDogJ3dhbGxldF9zd2l0Y2hFdGhlcmV1bUNoYWluJyxcblx0XHRcdFx0cGFyYW1zOiBbeyBjaGFpbklkOiAnMHgyNEMnIH1dLFxuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoc3dpdGNoRXJyb3I6IGFueSkge1xuXHRcdFx0Ly8gVGhpcyBlcnJvciBjb2RlIGluZGljYXRlcyB0aGF0IHRoZSBjaGFpbiBoYXMgbm90IGJlZW4gYWRkZWQgdG8gTWV0YU1hc2suXG5cdFx0XHRpZiAoc3dpdGNoRXJyb3IuY29kZSA9PT0gNDkwMikge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcblx0XHRcdFx0XHRcdG1ldGhvZDogJ3dhbGxldF9hZGRFdGhlcmV1bUNoYWluJyxcblx0XHRcdFx0XHRcdHBhcmFtczogW1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0Y2hhaW5JZDogJzB4MjRDJyxcblx0XHRcdFx0XHRcdFx0XHRjaGFpbk5hbWU6ICdNZXRpcyBTdGFyZHVzdCBUZXN0bmV0Jyxcblx0XHRcdFx0XHRcdFx0XHRuYXRpdmVDdXJyZW5jeToge1xuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZTogJ01ldGlzJyxcblx0XHRcdFx0XHRcdFx0XHRcdHN5bWJvbDogJ3RNRVRJUycsXG5cdFx0XHRcdFx0XHRcdFx0XHRkZWNpbWFsczogMTgsXG5cdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRycGNVcmxzOiBbJ2h0dHBzOi8vc3RhcmR1c3QubWV0aXMuaW8vP293bmVyPTU4OCddLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSBjYXRjaCAoYWRkRXJyb3IpIHtcblx0XHRcdFx0XHQvLyBoYW5kbGUgXCJhZGRcIiBlcnJvclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGFkZEVycm9yKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gaGFuZGxlIG90aGVyIFwic3dpdGNoXCIgZXJyb3JzXG5cdFx0fVxuXHR9XG5cblx0YXN5bmMgZnVuY3Rpb24gbG9naW4oKSB7XG5cdFx0bGV0IG9hdXRoMkNsaWVudCA9IG5ldyBPYXV0aDJDbGllbnQoKTtcblx0XHRvYXV0aDJDbGllbnQuc3RhcnRPYXV0aDIoXG5cdFx0XHRwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUFBfSUQgfHwgJycsXG5cdFx0XHRgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkx9JHtwYXRobmFtZX1gXG5cdFx0KTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGhlYWRlciBjbGFzc05hbWU9XCJtYi01XCI+XG5cdFx0XHQ8TmF2YmFyIGNsYXNzTmFtZT1cInB5LTRcIiBiZz1cIiM3NEIzNzBcIiBleHBhbmQ9XCJsZ1wiID5cblx0XHRcdFx0PENvbnRhaW5lcj5cblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPlxuXG5cdFx0XHRcdFx0XHQ8YT5cdDxpbWcgY2xhc3NOYW1lPSdOYXZJbWcnIHNyYz0nL0xvZ28uc3ZnJz5cblx0XHRcdFx0XHRcdDwvaW1nPlxuXHRcdFx0XHRcdFx0XHQ8TmF2YmFyLkJyYW5kPk1ldGlzR2lmdDwvTmF2YmFyLkJyYW5kPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwiYmFzaWMtbmF2YmFyLW5hdlwiIC8+XG5cblx0XHRcdFx0XHQ8TmF2IGNsYXNzTmFtZT1cIm1lLWF1dG9cIj5cblx0XHRcdFx0XHRcdDxOYXZEcm9wZG93biB0aXRsZT1cIkRvbmF0ZVwiIGlkPVwicHJvamVjdC1kcm9wZG93blwiPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3Byb2plY3RzL2VyYy03MjFcIj5cblx0XHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHRcdDxOYXZEcm9wZG93bi5JdGVtIGFzPVwiZGl2XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdE5GVFxuXHRcdFx0XHRcdFx0XHRcdFx0PC9OYXZEcm9wZG93bi5JdGVtPlxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3Byb2plY3RzL0NyeXB0b3B1bmtzXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TmF2RHJvcGRvd24uSXRlbSBhcz1cImRpdlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRDcnlwdG9wdW5rc1xuXHRcdFx0XHRcdFx0XHRcdFx0PC9OYXZEcm9wZG93bi5JdGVtPlxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9OYXZEcm9wZG93bj5cblx0XHRcdFx0XHQ8L05hdj5cblx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItY29sbGFwc2UgY29sbGFwc2VcIj5cblx0XHRcdFx0XHRcdDxoMyBpZD1cIkxlZnREYXRlXCI+PC9oMz5cblx0XHRcdFx0XHQ8L2Rpdj4gKi99XG5cblxuXHRcdFx0XHRcdDxOYXZiYXIuQ29sbGFwc2U+XG5cdFx0XHRcdFx0XHQ8TmF2PntpZCA/ICg8PjwvPlxuXHRcdFx0XHRcdFx0KSA6ICg8TmF2Lkl0ZW0gY2xhc3NOYW1lPVwicHgtMlwiPlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3dlYjNDb25uZWN0fSB2YXJpYW50PVwic2Vjb25kYXJ5XCI+XG5cdFx0XHRcdFx0XHRcdFx0QWN0aXZhdGUgTWV0YW1hc2tcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQ8L05hdi5JdGVtPil9XG5cblx0XHRcdFx0XHRcdFx0PE5hdi5JdGVtIGNsYXNzTmFtZT1cInB4LTJcIj5cblx0XHRcdFx0XHRcdFx0XHR7dXNlciA/IChcblx0XHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJ0ZXh0LWxpZ2h0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdEhlbGxvLCB7dXNlci51c2VybmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvaDU+XG5cdFx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17bG9naW59IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0TWV0aXMgTG9naW5cblx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdDwvTmF2Lkl0ZW0+XG5cdFx0XHRcdFx0XHQ8L05hdj5cblx0XHRcdFx0XHQ8L05hdmJhci5Db2xsYXBzZT5cblx0XHRcdFx0PC9Db250YWluZXI+XG5cdFx0XHQ8L05hdmJhcj5cblx0XHQ8L2hlYWRlcj5cblx0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=