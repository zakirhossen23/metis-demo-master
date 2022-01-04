(function() {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 8913:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ login; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3406);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7707);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _metis_io_middleware_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2895);
/* harmony import */ var _metis_io_middleware_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_metis_io_middleware_client__WEBPACK_IMPORTED_MODULE_6__);









function login() {
  const pathname = (next_router__WEBPACK_IMPORTED_MODULE_4___default().pathname);

  async function login() {
    let oauth2Client = new _metis_io_middleware_client__WEBPACK_IMPORTED_MODULE_6__.Oauth2Client();
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
      let redirecturl;
      redirecturl = String((_urlParams$get = urlParams.get("url")) === null || _urlParams$get === void 0 ? void 0 : _urlParams$get.toString());
      next_router__WEBPACK_IMPORTED_MODULE_4___default().push(redirecturl);
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

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
          children: "Login"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
          name: "description",
          content: "Login"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
          rel: "icon",
          href: "/favicon.ico"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3___default()), {
          style: {
            padding: "0 30%",
            "paddingTop": 0,
            width: "100%"
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: {
              width: "500px",
              background: "transparent",
              padding: "19px",
              borderRadius: "4px",
              height: "100%",
              border: "white solid"
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              style: {
                margin: "0px 0px 53px 0px"
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "Login"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              style: {
                margin: "0px 0px 12px 0px"
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                children: "Please select one of the option to Login"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              onClick: web3Connect,
              style: {
                display: "flex",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
                margin: "20px 0"
              },
              className: "btn-primary",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                style: {
                  height: "45px",
                  width: "46px"
                },
                src: "https://polis.metis.io/static/img/metamask-fox.c06f3a3e.svg"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "11px"
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                  style: {
                    fontWeight: "bolder",
                    fontFamily: "sans-serif"
                  },
                  children: "Metamask"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                  style: {
                    fontSize: "15px",
                    fontFamily: "sans-serif"
                  },
                  children: "Connect With MetaMask"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              onClick: login,
              style: {
                display: "flex",
                padding: "10px",
                borderRadius: "5px",
                cursor: "pointer",
                margin: "20px 0"
              },
              className: "btn-primary",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                style: {
                  height: "45px",
                  width: "46px"
                },
                src: "https://polis.metis.io/static/img/polis-trans.9c0be85f.png"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "11px"
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                  style: {
                    fontWeight: "bolder",
                    fontFamily: "sans-serif"
                  },
                  children: "Metis Polis"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                  style: {
                    fontSize: "15px",
                    fontFamily: "sans-serif"
                  },
                  children: "Connect With Polis account"
                })]
              })]
            })]
          })
        })
      })]
    })
  });
}

/***/ }),

/***/ 2895:
/***/ (function(module) {

"use strict";
module.exports = require("@metis.io/middleware-client");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 7707:
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Col");;

/***/ }),

/***/ 3406:
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Row");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(8913));
module.exports = __webpack_exports__;

})();