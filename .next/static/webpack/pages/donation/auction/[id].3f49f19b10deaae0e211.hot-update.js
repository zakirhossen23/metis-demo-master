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
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
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
      name = _useState4[0],
      setName = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      bid = _useState5[0],
      setBid = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      higherbid = _useState6[0],
      setHigherBid = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      description = _useState7[0],
      setDescription = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      owner = _useState8[0],
      setOwner = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      url = _useState9[0],
      setUrl = _useState9[1];

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      tokenuri = _useState10[0],
      setTokentokenuri = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      modalShow = _useState11[0],
      setModalShow = _useState11[1];

  function fetchContractData() {
    return _fetchContractData.apply(this, arguments);
  }

  function _fetchContractData() {
    _fetchContractData = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var id, value, object, price, higherbidadd, _owner;

      return C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              id = router.query.id;

              if (!(contract && id)) {
                _context.next = 35;
                break;
              }

              _context.next = 5;
              return contract.tokenURI(id);

            case 5:
              value = _context.sent;
              setTokentokenuri(value);
              console.log(tokenuri);
              object = JSON.parse(value);
              console.log(object);
              setName(object.properties.name.description);
              price = "0";

              try {
                price = object.properties.price.description;
              } catch (_unused) {}

              setBid(price + " ETH");
              higherbidadd = "None";

              try {
                higherbidadd = object.properties.higherbidadd.description;
              } catch (_unused2) {}

              setHigherBid(higherbidadd);
              setDescription(object.properties.description.description);
              setUrl(object.properties.image.description);
              _context.t0 = setTokenName;
              _context.next = 22;
              return contract.name();

            case 22:
              _context.t1 = _context.sent;
              (0, _context.t0)(_context.t1);
              _context.t2 = setTokenSymbol;
              _context.next = 27;
              return contract.symbol();

            case 27:
              _context.t3 = _context.sent;
              (0, _context.t2)(_context.t3);
              _context.next = 31;
              return contract.ownerOf(id);

            case 31:
              _owner = _context.sent;
              setOwner(_owner);
              setTokenId(id);
              console.log(id);

            case 35:
              _context.next = 40;
              break;

            case 37:
              _context.prev = 37;
              _context.t4 = _context["catch"](0);
              console.error(_context.t4);

            case 40:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 37]]);
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
        lineNumber: 82,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "description",
        content: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__.default, {
        children: signerAddress != owner && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__.default, {
          className: "float-end",
          onClick: activateBidNFTModal,
          children: "Bid NFT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
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
          lineNumber: 101,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__.default, {
          sm: "10",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__.default.Control, {
            plaintext: true,
            readOnly: true,
            defaultValue: name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
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
          lineNumber: 109,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__.default, {
          sm: "10",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__.default.Control, {
            plaintext: true,
            readOnly: true,
            defaultValue: bid
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
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
          lineNumber: 117,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__.default, {
          sm: "10",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__.default.Control, {
            plaintext: true,
            readOnly: true,
            defaultValue: higherbid
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 116,
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
          lineNumber: 129,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__.default, {
          sm: "10",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__.default.Control, {
            plaintext: true,
            readOnly: true,
            defaultValue: description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
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
          lineNumber: 142,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__.default, {
          sm: "10",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__.default.Control, {
            plaintext: true,
            readOnly: true,
            defaultValue: owner
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
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
          lineNumber: 155,
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
            lineNumber: 159,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 99,
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
      lineNumber: 166,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(ViewNFT, "9kIabNN4h6ywANKrx6R33QK1EWU=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9uYXRpb24vYXVjdGlvbi9baWRdLmpzeCJdLCJuYW1lcyI6WyJWaWV3TkZUIiwidXNlciIsInVzZUNvbnRyYWN0IiwiY29udHJhY3QiLCJzaWduZXJBZGRyZXNzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ0b2tlbklkIiwic2V0VG9rZW5JZCIsInRva2VuTmFtZSIsInNldFRva2VuTmFtZSIsInRva2VuU3ltYm9sIiwic2V0VG9rZW5TeW1ib2wiLCJuYW1lIiwic2V0TmFtZSIsImJpZCIsInNldEJpZCIsImhpZ2hlcmJpZCIsInNldEhpZ2hlckJpZCIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJvd25lciIsInNldE93bmVyIiwidXJsIiwic2V0VXJsIiwidG9rZW51cmkiLCJzZXRUb2tlbnRva2VudXJpIiwibW9kYWxTaG93Iiwic2V0TW9kYWxTaG93IiwiZmV0Y2hDb250cmFjdERhdGEiLCJpZCIsInF1ZXJ5IiwidG9rZW5VUkkiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJvYmplY3QiLCJKU09OIiwicGFyc2UiLCJwcm9wZXJ0aWVzIiwicHJpY2UiLCJoaWdoZXJiaWRhZGQiLCJpbWFnZSIsInN5bWJvbCIsIm93bmVyT2YiLCJlcnJvciIsInVzZUVmZmVjdCIsIndpbmRvdyIsImV0aGVyZXVtIiwib24iLCJyZW1vdmVMaXN0ZW5lciIsImFjdGl2YXRlQmlkTkZUTW9kYWwiLCJSb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVlLFNBQVNBLE9BQVQsQ0FBaUJDLElBQWpCLEVBQXVCO0FBQUE7O0FBQUEscUJBQ0VDLDhEQUFXLENBQUMsUUFBRCxDQURiO0FBQUEsTUFDMUJDLFFBRDBCLGdCQUMxQkEsUUFEMEI7QUFBQSxNQUNo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QyxtRUFBRDtBQUNJLFVBQUksRUFBRUksU0FEVjtBQUVJLFlBQU0sRUFBRSxrQkFBTTtBQUNWQyxvQkFBWSxDQUFDLEtBQUQsQ0FBWixDQURVLENBRVY7O0FBQ0FDLHlCQUFpQjtBQUNwQixPQU5MO0FBT0ksY0FBUSxFQUFFM0IsUUFQZDtBQVFJLFlBQU0sRUFBRUMsYUFSWjtBQVNJLGFBQU8sRUFBRUksT0FUYjtBQVVJLG1CQUFhLEVBQUVKLGFBVm5CO0FBV0ksY0FBUSxFQUFFc0I7QUFYZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdEZKO0FBQUEsa0JBREo7QUF1R0g7O0dBeEt1QjFCLE87VUFDZ0JFLDBELEVBQ3JCSSxrRDs7O0tBRktOLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9uYXRpb24vYXVjdGlvbi9baWRdLjNmNDlmMTliMTBkZWFhZTBlMjExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XHJcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdyZWFjdC1ib290c3RyYXAvSW1hZ2UnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5cclxuaW1wb3J0IEJpZE5GVE1vZGFsIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbW9kYWxzL0JpZE5GVE1vZGFsJztcclxuXHJcbmltcG9ydCB1c2VDb250cmFjdCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91c2VDb250cmFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3TkZUKHVzZXIpIHtcclxuICAgIGNvbnN0IHsgY29udHJhY3QsIHNpZ25lckFkZHJlc3MgfSA9IHVzZUNvbnRyYWN0KCdFUkM3MjEnKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW3Rva2VuSWQsIHNldFRva2VuSWRdID0gdXNlU3RhdGUoLTEpO1xyXG4gICAgY29uc3QgW3Rva2VuTmFtZSwgc2V0VG9rZW5OYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt0b2tlblN5bWJvbCwgc2V0VG9rZW5TeW1ib2xdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2JpZCwgc2V0QmlkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtoaWdoZXJiaWQsIHNldEhpZ2hlckJpZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtvd25lciwgc2V0T3duZXJdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt0b2tlbnVyaSwgc2V0VG9rZW50b2tlbnVyaV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbW9kYWxTaG93LCBzZXRNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoQ29udHJhY3REYXRhKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICAgICAgICAgICAgaWYgKGNvbnRyYWN0ICYmIGlkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IGNvbnRyYWN0LnRva2VuVVJJKGlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUb2tlbnRva2VudXJpKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRva2VudXJpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9iamVjdCA9IEpTT04ucGFyc2UodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cob2JqZWN0KTtcclxuICAgICAgICAgICAgICAgIHNldE5hbWUob2JqZWN0LnByb3BlcnRpZXMubmFtZS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJpY2UgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIHRyeSB7IHByaWNlID0gb2JqZWN0LnByb3BlcnRpZXMucHJpY2UuZGVzY3JpcHRpb24gfSBjYXRjaCB7IH1cclxuICAgICAgICAgICAgICAgIHNldEJpZChwcmljZSArIFwiIEVUSFwiKTtcclxuICAgICAgICAgICAgICAgIHZhciBoaWdoZXJiaWRhZGQgPSBcIk5vbmVcIjtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGlnaGVyYmlkYWRkID0gb2JqZWN0LnByb3BlcnRpZXMuaGlnaGVyYmlkYWRkLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCB7IH1cclxuICAgICAgICAgICAgICAgIHNldEhpZ2hlckJpZChoaWdoZXJiaWRhZGQpXHJcbiAgICAgICAgICAgICAgICBzZXREZXNjcmlwdGlvbihvYmplY3QucHJvcGVydGllcy5kZXNjcmlwdGlvbi5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICBzZXRVcmwob2JqZWN0LnByb3BlcnRpZXMuaW1hZ2UuZGVzY3JpcHRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRva2VuTmFtZShhd2FpdCBjb250cmFjdC5uYW1lKCkpO1xyXG4gICAgICAgICAgICAgICAgc2V0VG9rZW5TeW1ib2woYXdhaXQgY29udHJhY3Quc3ltYm9sKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IG93bmVyID0gYXdhaXQgY29udHJhY3Qub3duZXJPZihpZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0T3duZXIob3duZXIpO1xyXG4gICAgICAgICAgICAgICAgc2V0VG9rZW5JZChpZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaENvbnRyYWN0RGF0YSgpO1xyXG5cclxuICAgICAgICB3aW5kb3cuZXRoZXJldW0ub24oJ2NoYWluQ2hhbmdlZCcsIGZldGNoQ29udHJhY3REYXRhKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LmV0aGVyZXVtLnJlbW92ZUxpc3RlbmVyKCdjaGFpbkNoYW5nZWQnLCBmZXRjaENvbnRyYWN0RGF0YSk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtyb3V0ZXIucXVlcnksIGNvbnRyYWN0XSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlQmlkTkZUTW9kYWwoKSB7XHJcbiAgICAgICAgc2V0TW9kYWxTaG93KHRydWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57bmFtZX08L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17bmFtZX0gLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7c2lnbmVyQWRkcmVzcyAhPSBvd25lciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiZmxvYXQtZW5kXCIgb25DbGljaz17YWN0aXZhdGVCaWRORlRNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWQgTkZUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtUGxhaW50ZXh0TmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNvbHVtbiBzbT1cIjJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBwbGFpbnRleHQgcmVhZE9ubHkgZGVmYXVsdFZhbHVlPXtuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1QbGFpbnRleHROYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY29sdW1uIHNtPVwiMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBIaWdoZXIgQmlkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209XCIxMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHBsYWludGV4dCByZWFkT25seSBkZWZhdWx0VmFsdWU9e2JpZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGFzPXtSb3d9IGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtUGxhaW50ZXh0TmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNvbHVtbiBzbT1cIjJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSGlnaGVyIEJpZCBBZGRyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209XCIxMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHBsYWludGV4dCByZWFkT25seSBkZWZhdWx0VmFsdWU9e2hpZ2hlcmJpZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwXHJcbiAgICAgICAgICAgICAgICAgICAgYXM9e1Jvd31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0zXCJcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sSWQ9XCJmb3JtUGxhaW50ZXh0RGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNvbHVtbiBzbT1cIjJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgcGxhaW50ZXh0IHJlYWRPbmx5IGRlZmF1bHRWYWx1ZT17ZGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcblxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICBhcz17Um93fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xJZD1cImZvcm1QbGFpbnRleHRPd25lclwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY29sdW1uIHNtPVwiMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPd25lclxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBwbGFpbnRleHQgcmVhZE9ubHkgZGVmYXVsdFZhbHVlPXtvd25lcn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cFxyXG4gICAgICAgICAgICAgICAgICAgIGFzPXtSb3d9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPVwiZm9ybVBsYWludGV4dEltYWdlXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjb2x1bW4gc209XCIyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209XCIxMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXt1cmx9IGFsdD1cIkFuIE5GVCBJbWFnZVwiIHJvdW5kZWQgZmx1aWQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgPC9Gb3JtPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICA8QmlkTkZUTW9kYWxcclxuICAgICAgICAgICAgICAgIHNob3c9e21vZGFsU2hvd31cclxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1vZGFsU2hvdyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIHBvb3IgaW1wbGVtZW50YXRpb24sIGJldHRlciB0byBpbXBsZW1lbnQgYW4gZXZlbnQgbGlzdGVuZXJcclxuICAgICAgICAgICAgICAgICAgICBmZXRjaENvbnRyYWN0RGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNvbnRyYWN0PXtjb250cmFjdH1cclxuICAgICAgICAgICAgICAgIEFtb3VudD17c2lnbmVyQWRkcmVzc31cclxuICAgICAgICAgICAgICAgIHRva2VuSWQ9e3Rva2VuSWR9XHJcbiAgICAgICAgICAgICAgICBzZW5kZXJBZGRyZXNzPXtzaWduZXJBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgdG9rZW5Vcmk9e3Rva2VudXJpfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==