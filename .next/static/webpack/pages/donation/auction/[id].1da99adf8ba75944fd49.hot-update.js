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
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {}, void 0, false, {
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
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {}, void 0, false, {
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
              children: "$ ETH)"
            }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9uYXRpb24vYXVjdGlvbi9baWRdLmpzeCJdLCJuYW1lcyI6WyJWaWV3TkZUIiwidXNlciIsInVzZUNvbnRyYWN0IiwiY29udHJhY3QiLCJzaWduZXJBZGRyZXNzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ0b2tlbklkIiwic2V0VG9rZW5JZCIsInRva2VuTmFtZSIsInNldFRva2VuTmFtZSIsInRva2VuU3ltYm9sIiwic2V0VG9rZW5TeW1ib2wiLCJ0aXRsZSIsInNldFRpdGxlIiwiZ29hbHVzZCIsInNldGdvYWx1c2QiLCJkYXRlbGVmdCIsInNldGRhdGVsZWZ0IiwibG9nbyIsInNldGxvZ28iLCJvd25lciIsInNldE93bmVyIiwidXJsIiwic2V0VXJsIiwiZXZlbnR1cmkiLCJzZXRFdmVudHVyaSIsIm1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsIkxlZnREYXRlIiwiZGF0ZXRleHQiLCJjIiwiRGF0ZSIsImdldFRpbWUiLCJuIiwiZCIsImRhIiwiTWF0aCIsImZsb29yIiwiaCIsIm0iLCJzIiwidG9TdHJpbmciLCJmZXRjaENvbnRyYWN0RGF0YSIsImlkIiwicXVlcnkiLCJldmVudFVSSSIsInZhbHVlIiwib2JqZWN0IiwiSlNPTiIsInBhcnNlIiwicHJvcGVydGllcyIsIlRpdGxlIiwiZGVzY3JpcHRpb24iLCJOdW1iZXIiLCJHb2FsIiwibmFtZSIsInN5bWJvbCIsImNvbnNvbGUiLCJlcnJvciIsInVzZUVmZmVjdCIsIndpbmRvdyIsImV0aGVyZXVtIiwib24iLCJyZW1vdmVMaXN0ZW5lciIsImFjdGl2YXRlQmlkTkZUTW9kYWwiLCJoZWlnaHQiLCJtYXJnaW4iLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJvdmVyZmxvdyIsInBhZGRpbmciLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiZGlzcGxheSIsIndpZHRoIiwiZ2FwIiwicmlnaHQiLCJib3JkZXIiLCJhY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsIiwiY3Vyc29yIiwiYWN0aXZhdGVDcmVhdGVDcnlwdG9wdW5rTW9kYWwiLCJ0b2tlbnVyaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVlLFNBQVNBLE9BQVQsQ0FBaUJDLElBQWpCLEVBQXVCO0FBQUE7O0FBQUEscUJBQ0VDLDhEQUFXLENBQUMsUUFBRCxDQURiO0FBQUEsTUFDMUJDLFFBRDBCLGdCQUMxQkEsUUFEMEI7QUFBQSxNQUNoQkMsYUFEZ0IsZ0JBQ2hCQSxhQURnQjs7QUFFbEMsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFGa0Msa0JBR0pDLCtDQUFRLENBQUMsQ0FBQyxDQUFGLENBSEo7QUFBQSxNQUczQkMsT0FIMkI7QUFBQSxNQUdsQkMsVUFIa0I7O0FBQUEsbUJBSUFGLCtDQUFRLENBQUMsRUFBRCxDQUpSO0FBQUEsTUFJM0JHLFNBSjJCO0FBQUEsTUFJaEJDLFlBSmdCOztBQUFBLG1CQUtJSiwrQ0FBUSxDQUFDLEVBQUQsQ0FMWjtBQUFBLE1BSzNCSyxXQUwyQjtBQUFBLE1BS2RDLGNBTGM7O0FBQUEsbUJBTVJOLCtDQUFRLENBQUMsRUFBRCxDQU5BO0FBQUEsTUFNM0JPLEtBTjJCO0FBQUEsTUFNcEJDLFFBTm9COztBQUFBLG1CQU9KUiwrQ0FBUSxDQUFDLEVBQUQsQ0FQSjtBQUFBLE1BTzNCUyxPQVAyQjtBQUFBLE1BT2xCQyxVQVBrQjs7QUFBQSxtQkFRRlYsK0NBQVEsQ0FBQyxFQUFELENBUk47QUFBQSxNQVEzQlcsUUFSMkI7QUFBQSxNQVFqQkMsV0FSaUI7O0FBQUEsbUJBU1ZaLCtDQUFRLENBQUMsRUFBRCxDQVRFO0FBQUEsTUFTM0JhLElBVDJCO0FBQUEsTUFTckJDLE9BVHFCOztBQUFBLG1CQVVSZCwrQ0FBUSxDQUFDLEVBQUQsQ0FWQTtBQUFBLE1BVTNCZSxLQVYyQjtB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dGF0aWMvd2VicGFjay9wYWdlcy9kb25hdGlvbi9hdWN0aW9uL1tpZF0uMWRhOTlhZGY4YmE3NTk0NGZkNDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcclxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9JbWFnZSc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcblxyXG5pbXBvcnQgQmlkTkZUTW9kYWwgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9tb2RhbHMvQmlkTkZUTW9kYWwnO1xyXG5cclxuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXdORlQodXNlcikge1xyXG4gICAgY29uc3QgeyBjb250cmFjdCwgc2lnbmVyQWRkcmVzcyB9ID0gdXNlQ29udHJhY3QoJ0VSQzcyMScpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbdG9rZW5JZCwgc2V0VG9rZW5JZF0gPSB1c2VTdGF0ZSgtMSk7XHJcbiAgICBjb25zdCBbdG9rZW5OYW1lLCBzZXRUb2tlbk5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Rva2VuU3ltYm9sLCBzZXRUb2tlblN5bWJvbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtnb2FsdXNkLCBzZXRnb2FsdXNkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtkYXRlbGVmdCwgc2V0ZGF0ZWxlZnRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2xvZ28sIHNldGxvZ29dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW293bmVyLCBzZXRPd25lcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2V2ZW50dXJpLCBzZXRFdmVudHVyaV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbW9kYWxTaG93LCBzZXRNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBMZWZ0RGF0ZShkYXRldGV4dCkge1xyXG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHZhciBkID0gYyAtIG47XHJcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XHJcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XHJcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuIChkYS50b1N0cmluZygpICsgXCIgRGF5cyBcIiArIGgudG9TdHJpbmcoKSArIFwiIGhvdXJzIFwiICsgbS50b1N0cmluZygpICsgXCIgbWludXRlcyBcIiArIHMudG9TdHJpbmcoKSArIFwiIHNlY29uZHNcIik7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaENvbnRyYWN0RGF0YSgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICAgICAgICAgIGlmIChjb250cmFjdCAmJiBpZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCBjb250cmFjdC5ldmVudFVSSShpZCk7XHJcbiAgICAgICAgICAgICAgICBzZXRFdmVudHVyaSh2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0ID0gSlNPTi5wYXJzZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaXRsZShvYmplY3QucHJvcGVydGllcy5UaXRsZS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICBzZXRnb2FsdXNkKE51bWJlcihvYmplY3QucHJvcGVydGllcy5Hb2FsLmRlc2NyaXB0aW9uICogMzgxNy4wOSkpO1xyXG4gICAgICAgICAgICAgICAgc2V0ZGF0ZWxlZnQoTGVmdERhdGUob2JqZWN0LnByb3BlcnRpZXMuRGF0ZS5kZXNjcmlwdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgc2V0bG9nbyhMZWZ0RGF0ZShvYmplY3QucHJvcGVydGllcy5sb2dvLmRlc2NyaXB0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUb2tlbk5hbWUoYXdhaXQgY29udHJhY3QubmFtZSgpKTtcclxuICAgICAgICAgICAgICAgIHNldFRva2VuU3ltYm9sKGF3YWl0IGNvbnRyYWN0LnN5bWJvbCgpKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoQ29udHJhY3REYXRhKCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5ldGhlcmV1bS5vbignY2hhaW5DaGFuZ2VkJywgZmV0Y2hDb250cmFjdERhdGEpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cuZXRoZXJldW0ucmVtb3ZlTGlzdGVuZXIoJ2NoYWluQ2hhbmdlZCcsIGZldGNoQ29udHJhY3REYXRhKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW3JvdXRlci5xdWVyeSwgY29udHJhY3RdKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVCaWRORlRNb2RhbCgpIHtcclxuICAgICAgICBzZXRNb2RhbFNob3codHJ1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17dGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdycgc3R5bGU9e3sgaGVpZ2h0OiBcIjM5N3B4XCIsIG1hcmdpbjogXCIyOHB4XCIsIGJhY2tncm91bmQ6IFwid2hpdGVcIiwgY29sb3I6IFwiYmxhY2tcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsIHBhZGRpbmc6IDAsIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdj48aDQ+PC9oND48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgXCJkaXNwbGF5XCI6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMzI3cHhcIiwgbWF4SGVpZ2h0OiBcIjI1NXB4XCIsIG1pbldpZHRoOiBcIjMyN3B4XCIsIG1pbkhlaWdodDogXCIyNTVweFwiLCB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWRkaW5nVG9wXCI6IFwiMzNweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbkxlZnRcIjogXCI4MnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJvd0dhcFwiOiBcIjEwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgXCJ3aGl0ZVNwYWNlXCI6IFwicHJlLXdyYXBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Hb2FsOiAgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND4kIEVUSCk8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjYxcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBcInJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IFwiMjZweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpblRvcFwiOiBcIjUwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luTGVmdFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IFwiaGVpZ2h0XCI6IFwiMTAwJVwiLCBib3JkZXI6IFwiMHB4XCIgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IFwiZGlzcGxheVwiOiBcImZsZXhcIiwgZ2FwOiBcIjE0cHhcIiB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXthY3RpdmF0ZUNyZWF0ZU5GVE1vZGFsfSBjbGFzc05hbWU9XCJjYXJkXCIgc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiwgYmFja2dyb3VuZDogXCJyZ2IoMCwgMjIyLCAyMDUpXCIsIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsIGN1cnNvcjogXCJwb2ludGVyXCIsIGhlaWdodDogXCIxMDAlXCIsIGZsb2F0OiBcInJpZ2h0XCIsIHdpZHRoOiBcIjI5MHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCIgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiwgXCJwYWRkaW5nVG9wXCI6IFwiNnB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb25hdGUgTkZUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17YWN0aXZhdGVDcmVhdGVDcnlwdG9wdW5rTW9kYWx9IGNsYXNzTmFtZT1cImNhcmRcIiBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiLCBiYWNrZ3JvdW5kOiBcInJnYigwLCAyMjIsIDIwNSlcIiwgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIiwgY3Vyc29yOiBcInBvaW50ZXJcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgZmxvYXQ6IFwicmlnaHRcIiwgd2lkdGg6IFwiMjkwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiLCBcInBhZGRpbmdUb3BcIjogXCI2cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvbmF0ZSBDcnlwdG9wdW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvZG9uYXRpb24vYXVjdGlvbi8wJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIsIGJhY2tncm91bmQ6IFwicmdiKDAsIDIyMiwgMjA1KVwiLCBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLCBjdXJzb3I6IFwicG9pbnRlclwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBmbG9hdDogXCJyaWdodFwiLCB3aWR0aDogXCIyMjBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwJVwiLCBcInBhZGRpbmdUb3BcIjogXCI2cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHbyB0byBhdWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgPEJpZE5GVE1vZGFsXHJcbiAgICAgICAgICAgICAgICBzaG93PXttb2RhbFNob3d9XHJcbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRNb2RhbFNob3coZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBwb29yIGltcGxlbWVudGF0aW9uLCBiZXR0ZXIgdG8gaW1wbGVtZW50IGFuIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hDb250cmFjdERhdGEoKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjb250cmFjdD17Y29udHJhY3R9XHJcbiAgICAgICAgICAgICAgICBBbW91bnQ9e3NpZ25lckFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICB0b2tlbklkPXt0b2tlbklkfVxyXG4gICAgICAgICAgICAgICAgc2VuZGVyQWRkcmVzcz17c2lnbmVyQWRkcmVzc31cclxuICAgICAgICAgICAgICAgIHRva2VuVXJpPXt0b2tlbnVyaX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=