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
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
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
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
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
    _web3Connect = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
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
    _login = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      var oauth2Client;
      return C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
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

  function donation() {
    next_router__WEBPACK_IMPORTED_MODULE_5___default().push("/donation");
  }

  function StartEvent() {
    next_router__WEBPACK_IMPORTED_MODULE_5___default().push("/CreateEvents");
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
              lineNumber: 93,
              columnNumber: 11
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_8__.default.Brand, {
              children: "MetisGift"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_8__.default.Toggle, {
          "aria-controls": "basic-navbar-nav"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_8__.default.Collapse, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_10__.default, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_10__.default.Item, {
              className: "px-2",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__.default, {
                onClick: donation,
                variant: "secondary",
                children: "Donate"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 8
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_10__.default.Item, {
              className: "px-2",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__.default, {
                onClick: StartEvent,
                variant: "secondary",
                children: "Start Event"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIudHN4Il0sIm5hbWVzIjpbIkhlYWRlciIsInVzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsImlkIiwicXVlcnkiLCJjIiwiRGF0ZSIsIkVWRU5UIiwiZ2V0VGltZSIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJuIiwiZCIsImRhIiwiTWF0aCIsImZsb29yIiwiaCIsIm0iLCJzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsInRvU3RyaW5nIiwid2ViM0Nvbm5lY3QiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJwYXJhbXMiLCJjaGFpbklkIiwiY29kZSIsImNoYWluTmFtZSIsIm5hdGl2ZUN1cnJlbmN5IiwibmFtZSIsInN5bWJvbCIsImRlY2ltYWxzIiwicnBjVXJscyIsImNvbnNvbGUiLCJsb2ciLCJsb2dpbiIsIm9hdXRoMkNsaWVudCIsIk9hdXRoMkNsaWVudCIsInN0YXJ0T2F1dGgyIiwicHJvY2VzcyIsImRvbmF0aW9uIiwiUm91dGVyIiwiU3RhcnRFdmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHZSxTQUFTQSxNQUFULE9BQStCO0FBQUE7O0FBQUEsTUFBYkMsSUFBYSxRQUFiQSxJQUFhO0FBQzdDLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBRDZDLG1CQUV4QkEsc0RBQVMsRUFGZTtBQUFBLE1BRXJDQyxRQUZxQyxjQUVyQ0EsUUFGcUM7O0FBQUEsTUFHckNDLEVBSHFDLEdBRzlCSCxNQUFNLENBQUNJLEtBSHVCLENBR3JDRCxFQUhxQztBQU03QyxNQUFJRSxDQUFDLEdBQUcsSUFBSUMsSUFBSixDQUFTQyxnRUFBVCxFQUE0QkMsT0FBNUIsRUFB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QUFBLHFDQUNDLDhEQUFDLDREQUFEO0FBQVEsdUJBQU8sRUFBRUUsVUFBakI7QUFBNkIsdUJBQU8sRUFBQyxXQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBaUNBOztHQTFHdUJoRCxNO1VBQ1JHLGtELEVBQ01BLGtEOzs7S0FGRUgsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmIzM2Y3M2NkMmVkNmVkOThmN2U4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgT2F1dGgyQ2xpZW50IH0gZnJvbSAnQG1ldGlzLmlvL21pZGRsZXdhcmUtY2xpZW50JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJztcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInO1xuaW1wb3J0IE5hdkRyb3Bkb3duIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZEcm9wZG93bic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IHsgRVZFTlQgfSBmcm9tICcuL3ZhcmlhYmxlcy9FdmVudHMnO1xuZGVjbGFyZSBsZXQgd2luZG93OiBhbnk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7IHVzZXIgfTogYW55KSB7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXHRjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKTtcblx0Y29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG5cblx0dmFyIGMgPSBuZXcgRGF0ZShFVkVOVC5FbmREYXRlVGltZSkuZ2V0VGltZSgpO1xuXHRjb25zdCB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHRcdHZhciBkID0gYyAtIG47XG5cdFx0dmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcblx0XHR2YXIgaCA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG5cdFx0dmFyIG0gPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XG5cdFx0dmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XG5cdFx0dHJ5IHtcblx0XHRcdGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxlZnREYXRlXCIpICE9PSBudWxsKVxuXHRcdFx0XHQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJMZWZ0RGF0ZVwiKSBhcyBIVE1MSFJFbGVtZW50KS5pbm5lckhUTUwgPSAoZGEudG9TdHJpbmcoKSArIFwiIGRheXMgXCIgKyBoLnRvU3RyaW5nKCkgKyBcIiBob3VycyBcIiArIG0udG9TdHJpbmcoKSArIFwiIG1pbnV0ZXMgXCIgKyBzLnRvU3RyaW5nKCkgKyBcIiBzZWNvbmRzXCIpO1xuXG5cdFx0fSBjYXRjaCB7IH1cblx0fSwgMTAwMCk7XG5cblxuXHRhc3luYyBmdW5jdGlvbiB3ZWIzQ29ubmVjdCgpIHtcblx0XHR3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcblx0XHRcdFx0bWV0aG9kOiAnd2FsbGV0X3N3aXRjaEV0aGVyZXVtQ2hhaW4nLFxuXHRcdFx0XHRwYXJhbXM6IFt7IGNoYWluSWQ6ICcweDI0QycgfV0sXG5cdFx0XHR9KTtcblx0XHR9IGNhdGNoIChzd2l0Y2hFcnJvcjogYW55KSB7XG5cdFx0XHQvLyBUaGlzIGVycm9yIGNvZGUgaW5kaWNhdGVzIHRoYXQgdGhlIGNoYWluIGhhcyBub3QgYmVlbiBhZGRlZCB0byBNZXRhTWFzay5cblx0XHRcdGlmIChzd2l0Y2hFcnJvci5jb2RlID09PSA0OTAyKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0YXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xuXHRcdFx0XHRcdFx0bWV0aG9kOiAnd2FsbGV0X2FkZEV0aGVyZXVtQ2hhaW4nLFxuXHRcdFx0XHRcdFx0cGFyYW1zOiBbXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbklkOiAnMHgyNEMnLFxuXHRcdFx0XHRcdFx0XHRcdGNoYWluTmFtZTogJ01ldGlzIFN0YXJkdXN0IFRlc3RuZXQnLFxuXHRcdFx0XHRcdFx0XHRcdG5hdGl2ZUN1cnJlbmN5OiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lOiAnTWV0aXMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0c3ltYm9sOiAndE1FVElTJyxcblx0XHRcdFx0XHRcdFx0XHRcdGRlY2ltYWxzOiAxOCxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdHJwY1VybHM6IFsnaHR0cHM6Ly9zdGFyZHVzdC5tZXRpcy5pby8/b3duZXI9NTg4J10sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGNhdGNoIChhZGRFcnJvcikge1xuXHRcdFx0XHRcdC8vIGhhbmRsZSBcImFkZFwiIGVycm9yXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coYWRkRXJyb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBoYW5kbGUgb3RoZXIgXCJzd2l0Y2hcIiBlcnJvcnNcblx0XHR9XG5cdH1cblxuXHRhc3luYyBmdW5jdGlvbiBsb2dpbigpIHtcblx0XHRsZXQgb2F1dGgyQ2xpZW50ID0gbmV3IE9hdXRoMkNsaWVudCgpO1xuXHRcdG9hdXRoMkNsaWVudC5zdGFydE9hdXRoMihcblx0XHRcdHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQUF9JRCB8fCAnJyxcblx0XHRcdGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VSTH0ke3BhdGhuYW1lfWBcblx0XHQpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZG9uYXRpb24oKSB7XG5cdFx0Um91dGVyLnB1c2goXCIvZG9uYXRpb25cIilcblx0fVxuXHRmdW5jdGlvbiBTdGFydEV2ZW50KCkge1xuXHRcdFJvdXRlci5wdXNoKFwiL0NyZWF0ZUV2ZW50c1wiKVxuXG5cdH1cblx0cmV0dXJuIChcblx0XHQ8aGVhZGVyIGNsYXNzTmFtZT1cIm1iLTVcIj5cblx0XHRcdDxOYXZiYXIgY2xhc3NOYW1lPVwicHktNFwiIGJnPVwiIzc0QjM3MFwiIGV4cGFuZD1cImxnXCIgPlxuXHRcdFx0XHQ8Q29udGFpbmVyPlxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XG5cblx0XHRcdFx0XHRcdDxhPlx0PGltZyBjbGFzc05hbWU9J05hdkltZycgc3JjPScvTG9nby5zdmcnPlxuXHRcdFx0XHRcdFx0PC9pbWc+XG5cdFx0XHRcdFx0XHRcdDxOYXZiYXIuQnJhbmQ+TWV0aXNHaWZ0PC9OYXZiYXIuQnJhbmQ+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgLz5cblxuXG5cdFx0XHRcdFx0PE5hdmJhci5Db2xsYXBzZT5cblx0XHRcdFx0XHRcdDxOYXY+XG5cdFx0XHRcdFx0XHRcdDxOYXYuSXRlbSBjbGFzc05hbWU9XCJweC0yXCI+XG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXtkb25hdGlvbn0gdmFyaWFudD1cInNlY29uZGFyeVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0RG9uYXRlXG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvTmF2Lkl0ZW0+XG5cblx0XHRcdFx0XHRcdFx0PE5hdi5JdGVtIGNsYXNzTmFtZT1cInB4LTJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e1N0YXJ0RXZlbnR9IHZhcmlhbnQ9XCJzZWNvbmRhcnlcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFN0YXJ0IEV2ZW50XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvTmF2Lkl0ZW0+XG5cdFx0XHRcdFx0XHQ8L05hdj5cblx0XHRcdFx0XHQ8L05hdmJhci5Db2xsYXBzZT5cblx0XHRcdFx0PC9Db250YWluZXI+XG5cdFx0XHQ8L05hdmJhcj5cblx0XHQ8L2hlYWRlcj5cblx0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=