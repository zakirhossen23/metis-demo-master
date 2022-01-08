(function() {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login/index.tsx":
/*!*******************************!*\
  !*** ./pages/login/index.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CreateEvents; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _metis_io_middleware_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @metis.io/middleware-client */ "@metis.io/middleware-client");
/* harmony import */ var _metis_io_middleware_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_metis_io_middleware_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\zakir\\Documents\\test\\metis-demo-master\\pages\\login\\index.tsx";






function CreateEvents() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  const {
    pathname
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();

  async function login() {
    let oauth2Client = new _metis_io_middleware_client__WEBPACK_IMPORTED_MODULE_5__.Oauth2Client();
    oauth2Client.startOauth2("61d0c1154fbb4f000dd11c6d" || 0, `${"http://metisgift.com"}${pathname}`);
  }

  async function web3Connect() {
    let result = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });
    result;

    try {
      var _urlParams$get;

      const getacc = await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{
          chainId: '0x24C'
        }]
      });
      getacc;
      const urlParams = new URLSearchParams(window.location.search);
      let redirecturl = (_urlParams$get = urlParams.get("url")) === null || _urlParams$get === void 0 ? void 0 : _urlParams$get.toString();
      router.push(redirecturl);
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
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
        } catch (addError) {
          // handle "add" error
          console.log(addError);
        }
      } // handle other "switch" errors

    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          name: "description",
          content: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "icon",
          href: "/favicon.ico"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default()), {
          style: {
            padding: "3% 37%",
            "paddingTop": 0,
            width: "100%"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              width: "500px",
              background: "transparent",
              padding: "19px",
              borderRadius: "4px",
              height: "100%",
              border: "white solid"
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                margin: "0px 0px 53px 0px"
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                children: "Login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              style: {
                margin: "0px 0px 12px 0px"
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
                children: "Please select one of the option to Login"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              onClick: web3Connect,
              style: {
                display: "flex",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
                margin: "20px 0"
              },
              className: "btn-primary",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                style: {
                  height: "45px",
                  width: "46px"
                },
                src: "https://polis.metis.io/static/img/metamask-fox.c06f3a3e.svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "11px"
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    fontWeight: "bolder",
                    fontFamily: "sans-serif"
                  },
                  children: "Metamask"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    fontSize: "15px",
                    fontFamily: "sans-serif"
                  },
                  children: "Connect With MetaMask"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              onClick: login,
              style: {
                display: "flex",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
                margin: "20px 0"
              },
              className: "btn-primary",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                style: {
                  height: "45px",
                  width: "46px"
                },
                src: "https://polis.metis.io/static/img/polis-trans.9c0be85f.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 29
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "11px"
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    fontWeight: "bolder",
                    fontFamily: "sans-serif"
                  },
                  children: "Metis Polis"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 33
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  style: {
                    fontSize: "15px",
                    fontFamily: "sans-serif"
                  },
                  children: "Connect With Polis account"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 33
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 13
      }, this)]
    }, void 0, true)
  }, void 0, false);
}

/***/ }),

/***/ "@metis.io/middleware-client":
/*!**********************************************!*\
  !*** external "@metis.io/middleware-client" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@metis.io/middleware-client");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-bootstrap/Col":
/*!**************************************!*\
  !*** external "react-bootstrap/Col" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Col");;

/***/ }),

