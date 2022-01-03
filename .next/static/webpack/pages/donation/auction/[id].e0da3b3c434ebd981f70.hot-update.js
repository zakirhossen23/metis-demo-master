self["webpackHotUpdate_N_E"]("pages/donation/auction/[id]",{

/***/ "./pages/donation/auction/[id].jsx":
/*!*****************************************!*\
  !*** ./pages/donation/auction/[id].jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ViewNFT; }
/* harmony export */ });
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_modals_BidNFTModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/modals/BidNFTModal */ "./components/modals/BidNFTModal.jsx");
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/useContract */ "./services/useContract.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\zakir\\Documents\\test\\metis-demo-master\\pages\\donation\\auction\\[id].jsx",
    _s = $RefreshSig$();











function ViewNFT(user) {
  _s();

  var _useContract = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_7__.default)('ERC721'),
      contract = _useContract.contract,
      signerAddress = _useContract.signerAddress;

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(-1),
      tokenId = _useState[0],
      setTokenId = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      tokenName = _useState2[0],
      setTokenName = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      tokenSymbol = _useState3[0],
      setTokenSymbol = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      title = _useState4[0],
      setTitle = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      goalusd = _useState5[0],
      setgoalusd = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      dateleft = _useState6[0],
      setdateleft = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      logo = _useState7[0],
      setlogo = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      owner = _useState8[0],
      setOwner = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      url = _useState9[0],
      setUrl = _useState9[1];

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      eventuri = _useState10[0],
      setEventuri = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      modalShow = _useState11[0],
      setModalShow = _useState11[1];

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

  function fetchContractData() {
    return _fetchContractData.apply(this, arguments);
  }

  function _fetchContractData() {
    _fetchContractData = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var id, value, object;
      return C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              id = router.query.id;

              if (!(contract && id)) {
                _context.next = 22;
                break;
              }

              _context.next = 5;
              return contract.eventURI(id);

            case 5:
              value = _context.sent;
              setEventuri(value);
              object = JSON.parse(value);
              setTitle(object.properties.Title.description);
              setgoalusd(Number(object.properties.Goal.description * 3817.09));
              setdateleft(LeftDate(object.properties.Date.description));
              setlogo(LeftDate(object.properties.logo.description));
              _context.t0 = setTokenName;
              _context.next = 15;
              return contract.name();

            case 15:
              _context.t1 = _context.sent;
              (0, _context.t0)(_context.t1);
              _context.t2 = setTokenSymbol;
              _context.next = 20;
              return contract.symbol();

            case 20:
              _context.t3 = _context.sent;
              (0, _context.t2)(_context.t3);

            case 22:
              _context.next = 27;
              break;

            case 24:
              _context.prev = 24;
              _context.t4 = _context["catch"](0);
              console.error(_context.t4);

            case 27:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 24]]);
    }));
    return _fetchContractData.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    fetchContractData();
    window.ethereum.on('chainChanged', fetchContractData);
    return function () {
      window.ethereum.removeListener('chainChanged', fetchContractData);
    };
  }, [router.query, contract]);

  function activateBidNFTModal() {
    setModalShow(true);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("title", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "description",
        content: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
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
          lineNumber: 82,
          columnNumber: 22
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        style: {
          "display": "flex"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
          src: listItem.logo,
          style: {
            maxWidth: "327px",
            maxHeight: "255px",
            minWidth: "327px",
            minHeight: "255px"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
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
            lineNumber: 93,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            style: {
              display: "flex",
              "whiteSpace": "pre-wrap"
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
              children: "Goal:  "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
              children: ["$", listItem.Goalusd, " (", listItem.Goal, " ETH)"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
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
              lineNumber: 111,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              style: {
                "display": "flex",
                gap: "14px"
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
                  width: "290px"
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
                  lineNumber: 115,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                eventid: listItem.eventId,
                eventtitle: listItem.Title,
                onClick: activateCreateCryptopunkModal,
                className: "card",
                style: {
                  color: "white",
                  background: "rgb(0, 222, 205)",
                  "textAlign": "center",
                  cursor: "pointer",
                  height: "100%",
                  "float": "right",
                  width: "290px"
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  eventid: listItem.eventId,
                  eventtitle: listItem.Title,
                  className: "card-body",
                  style: {
                    height: "100%",
                    "paddingTop": "6px"
                  },
                  children: "Donate Cryptopunk"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Link, {
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
                    lineNumber: 126,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 125,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_modals_BidNFTModal__WEBPACK_IMPORTED_MODULE_6__.default, {
      show: modalShow,
      onHide: function onHide() {
        setModalShow(false); // This is a poor implementation, better to implement an event listener

        fetchContractData();
      },
      contract: contract,
      Amount: signerAddress,
      tokenId: tokenId,
      senderAddress: signerAddress,
      tokenUri: tokenuri
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(ViewNFT, "oNyfRSBa0TK2ToGzdgDYPMhfK7o=", false, function () {
  return [_services_useContract__WEBPACK_IMPORTED_MODULE_7__.default, next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = ViewNFT;

var _c;

$RefreshReg$(_c, "ViewNFT");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9uYXRpb24vYXVjdGlvbi9baWRdLmpzeCJdLCJuYW1lcyI6WyJWaWV3TkZUIiwidXNlciIsInVzZUNvbnRyYWN0IiwiY29udHJhY3QiLCJzaWduZXJBZGRyZXNzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ0b2tlbklkIiwic2V0VG9rZW5JZCIsInRva2VuTmFtZSIsInNldFRva2VuTmFtZSIsInRva2VuU3ltYm9sIiwic2V0VG9rZW5TeW1ib2wiLCJ0aXRsZSIsInNldFRpdGxlIiwiZ29hbHVzZCIsInNldGdvYWx1c2QiLCJkYXRlbGVmdCIsInNldGRhdGVsZWZ0IiwibG9nbyIsInNldGxvZ28iLCJvd25lciIsInNldE93bmVyIiwidXJsIiwic2V0VXJsIiwiZXZlbnR1cmkiLCJzZXRFdmVudHVyaSIsIm1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsIkxlZnREYXRlIiwiZGF0ZXRleHQiLCJjIiwiRGF0ZSIsImdldFRpbWUiLCJuIiwiZCIsImRhIiwiTWF0aCIsImZsb29yIiwiaCIsIm0iLCJzIiwidG9TdHJpbmciLCJmZXRjaENvbnRyYWN0RGF0YSIsImlkIiwicXVlcnkiLCJldmVudFVSSSIsInZhbHVlIiwib2JqZWN0IiwiSlNPTiIsInBhcnNlIiwicHJvcGVydGllcyIsIlRpdGxlIiwiZGVzY3JpcHRpb24iLCJOdW1iZXIiLCJHb2FsIiwibmFtZSIsInN5bWJvbCIsImNvbnNvbGUiLCJlcnJvciIsInVzZUVmZmVjdCIsIndpbmRvdyIsImV0aGVyZXVtIiwib24iLCJyZW1vdmVMaXN0ZW5lciIsImFjdGl2YXRlQmlkTkZUTW9kYWwiLCJoZWlnaHQiLCJtYXJnaW4iLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJvdmVyZmxvdyIsInBhZGRpbmciLCJsaXN0SXRlbSIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJkaXNwbGF5Iiwid2lkdGgiLCJHb2FsdXNkIiwiZ2FwIiwicmlnaHQiLCJib3JkZXIiLCJldmVudElkIiwiYWN0aXZhdGVDcmVhdGVORlRNb2RhbCIsImN1cnNvciIsImFjdGl2YXRlQ3JlYXRlQ3J5cHRvcHVua01vZGFsIiwidG9rZW51cmkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFZSxTQUFTQSxPQUFULENBQWlCQyxJQUFqQixFQUF1QjtBQUFBOztBQUFBLHFCQUNFQyw4REFBVyxDQUFDLFFBQUQsQ0FEYjtBQUFBLE1BQzFCQyxRQUQwQixnQkFDMUJBLFFBRDBCO0FBQUEsTUFDaEJDLGFBRGdCLGdCQUNoQkEsYUFEZ0I7O0FBRWxDLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBRmtDLGtCQUdKQywrQ0FBUSxDQUFDLENBQUMsQ0FBRixDQUhKO0FBQUEsTUFHM0JDLE9BSDJCO0FBQUEsTUFHbEJDLFVBSGtCOztBQUFBLG1CQUlBRiwrQ0FBUSxDQUFDLEVBQUQsQ0FKUjtBQUFBLE1BSTNCRyxTQUoyQjtBQUFBLE1BSWhCQyxZQUpnQjs7QUFBQSxtQkFLSUosK0NBQVEsQ0FBQyxFQUFELENBTFo7QUFBQSxNQUszQkssV0FMMkI7QUFBQSxNQUtkQyxjQUxjOztBQUFBLG1CQU1STiwrQ0FBUSxDQUFDLEVBQUQsQ0FOQTtBQUFBLE1BTTNCTyxLQU4yQjtBQUFBLE1BTXBCQyxRQU5vQjs7QUFBQSxtQkFPSlIsK0NBQVEsQ0FBQyxFQUFELENBUEo7QUFBQSxNQU8zQlMsT0FQMkI7QUFBQSxNQU9sQkMsVUFQa0I7O0FBQUEsbUJBUUZWLCtDQUFRLENBQUMsRUFBRCxDQVJOO0FBQUEsTUFRM0JXLFFBUjJCO0FBQUEsTUFRakJDLFdBUmlCOztBQUFBLG1CQVNWWiwrQ0FBUSxDQUFDLEVBQUQsQ0FURTtBQUFBLE1BUzNCYSxJQVQyQjtBQUFBLE1BU3JCQyxPQVRxQjs7QUFBQSxtQkFVUmQsK0NBQVEsQ0FB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QSxzQkFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSixlQWlFSSw4REFBQyxtRUFBRDtBQUNJLFVBQUksRUFBRXZDLFNBRFY7QUFFSSxZQUFNLEVBQUUsa0JBQU07QUFDVkMsb0JBQVksQ0FBQyxLQUFELENBQVosQ0FEVSxDQUVWOztBQUNBZSx5QkFBaUI7QUFDcEIsT0FOTDtBQU9JLGNBQVEsRUFBRXpDLFFBUGQ7QUFRSSxZQUFNLEVBQUVDLGFBUlo7QUFTSSxhQUFPLEVBQUVJLE9BVGI7QUFVSSxtQkFBYSxFQUFFSixhQVZuQjtBQVdJLGNBQVEsRUFBRW9GO0FBWGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpFSjtBQUFBLGtCQURKO0FBa0ZIOztHQTlJdUJ4RixPO1VBQ2dCRSwwRCxFQUNyQkksa0Q7OztLQUZLTixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvbmF0aW9uL2F1Y3Rpb24vW2lkXS5lMGRhM2IzYzQzNGViZDk4MWY3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xyXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0ltYWdlJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuXHJcbmltcG9ydCBCaWRORlRNb2RhbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL21vZGFscy9CaWRORlRNb2RhbCc7XHJcblxyXG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlld05GVCh1c2VyKSB7XHJcbiAgICBjb25zdCB7IGNvbnRyYWN0LCBzaWduZXJBZGRyZXNzIH0gPSB1c2VDb250cmFjdCgnRVJDNzIxJyk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFt0b2tlbklkLCBzZXRUb2tlbklkXSA9IHVzZVN0YXRlKC0xKTtcclxuICAgIGNvbnN0IFt0b2tlbk5hbWUsIHNldFRva2VuTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdG9rZW5TeW1ib2wsIHNldFRva2VuU3ltYm9sXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2dvYWx1c2QsIHNldGdvYWx1c2RdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2RhdGVsZWZ0LCBzZXRkYXRlbGVmdF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbG9nbywgc2V0bG9nb10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbb3duZXIsIHNldE93bmVyXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZXZlbnR1cmksIHNldEV2ZW50dXJpXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIExlZnREYXRlKGRhdGV0ZXh0KSB7XHJcbiAgICAgICAgdmFyIGMgPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHZhciBuID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdmFyIGQgPSBjIC0gbjtcclxuICAgICAgICB2YXIgZGEgPSBNYXRoLmZsb29yKGQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xyXG4gICAgICAgIHZhciBoID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcclxuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcclxuICAgICAgICB2YXIgcyA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcclxuICAgICAgICByZXR1cm4gKGRhLnRvU3RyaW5nKCkgKyBcIiBEYXlzIFwiICsgaC50b1N0cmluZygpICsgXCIgaG91cnMgXCIgKyBtLnRvU3RyaW5nKCkgKyBcIiBtaW51dGVzIFwiICsgcy50b1N0cmluZygpICsgXCIgc2Vjb25kc1wiKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoQ29udHJhY3REYXRhKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICAgICAgICAgICAgaWYgKGNvbnRyYWN0ICYmIGlkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IGNvbnRyYWN0LmV2ZW50VVJJKGlkKTtcclxuICAgICAgICAgICAgICAgIHNldEV2ZW50dXJpKHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvYmplY3QgPSBKU09OLnBhcnNlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHNldFRpdGxlKG9iamVjdC5wcm9wZXJ0aWVzLlRpdGxlLmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgICAgIHNldGdvYWx1c2QoTnVtYmVyKG9iamVjdC5wcm9wZXJ0aWVzLkdvYWwuZGVzY3JpcHRpb24gKiAzODE3LjA5KSk7XHJcbiAgICAgICAgICAgICAgICBzZXRkYXRlbGVmdChMZWZ0RGF0ZShvYmplY3QucHJvcGVydGllcy5EYXRlLmRlc2NyaXB0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICBzZXRsb2dvKExlZnREYXRlKG9iamVjdC5wcm9wZXJ0aWVzLmxvZ28uZGVzY3JpcHRpb24pKTtcclxuICAgICAgICAgICAgICAgIHNldFRva2VuTmFtZShhd2FpdCBjb250cmFjdC5uYW1lKCkpO1xyXG4gICAgICAgICAgICAgICAgc2V0VG9rZW5TeW1ib2woYXdhaXQgY29udHJhY3Quc3ltYm9sKCkpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hDb250cmFjdERhdGEoKTtcclxuXHJcbiAgICAgICAgd2luZG93LmV0aGVyZXVtLm9uKCdjaGFpbkNoYW5nZWQnLCBmZXRjaENvbnRyYWN0RGF0YSk7XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5ldGhlcmV1bS5yZW1vdmVMaXN0ZW5lcignY2hhaW5DaGFuZ2VkJywgZmV0Y2hDb250cmFjdERhdGEpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LCBbcm91dGVyLnF1ZXJ5LCBjb250cmFjdF0pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUJpZE5GVE1vZGFsKCkge1xyXG4gICAgICAgIHNldE1vZGFsU2hvdyh0cnVlKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXt0aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93JyBzdHlsZT17eyBoZWlnaHQ6IFwiMzk3cHhcIiwgbWFyZ2luOiBcIjI4cHhcIiwgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLCBjb2xvcjogXCJibGFja1wiLCBvdmVyZmxvdzogXCJoaWRkZW5cIiwgcGFkZGluZzogMCwgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PjxoND57TGVmdERhdGUobGlzdEl0ZW0uRGF0ZSl9PC9oND48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgXCJkaXNwbGF5XCI6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsaXN0SXRlbS5sb2dvfSBzdHlsZT17eyBtYXhXaWR0aDogXCIzMjdweFwiLCBtYXhIZWlnaHQ6IFwiMjU1cHhcIiwgbWluV2lkdGg6IFwiMzI3cHhcIiwgbWluSGVpZ2h0OiBcIjI1NXB4XCIsIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmdUb3BcIjogXCIzM3B4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luTGVmdFwiOiBcIjgycHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicm93R2FwXCI6IFwiMTBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND57bGlzdEl0ZW0uVGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgXCJ3aGl0ZVNwYWNlXCI6IFwicHJlLXdyYXBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Hb2FsOiAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND4ke2xpc3RJdGVtLkdvYWx1c2R9ICh7bGlzdEl0ZW0uR29hbH0gRVRIKTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNjFweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IFwicmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogXCIyNnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luVG9wXCI6IFwiNTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW5MZWZ0XCI6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgXCJoZWlnaHRcIjogXCIxMDAlXCIsIGJvcmRlcjogXCIwcHhcIiB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgXCJkaXNwbGF5XCI6IFwiZmxleFwiLCBnYXA6IFwiMTRweFwiIH19PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGV2ZW50aWQ9e2xpc3RJdGVtLmV2ZW50SWR9IGV2ZW50dGl0bGU9e2xpc3RJdGVtLlRpdGxlfSBvbkNsaWNrPXthY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsfSBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiwgYmFja2dyb3VuZDogXCJyZ2IoMCwgMjIyLCAyMDUpXCIsIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIGhlaWdodDogXCIxMDAlXCIsIGZsb2F0OiBcInJpZ2h0XCIsIHdpZHRoOiBcIjI5MHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZXZlbnRpZD17bGlzdEl0ZW0uZXZlbnRJZH0gZXZlbnR0aXRsZT17bGlzdEl0ZW0uVGl0bGV9IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIsIFwicGFkZGluZ1RvcFwiOiBcIjZweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRG9uYXRlIE5GVFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGV2ZW50aWQ9e2xpc3RJdGVtLmV2ZW50SWR9IGV2ZW50dGl0bGU9e2xpc3RJdGVtLlRpdGxlfSBvbkNsaWNrPXthY3RpdmF0ZUNyZWF0ZUNyeXB0b3B1bmtNb2RhbH0gY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIsIGJhY2tncm91bmQ6IFwicmdiKDAsIDIyMiwgMjA1KVwiLCBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLCBjdXJzb3I6IFwicG9pbnRlclwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBmbG9hdDogXCJyaWdodFwiLCB3aWR0aDogXCIyOTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGV2ZW50aWQ9e2xpc3RJdGVtLmV2ZW50SWR9IGV2ZW50dGl0bGU9e2xpc3RJdGVtLlRpdGxlfSBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiLCBcInBhZGRpbmdUb3BcIjogXCI2cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvbmF0ZSBDcnlwdG9wdW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvZG9uYXRpb24vYXVjdGlvbi8wJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIsIGJhY2tncm91bmQ6IFwicmdiKDAsIDIyMiwgMjA1KVwiLCBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLCBjdXJzb3I6IFwicG9pbnRlclwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBmbG9hdDogXCJyaWdodFwiLCB3aWR0aDogXCIyMjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiLCBcInBhZGRpbmdUb3BcIjogXCI2cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHbyB0byBhdWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgPEJpZE5GVE1vZGFsXHJcbiAgICAgICAgICAgICAgICBzaG93PXttb2RhbFNob3d9XHJcbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRNb2RhbFNob3coZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBwb29yIGltcGxlbWVudGF0aW9uLCBiZXR0ZXIgdG8gaW1wbGVtZW50IGFuIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hDb250cmFjdERhdGEoKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjb250cmFjdD17Y29udHJhY3R9XHJcbiAgICAgICAgICAgICAgICBBbW91bnQ9e3NpZ25lckFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICB0b2tlbklkPXt0b2tlbklkfVxyXG4gICAgICAgICAgICAgICAgc2VuZGVyQWRkcmVzcz17c2lnbmVyQWRkcmVzc31cclxuICAgICAgICAgICAgICAgIHRva2VuVXJpPXt0b2tlbnVyaX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=