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
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap/Image */ "./node_modules/react-bootstrap/esm/Image.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
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
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "description",
        content: name
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__.default, {
        children: signerAddress != owner && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__.default, {
          className: "float-end",
          onClick: activateBidNFTModal,
          children: "Bid NFT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__.default.Group, {
        as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__.default,
        className: "mb-3",
        controlId: "formPlaintextName",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__.default.Label, {
          column: true,
          sm: "2",
          children: "Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__.default, {
          sm: "10",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__.default.Control, {
            plaintext: true,
            readOnly: true,
            defaultValue: name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__.default.Group, {
        as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__.default,
        className: "mb-3",
        controlId: "formPlaintextName",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__.default.Label, {
          column: true,
          sm: "2",
          children: "Higher Bid"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__.default, {
          sm: "10",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__.default.Control, {
            plaintext: true,
            readOnly: true,
            defaultValue: bid
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__.default.Group, {
        as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__.default,
        className: "mb-3",
        controlId: "formPlaintextName",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__.default.Label, {
          column: true,
          sm: "2",
          children: "Higher Bid Address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__.default, {
          sm: "10",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__.default.Control, {
            plaintext: true,
            readOnly: true,
            defaultValue: higherbid
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__.default.Group, {
        as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__.default,
        className: "mb-3",
        controlId: "formPlaintextDescription",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__.default.Label, {
          column: true,
          sm: "2",
          children: "Description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__.default, {
          sm: "10",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__.default.Control, {
            plaintext: true,
            readOnly: true,
            defaultValue: description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__.default.Group, {
        as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__.default,
        className: "mb-3",
        controlId: "formPlaintextOwner",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__.default.Label, {
          column: true,
          sm: "2",
          children: "Owner"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__.default, {
          sm: "10",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__.default.Control, {
            plaintext: true,
            readOnly: true,
            defaultValue: owner
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__.default.Group, {
        as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__.default,
        className: "mb-3",
        controlId: "formPlaintextImage",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__.default.Label, {
          column: true,
          sm: "2",
          children: "Image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__.default, {
          sm: "10",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Image__WEBPACK_IMPORTED_MODULE_12__.default, {
            src: url,
            alt: "An NFT Image",
            rounded: true,
            fluid: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 94,
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
      lineNumber: 161,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9uYXRpb24vYXVjdGlvbi9baWRdLmpzeCJdLCJuYW1lcyI6WyJWaWV3TkZUIiwidXNlciIsInVzZUNvbnRyYWN0IiwiY29udHJhY3QiLCJzaWduZXJBZGRyZXNzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ0b2tlbklkIiwic2V0VG9rZW5JZCIsInRva2VuTmFtZSIsInNldFRva2VuTmFtZSIsInRva2VuU3ltYm9sIiwic2V0VG9rZW5TeW1ib2wiLCJ0aXRsZSIsInNldFRpdGxlIiwiZ29hbHVzZCIsInNldGdvYWx1c2QiLCJkYXRlbGVmdCIsInNldGRhdGVsZWZ0IiwibG9nbyIsInNldGxvZ28iLCJvd25lciIsInNldE93bmVyIiwidXJsIiwic2V0VXJsIiwiZXZlbnR1cmkiLCJzZXRFdmVudHVyaSIsIm1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsIkxlZnREYXRlIiwiZGF0ZXRleHQiLCJjIiwiRGF0ZSIsImdldFRpbWUiLCJuIiwiZCIsImRhIiwiTWF0aCIsImZsb29yIiwiaCIsIm0iLCJzIiwidG9TdHJpbmciLCJmZXRjaENvbnRyYWN0RGF0YSIsImlkIiwicXVlcnkiLCJldmVudFVSSSIsInZhbHVlIiwib2JqZWN0IiwiSlNPTiIsInBhcnNlIiwicHJvcGVydGllcyIsIlRpdGxlIiwiZGVzY3JpcHRpb24iLCJOdW1iZXIiLCJHb2FsIiwibmFtZSIsInN5bWJvbCIsImNvbnNvbGUiLCJlcnJvciIsInVzZUVmZmVjdCIsIndpbmRvdyIsImV0aGVyZXVtIiwib24iLCJyZW1vdmVMaXN0ZW5lciIsImFjdGl2YXRlQmlkTkZUTW9kYWwiLCJSb3ciLCJiaWQiLCJoaWdoZXJiaWQiLCJ0b2tlbnVyaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRWUs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SSw4REFBQyxnRUFBRDtBQUNJLFVBQUUsRUFBRTZDLHdEQURSO0FBRUksaUJBQVMsRUFBQyxNQUZkO0FBR0ksaUJBQVMsRUFBQyxvQkFIZDtBQUFBLGdDQUtJLDhEQUFDLGdFQUFEO0FBQVksZ0JBQU0sTUFBbEI7QUFBbUIsWUFBRSxFQUFDLEdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKLGVBUUksOERBQUMsd0RBQUQ7QUFBSyxZQUFFLEVBQUMsSUFBUjtBQUFBLGlDQUNJLDhEQUFDLDJEQUFEO0FBQU8sZUFBRyxFQUFFM0MsR0FBWjtBQUFpQixlQUFHLEVBQUMsY0FBckI7QUFBb0MsbUJBQU8sTUFBM0M7QUFBNEMsaUJBQUs7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5CSixlQXNGSSw4REFBQyxtRUFBRDtBQUNJLFVBQUksRUFBRUksU0FEVjtBQUVJLFlBQU0sRUFBRSxrQkFBTTtBQUNWQyxvQkFBWSxDQUFDLEtBQUQsQ0FBWixDQURVLENBRVY7O0FBQ0FlLHlCQUFpQjtBQUNwQixPQU5MO0FBT0ksY0FBUSxFQUFFekMsUUFQZDtBQVFJLFlBQU0sRUFBRUMsYUFSWjtBQVNJLGFBQU8sRUFBRUksT0FUYjtBQVVJLG1CQUFhLEVBQUVKLGFBVm5CO0FBV0ksY0FBUSxFQUFFa0U7QUFYZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEZKO0FBQUEsa0JBREo7QUF1R0g7O0dBbkt1QnRFLE87VUFDZ0JFLDBELEVBQ3JCSSxrRDs7O0tBRktOLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9uYXRpb24vYXVjdGlvbi9baWRdLjdiMjhhMTRiNDQwODk2ZGViZjg0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XHJcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdyZWFjdC1ib290c3RyYXAvSW1hZ2UnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5cclxuaW1wb3J0IEJpZE5GVE1vZGFsIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbW9kYWxzL0JpZE5GVE1vZGFsJztcclxuXHJcbmltcG9ydCB1c2VDb250cmFjdCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91c2VDb250cmFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3TkZUKHVzZXIpIHtcclxuICAgIGNvbnN0IHsgY29udHJhY3QsIHNpZ25lckFkZHJlc3MgfSA9IHVzZUNvbnRyYWN0KCdFUkM3MjEnKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW3Rva2VuSWQsIHNldFRva2VuSWRdID0gdXNlU3RhdGUoLTEpO1xyXG4gICAgY29uc3QgW3Rva2VuTmFtZSwgc2V0VG9rZW5OYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt0b2tlblN5bWJvbCwgc2V0VG9rZW5TeW1ib2xdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZ29hbHVzZCwgc2V0Z29hbHVzZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZGF0ZWxlZnQsIHNldGRhdGVsZWZ0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtsb2dvLCBzZXRsb2dvXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtvd25lciwgc2V0T3duZXJdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtldmVudHVyaSwgc2V0RXZlbnR1cmldID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW21vZGFsU2hvdywgc2V0TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gTGVmdERhdGUoZGF0ZXRleHQpIHtcclxuICAgICAgICB2YXIgYyA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgZCA9IGMgLSBuO1xyXG4gICAgICAgIHZhciBkYSA9IE1hdGguZmxvb3IoZCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XHJcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xyXG4gICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xyXG4gICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjApKSAvIDEwMDApO1xyXG4gICAgICAgIHJldHVybiAoZGEudG9TdHJpbmcoKSArIFwiIERheXMgXCIgKyBoLnRvU3RyaW5nKCkgKyBcIiBob3VycyBcIiArIG0udG9TdHJpbmcoKSArIFwiIG1pbnV0ZXMgXCIgKyBzLnRvU3RyaW5nKCkgKyBcIiBzZWNvbmRzXCIpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb250cmFjdERhdGEoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgICAgICAgICBpZiAoY29udHJhY3QgJiYgaWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgY29udHJhY3QuZXZlbnRVUkkoaWQpO1xyXG4gICAgICAgICAgICAgICAgc2V0RXZlbnR1cmkodmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG9iamVjdCA9IEpTT04ucGFyc2UodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGl0bGUob2JqZWN0LnByb3BlcnRpZXMuVGl0bGUuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgc2V0Z29hbHVzZChOdW1iZXIob2JqZWN0LnByb3BlcnRpZXMuR29hbC5kZXNjcmlwdGlvbiAqIDM4MTcuMDkpKTtcclxuICAgICAgICAgICAgICAgIHNldGRhdGVsZWZ0KExlZnREYXRlKG9iamVjdC5wcm9wZXJ0aWVzLkRhdGUuZGVzY3JpcHRpb24pKTtcclxuICAgICAgICAgICAgICAgIHNldGxvZ28oTGVmdERhdGUob2JqZWN0LnByb3BlcnRpZXMubG9nby5kZXNjcmlwdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgc2V0VG9rZW5OYW1lKGF3YWl0IGNvbnRyYWN0Lm5hbWUoKSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUb2tlblN5bWJvbChhd2FpdCBjb250cmFjdC5zeW1ib2woKSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaENvbnRyYWN0RGF0YSgpO1xyXG5cclxuICAgICAgICB3aW5kb3cuZXRoZXJldW0ub24oJ2NoYWluQ2hhbmdlZCcsIGZldGNoQ29udHJhY3REYXRhKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LmV0aGVyZXVtLnJlbW92ZUxpc3RlbmVyKCdjaGFpbkNoYW5nZWQnLCBmZXRjaENvbnRyYWN0RGF0YSk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtyb3V0ZXIucXVlcnksIGNvbnRyYWN0XSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlQmlkTkZUTW9kYWwoKSB7XHJcbiAgICAgICAgc2V0TW9kYWxTaG93KHRydWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57bmFtZX08L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17bmFtZX0gLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7c2lnbmVyQWRkcmVzcyAhPSBvd25lciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiZmxvYXQtZW5kXCIgb25DbGljaz17YWN0aXZhdGVCaWRORlRNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWQgTkZUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtUGxhaW50ZXh0TmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNvbHVtbiBzbT1cIjJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBwbGFpbnRleHQgcmVhZE9ubHkgZGVmYXVsdFZhbHVlPXtuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1QbGFpbnRleHROYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY29sdW1uIHNtPVwiMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBIaWdoZXIgQmlkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209XCIxMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHBsYWludGV4dCByZWFkT25seSBkZWZhdWx0VmFsdWU9e2JpZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtUGxhaW50ZXh0TmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNvbHVtbiBzbT1cIjJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSGlnaGVyIEJpZCBBZGRyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209XCIxMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHBsYWludGV4dCByZWFkT25seSBkZWZhdWx0VmFsdWU9e2hpZ2hlcmJpZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwXHJcbiAgICAgICAgICAgICAgICAgICAgYXM9e1Jvd31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0zXCJcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sSWQ9XCJmb3JtUGxhaW50ZXh0RGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNvbHVtbiBzbT1cIjJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgcGxhaW50ZXh0IHJlYWRPbmx5IGRlZmF1bHRWYWx1ZT17ZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICBhcz17Um93fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xJZD1cImZvcm1QbGFpbnRleHRPd25lclwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY29sdW1uIHNtPVwiMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPd25lclxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBwbGFpbnRleHQgcmVhZE9ubHkgZGVmYXVsdFZhbHVlPXtvd25lcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cFxyXG4gICAgICAgICAgICAgICAgICAgIGFzPXtSb3d9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPVwiZm9ybVBsYWludGV4dEltYWdlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjb2x1bW4gc209XCIyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209XCIxMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXt1cmx9IGFsdD1cIkFuIE5GVCBJbWFnZVwiIHJvdW5kZWQgZmx1aWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICA8QmlkTkZUTW9kYWxcclxuICAgICAgICAgICAgICAgIHNob3c9e21vZGFsU2hvd31cclxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1vZGFsU2hvdyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIHBvb3IgaW1wbGVtZW50YXRpb24sIGJldHRlciB0byBpbXBsZW1lbnQgYW4gZXZlbnQgbGlzdGVuZXJcclxuICAgICAgICAgICAgICAgICAgICBmZXRjaENvbnRyYWN0RGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNvbnRyYWN0PXtjb250cmFjdH1cclxuICAgICAgICAgICAgICAgIEFtb3VudD17c2lnbmVyQWRkcmVzc31cclxuICAgICAgICAgICAgICAgIHRva2VuSWQ9e3Rva2VuSWR9XHJcbiAgICAgICAgICAgICAgICBzZW5kZXJBZGRyZXNzPXtzaWduZXJBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgdG9rZW5Vcmk9e3Rva2VudXJpfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==