/***/ "react-bootstrap/Row":
/*!**************************************!*\
  !*** external "react-bootstrap/Row" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Row");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/login/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXRpcy1kZW1vLy4vcGFnZXMvbG9naW4vaW5kZXgudHN4Iiwid2VicGFjazovL21ldGlzLWRlbW8vZXh0ZXJuYWwgXCJAbWV0aXMuaW8vbWlkZGxld2FyZS1jbGllbnRcIiIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIiIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiIiwid2VicGFjazovL21ldGlzLWRlbW8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJDcmVhdGVFdmVudHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsImxvZ2luIiwib2F1dGgyQ2xpZW50IiwiT2F1dGgyQ2xpZW50Iiwic3RhcnRPYXV0aDIiLCJwcm9jZXNzIiwid2ViM0Nvbm5lY3QiLCJyZXN1bHQiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJnZXRhY2MiLCJwYXJhbXMiLCJjaGFpbklkIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZWRpcmVjdHVybCIsImdldCIsInRvU3RyaW5nIiwicHVzaCIsInN3aXRjaEVycm9yIiwiY29kZSIsImNoYWluTmFtZSIsIm5hdGl2ZUN1cnJlbmN5IiwibmFtZSIsInN5bWJvbCIsImRlY2ltYWxzIiwicnBjVXJscyIsImFkZEVycm9yIiwiY29uc29sZSIsImxvZyIsInBhZGRpbmciLCJ3aWR0aCIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJib3JkZXIiLCJtYXJnaW4iLCJkaXNwbGF5IiwiY3Vyc29yIiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbkxlZnQiLCJmb250V2VpZ2h0IiwiZm9udEZhbWlseSIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFHQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBR2UsU0FBU0EsWUFBVCxHQUF3QjtBQUNuQyxRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQWVELHNEQUFTLEVBQTlCOztBQUNBLGlCQUFlRSxLQUFmLEdBQXVCO0FBQ25CLFFBQUlDLFlBQVksR0FBRyxJQUFJQyxxRUFBSixFQUFuQjtBQUNBRCxnQkFBWSxDQUFDRSxXQUFiLENBQ0lDLDBCQUFBLElBQWtDLENBRHRDLEVBRUssR0FBRUEsc0JBQTRCLEdBQUVMLFFBQVMsRUFGOUM7QUFJSDs7QUFDRCxpQkFBZU0sV0FBZixHQUE2QjtBQUN6QixRQUFJQyxNQUFNLEdBQUcsTUFBTUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QjtBQUFFQyxZQUFNLEVBQUU7QUFBVixLQUF4QixDQUFuQjtBQUNBSixVQUFNOztBQUNOLFFBQUk7QUFBQTs7QUFDQSxZQUFNSyxNQUFNLEdBQUcsTUFBTUosTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QjtBQUN6Q0MsY0FBTSxFQUFFLDRCQURpQztBQUV6Q0UsY0FBTSxFQUFFLENBQUM7QUFBRUMsaUJBQU8sRUFBRTtBQUFYLFNBQUQ7QUFGaUMsT0FBeEIsQ0FBckI7QUFJQUYsWUFBTTtBQUNOLFlBQU1HLFNBQVMsR0FBRyxJQUFJQyxlQUFKLENBQW9CUixNQUFNLENBQUNTLFFBQVAsQ0FBZ0JDLE1BQXBDLENBQWxCO0FBQ0EsVUFBSUMsV0FBZ0IscUJBQUdKLFNBQVMsQ0FBQ0ssR0FBVixDQUFjLEtBQWQsQ0FBSCxtREFBRyxlQUFzQkMsUUFBdEIsRUFBdkI7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QUE7QUFBQSxzQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEY7QUFBQTtBQUFGLG1CQURKO0FBaURILEM7Ozs7Ozs7Ozs7O0FDckhELHlEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcclxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcclxuaW1wb3J0ICogYXMgZG90ZW52IGZyb20gJ2RvdGVudic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE9hdXRoMkNsaWVudCB9IGZyb20gJ0BtZXRpcy5pby9taWRkbGV3YXJlLWNsaWVudCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmRlY2xhcmUgbGV0IHdpbmRvdzogYW55O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVFdmVudHMoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpO1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9naW4oKSB7XHJcbiAgICAgICAgbGV0IG9hdXRoMkNsaWVudCA9IG5ldyBPYXV0aDJDbGllbnQoKTtcclxuICAgICAgICBvYXV0aDJDbGllbnQuc3RhcnRPYXV0aDIoXHJcbiAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQUF9JRCB8fCAnJyxcclxuICAgICAgICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMfSR7cGF0aG5hbWV9YFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiB3ZWIzQ29ubmVjdCgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfcmVxdWVzdEFjY291bnRzJyB9KTtcclxuICAgICAgICByZXN1bHQ7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZ2V0YWNjID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnd2FsbGV0X3N3aXRjaEV0aGVyZXVtQ2hhaW4nLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBbeyBjaGFpbklkOiAnMHgyNEMnIH1dLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZ2V0YWNjO1xyXG4gICAgICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXHJcbiAgICAgICAgICAgIGxldCByZWRpcmVjdHVybDogYW55ID0gdXJsUGFyYW1zLmdldChcInVybFwiKT8udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2gocmVkaXJlY3R1cmwpO1xyXG4gICAgICAgIH0gY2F0Y2ggKHN3aXRjaEVycm9yOiBhbnkpIHtcclxuICAgICAgICAgICAgLy8gVGhpcyBlcnJvciBjb2RlIGluZGljYXRlcyB0aGF0IHRoZSBjaGFpbiBoYXMgbm90IGJlZW4gYWRkZWQgdG8gTWV0YU1hc2suXHJcbiAgICAgICAgICAgIGlmIChzd2l0Y2hFcnJvci5jb2RlID09PSA0OTAyKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnd2FsbGV0X2FkZEV0aGVyZXVtQ2hhaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFpbklkOiAnMHgyNEMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluTmFtZTogJ01ldGlzIFN0YXJkdXN0IFRlc3RuZXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdGl2ZUN1cnJlbmN5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdNZXRpcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbDogJ3RNRVRJUycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxzOiAxOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJwY1VybHM6IFsnaHR0cHM6Ly9zdGFyZHVzdC5tZXRpcy5pby8/b3duZXI9NTg4J10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoYWRkRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBoYW5kbGUgXCJhZGRcIiBlcnJvclxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFkZEVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBoYW5kbGUgb3RoZXIgXCJzd2l0Y2hcIiBlcnJvcnNcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Pjw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkxvZ2luPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJMb2dpblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7IHBhZGRpbmc6IFwiMyUgMzclXCIsIFwicGFkZGluZ1RvcFwiOiAwLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI1MDBweFwiLCBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsIHBhZGRpbmc6IFwiMTlweFwiLCBib3JkZXJSYWRpdXM6IFwiNHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIGJvcmRlcjogXCJ3aGl0ZSBzb2xpZFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIwcHggMHB4IDUzcHggMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+TG9naW48L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMHB4IDBweCAxMnB4IDBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlBsZWFzZSBzZWxlY3Qgb25lIG9mIHRoZSBvcHRpb24gdG8gTG9naW48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXt3ZWIzQ29ubmVjdH0gc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHBhZGRpbmc6IFwiMTBweFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIG1hcmdpbjogXCIyMHB4IDBcIiB9fSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBoZWlnaHQ6IFwiNDVweFwiLCB3aWR0aDogXCI0NnB4XCIgfX0gc3JjPVwiaHR0cHM6Ly9wb2xpcy5tZXRpcy5pby9zdGF0aWMvaW1nL21ldGFtYXNrLWZveC5jMDZmM2EzZS5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgbWFyZ2luTGVmdDogXCIxMXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkZXJcIiwgZm9udEZhbWlseTogXCJzYW5zLXNlcmlmXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1ldGFtYXNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE1cHhcIiwgZm9udEZhbWlseTogXCJzYW5zLXNlcmlmXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3QgV2l0aCBNZXRhTWFza1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtsb2dpbn0gc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHBhZGRpbmc6IFwiMTBweFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIG1hcmdpbjogXCIyMHB4IDBcIiB9fSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBoZWlnaHQ6IFwiNDVweFwiLCB3aWR0aDogXCI0NnB4XCIgfX0gc3JjPVwiaHR0cHM6Ly9wb2xpcy5tZXRpcy5pby9zdGF0aWMvaW1nL3BvbGlzLXRyYW5zLjljMGJlODVmLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBtYXJnaW5MZWZ0OiBcIjExcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRlclwiLCBmb250RmFtaWx5OiBcInNhbnMtc2VyaWZcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWV0aXMgUG9saXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMTVweFwiLCBmb250RmFtaWx5OiBcInNhbnMtc2VyaWZcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29ubmVjdCBXaXRoIFBvbGlzIGFjY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtZXRpcy5pby9taWRkbGV3YXJlLWNsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Db2xcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==