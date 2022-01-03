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
/* harmony export */   "default": function() { return /* binding */ login; }
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






function login() {
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
      let redirecturl = "";
      redirecturl = (_urlParams$get = urlParams.get("url")) === null || _urlParams$get === void 0 ? void 0 : _urlParams$get.toString();
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
            padding: "0 30%",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXRpcy1kZW1vLy4vcGFnZXMvbG9naW4vaW5kZXgudHN4Iiwid2VicGFjazovL21ldGlzLWRlbW8vZXh0ZXJuYWwgXCJAbWV0aXMuaW8vbWlkZGxld2FyZS1jbGllbnRcIiIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbWV0aXMtZGVtby9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIiIsIndlYnBhY2s6Ly9tZXRpcy1kZW1vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiIiwid2VicGFjazovL21ldGlzLWRlbW8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJsb2dpbiIsInJvdXRlciIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwib2F1dGgyQ2xpZW50IiwiT2F1dGgyQ2xpZW50Iiwic3RhcnRPYXV0aDIiLCJwcm9jZXNzIiwid2ViM0Nvbm5lY3QiLCJyZXN1bHQiLCJ3aW5kb3ciLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJnZXRhY2MiLCJwYXJhbXMiLCJjaGFpbklkIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZWRpcmVjdHVybCIsImdldCIsInRvU3RyaW5nIiwicHVzaCIsInN3aXRjaEVycm9yIiwiY29kZSIsImNoYWluTmFtZSIsIm5hdGl2ZUN1cnJlbmN5IiwibmFtZSIsInN5bWJvbCIsImRlY2ltYWxzIiwicnBjVXJscyIsImFkZEVycm9yIiwiY29uc29sZSIsImxvZyIsInBhZGRpbmciLCJ3aWR0aCIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJib3JkZXIiLCJtYXJnaW4iLCJkaXNwbGF5IiwiY3Vyc29yIiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbkxlZnQiLCJmb250V2VpZ2h0IiwiZm9udEZhbWlseSIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBR2UsU0FBU0EsS0FBVCxHQUFpQjtBQUM1QixRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRUEsUUFBTTtBQUFFQztBQUFGLE1BQWVELHNEQUFTLEVBQTlCOztBQUNBLGlCQUFlRixLQUFmLEdBQXVCO0FBQ25CLFFBQUlJLFlBQVksR0FBRyxJQUFJQyxxRUFBSixFQUFuQjtBQUNBRCxnQkFBWSxDQUFDRSxXQUFiLENBQ0lDLDBCQUFBLElBQWtDLENBRHRDLEVBRUssR0FBRUEsc0JBQTRCLEdBQUVKLFFBQVMsRUFGOUM7QUFJSDs7QUFDRCxpQkFBZUssV0FBZixHQUE2QjtBQUN6QixRQUFJQyxNQUFNLEdBQUcsTUFBTUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QjtBQUFFQyxZQUFNLEVBQUU7QUFBVixLQUF4QixDQUFuQjtBQUNBSixVQUFNOztBQUNOLFFBQUk7QUFBQTs7QUFDQSxZQUFNSyxNQUFNLEdBQUcsTUFBTUosTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QjtBQUN6Q0MsY0FBTSxFQUFFLDRCQURpQztBQUV6Q0UsY0FBTSxFQUFFLENBQUM7QUFBRUMsaUJBQU8sRUFBRTtBQUFYLFNBQUQ7QUFGaUMsT0FBeEIsQ0FBckI7QUFJQUYsWUFBTTtBQUNOLFlBQU1HLFNBQVMsR0FBRyxJQUFJQyxlQUFKLENBQW9CUixNQUFNLENBQUNTLFFBQVAsQ0FBZ0JDLE1BQXBDLENBQWxCO0FBQ0EsVUFBSUMsV0FBVyxHQUFHLEVBQWxCO0FBQ0FBLGlCQUFXLHFCQUFHSixTQUFTLENBQUNLLEdBQVYsQ0FBYyxLQUFkLENBQUgsbURBQUcsZUFBc0JDLFFBQXRCLEVBQWQ7QUFDQXRCLFlBQU0sQ0FBQ3VCLElBQVAsQ0FBWUgsV0FBWjtBQUNILEtBVkQsQ0FVRSxPQUFPSSxXQUFQLEVBQXlCO0FBQ3ZCO0FBQ0EsVUFBSUEsV0FBVyxDQUFDQyxJQUFaLEtBQXFCLElBQXpCLEVBQStCO0FBQzNCLFlBQUk7QUFDQSxnQkFBTWhCLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsT0FBaEIsQ0FBd0I7QUFDMUJDLGtCQUFNLEVBQUUseUJBRGtCO0FBRTFCRSxrQkFBTSxFQUFFLENBQ0o7QUFDSUMscUJBQU8sRUFBRSxPQURiO0FBRUlXLHVCQUFTLEVBQUUsd0JBRmY7QUFHSUMsNEJBQWMsRUFBRTtBQUNaQyxvQkFBSSxFQUFFLE9BRE07QUFFWkMsc0JBQU0sRUFBRSxRQUZJO0FBR1pDLHdCQUFRLEVBQUU7QUFIRSxlQUhwQjtBQVFJQyxxQkFBTyxFQUFFLENBQUMsc0NBQUQ7QUFSYixhQURJO0FBRmtCLFdBQXhCLENBQU47QUFlSCxTQWhCRCxDQWdCRSxPQUFPQyxRQUFQLEVBQWlCO0FBQ2Y7QUFDQUMsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaO0FBQ0g7QUFDSixPQXZCc0IsQ0F3QnZCOztBQUNIO0FBR0o7O0FBRUQsc0JBQ0k7QUFBQSwyQkFBRTtBQUFBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFNLGNBQUksRUFBQyxhQUFYO0FBQXlCLGlCQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJO0FBQU0sYUFBRyxFQUFDLE1BQVY7QUFBaUIsY0FBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFPRSw4REFBQyw0REFBRDtBQUFBLCtCQUNJLDhEQUFDLDREQUFEO0FBQUssZUFBSyxFQUFFO0FBQUVHLG1CQUFPLEVBQUUsT0FBWDtBQUFvQiwwQkFBYyxDQUFsQztBQUFxQ0MsaUJBQUssRUFBRTtBQUE1QyxXQUFaO0FBQUEsaUNBQ0k7QUFBSyxpQkFBSyxFQUFFO0FBQUVBLG1CQUFLLEVBQUUsT0FBVDtBQUFrQkMsd0JBQVUsRUFBRSxhQUE5QjtBQUE2Q0YscUJBQU8sRUFBRSxNQUF0RDtBQUE4REcsMEJBQVksRUFBRSxLQUE1RTtBQUFtRkMsb0JBQU0sRUFBRSxNQUEzRjtBQUFtR0Msb0JBQU0sRUFBRTtBQUEzRyxhQUFaO0FBQUEsb0NBQ0k7QUFBSyxtQkFBSyxFQUFFO0FBQUVDLHNCQUFNLEVBQUU7QUFBVixlQUFaO0FBQUEscUNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBSUk7QUFBSyxtQkFBSyxFQUFFO0FBQUVBLHNCQUFNLEVBQUU7QUFBVixlQUFaO0FBQUEscUNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUpKLGVBT0k7QUFBSyxxQkFBTyxFQUFFbEMsV0FBZDtBQUEyQixtQkFBSyxFQUFFO0FBQUVtQyx1QkFBTyxFQUFFLE1BQVg7QUFBbUJQLHVCQUFPLEVBQUUsTUFBNUI7QUFBb0NHLDRCQUFZLEVBQUUsS0FBbEQ7QUFBeURLLHNCQUFNLEVBQUUsU0FBakU7QUFBNEVGLHNCQUFNLEVBQUU7QUFBcEYsZUFBbEM7QUFBa0ksdUJBQVMsRUFBQyxhQUE1STtBQUFBLHNDQUNJO0FBQUsscUJBQUssRUFBRTtBQUFFRix3QkFBTSxFQUFFLE1BQVY7QUFBa0JILHVCQUFLLEVBQUU7QUFBekIsaUJBQVo7QUFBK0MsbUJBQUcsRUFBQztBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBRUk7QUFBSyxxQkFBSyxFQUFFO0FBQUVNLHlCQUFPLEVBQUUsTUFBWDtBQUFtQkUsK0JBQWEsRUFBRSxRQUFsQztBQUE0Q0MsNEJBQVUsRUFBRTtBQUF4RCxpQkFBWjtBQUFBLHdDQUNJO0FBQU0sdUJBQUssRUFBRTtBQUFFQyw4QkFBVSxFQUFFLFFBQWQ7QUFBd0JDLDhCQUFVLEVBQUU7QUFBcEMsbUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosZUFJSTtBQUFNLHVCQUFLLEVBQUU7QUFBRUMsNEJBQVEsRUFBRSxNQUFaO0FBQW9CRCw4QkFBVSxFQUFFO0FBQWhDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBUEosZUFrQkk7QUFBSyxxQkFBTyxFQUFFaEQsS0FBZDtBQUFxQixtQkFBSyxFQUFFO0FBQUUyQyx1QkFBTyxFQUFFLE1BQVg7QUFBbUJQLHVCQUFPLEVBQUUsTUFBNUI7QUFBb0NHLDRCQUFZLEVBQUUsS0FBbEQ7QUFBeURLLHNCQUFNLEVBQUUsU0FBakU7QUFBNEVGLHNCQUFNLEVBQUU7QUFBcEYsZUFBNUI7QUFBNEgsdUJBQVMsRUFBQyxhQUF0STtBQUFBLHNDQUNJO0FBQUsscUJBQUssRUFBRTtBQUFFRix3QkFBTSxFQUFFLE1BQVY7QUFBa0JILHVCQUFLLEVBQUU7QUFBekIsaUJBQVo7QUFBK0MsbUJBQUcsRUFBQztBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBRUk7QUFBSyxxQkFBSyxFQUFFO0FBQUVNLHlCQUFPLEVBQUUsTUFBWDtBQUFtQkUsK0JBQWEsRUFBRSxRQUFsQztBQUE0Q0MsNEJBQVUsRUFBRTtBQUF4RCxpQkFBWjtBQUFBLHdDQUNJO0FBQU0sdUJBQUssRUFBRTtBQUFFQyw4QkFBVSxFQUFFLFFBQWQ7QUFBd0JDLDhCQUFVLEVBQUU7QUFBcEMsbUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosZUFJSTtBQUFNLHVCQUFLLEVBQUU7QUFBRUMsNEJBQVEsRUFBRSxNQUFaO0FBQW9CRCw4QkFBVSxFQUFFO0FBQWhDLG1CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEY7QUFBQTtBQUFGLG1CQURKO0FBaURILEM7Ozs7Ozs7Ozs7O0FDckhELHlEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xyXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xyXG5pbXBvcnQgKiBhcyBkb3RlbnYgZnJvbSAnZG90ZW52JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgT2F1dGgyQ2xpZW50IH0gZnJvbSAnQG1ldGlzLmlvL21pZGRsZXdhcmUtY2xpZW50JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZGVjbGFyZSBsZXQgd2luZG93OiBhbnk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZ2luKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKCk7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBsb2dpbigpIHtcclxuICAgICAgICBsZXQgb2F1dGgyQ2xpZW50ID0gbmV3IE9hdXRoMkNsaWVudCgpO1xyXG4gICAgICAgIG9hdXRoMkNsaWVudC5zdGFydE9hdXRoMihcclxuICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBQX0lEIHx8ICcnLFxyXG4gICAgICAgICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19VUkx9JHtwYXRobmFtZX1gXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHdlYjNDb25uZWN0KCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7IG1ldGhvZDogJ2V0aF9yZXF1ZXN0QWNjb3VudHMnIH0pO1xyXG4gICAgICAgIHJlc3VsdDtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBnZXRhY2MgPSBhd2FpdCB3aW5kb3cuZXRoZXJldW0ucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICd3YWxsZXRfc3dpdGNoRXRoZXJldW1DaGFpbicsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IFt7IGNoYWluSWQ6ICcweDI0QycgfV0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBnZXRhY2M7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaClcclxuICAgICAgICAgICAgbGV0IHJlZGlyZWN0dXJsID0gXCJcIjtcclxuICAgICAgICAgICAgcmVkaXJlY3R1cmwgPSB1cmxQYXJhbXMuZ2V0KFwidXJsXCIpPy50b1N0cmluZygpO1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaChyZWRpcmVjdHVybCk7XHJcbiAgICAgICAgfSBjYXRjaCAoc3dpdGNoRXJyb3I6IGFueSkge1xyXG4gICAgICAgICAgICAvLyBUaGlzIGVycm9yIGNvZGUgaW5kaWNhdGVzIHRoYXQgdGhlIGNoYWluIGhhcyBub3QgYmVlbiBhZGRlZCB0byBNZXRhTWFzay5cclxuICAgICAgICAgICAgaWYgKHN3aXRjaEVycm9yLmNvZGUgPT09IDQ5MDIpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICd3YWxsZXRfYWRkRXRoZXJldW1DaGFpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYWluSWQ6ICcweDI0QycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhaW5OYW1lOiAnTWV0aXMgU3RhcmR1c3QgVGVzdG5ldCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlQ3VycmVuY3k6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ01ldGlzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sOiAndE1FVElTJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbHM6IDE4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnBjVXJsczogWydodHRwczovL3N0YXJkdXN0Lm1ldGlzLmlvLz9vd25lcj01ODgnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChhZGRFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBcImFkZFwiIGVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWRkRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGhhbmRsZSBvdGhlciBcInN3aXRjaFwiIGVycm9yc1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD48PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Mb2dpbjwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiTG9naW5cIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCBzdHlsZT17eyBwYWRkaW5nOiBcIjAgMzAlXCIsIFwicGFkZGluZ1RvcFwiOiAwLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI1MDBweFwiLCBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsIHBhZGRpbmc6IFwiMTlweFwiLCBib3JkZXJSYWRpdXM6IFwiNHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIGJvcmRlcjogXCJ3aGl0ZSBzb2xpZFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIwcHggMHB4IDUzcHggMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+TG9naW48L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMHB4IDBweCAxMnB4IDBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlBsZWFzZSBzZWxlY3Qgb25lIG9mIHRoZSBvcHRpb24gdG8gTG9naW48L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXt3ZWIzQ29ubmVjdH0gc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHBhZGRpbmc6IFwiMTBweFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIG1hcmdpbjogXCIyMHB4IDBcIiB9fSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBoZWlnaHQ6IFwiNDVweFwiLCB3aWR0aDogXCI0NnB4XCIgfX0gc3JjPVwiaHR0cHM6Ly9wb2xpcy5tZXRpcy5pby9zdGF0aWMvaW1nL21ldGFtYXNrLWZveC5jMDZmM2EzZS5zdmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiwgbWFyZ2luTGVmdDogXCIxMXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogXCJib2xkZXJcIiwgZm9udEZhbWlseTogXCJzYW5zLXNlcmlmXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1ldGFtYXNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE1cHhcIiwgZm9udEZhbWlseTogXCJzYW5zLXNlcmlmXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3QgV2l0aCBNZXRhTWFza1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtsb2dpbn0gc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIHBhZGRpbmc6IFwiMTBweFwiLCBib3JkZXJSYWRpdXM6IFwiNXB4XCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIG1hcmdpbjogXCIyMHB4IDBcIiB9fSBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBoZWlnaHQ6IFwiNDVweFwiLCB3aWR0aDogXCI0NnB4XCIgfX0gc3JjPVwiaHR0cHM6Ly9wb2xpcy5tZXRpcy5pby9zdGF0aWMvaW1nL3BvbGlzLXRyYW5zLjljMGJlODVmLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLCBtYXJnaW5MZWZ0OiBcIjExcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiBcImJvbGRlclwiLCBmb250RmFtaWx5OiBcInNhbnMtc2VyaWZcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWV0aXMgUG9saXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMTVweFwiLCBmb250RmFtaWx5OiBcInNhbnMtc2VyaWZcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29ubmVjdCBXaXRoIFBvbGlzIGFjY291bnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWV0aXMuaW8vbWlkZGxld2FyZS1jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvQ29sXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvUm93XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=