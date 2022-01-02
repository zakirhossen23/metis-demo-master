self["webpackHotUpdate_N_E"]("pages/donation",{

/***/ "./components/modals/DonateNFTModal.jsx":
/*!**********************************************!*\
  !*** ./components/modals/DonateNFTModal.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DonateNFTModal; }
/* harmony export */ });
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _UseFormInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UseFormInput */ "./components/UseFormInput.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\zakir\\Documents\\test\\metis-demo-master\\components\\modals\\DonateNFTModal.jsx";





function DonateNFTModal(_ref) {
  var show = _ref.show,
      onHide = _ref.onHide,
      contract = _ref.contract,
      senderAddress = _ref.senderAddress,
      type = _ref.type;
  console.log(type);

  var _UseFormInput = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__.default)({
    type: 'text',
    placeholder: 'Enter name'
  }),
      _UseFormInput2 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput, 2),
      name = _UseFormInput2[0],
      nameInput = _UseFormInput2[1];

  var _UseFormInput3 = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__.default)({
    as: 'textarea',
    placeholder: 'Enter description'
  }),
      _UseFormInput4 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput3, 2),
      description = _UseFormInput4[0],
      descriptionInput = _UseFormInput4[1];

  var _UseFormInput5 = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__.default)({
    type: 'text',
    placeholder: 'Enter image url'
  }),
      _UseFormInput6 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput5, 2),
      url = _UseFormInput6[0],
      urlInput = _UseFormInput6[1];

  var _UseFormInput7 = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__.default)({
    type: 'text',
    placeholder: 'Enter Price'
  }),
      _UseFormInput8 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput7, 2),
      price = _UseFormInput8[0],
      priceInput = _UseFormInput8[1];

  var _UseFormInput9 = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__.default)({
    type: 'text',
    placeholder: 'Enter NFT address'
  }),
      _UseFormInput10 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput9, 2),
      NFTaddress = _UseFormInput10[0],
      NFTaddressInput = _UseFormInput10[1];

  var _UseFormInput11 = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__.default)({
    type: 'text',
    placeholder: 'Enter Cryptopunk address'
  }),
      _UseFormInput12 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput11, 2),
      Cryptopunkaddress = _UseFormInput12[0],
      CryptopunkaddressInput = _UseFormInput12[1];

  function createNFT() {
    return _createNFT.apply(this, arguments);
  }

  function _createNFT() {
    _createNFT = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var Metistype, tokenAddress, createdObject, result;
      return C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Metistype = "NFT";
              tokenAddress = NFTaddress;

              if ("Cryptopunk" == type) {
                Metistype = "Cryptopunk";
                tokenAddress = Cryptopunkaddress;
              }

              createdObject = {
                title: 'Asset Metadata',
                type: 'object',
                properties: {
                  name: {
                    type: 'string',
                    description: name
                  },
                  description: {
                    type: 'string',
                    description: description
                  },
                  image: {
                    type: 'string',
                    description: url
                  },
                  price: {
                    type: 'string',
                    description: price
                  },
                  typeimg: {
                    type: 'string',
                    description: Metistype
                  },
                  nftaddress: {
                    type: 'string',
                    description: tokenAddress
                  },
                  higherbidadd: {
                    type: 'string',
                    description: ""
                  }
                },
                bids: []
              };
              _context.next = 6;
              return contract.claimToken(senderAddress, JSON.stringify(createdObject));

            case 6:
              result = _context.sent;
              console.log(result);
              window.document.getElementsByClassName("btn-close")[0].click();

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _createNFT.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__.default, {
    show: show,
    onHide: onHide,
    "aria-labelledby": "contained-modal-title-vcenter",
    size: "lg",
    centered: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__.default.Header, {
      closeButton: true,
      children: type == "Cryptopunk" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__.default.Title, {
        id: "contained-modal-title-vcenter",
        children: "Create Cryptopunk"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 6
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__.default.Title, {
        id: "contained-modal-title-vcenter",
        children: "Create NFT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__.default.Body, {
      className: "show-grid",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Group, {
          className: "mb-3",
          controlId: "formGroupName",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Label, {
            children: "Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 7
          }, this), nameInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Group, {
          className: "mb-3",
          controlId: "formGroupName",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Label, {
            children: "Opening price in ETH"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 7
          }, this), priceInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Group, {
          className: "mb-3",
          controlId: "formGroupDescription",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Label, {
            children: "Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 7
          }, this), descriptionInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Group, {
          className: "mb-3",
          controlId: "formGroupImageUrl",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Label, {
            children: "Image URL"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 7
          }, this), urlInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 6
        }, this), type == "Cryptopunk" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Group, {
          className: "mb-3",
          controlId: "formGroupImageUrl",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Label, {
            children: "Cryptopunk address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 8
          }, this), CryptopunkaddressInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 7
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Group, {
          className: "mb-3",
          controlId: "formGroupImageUrl",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Label, {
            children: "NFT address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 8
          }, this), NFTaddressInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "d-grid",
          children: type == "Cryptopunk" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
            variant: "primary",
            onClick: createNFT,
            children: "Create Cryptopunk"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 8
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
            variant: "primary",
            onClick: createNFT,
            children: "Create NFT"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 3
  }, this);
}
/*
{
	"title": "Asset Metadata",
	"type": "object",
	"properties": {
		"name": {
			"type": "string",
			"description": "Identifies the asset to which this NFT represents"
		},
		"description": {
			"type": "string",
			"description": "Describes the asset to which this NFT represents"
		},
		"image": {
			"type": "string",
			"description": "A URI pointing to a resource with mime type image/* representing the asset to which this NFT represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive."
		}
	}
}
*/

