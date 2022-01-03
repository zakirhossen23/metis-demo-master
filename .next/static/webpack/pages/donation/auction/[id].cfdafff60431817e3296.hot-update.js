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
      goal = _useState6[0],
      setgoal = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      dateleft = _useState7[0],
      setdateleft = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      logo = _useState8[0],
      setlogo = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      owner = _useState9[0],
      setOwner = _useState9[1];

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      url = _useState10[0],
      setUrl = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      eventuri = _useState11[0],
      setEventuri = _useState11[1];

  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      modalShow = _useState12[0],
      setModalShow = _useState12[1];

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
                _context.next = 23;
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
              setgoal(Number(object.properties.Goal.description));
              setdateleft(LeftDate(object.properties.Date.description));
              setlogo(object.properties.logo.description);
              _context.t0 = setTokenName;
              _context.next = 16;
              return contract.name();

            case 16:
              _context.t1 = _context.sent;
              (0, _context.t0)(_context.t1);
              _context.t2 = setTokenSymbol;
              _context.next = 21;
              return contract.symbol();

            case 21:
              _context.t3 = _context.sent;
              (0, _context.t2)(_context.t3);

            case 23:
              _context.next = 28;
              break;

            case 25:
              _context.prev = 25;
              _context.t4 = _context["catch"](0);
              console.error(_context.t4);

            case 28:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 25]]);
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
        lineNumber: 79,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "description",
        content: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "row EventContainer",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        style: {
          "display": "flex"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
          src: logo,
          className: "AuctionImage"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "DetialsContainer",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "TextContainer",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
              children: "Goal: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
              children: ["$ ", goalusd, " (", goal, " ETH)"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "TextContainer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
              name: "dateleft",
              children: dateleft
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "row ElementsContainer bgWhite",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        style: {
          "display": "flex"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
          src: "",
          className: "AuctionImage"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "DetialsContainer",
            style: {
              rowGap: "23px"
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
              children: "Dolphin 10242"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "TextContainer",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h5", {
                style: {
                  color: "#8B8B8B"
                },
                children: "Created by charity LoveLif colloboration with the artist Mika"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "ElementBottomContainer",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h8", {
                className: "smallgrey",
                children: "Current bid"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
                className: "bidprice",
                children: "$ 2,000"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h8", {
                className: "smallgrey",
                children: "14d 3h 49m 24s"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "BidAllcontainer",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "Bidcontainer col",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "card BidcontainerCard",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "card-body",
                    children: "Bid"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 121,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 120,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
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
      senderAddress: signerAddress
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(ViewNFT, "R4vribWBDqHYijBfrT+Eu56mFNk=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9uYXRpb24vYXVjdGlvbi9baWRdLmpzeCJdLCJuYW1lcyI6WyJWaWV3TkZUIiwidXNlciIsInVzZUNvbnRyYWN0IiwiY29udHJhY3QiLCJzaWduZXJBZGRyZXNzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ0b2tlbklkIiwic2V0VG9rZW5JZCIsInRva2VuTmFtZSIsInNldFRva2VuTmFtZSIsInRva2VuU3ltYm9sIiwic2V0VG9rZW5TeW1ib2wiLCJ0aXRsZSIsInNldFRpdGxlIiwiZ29hbHVzZCIsInNldGdvYWx1c2QiLCJnb2FsIiwic2V0Z29hbCIsImRhdGVsZWZ0Iiwic2V0ZGF0ZWxlZnQiLCJsb2dvIiwic2V0bG9nbyIsIm93bmVyIiwic2V0T3duZXIiLCJ1cmwiLCJzZXRVcmwiLCJldmVudHVyaSIsInNldEV2ZW50dXJpIiwibW9kYWxTaG93Iiwic2V0TW9kYWxTaG93IiwiTGVmdERhdGUiLCJkYXRldGV4dCIsImMiLCJEYXRlIiwiZ2V0VGltZSIsIm4iLCJkIiwiZGEiLCJNYXRoIiwiZmxvb3IiLCJoIiwibSIsInMiLCJ0b1N0cmluZyIsImZldGNoQ29udHJhY3REYXRhIiwiaWQiLCJxdWVyeSIsImV2ZW50VVJJIiwidmFsdWUiLCJvYmplY3QiLCJKU09OIiwicGFyc2UiLCJwcm9wZXJ0aWVzIiwiVGl0bGUiLCJkZXNjcmlwdGlvbiIsIk51bWJlciIsIkdvYWwiLCJuYW1lIiwic3ltYm9sIiwiY29uc29sZSIsImVycm9yIiwidXNlRWZmZWN0Iiwid2luZG93IiwiZXRoZXJldW0iLCJvbiIsInJlbW92ZUxpc3RlbmVyIiwiYWN0aXZhdGVCaWRORlRNb2RhbCIsInJvd0dhcCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRWUsU0FBU0Es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ZGFmZmY2MDQzMTgxN2UzMjk2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XHJcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdyZWFjdC1ib290c3RyYXAvSW1hZ2UnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5cclxuaW1wb3J0IEJpZE5GVE1vZGFsIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbW9kYWxzL0JpZE5GVE1vZGFsJztcclxuXHJcbmltcG9ydCB1c2VDb250cmFjdCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91c2VDb250cmFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3TkZUKHVzZXIpIHtcclxuICAgIGNvbnN0IHsgY29udHJhY3QsIHNpZ25lckFkZHJlc3MgfSA9IHVzZUNvbnRyYWN0KCdFUkM3MjEnKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW3Rva2VuSWQsIHNldFRva2VuSWRdID0gdXNlU3RhdGUoLTEpO1xyXG4gICAgY29uc3QgW3Rva2VuTmFtZSwgc2V0VG9rZW5OYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt0b2tlblN5bWJvbCwgc2V0VG9rZW5TeW1ib2xdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZ29hbHVzZCwgc2V0Z29hbHVzZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZ29hbCwgc2V0Z29hbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZGF0ZWxlZnQsIHNldGRhdGVsZWZ0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtsb2dvLCBzZXRsb2dvXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtvd25lciwgc2V0T3duZXJdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtldmVudHVyaSwgc2V0RXZlbnR1cmldID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW21vZGFsU2hvdywgc2V0TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gTGVmdERhdGUoZGF0ZXRleHQpIHtcclxuICAgICAgICB2YXIgYyA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgZCA9IGMgLSBuO1xyXG4gICAgICAgIHZhciBkYSA9IE1hdGguZmxvb3IoZCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XHJcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xyXG4gICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xyXG4gICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjApKSAvIDEwMDApO1xyXG4gICAgICAgIHJldHVybiAoZGEudG9TdHJpbmcoKSArIFwiIERheXMgXCIgKyBoLnRvU3RyaW5nKCkgKyBcIiBob3VycyBcIiArIG0udG9TdHJpbmcoKSArIFwiIG1pbnV0ZXMgXCIgKyBzLnRvU3RyaW5nKCkgKyBcIiBzZWNvbmRzXCIpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb250cmFjdERhdGEoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgICAgICAgICBpZiAoY29udHJhY3QgJiYgaWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgY29udHJhY3QuZXZlbnRVUkkoaWQpO1xyXG4gICAgICAgICAgICAgICAgc2V0RXZlbnR1cmkodmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG9iamVjdCA9IEpTT04ucGFyc2UodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGl0bGUob2JqZWN0LnByb3BlcnRpZXMuVGl0bGUuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgc2V0Z29hbHVzZChOdW1iZXIob2JqZWN0LnByb3BlcnRpZXMuR29hbC5kZXNjcmlwdGlvbiAqIDM4MTcuMDkpKTtcclxuICAgICAgICAgICAgICAgIHNldGdvYWwoTnVtYmVyKG9iamVjdC5wcm9wZXJ0aWVzLkdvYWwuZGVzY3JpcHRpb24pKTtcclxuICAgICAgICAgICAgICAgIHNldGRhdGVsZWZ0KExlZnREYXRlKG9iamVjdC5wcm9wZXJ0aWVzLkRhdGUuZGVzY3JpcHRpb24pKTtcclxuICAgICAgICAgICAgICAgIHNldGxvZ28ob2JqZWN0LnByb3BlcnRpZXMubG9nby5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICBzZXRUb2tlbk5hbWUoYXdhaXQgY29udHJhY3QubmFtZSgpKTtcclxuICAgICAgICAgICAgICAgIHNldFRva2VuU3ltYm9sKGF3YWl0IGNvbnRyYWN0LnN5bWJvbCgpKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoQ29udHJhY3REYXRhKCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5ldGhlcmV1bS5vbignY2hhaW5DaGFuZ2VkJywgZmV0Y2hDb250cmFjdERhdGEpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cuZXRoZXJldW0ucmVtb3ZlTGlzdGVuZXIoJ2NoYWluQ2hhbmdlZCcsIGZldGNoQ29udHJhY3REYXRhKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW3JvdXRlci5xdWVyeSwgY29udHJhY3RdKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVCaWRORlRNb2RhbCgpIHtcclxuICAgICAgICBzZXRNb2RhbFNob3codHJ1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17dGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IEV2ZW50Q29udGFpbmVyXCIgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBcImRpc3BsYXlcIjogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xvZ299IGNsYXNzTmFtZT1cIkF1Y3Rpb25JbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEZXRpYWxzQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND57dGl0bGV9PC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdUZXh0Q29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Hb2FsOiA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PiQge2dvYWx1c2R9ICh7Z29hbH0gRVRIKTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nVGV4dENvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgbmFtZT0nZGF0ZWxlZnQnPntkYXRlbGVmdH08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBFbGVtZW50c0NvbnRhaW5lciBiZ1doaXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IFwiZGlzcGxheVwiOiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGNsYXNzTmFtZT1cIkF1Y3Rpb25JbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEZXRpYWxzQ29udGFpbmVyXCIgc3R5bGU9e3sgcm93R2FwOiBcIjIzcHhcIiB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+RG9scGhpbiAxMDI0MjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRleHRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6IFwiIzhCOEI4QlwiIH19PkNyZWF0ZWQgYnkgY2hhcml0eSBMb3ZlTGlmIGNvbGxvYm9yYXRpb24gd2l0aCB0aGUgYXJ0aXN0IE1pa2E8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRWxlbWVudEJvdHRvbUNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoOCBjbGFzc05hbWU9XCJzbWFsbGdyZXlcIj5DdXJyZW50IGJpZDwvaDg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nYmlkcHJpY2UnPiQgMiwwMDA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoOCBjbGFzc05hbWU9XCJzbWFsbGdyZXlcIj4xNGQgM2ggNDltIDI0czwvaDg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdCaWRBbGxjb250YWluZXInID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJpZGNvbnRhaW5lciBjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIEJpZGNvbnRhaW5lckNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+QmlkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPEJpZE5GVE1vZGFsXHJcbiAgICAgICAgICAgICAgICBzaG93PXttb2RhbFNob3d9XHJcbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRNb2RhbFNob3coZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBwb29yIGltcGxlbWVudGF0aW9uLCBiZXR0ZXIgdG8gaW1wbGVtZW50IGFuIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hDb250cmFjdERhdGEoKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjb250cmFjdD17Y29udHJhY3R9XHJcbiAgICAgICAgICAgICAgICBBbW91bnQ9e3NpZ25lckFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICB0b2tlbklkPXt0b2tlbklkfVxyXG4gICAgICAgICAgICAgICAgc2VuZGVyQWRkcmVzcz17c2lnbmVyQWRkcmVzc31cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=