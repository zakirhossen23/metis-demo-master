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

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      selectid = _useState5[0],
      setselectid = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      selectedtype = _useState6[0],
      setselectedtype = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      SelectedTitle = _useState7[0],
      setSelectedTitle = _useState7[1];

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

  function activateCreateNFTModal(e) {
    setselectid(e.target.getAttribute("eventid"));
    setSelectedTitle(e.target.getAttribute("eventtitle"));
    setselectedtype("NFT");
    setModalShow(true);
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
        lineNumber: 93,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "description",
        content: "Donation"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("link", {
        rel: "icon",
        href: "/Logo.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
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
          lineNumber: 100,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
        href: "?q=Today",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
          className: "DonationBarLink",
          children: "Today"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
        href: "?q=This Month",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
          className: "DonationBarLink",
          children: "This Month"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      id: "Loading",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
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
            lineNumber: 121,
            columnNumber: 26
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          style: {
            "display": "flex"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            src: listItem.logo,
            style: {
              width: "327px",
              height: "255px"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
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
              lineNumber: 132,
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
                lineNumber: 134,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
                children: ["$", listItem.Goalusd, " (", listItem.Goal, " ETH)"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 133,
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
                className: "card",
                style: {
                  "height": "100%",
                  border: "0px"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 150,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                style: {
                  "display": "flex",
                  gap: "39px"
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  eventid: listItem.eventId,
                  eventtitle: listItem.Title,
                  onClick: activateCreateNFTModal,
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
                    eventid: listItem.eventId,
                    eventtitle: listItem.Title,
                    className: "card-body",
                    style: {
                      height: "100%",
                      "paddingTop": "6px"
                    },
                    children: "Donate NFT"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 153,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
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
                      lineNumber: 159,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 158,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 21
        }, _this)]
      }, listItem.eventId, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_modals_DonateNFTModal__WEBPACK_IMPORTED_MODULE_7__.default, {
      show: CreatemodalShow,
      onHide: function onHide() {
        setModalShow(false); // This is a poor implementation, better to implement an event listener
      },
      contract: contract,
      senderAddress: signerAddress,
      EventID: selectid,
      type: selectedtype,
      SelectedTitle: SelectedTitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(Donation, "FmtkQdsWF7MVJdMWGQ/K1HLlx00=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9uYXRpb24vaW5kZXguanN4Il0sIm5hbWVzIjpbIkRvbmF0aW9uIiwidXNlU3RhdGUiLCJDcmVhdGVtb2RhbFNob3ciLCJzZXRNb2RhbFNob3ciLCJ1c2VDb250cmFjdCIsImNvbnRyYWN0Iiwic2lnbmVyQWRkcmVzcyIsImxpc3QiLCJzZXRMaXN0IiwidG9rZW5OYW1lIiwic2V0VG9rZW5OYW1lIiwidG9rZW5TeW1ib2wiLCJzZXRUb2tlblN5bWJvbCIsInNlbGVjdGlkIiwic2V0c2VsZWN0aWQiLCJzZWxlY3RlZHR5cGUiLCJzZXRzZWxlY3RlZHR5cGUiLCJTZWxlY3RlZFRpdGxlIiwic2V0U2VsZWN0ZWRUaXRsZSIsInVzZUVmZmVjdCIsImZldGNoQ29udHJhY3REYXRhIiwid2luZG93IiwiZXRoZXJldW0iLCJvbiIsInJlbW92ZUxpc3RlbmVyIiwibmFtZSIsInN5bWJvbCIsInRvdGFsRXZlbnQiLCJhcnIiLCJpIiwiTnVtYmVyIiwiZXZlbnRVUkkiLCJ2YWx1ZSIsIm9iamVjdCIsIkpTT04iLCJwYXJzZSIsInByaWNlZGVzMSIsInByb3BlcnRpZXMiLCJHb2FsIiwiZGVzY3JpcHRpb24iLCJleCIsInB1c2giLCJldmVudElkIiwiVGl0bGUiLCJEYXRlIiwiR29hbHVzZCIsImxvZ28iLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZXJyb3IiLCJhY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsIiwiZSIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsIkxlZnREYXRlIiwiZGF0ZXRleHQiLCJjIiwiZ2V0VGltZSIsIm4iLCJkIiwiZGEiLCJNYXRoIiwiZmxvb3IiLCJoIiwibSIsInMiLCJ0b1N0cmluZyIsIm1hcCIsImxpc3RJdGVtIiwiaGVpZ2h0IiwibWFyZ2luIiwiYmFja2dyb3VuZCIsImNvbG9yIiwib3ZlcmZsb3ciLCJwYWRkaW5nIiwid2lkdGgiLCJkaXNwbGF5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QVUsRUFBRSxrQkFBOUI7QUFBa0QsbUNBQWEsUUFBL0Q7QUFBeUVTLDRCQUFNLEVBQUUsU0FBakY7QUFBNEZYLDRCQUFNLEVBQUUsTUFBcEc7QUFBNEcsK0JBQU8sT0FBbkg7QUFBNEhNLDJCQUFLLEVBQUU7QUFBbkkscUJBQTdCO0FBQUEsMkNBQ0k7QUFBSywrQkFBUyxFQUFDLFdBQWY7QUFBMkIsMkJBQUssRUFBRTtBQUFFTiw4QkFBTSxFQUFFLE1BQVY7QUFBa0Isc0NBQWM7QUFBaEMsdUJBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUEsU0FBVUQsUUFBUSxDQUFDN0IsT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURNO0FBQUEsS0FBVCxDQTVCTCxlQWlGSSw4REFBQyxzRUFBRDtBQUNJLFVBQUksRUFBRXhDLGVBRFY7QUFFSSxZQUFNLEVBQUUsa0JBQU07QUFDVkMsb0JBQVksQ0FBQyxLQUFELENBQVosQ0FEVSxDQUVWO0FBQ0gsT0FMTDtBQU1JLGNBQVEsRUFBRUUsUUFOZDtBQU9JLG1CQUFhLEVBQUVDLGFBUG5CO0FBUUksYUFBTyxFQUFFTyxRQVJiO0FBU0ksVUFBSSxFQUFFRSxZQVRWO0FBVUksbUJBQWEsRUFBRUU7QUFWbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpGSjtBQUFBLGtCQURKO0FBZ0dIOztHQTlLdUJqQixRO1VBRWdCSSwwRDs7O0tBRmhCSixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvbmF0aW9uLmQ1ZTNhODI0MWU1N2JmODQ5NmVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBDYXJkIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJkJztcclxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcclxuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcclxuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcclxuaW1wb3J0IERvbmF0ZU5GVE1vZGFsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbW9kYWxzL0RvbmF0ZU5GVE1vZGFsJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb25hdGlvbigpIHtcclxuICAgIGNvbnN0IFtDcmVhdGVtb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB7IGNvbnRyYWN0LCBzaWduZXJBZGRyZXNzIH0gPSB1c2VDb250cmFjdCgnRVJDNzIxJyk7XHJcbiAgICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdG9rZW5OYW1lLCBzZXRUb2tlbk5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Rva2VuU3ltYm9sLCBzZXRUb2tlblN5bWJvbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2VsZWN0aWQsIHNldHNlbGVjdGlkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZHR5cGUsIHNldHNlbGVjdGVkdHlwZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbU2VsZWN0ZWRUaXRsZSwgc2V0U2VsZWN0ZWRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hDb250cmFjdERhdGEoKTtcclxuXHJcbiAgICAgICAgd2luZG93LmV0aGVyZXVtLm9uKCdhY2NvdW50c0NoYW5nZWQnLCBmZXRjaENvbnRyYWN0RGF0YSk7XHJcbiAgICAgICAgd2luZG93LmV0aGVyZXVtLm9uKCdjaGFpbkNoYW5nZWQnLCBmZXRjaENvbnRyYWN0RGF0YSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5ldGhlcmV1bS5yZW1vdmVMaXN0ZW5lcignYWNjb3VudHNDaGFuZ2VkJywgZmV0Y2hDb250cmFjdERhdGEpO1xyXG4gICAgICAgICAgICB3aW5kb3cuZXRoZXJldW0ucmVtb3ZlTGlzdGVuZXIoJ2NoYWluQ2hhbmdlZCcsIGZldGNoQ29udHJhY3REYXRhKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW2NvbnRyYWN0XSk7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb250cmFjdERhdGEoKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChjb250cmFjdCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VG9rZW5OYW1lKGF3YWl0IGNvbnRyYWN0Lm5hbWUoKSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUb2tlblN5bWJvbChhd2FpdCBjb250cmFjdC5zeW1ib2woKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWxFdmVudCA9IGF3YWl0IGNvbnRyYWN0LnRvdGFsRXZlbnQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFyciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOdW1iZXIodG90YWxFdmVudCk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgY29udHJhY3QuZXZlbnRVUkkoaSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmplY3QgPSBKU09OLnBhcnNlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByaWNlZGVzMSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7IHByaWNlZGVzMSA9IE51bWJlcihvYmplY3QucHJvcGVydGllcy5Hb2FsLmRlc2NyaXB0aW9uICogMzgxNy4wOSkgfSBjYXRjaCAoZXgpIHsgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRJZDogaSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpdGxlOiBvYmplY3QucHJvcGVydGllcy5UaXRsZS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERhdGU6IG9iamVjdC5wcm9wZXJ0aWVzLkRhdGUuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHb2FsdXNkOiBwcmljZWRlczEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHb2FsOiBvYmplY3QucHJvcGVydGllcy5Hb2FsLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nbzogb2JqZWN0LnByb3BlcnRpZXMubG9nby5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0KGFycik7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxvYWRpbmdcIikuc3R5bGUgPSBcImRpc3BsYXk6bm9uZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVDcmVhdGVORlRNb2RhbChlKSB7XHJcbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZXZlbnRpZFwiKSk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRUaXRsZShlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJldmVudHRpdGxlXCIpKTtcclxuICAgICAgICBzZXRzZWxlY3RlZHR5cGUoXCJORlRcIik7XHJcblxyXG4gICAgICAgIHNldE1vZGFsU2hvdyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBMZWZ0RGF0ZShkYXRldGV4dCkge1xyXG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHZhciBkID0gYyAtIG47XHJcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XHJcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XHJcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuIChkYS50b1N0cmluZygpICsgXCIgRGF5cyBcIiArIGgudG9TdHJpbmcoKSArIFwiIGhvdXJzIFwiICsgbS50b1N0cmluZygpICsgXCIgbWludXRlcyBcIiArIHMudG9TdHJpbmcoKSArIFwiIHNlY29uZHNcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Eb25hdGlvbjwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiRG9uYXRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvTG9nby5zdmdcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT0nRG9uYXRpb25CYXInPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nP3E9QWxsJz5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J0RvbmF0aW9uQmFyTGluayBhY3RpdmUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBbGxcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPSc/cT1Ub2RheSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdEb25hdGlvbkJhckxpbmsnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb2RheVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jz9xPVRoaXMgTW9udGgnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nRG9uYXRpb25CYXJMaW5rJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBNb250aFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9J0xvYWRpbmcnPlxyXG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmcuLi48L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHtsaXN0Lm1hcCgobGlzdEl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsaXN0SXRlbS5ldmVudElkfSBjbGFzc05hbWU9J3Jvdycgc3R5bGU9e3sgaGVpZ2h0OiBcIjM5N3B4XCIsIG1hcmdpbjogXCIyOHB4XCIsIGJhY2tncm91bmQ6IFwid2hpdGVcIiwgY29sb3I6IFwiYmxhY2tcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsIHBhZGRpbmc6IDAsIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PGg0PntMZWZ0RGF0ZShsaXN0SXRlbS5EYXRlKX08L2g0PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgXCJkaXNwbGF5XCI6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bGlzdEl0ZW0ubG9nb30gc3R5bGU9e3sgd2lkdGg6IFwiMzI3cHhcIiwgaGVpZ2h0OiBcIjI1NXB4XCIgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWRkaW5nVG9wXCI6IFwiMzNweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW5MZWZ0XCI6IFwiODJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm93R2FwXCI6IFwiMTBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PntsaXN0SXRlbS5UaXRsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgXCJ3aGl0ZVNwYWNlXCI6IFwicHJlLXdyYXBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+R29hbDogIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PiR7bGlzdEl0ZW0uR29hbHVzZH0gKHtsaXN0SXRlbS5Hb2FsfSBFVEgpPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNjFweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBcInJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2FwOiBcIjI2cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW5Ub3BcIjogXCI1MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW5MZWZ0XCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgXCJoZWlnaHRcIjogXCIxMDAlXCIsIGJvcmRlcjogXCIwcHhcIiB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IFwiZGlzcGxheVwiOiBcImZsZXhcIiwgZ2FwOiBcIjM5cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBldmVudGlkPXtsaXN0SXRlbS5ldmVudElkfSBldmVudHRpdGxlPXtsaXN0SXRlbS5UaXRsZX0gb25DbGljaz17YWN0aXZhdGVDcmVhdGVORlRNb2RhbH0gY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIsIGJhY2tncm91bmQ6IFwicmdiKDAsIDIyMiwgMjA1KVwiLCBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLCBjdXJzb3I6IFwicG9pbnRlclwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBmbG9hdDogXCJyaWdodFwiLCB3aWR0aDogXCIyMjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBldmVudGlkPXtsaXN0SXRlbS5ldmVudElkfSBldmVudHRpdGxlPXtsaXN0SXRlbS5UaXRsZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiwgXCJwYWRkaW5nVG9wXCI6IFwiNnB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG9uYXRlIE5GVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL2RvbmF0aW9uL2F1Y3Rpb24vMCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiwgYmFja2dyb3VuZDogXCJyZ2IoMCwgMjIyLCAyMDUpXCIsIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIGhlaWdodDogXCIxMDAlXCIsIGZsb2F0OiBcInJpZ2h0XCIsIHdpZHRoOiBcIjIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiLCBcInBhZGRpbmdUb3BcIjogXCI2cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR28gdG8gYXVjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8RG9uYXRlTkZUTW9kYWxcclxuICAgICAgICAgICAgICAgIHNob3c9e0NyZWF0ZW1vZGFsU2hvd31cclxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1vZGFsU2hvdyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIHBvb3IgaW1wbGVtZW50YXRpb24sIGJldHRlciB0byBpbXBsZW1lbnQgYW4gZXZlbnQgbGlzdGVuZXJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjb250cmFjdD17Y29udHJhY3R9XHJcbiAgICAgICAgICAgICAgICBzZW5kZXJBZGRyZXNzPXtzaWduZXJBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgRXZlbnRJRD17c2VsZWN0aWR9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtzZWxlY3RlZHR5cGV9XHJcbiAgICAgICAgICAgICAgICBTZWxlY3RlZFRpdGxlPXtTZWxlY3RlZFRpdGxlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9