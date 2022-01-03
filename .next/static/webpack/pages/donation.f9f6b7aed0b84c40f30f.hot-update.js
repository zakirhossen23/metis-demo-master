self["webpackHotUpdate_N_E"]("pages/donation",{

/***/ "./pages/donation/index.jsx":
/*!**********************************!*\
  !*** ./pages/donation/index.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Donation; }
/* harmony export */ });
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/useContract */ "./services/useContract.js");
/* harmony import */ var _components_modals_DonateNFTModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/modals/DonateNFTModal */ "./components/modals/DonateNFTModal.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\zakir\\Documents\\test\\metis-demo-master\\pages\\donation\\index.jsx",
    _s = $RefreshSig$();









function Donation() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      CreatemodalShow = _useState[0],
      setModalShow = _useState[1];

  var _useContract = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_6__.default)('ERC721'),
      contract = _useContract.contract,
      signerAddress = _useContract.signerAddress;

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      list = _useState2[0],
      setList = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      tokenName = _useState3[0],
      setTokenName = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      tokenSymbol = _useState4[0],
      setTokenSymbol = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    fetchContractData();
    window.ethereum.on('accountsChanged', fetchContractData);
    window.ethereum.on('chainChanged', fetchContractData);
    return function () {
      window.ethereum.removeListener('accountsChanged', fetchContractData);
      window.ethereum.removeListener('chainChanged', fetchContractData);
    };
  }, [contract]);

  function fetchContractData() {
    return _fetchContractData.apply(this, arguments);
  }

  function _fetchContractData() {
    _fetchContractData = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var totalEvent, arr, i, value, object, pricedes1;
      return C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!contract) {
                _context.next = 28;
                break;
              }

              _context.t0 = setTokenName;
              _context.next = 5;
              return contract.name();

            case 5:
              _context.t1 = _context.sent;
              (0, _context.t0)(_context.t1);
              _context.t2 = setTokenSymbol;
              _context.next = 10;
              return contract.symbol();

            case 10:
              _context.t3 = _context.sent;
              (0, _context.t2)(_context.t3);
              _context.next = 14;
              return contract.totalEvent();

            case 14:
              totalEvent = _context.sent;
              arr = [];
              i = 0;

            case 17:
              if (!(i < Number(totalEvent))) {
                _context.next = 26;
                break;
              }

              _context.next = 20;
              return contract.eventURI(i);

            case 20:
              value = _context.sent;

              if (value) {
                object = JSON.parse(value);
                pricedes1 = 0;

                try {
                  pricedes1 = Number(object.properties.Goal.description * 3817.09);
                } catch (ex) {}

                arr.push({
                  eventId: i,
                  Title: object.properties.Title.description,
                  Date: object.properties.Date.description,
                  Goalusd: pricedes1,
                  Goal: object.properties.Goal.description,
                  logo: object.properties.logo.description
                });
              }

              console.log(value);

            case 23:
              i++;
              _context.next = 17;
              break;

            case 26:
              setList(arr);
              document.getElementById("Loading").style = "display:none";

            case 28:
              _context.next = 33;
              break;

            case 30:
              _context.prev = 30;
              _context.t4 = _context["catch"](0);
              console.error(_context.t4);

            case 33:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 30]]);
    }));
    return _fetchContractData.apply(this, arguments);
  }

  function LeftDate(datetext) {
    var c = new Date(datetext).getTime();
    var n = new Date().getTime();
    var d = c - n;
    var da = Math.floor(d / (1000 * 60 * 60 * 24));
    var h = Math.floor(d % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var m = Math.floor(d % (1000 * 60 * 60) / (1000 * 60));
    var s = Math.floor(d % (1000 * 60) / 1000);
    return da.toString() + " Days " + h.toString() + " hours " + m.toString() + " minutes " + s.toString() + " seconds";
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("title", {
        children: "Donation"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "description",
        content: "Donation"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("link", {
        rel: "icon",
        href: "/Logo.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__.default, {
      className: "DonationBar",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
        href: "?q=All",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
          className: "DonationBarLink active",
          children: "All"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
        href: "?q=Today",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
          className: "DonationBarLink",
          children: "Today"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
        href: "?q=This Month",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
          className: "DonationBarLink",
          children: "This Month"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      id: "Loading",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }, this), list.map(function (listItem) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "row",
        style: {
          height: "397px",
          margin: "28px",
          background: "white",
          color: "black",
          overflow: "hidden",
          padding: 0
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
            children: LeftDate(listItem.Date)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 26
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          style: {
            "display": "flex"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            src: listItem.logo,
            style: {
              width: "327px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            style: {
              "paddingTop": "33px",
              "marginLeft": "82px",
              display: "flex",
              "flexDirection": "column",
              width: "100%",
              "rowGap": "10px"
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
              children: listItem.Title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              style: {
                display: "flex",
                "whiteSpace": "pre-wrap"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
                children: "Goal:  "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
                children: ["$", listItem.Goalusd, " (", listItem.Goal, " ETH)"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              style: {
                display: "flex",
                height: "61px",
                "float": "right",
                gap: "26px",
                right: 0,
                width: "100%",
                "marginTop": "50px",
                "marginLeft": 0,
                "flexDirection": "column"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                "class": "card",
                style: {
                  "height": "100%",
                  border: "0px"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                style: {
                  "display": "flex",
                  gap: "39px"
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                  href: '/donation/auction/0',
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "card",
                    style: {
                      color: "white",
                      background: "rgb(0, 222, 205)",
                      "textAlign": "center",
                      cursor: "pointer",
                      height: "100%",
                      "float": "right",
                      width: "220px"
                    },
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      className: "card-body",
                      style: {
                        height: "100%",
                        "paddingTop": "6px"
                      },
                      children: "Donate NFT"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 146,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 145,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                  href: '/donation/auction/0',
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "card",
                    style: {
                      color: "white",
                      background: "rgb(0, 222, 205)",
                      "textAlign": "center",
                      cursor: "pointer",
                      height: "100%",
                      "float": "right",
                      width: "220px"
                    },
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      className: "card-body",
                      style: {
                        height: "100%",
                        "paddingTop": "6px"
                      },
                      children: "Go to auction"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 153,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 152,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 151,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }, _this)]
      }, listItem.eventId, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_modals_DonateNFTModal__WEBPACK_IMPORTED_MODULE_7__.default, {
      show: CreatemodalShow,
      onHide: function onHide() {
        setModalShow(false); // This is a poor implementation, better to implement an event listener
      },
      contract: contract,
      senderAddress: signerAddress
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(Donation, "uT/2xKVROqHplMPUwhAnCoXMPxs=", false, function () {
  return [_services_useContract__WEBPACK_IMPORTED_MODULE_6__.default];
});

_c = Donation;

var _c;

$RefreshReg$(_c, "Donation");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9uYXRpb24vaW5kZXguanN4Il0sIm5hbWVzIjpbIkRvbmF0aW9uIiwidXNlU3RhdGUiLCJDcmVhdGVtb2RhbFNob3ciLCJzZXRNb2RhbFNob3ciLCJ1c2VDb250cmFjdCIsImNvbnRyYWN0Iiwic2lnbmVyQWRkcmVzcyIsImxpc3QiLCJzZXRMaXN0IiwidG9rZW5OYW1lIiwic2V0VG9rZW5OYW1lIiwidG9rZW5TeW1ib2wiLCJzZXRUb2tlblN5bWJvbCIsInVzZUVmZmVjdCIsImZldGNoQ29udHJhY3REYXRhIiwid2luZG93IiwiZXRoZXJldW0iLCJvbiIsInJlbW92ZUxpc3RlbmVyIiwibmFtZSIsInN5bWJvbCIsInRvdGFsRXZlbnQiLCJhcnIiLCJpIiwiTnVtYmVyIiwiZXZlbnRVUkkiLCJ2YWx1ZSIsIm9iamVjdCIsIkpTT04iLCJwYXJzZSIsInByaWNlZGVzMSIsInByb3BlcnRpZXMiLCJHb2FsIiwiZGVzY3JpcHRpb24iLCJleCIsInB1c2giLCJldmVudElkIiwiVGl0bGUiLCJEYXRlIiwiR29hbHVzZCIsImxvZ28iLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZXJyb3IiLCJMZWZ0RGF0ZSIsImRhdGV0ZXh0IiwiYyIsImdldFRpbWUiLCJuIiwiZCIsImRhIiwiTWF0aCIsImZsb29yIiwiaCIsIm0iLCJzIiwidG9TdHJpbmciLCJtYXAiLCJsaXN0SXRlbSIsImhlaWdodCIsIm1hcmdpbiIsImJhY2tncm91bmQiLCJjb2xvciIsIm92ZXJmbG93IiwicGFkZGluZyIsIndpZHRoIiwiZGlzcGxheSIsImdhcCIsInJpZ2h0IiwiYm9yZGVyIiwiY3Vyc29yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsUUFBVCxHQUFvQjtB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LCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9uYXRpb24uZjlmNmI3YWVkMGI4NGM0MGYzMGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IENhcmQgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NhcmQnO1xyXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xyXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xyXG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3QnO1xyXG5pbXBvcnQgQ3JlYXRlTkZUTW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tb2RhbHMvRG9uYXRlTkZUTW9kYWwnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvbmF0aW9uKCkge1xyXG4gICAgY29uc3QgW0NyZWF0ZW1vZGFsU2hvdywgc2V0TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHsgY29udHJhY3QsIHNpZ25lckFkZHJlc3MgfSA9IHVzZUNvbnRyYWN0KCdFUkM3MjEnKTtcclxuICAgIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt0b2tlbk5hbWUsIHNldFRva2VuTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdG9rZW5TeW1ib2wsIHNldFRva2VuU3ltYm9sXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hDb250cmFjdERhdGEoKTtcclxuXHJcbiAgICAgICAgd2luZG93LmV0aGVyZXVtLm9uKCdhY2NvdW50c0NoYW5nZWQnLCBmZXRjaENvbnRyYWN0RGF0YSk7XHJcbiAgICAgICAgd2luZG93LmV0aGVyZXVtLm9uKCdjaGFpbkNoYW5nZWQnLCBmZXRjaENvbnRyYWN0RGF0YSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5ldGhlcmV1bS5yZW1vdmVMaXN0ZW5lcignYWNjb3VudHNDaGFuZ2VkJywgZmV0Y2hDb250cmFjdERhdGEpO1xyXG4gICAgICAgICAgICB3aW5kb3cuZXRoZXJldW0ucmVtb3ZlTGlzdGVuZXIoJ2NoYWluQ2hhbmdlZCcsIGZldGNoQ29udHJhY3REYXRhKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW2NvbnRyYWN0XSk7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb250cmFjdERhdGEoKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChjb250cmFjdCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VG9rZW5OYW1lKGF3YWl0IGNvbnRyYWN0Lm5hbWUoKSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUb2tlblN5bWJvbChhd2FpdCBjb250cmFjdC5zeW1ib2woKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWxFdmVudCA9IGF3YWl0IGNvbnRyYWN0LnRvdGFsRXZlbnQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFyciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOdW1iZXIodG90YWxFdmVudCk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgY29udHJhY3QuZXZlbnRVUkkoaSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmplY3QgPSBKU09OLnBhcnNlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByaWNlZGVzMSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7IHByaWNlZGVzMSA9IE51bWJlcihvYmplY3QucHJvcGVydGllcy5Hb2FsLmRlc2NyaXB0aW9uICogMzgxNy4wOSkgfSBjYXRjaCAoZXgpIHsgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRJZDogaSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpdGxlOiBvYmplY3QucHJvcGVydGllcy5UaXRsZS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGU6IG9iamVjdC5wcm9wZXJ0aWVzLkRhdGUuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHb2FsdXNkOiBwcmljZWRlczEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHb2FsOiBvYmplY3QucHJvcGVydGllcy5Hb2FsLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nbzogb2JqZWN0LnByb3BlcnRpZXMubG9nby5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0KGFycik7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxvYWRpbmdcIikuc3R5bGUgPSBcImRpc3BsYXk6bm9uZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBMZWZ0RGF0ZShkYXRldGV4dCkge1xyXG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHZhciBkID0gYyAtIG47XHJcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XHJcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XHJcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuIChkYS50b1N0cmluZygpICsgXCIgRGF5cyBcIiArIGgudG9TdHJpbmcoKSArIFwiIGhvdXJzIFwiICsgbS50b1N0cmluZygpICsgXCIgbWludXRlcyBcIiArIHMudG9TdHJpbmcoKSArIFwiIHNlY29uZHNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Eb25hdGlvbjwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiRG9uYXRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvTG9nby5zdmdcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT0nRG9uYXRpb25CYXInPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nP3E9QWxsJz5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J0RvbmF0aW9uQmFyTGluayBhY3RpdmUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBbGxcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPSc/cT1Ub2RheSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdEb25hdGlvbkJhckxpbmsnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb2RheVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jz9xPVRoaXMgTW9udGgnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nRG9uYXRpb25CYXJMaW5rJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBNb250aFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9J0xvYWRpbmcnPlxyXG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmcuLi48L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHtsaXN0Lm1hcCgobGlzdEl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsaXN0SXRlbS5ldmVudElkfSBjbGFzc05hbWU9J3Jvdycgc3R5bGU9e3sgaGVpZ2h0OiBcIjM5N3B4XCIsIG1hcmdpbjogXCIyOHB4XCIsIGJhY2tncm91bmQ6IFwid2hpdGVcIiwgY29sb3I6IFwiYmxhY2tcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsIHBhZGRpbmc6IDAsIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PGg0PntMZWZ0RGF0ZShsaXN0SXRlbS5EYXRlKX08L2g0PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgXCJkaXNwbGF5XCI6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bGlzdEl0ZW0ubG9nb30gc3R5bGU9e3sgd2lkdGg6IFwiMzI3cHhcIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmdUb3BcIjogXCIzM3B4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbkxlZnRcIjogXCI4MnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3dHYXBcIjogXCIxMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e2xpc3RJdGVtLlRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBcIndoaXRlU3BhY2VcIjogXCJwcmUtd3JhcFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Hb2FsOiAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+JHtsaXN0SXRlbS5Hb2FsdXNkfSAoe2xpc3RJdGVtLkdvYWx9IEVUSCk8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI2MXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IFwicmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IFwiMjZweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpblRvcFwiOiBcIjUwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbkxlZnRcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiIHN0eWxlPXt7IFwiaGVpZ2h0XCI6IFwiMTAwJVwiLCBib3JkZXI6IFwiMHB4XCIgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBcImRpc3BsYXlcIjogXCJmbGV4XCIsIGdhcDogXCIzOXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvZG9uYXRpb24vYXVjdGlvbi8wJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiLCBiYWNrZ3JvdW5kOiBcInJnYigwLCAyMjIsIDIwNSlcIiwgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgZmxvYXQ6IFwicmlnaHRcIiwgd2lkdGg6IFwiMjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIsIFwicGFkZGluZ1RvcFwiOiBcIjZweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb25hdGUgTkZUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL2RvbmF0aW9uL2F1Y3Rpb24vMCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiwgYmFja2dyb3VuZDogXCJyZ2IoMCwgMjIyLCAyMDUpXCIsIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIGhlaWdodDogXCIxMDAlXCIsIGZsb2F0OiBcInJpZ2h0XCIsIHdpZHRoOiBcIjIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiLCBcInBhZGRpbmdUb3BcIjogXCI2cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR28gdG8gYXVjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8Q3JlYXRlTkZUTW9kYWxcclxuICAgICAgICAgICAgICAgIHNob3c9e0NyZWF0ZW1vZGFsU2hvd31cclxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1vZGFsU2hvdyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIHBvb3IgaW1wbGVtZW50YXRpb24sIGJldHRlciB0byBpbXBsZW1lbnQgYW4gZXZlbnQgbGlzdGVuZXJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjb250cmFjdD17Y29udHJhY3R9XHJcbiAgICAgICAgICAgICAgICBzZW5kZXJBZGRyZXNzPXtzaWduZXJBZGRyZXNzfVxyXG5cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==