_c = DonateNFTModal;

var _c;

$RefreshReg$(_c, "DonateNFTModal");

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


/***/ }),

/***/ "./pages/donation/index.tsx":
/*!**********************************!*\
  !*** ./pages/donation/index.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Donation; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var _components_modals_DonateNFTModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/modals/DonateNFTModal */ "./components/modals/DonateNFTModal.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\zakir\\Documents\\test\\metis-demo-master\\pages\\donation\\index.tsx",
    _s = $RefreshSig$();






function Donation() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      modalShow = _useState[0],
      setModalShow = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Donation"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Donation"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/Logo.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__.default, {
      className: "DonationBar",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "?q=All",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "DonationBarLink active",
          children: "All"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "?q=Today",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "DonationBarLink",
          children: "Today"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "?q=This Month",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "DonationBarLink",
          children: "This Month"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_5__.default, {
      style: {
        height: "273px",
        margin: "28px",
        background: "white",
        color: "black",
        overflow: "hidden",
        padding: 0
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
          children: "14 Days 3 hours 49 mintues 24 seconds"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 22
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: {
          "display": "flex"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "/Logo.svg",
          style: {
            width: "200px"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            "paddingTop": "11px",
            "marginLeft": "50px",
            display: "flex",
            "flexDirection": "column",
            width: "100%",
            "rowGap": "10px"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            children: "Hiv Protection"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              display: "flex",
              "whiteSpace": "pre-wrap"
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              children: "Goal:  "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              children: "$400,000"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              display: "flex"
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              children: "Descripiton:"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
              style: {
                width: "100%",
                overflow: "hidden",
                height: "27px"
              },
              children: "333333333333333333as 234   werrrrrrrrr 423    324 "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            style: {
              display: "flex",
              height: "58px",
              "float": "right",
              gap: "26px",
              right: 0,
              width: "100%",
              "justifyContent": "right"
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "card",
              style: {
                color: "white",
                background: "rgb(0, 222, 205)",
                "textAlign": "center",
                cursor: "pointer",
                height: "100%",
                "float": "right"
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "card-body",
                style: {
                  height: "100%",
                  "paddingTop": "6px"
                },
                children: "Donate NFT"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "card",
              style: {
                color: "white",
                background: "rgb(0, 222, 205)",
                "textAlign": "center",
                cursor: "pointer",
                height: "100%",
                "float": "right"
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "card-body",
                style: {
                  height: "100%",
                  "paddingTop": "6px"
                },
                children: "Go to auction"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modals_DonateNFTModal__WEBPACK_IMPORTED_MODULE_4__.default, {
      show: modalShow,
      onHide: function onHide() {
        setModalShow(false); // This is a poor implementation, better to implement an event listener

        fetchContractData();
      },
      contract: contract,
      senderAddress: signerAddress,
      type: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(Donation, "xuPPltV/3J92+XaNotdpXxySp+I=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbHMvRG9uYXRlTkZUTW9kYWwuanN4Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9kb25hdGlvbi9pbmRleC50c3giXSwibmFtZXMiOlsiRG9uYXRlTkZUTW9kYWwiLCJzaG93Iiwib25IaWRlIiwiY29udHJhY3QiLCJzZW5kZXJBZGRyZXNzIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJVc2VGb3JtSW5wdXQiLCJwbGFjZWhvbGRlciIsIm5hbWUiLCJuYW1lSW5wdXQiLCJhcyIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25JbnB1dCIsInVybCIsInVybElucHV0IiwicHJpY2UiLCJwcmljZUlucHV0IiwiTkZUYWRkcmVzcyIsIk5GVGFkZHJlc3NJbnB1dCIsIkNyeXB0b3B1bmthZGRyZXNzIiwiQ3J5cHRvcHVua2FkZHJlc3NJbnB1dCIsImNyZWF0ZU5GVCIsIk1ldGlzdHlwZSIsInRva2VuQWRkcmVzcyIsImNyZWF0ZWRPYmplY3QiLCJ0aXRsZSIsInByb3BlcnRpZXMiLCJpbWFnZSIsInR5cGVpbWciLCJuZnRhZGRyZXNzIiwiaGlnaGVyYmlkYWRkIiwiYmlkcyIsImNsYWltVG9rZW4iLCJKU09OIiwic3RyaW5naWZ5IiwicmVzdWx0Iiwid2luZG93IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xpY2siLCJEb25hdGlvbiIsInVzZVN0YXRlIiwibW9kYWxTaG93Iiwic2V0TW9kYWxTaG93IiwiaGVpZ2h0IiwibWFyZ2luIiwiYmFja2dyb3VuZCIsImNvbG9yIiwib3ZlcmZsb3ciLCJwYWRkaW5nIiwid2lkdGgiLCJkaXNwbGF5IiwiZ2FwIiwicmlnaHQiLCJjdXJzb3IiLCJmZXRjaENvbnRyYWN0RGF0YSIsInNpZ25lckFkZHJlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUs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QUFNLEVBQUUsTUFBVjtBQUFrQixnQ0FBYztBQUFoQyxpQkFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRKLGVBY0k7QUFBSyx1QkFBUyxFQUFDLE1BQWY7QUFBc0IsbUJBQUssRUFBRTtBQUFFRyxxQkFBSyxFQUFFLE9BQVQ7QUFBa0JELDBCQUFVLEVBQUUsa0JBQTlCO0FBQWtELDZCQUFhLFFBQS9EO0FBQXlFUSxzQkFBTSxFQUFFLFNBQWpGO0FBQTRGVixzQkFBTSxFQUFFLE1BQXBHO0FBQTRHLHlCQUFPO0FBQW5ILGVBQTdCO0FBQUEscUNBQ0k7QUFBSyx5QkFBUyxFQUFDLFdBQWY7QUFBMkIscUJBQUssRUFBRTtBQUFFQSx3QkFBTSxFQUFFLE1BQVY7QUFBa0IsZ0NBQWM7QUFBaEMsaUJBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4QkosZUFpRkksOERBQUMsc0VBQUQ7QUFDSSxVQUFJLEVBQUVGLFNBRFY7QUFFSSxZQUFNLEVBQUUsa0JBQU07QUFDVkMsb0JBQVksQ0FBQyxLQUFELENBQVosQ0FEVSxDQUVWOztBQUNBWSx5QkFBaUI7QUFDcEIsT0FOTDtBQU9JLGNBQVEsRUFBRXRELFFBUGQ7QUFRSSxtQkFBYSxFQUFFdUQsYUFSbkI7QUFTSSxVQUFJLEVBQUM7QUFUVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakZKO0FBQUEsa0JBREo7QUErRkg7O0dBbEd1QmhCLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9uYXRpb24uOGUzYjQwODkxNzkzYWNiY2Y3MDQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuXG5pbXBvcnQgVXNlRm9ybUlucHV0IGZyb20gJy4uL1VzZUZvcm1JbnB1dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvbmF0ZU5GVE1vZGFsKHtcblx0c2hvdyxcblx0b25IaWRlLFxuXHRjb250cmFjdCxcblx0c2VuZGVyQWRkcmVzcyxcblx0dHlwZSxcbn0pIHtcblx0Y29uc29sZS5sb2codHlwZSk7XG5cdGNvbnN0IFtuYW1lLCBuYW1lSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcblx0XHR0eXBlOiAndGV4dCcsXG5cdFx0cGxhY2Vob2xkZXI6ICdFbnRlciBuYW1lJyxcblx0fSk7XG5cdGNvbnN0IFtkZXNjcmlwdGlvbiwgZGVzY3JpcHRpb25JbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdGFzOiAndGV4dGFyZWEnLFxuXHRcdHBsYWNlaG9sZGVyOiAnRW50ZXIgZGVzY3JpcHRpb24nLFxuXHR9KTtcblx0Y29uc3QgW3VybCwgdXJsSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcblx0XHR0eXBlOiAndGV4dCcsXG5cdFx0cGxhY2Vob2xkZXI6ICdFbnRlciBpbWFnZSB1cmwnLFxuXHR9KTtcblx0Y29uc3QgW3ByaWNlLCBwcmljZUlucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHBsYWNlaG9sZGVyOiAnRW50ZXIgUHJpY2UnLFxuXHR9KTtcblx0Y29uc3QgW05GVGFkZHJlc3MsIE5GVGFkZHJlc3NJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0VudGVyIE5GVCBhZGRyZXNzJyxcblx0fSk7XG5cdGNvbnN0IFtDcnlwdG9wdW5rYWRkcmVzcywgQ3J5cHRvcHVua2FkZHJlc3NJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0VudGVyIENyeXB0b3B1bmsgYWRkcmVzcycsXG5cdH0pO1xuXHRhc3luYyBmdW5jdGlvbiBjcmVhdGVORlQoKSB7XG5cdFx0dmFyIE1ldGlzdHlwZSA9IFwiTkZUXCI7XG5cdFx0dmFyIHRva2VuQWRkcmVzcyA9IE5GVGFkZHJlc3M7XG5cdFx0aWYgKFwiQ3J5cHRvcHVua1wiID09IHR5cGUpIHtcblx0XHRcdE1ldGlzdHlwZSA9IFwiQ3J5cHRvcHVua1wiO1xuXHRcdFx0dG9rZW5BZGRyZXNzID0gQ3J5cHRvcHVua2FkZHJlc3M7XG5cdFx0fVxuXHRcdGNvbnN0IGNyZWF0ZWRPYmplY3QgPSB7XG5cdFx0XHR0aXRsZTogJ0Fzc2V0IE1ldGFkYXRhJyxcblx0XHRcdHR5cGU6ICdvYmplY3QnLFxuXHRcdFx0cHJvcGVydGllczoge1xuXHRcdFx0XHRuYW1lOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IG5hbWUsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRpbWFnZToge1xuXHRcdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiB1cmwsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHByaWNlOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IHByaWNlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHR5cGVpbWc6IHtcblx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogTWV0aXN0eXBlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdG5mdGFkZHJlc3M6IHtcblx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogdG9rZW5BZGRyZXNzXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGhpZ2hlcmJpZGFkZDoge1xuXHRcdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBcIlwiXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRiaWRzOiBbXVxuXHRcdH07XG5cblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cmFjdC5jbGFpbVRva2VuKFxuXHRcdFx0c2VuZGVyQWRkcmVzcyxcblx0XHRcdEpTT04uc3RyaW5naWZ5KGNyZWF0ZWRPYmplY3QpXG5cdFx0KTtcblxuXHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cdFx0d2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4tY2xvc2VcIilbMF0uY2xpY2soKTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PE1vZGFsXG5cdFx0XHRzaG93PXtzaG93fVxuXHRcdFx0b25IaWRlPXtvbkhpZGV9XG5cdFx0XHRhcmlhLWxhYmVsbGVkYnk9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiXG5cdFx0XHRzaXplPVwibGdcIlxuXHRcdFx0Y2VudGVyZWRcblx0XHQ+XG5cdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHR7KHR5cGUgPT0gXCJDcnlwdG9wdW5rXCIpID8gKFxuXHRcdFx0XHRcdDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCI+XG5cdFx0XHRcdFx0XHRDcmVhdGUgQ3J5cHRvcHVua1xuXHRcdFx0XHRcdDwvTW9kYWwuVGl0bGU+KVxuXHRcdFx0XHRcdDogKFxuXHRcdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0Q3JlYXRlIE5GVFxuXHRcdFx0XHRcdFx0PC9Nb2RhbC5UaXRsZT4pfVxuXHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHQ8TW9kYWwuQm9keSBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cblx0XHRcdFx0PEZvcm0+XG5cdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cE5hbWVcIj5cblx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPk5hbWU8L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHR7bmFtZUlucHV0fVxuXHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHQ8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwTmFtZVwiPlxuXHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+T3BlbmluZyBwcmljZSBpbiBFVEg8L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHR7cHJpY2VJbnB1dH1cblx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cERlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5EZXNjcmlwdGlvbjwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdHtkZXNjcmlwdGlvbklucHV0fVxuXHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHQ8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwSW1hZ2VVcmxcIj5cblx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkltYWdlIFVSTDwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdHt1cmxJbnB1dH1cblx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdFx0eyh0eXBlID09IFwiQ3J5cHRvcHVua1wiKSA/IChcblx0XHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBJbWFnZVVybFwiPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5DcnlwdG9wdW5rIGFkZHJlc3M8L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHRcdHtDcnlwdG9wdW5rYWRkcmVzc0lucHV0fVxuXHRcdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHQ8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwSW1hZ2VVcmxcIj5cblx0XHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+TkZUIGFkZHJlc3M8L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHRcdHtORlRhZGRyZXNzSW5wdXR9XG5cdFx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdFx0KVxuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWdyaWRcIj5cblx0XHRcdFx0XHRcdHsodHlwZSA9PSBcIkNyeXB0b3B1bmtcIikgPyAoXG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtjcmVhdGVORlR9PlxuXHRcdFx0XHRcdFx0XHRcdENyZWF0ZSBDcnlwdG9wdW5rXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPilcblx0XHRcdFx0XHRcdFx0OiAoXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2NyZWF0ZU5GVH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRDcmVhdGUgTkZUXG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdCl9XG5cblxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L0Zvcm0+XG5cdFx0XHQ8L01vZGFsLkJvZHk+XG5cdFx0PC9Nb2RhbD5cblx0KTtcbn1cblxuLypcbntcblx0XCJ0aXRsZVwiOiBcIkFzc2V0IE1ldGFkYXRhXCIsXG5cdFwidHlwZVwiOiBcIm9iamVjdFwiLFxuXHRcInByb3BlcnRpZXNcIjoge1xuXHRcdFwibmFtZVwiOiB7XG5cdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJJZGVudGlmaWVzIHRoZSBhc3NldCB0byB3aGljaCB0aGlzIE5GVCByZXByZXNlbnRzXCJcblx0XHR9LFxuXHRcdFwiZGVzY3JpcHRpb25cIjoge1xuXHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiRGVzY3JpYmVzIHRoZSBhc3NldCB0byB3aGljaCB0aGlzIE5GVCByZXByZXNlbnRzXCJcblx0XHR9LFxuXHRcdFwiaW1hZ2VcIjoge1xuXHRcdFx0XCJ0eXBlXCI6IFwic3RyaW5nXCIsXG5cdFx0XHRcImRlc2NyaXB0aW9uXCI6IFwiQSBVUkkgcG9pbnRpbmcgdG8gYSByZXNvdXJjZSB3aXRoIG1pbWUgdHlwZSBpbWFnZS8qIHJlcHJlc2VudGluZyB0aGUgYXNzZXQgdG8gd2hpY2ggdGhpcyBORlQgcmVwcmVzZW50cy4gQ29uc2lkZXIgbWFraW5nIGFueSBpbWFnZXMgYXQgYSB3aWR0aCBiZXR3ZWVuIDMyMCBhbmQgMTA4MCBwaXhlbHMgYW5kIGFzcGVjdCByYXRpbyBiZXR3ZWVuIDEuOTE6MSBhbmQgNDo1IGluY2x1c2l2ZS5cIlxuXHRcdH1cblx0fVxufVxuKi9cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IENhcmQgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NhcmQnO1xyXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xyXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xyXG5cclxuaW1wb3J0IERvbmF0ZU5GVE1vZGFsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbW9kYWxzL0RvbmF0ZU5GVE1vZGFsJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb25hdGlvbigpIHtcclxuICAgIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Eb25hdGlvbjwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiRG9uYXRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvTG9nby5zdmdcIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8Um93IGNsYXNzTmFtZT0nRG9uYXRpb25CYXInPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nP3E9QWxsJz5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J0RvbmF0aW9uQmFyTGluayBhY3RpdmUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBbGxcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPSc/cT1Ub2RheSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdEb25hdGlvbkJhckxpbmsnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb2RheVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jz9xPVRoaXMgTW9udGgnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nRG9uYXRpb25CYXJMaW5rJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBNb250aFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxSb3cgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIyNzNweFwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjI4cHhcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgIH19PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+PGg0PjE0IERheXMgMyBob3VycyA0OSBtaW50dWVzIDI0IHNlY29uZHM8L2g0PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBcImRpc3BsYXlcIjogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvTG9nby5zdmdcIiBzdHlsZT17eyB3aWR0aDogXCIyMDBweFwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmdUb3BcIjogXCIxMXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luTGVmdFwiOiBcIjUwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicm93R2FwXCI6IFwiMTBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5IaXYgUHJvdGVjdGlvbjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIFwid2hpdGVTcGFjZVwiOiBcInByZS13cmFwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+R29hbDogIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+JDQwMCwwMDA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5EZXNjcmlwaXRvbjo8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyN3B4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PjMzMzMzMzMzMzMzMzMzMzMzM2FzIDIzNCAgIHdlcnJycnJycnJyIDQyMyAgICAzMjQgPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjU4cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBcInJpZ2h0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXA6IFwiMjZweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImp1c3RpZnlDb250ZW50XCI6IFwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIsIGJhY2tncm91bmQ6IFwicmdiKDAsIDIyMiwgMjA1KVwiLCBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLCBjdXJzb3I6IFwicG9pbnRlclwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBmbG9hdDogXCJyaWdodFwiLCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIsIFwicGFkZGluZ1RvcFwiOiBcIjZweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb25hdGUgTkZUXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIsIGJhY2tncm91bmQ6IFwicmdiKDAsIDIyMiwgMjA1KVwiLCBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLCBjdXJzb3I6IFwicG9pbnRlclwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBmbG9hdDogXCJyaWdodFwiLCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiIHN0eWxlPXt7IGhlaWdodDogXCIxMDAlXCIsIFwicGFkZGluZ1RvcFwiOiBcIjZweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHbyB0byBhdWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8RG9uYXRlTkZUTW9kYWxcclxuICAgICAgICAgICAgICAgIHNob3c9e21vZGFsU2hvd31cclxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1vZGFsU2hvdyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIHBvb3IgaW1wbGVtZW50YXRpb24sIGJldHRlciB0byBpbXBsZW1lbnQgYW4gZXZlbnQgbGlzdGVuZXJcclxuICAgICAgICAgICAgICAgICAgICBmZXRjaENvbnRyYWN0RGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNvbnRyYWN0PXtjb250cmFjdH1cclxuICAgICAgICAgICAgICAgIHNlbmRlckFkZHJlc3M9e3NpZ25lckFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiXCIgLz5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=