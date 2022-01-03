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
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      bid = _useState3[0],
      setBid = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      higherbid = _useState4[0],
      setHigherBid = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      description = _useState5[0],
      setDescription = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      owner = _useState6[0],
      setOwner = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      url = _useState7[0],
      setUrl = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      tokenuri = _useState8[0],
      setTokentokenuri = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      modalShow = _useState9[0],
      setModalShow = _useState9[1];

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
        lineNumber: 80,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "description",
        content: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__.default, {
        children: signerAddress != owner && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__.default, {
          className: "float-end",
          onClick: activateBidNFTModal,
          children: "Bid NFT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
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
          lineNumber: 99,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__.default, {
          sm: "10",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__.default.Control, {
            plaintext: true,
            readOnly: true,
            defaultValue: name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
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
          lineNumber: 107,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__.default, {
          sm: "10",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__.default.Control, {
            plaintext: true,
            readOnly: true,
            defaultValue: bid
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 106,
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
          lineNumber: 115,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__.default, {
          sm: "10",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__.default.Control, {
            plaintext: true,
            readOnly: true,
            defaultValue: higherbid
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
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
          lineNumber: 127,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__.default, {
          sm: "10",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__.default.Control, {
            plaintext: true,
            readOnly: true,
            defaultValue: description
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
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
          lineNumber: 140,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__.default, {
          sm: "10",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_11__.default.Control, {
            plaintext: true,
            readOnly: true,
            defaultValue: owner
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
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
          lineNumber: 153,
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
            lineNumber: 157,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 97,
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
      lineNumber: 164,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(ViewNFT, "ufLYR82CGHZJb30Sp5/N4uLgLEs=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9uYXRpb24vYXVjdGlvbi9baWRdLmpzeCJdLCJuYW1lcyI6WyJWaWV3TkZUIiwidXNlciIsInVzZUNvbnRyYWN0IiwiY29udHJhY3QiLCJzaWduZXJBZGRyZXNzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ0b2tlbklkIiwic2V0VG9rZW5JZCIsIm5hbWUiLCJzZXROYW1lIiwiYmlkIiwic2V0QmlkIiwiaGlnaGVyYmlkIiwic2V0SGlnaGVyQmlkIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsIm93bmVyIiwic2V0T3duZXIiLCJ1cmwiLCJzZXRVcmwiLCJ0b2tlbnVyaSIsInNldFRva2VudG9rZW51cmkiLCJtb2RhbFNob3ciLCJzZXRNb2RhbFNob3ciLCJmZXRjaENvbnRyYWN0RGF0YSIsInNldFRva2VuTmFtZSIsInNldFRva2VuU3ltYm9sIiwic3ltYm9sIiwidG90YWxFdmVudCIsImFyciIsImkiLCJOdW1iZXIiLCJldmVudFVSSSIsInZhbHVlIiwib2JqZWN0IiwiSlNPTiIsInBhcnNlIiwicHJpY2VkZXMxIiwicHJvcGVydGllcyIsIkdvYWwiLCJleCIsInB1c2giLCJldmVudElkIiwiVGl0bGUiLCJEYXRlIiwiR29hbHVzZCIsImxvZ28iLCJjb25zb2xlIiwibG9nIiwic2V0TGlzdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImVycm9yIiwidXNlRWZmZWN0Iiwid2luZG93IiwiZXRoZXJldW0iLCJvbiIsInJlbW92ZUxpc3RlbmVyIiwicXVlcnkiLCJhY3RpdmF0ZUJpZE5GVE1vZGFsIiwiUm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFZSxTQUFTQSxPQUFULENBQWlCQyxJQUFqQixFQUF1QjtB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QVksQ0FBQyxLQUFELENBQVosQ0FEVSxDQUVWOztBQUNBQyx5QkFBaUI7QUFDcEIsT0FOTDtBQU9JLGNBQVEsRUFBRXZCLFFBUGQ7QUFRSSxZQUFNLEVBQUVDLGFBUlo7QUFTSSxhQUFPLEVBQUVJLE9BVGI7QUFVSSxtQkFBYSxFQUFFSixhQVZuQjtBQVdJLGNBQVEsRUFBRWtCO0FBWGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRGSjtBQUFBLGtCQURKO0FBdUdIOztHQXRLdUJ0QixPO1VBQ2dCRSwwRCxFQUNyQkksa0Q7OztLQUZLTixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvbmF0aW9uL2F1Y3Rpb24vW2lkXS44YjJmMjY0NjdkNDdlNDk1NWRkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xyXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0ltYWdlJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuXHJcbmltcG9ydCBCaWRORlRNb2RhbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL21vZGFscy9CaWRORlRNb2RhbCc7XHJcblxyXG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlld05GVCh1c2VyKSB7XHJcbiAgICBjb25zdCB7IGNvbnRyYWN0LCBzaWduZXJBZGRyZXNzIH0gPSB1c2VDb250cmFjdCgnRVJDNzIxJyk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFt0b2tlbklkLCBzZXRUb2tlbklkXSA9IHVzZVN0YXRlKC0xKTtcclxuICAgIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtiaWQsIHNldEJpZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbaGlnaGVyYmlkLCBzZXRIaWdoZXJCaWRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbb3duZXIsIHNldE93bmVyXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt1cmwsIHNldFVybF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdG9rZW51cmksIHNldFRva2VudG9rZW51cmldID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW21vZGFsU2hvdywgc2V0TW9kYWxTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaENvbnRyYWN0RGF0YSgpIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGNvbnRyYWN0KSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUb2tlbk5hbWUoYXdhaXQgY29udHJhY3QubmFtZSgpKTtcclxuICAgICAgICAgICAgICAgIHNldFRva2VuU3ltYm9sKGF3YWl0IGNvbnRyYWN0LnN5bWJvbCgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbEV2ZW50ID0gYXdhaXQgY29udHJhY3QudG90YWxFdmVudCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJyID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE51bWJlcih0b3RhbEV2ZW50KTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCBjb250cmFjdC5ldmVudFVSSShpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iamVjdCA9IEpTT04ucGFyc2UodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJpY2VkZXMxID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHsgcHJpY2VkZXMxID0gTnVtYmVyKG9iamVjdC5wcm9wZXJ0aWVzLkdvYWwuZGVzY3JpcHRpb24gKiAzODE3LjA5KSB9IGNhdGNoIChleCkgeyB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudElkOiBpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGl0bGU6IG9iamVjdC5wcm9wZXJ0aWVzLlRpdGxlLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0ZTogb2JqZWN0LnByb3BlcnRpZXMuRGF0ZS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvYWx1c2Q6IHByaWNlZGVzMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvYWw6IG9iamVjdC5wcm9wZXJ0aWVzLkdvYWwuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvOiBvYmplY3QucHJvcGVydGllcy5sb2dvLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNldExpc3QoYXJyKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKS5zdHlsZSA9IFwiZGlzcGxheTpub25lXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoQ29udHJhY3REYXRhKCk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5ldGhlcmV1bS5vbignY2hhaW5DaGFuZ2VkJywgZmV0Y2hDb250cmFjdERhdGEpO1xyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cuZXRoZXJldW0ucmVtb3ZlTGlzdGVuZXIoJ2NoYWluQ2hhbmdlZCcsIGZldGNoQ29udHJhY3REYXRhKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW3JvdXRlci5xdWVyeSwgY29udHJhY3RdKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVCaWRORlRNb2RhbCgpIHtcclxuICAgICAgICBzZXRNb2RhbFNob3codHJ1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPntuYW1lfTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtzaWduZXJBZGRyZXNzICE9IG93bmVyICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJmbG9hdC1lbmRcIiBvbkNsaWNrPXthY3RpdmF0ZUJpZE5GVE1vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpZCBORlRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1QbGFpbnRleHROYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY29sdW1uIHNtPVwiMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209XCIxMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHBsYWludGV4dCByZWFkT25seSBkZWZhdWx0VmFsdWU9e25hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBhcz17Um93fSBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybVBsYWludGV4dE5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjb2x1bW4gc209XCIyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEhpZ2hlciBCaWRcclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgcGxhaW50ZXh0IHJlYWRPbmx5IGRlZmF1bHRWYWx1ZT17YmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgYXM9e1Jvd30gY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1QbGFpbnRleHROYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY29sdW1uIHNtPVwiMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBIaWdoZXIgQmlkIEFkZHJlc3NcclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgcGxhaW50ZXh0IHJlYWRPbmx5IGRlZmF1bHRWYWx1ZT17aGlnaGVyYmlkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICBhcz17Um93fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xJZD1cImZvcm1QbGFpbnRleHREZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uTGFiZWwgY29sdW1uIHNtPVwiMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPVwiMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBwbGFpbnRleHQgcmVhZE9ubHkgZGVmYXVsdFZhbHVlPXtkZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuXHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cFxyXG4gICAgICAgICAgICAgICAgICAgIGFzPXtSb3d9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbElkPVwiZm9ybVBsYWludGV4dE93bmVyXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbCBjb2x1bW4gc209XCIyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE93bmVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209XCIxMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHBsYWludGV4dCByZWFkT25seSBkZWZhdWx0VmFsdWU9e293bmVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwXHJcbiAgICAgICAgICAgICAgICAgICAgYXM9e1Jvd31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0zXCJcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sSWQ9XCJmb3JtUGxhaW50ZXh0SW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsIGNvbHVtbiBzbT1cIjJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBzbT1cIjEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3VybH0gYWx0PVwiQW4gTkZUIEltYWdlXCIgcm91bmRlZCBmbHVpZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDxCaWRORlRNb2RhbFxyXG4gICAgICAgICAgICAgICAgc2hvdz17bW9kYWxTaG93fVxyXG4gICAgICAgICAgICAgICAgb25IaWRlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TW9kYWxTaG93KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgcG9vciBpbXBsZW1lbnRhdGlvbiwgYmV0dGVyIHRvIGltcGxlbWVudCBhbiBldmVudCBsaXN0ZW5lclxyXG4gICAgICAgICAgICAgICAgICAgIGZldGNoQ29udHJhY3REYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgY29udHJhY3Q9e2NvbnRyYWN0fVxyXG4gICAgICAgICAgICAgICAgQW1vdW50PXtzaWduZXJBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgdG9rZW5JZD17dG9rZW5JZH1cclxuICAgICAgICAgICAgICAgIHNlbmRlckFkZHJlc3M9e3NpZ25lckFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICB0b2tlblVyaT17dG9rZW51cml9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9