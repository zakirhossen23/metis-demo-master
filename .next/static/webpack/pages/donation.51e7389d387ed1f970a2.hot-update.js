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
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
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
      type = _ref.type,
      EventID = _ref.EventID,
      SelectedTitle = _ref.SelectedTitle;
  console.log(EventID);

  var _UseFormInput = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__.default)({
    type: 'text',
    placeholder: 'Enter name'
  }),
      _UseFormInput2 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput, 2),
      name = _UseFormInput2[0],
      nameInput = _UseFormInput2[1];

  var _UseFormInput3 = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__.default)({
    as: 'textarea',
    placeholder: 'Enter description'
  }),
      _UseFormInput4 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput3, 2),
      description = _UseFormInput4[0],
      descriptionInput = _UseFormInput4[1];

  var _UseFormInput5 = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__.default)({
    type: 'text',
    placeholder: 'Enter image url'
  }),
      _UseFormInput6 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput5, 2),
      url = _UseFormInput6[0],
      urlInput = _UseFormInput6[1];

  var _UseFormInput7 = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__.default)({
    type: 'text',
    placeholder: 'Enter Price'
  }),
      _UseFormInput8 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput7, 2),
      price = _UseFormInput8[0],
      priceInput = _UseFormInput8[1];

  var _UseFormInput9 = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__.default)({
    type: 'text',
    placeholder: 'Enter NFT address'
  }),
      _UseFormInput10 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput9, 2),
      NFTaddress = _UseFormInput10[0],
      NFTaddressInput = _UseFormInput10[1];

  var _UseFormInput11 = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__.default)({
    type: 'text',
    placeholder: 'Enter Cryptopunk address'
  }),
      _UseFormInput12 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput11, 2),
      Cryptopunkaddress = _UseFormInput12[0],
      CryptopunkaddressInput = _UseFormInput12[1];

  function createNFT() {
    return _createNFT.apply(this, arguments);
  }

  function _createNFT() {
    _createNFT = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var Metistype, tokenAddress, createdObject, result;
      return C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
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
        lineNumber: 104,
        columnNumber: 6
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__.default.Title, {
        id: "contained-modal-title-vcenter",
        children: "Create NFT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
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
            lineNumber: 115,
            columnNumber: 7
          }, this), nameInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Group, {
          className: "mb-3",
          controlId: "formGroupName",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Label, {
            children: "Opening price in ETH"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 7
          }, this), priceInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Group, {
          className: "mb-3",
          controlId: "formGroupDescription",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Label, {
            children: "Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 7
          }, this), descriptionInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Group, {
          className: "mb-3",
          controlId: "formGroupImageUrl",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Label, {
            children: "Image URL"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 7
          }, this), urlInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 6
        }, this), type == "Cryptopunk" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Group, {
          className: "mb-3",
          controlId: "formGroupImageUrl",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Label, {
            children: "Cryptopunk address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 8
          }, this), CryptopunkaddressInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 7
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Group, {
          className: "mb-3",
          controlId: "formGroupImageUrl",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Label, {
            children: "NFT address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 8
          }, this), NFTaddressInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "d-grid",
          children: type == "Cryptopunk" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
            variant: "primary",
            onClick: createNFT,
            children: "Create Cryptopunk"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 8
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
            variant: "primary",
            onClick: createNFT,
            children: "Create NFT"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 95,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbHMvRG9uYXRlTkZUTW9kYWwuanN4Il0sIm5hbWVzIjpbIkRvbmF0ZU5GVE1vZGFsIiwic2hvdyIsIm9uSGlkZSIsImNvbnRyYWN0Iiwic2VuZGVyQWRkcmVzcyIsInR5cGUiLCJFdmVudElEIiwiU2VsZWN0ZWRUaXRsZSIsImNvbnNvbGUiLCJsb2ciLCJVc2VGb3JtSW5wdXQiLCJwbGFjZWhvbGRlciIsIm5hbWUiLCJuYW1lSW5wdXQiLCJhcyIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25JbnB1dCIsInVybCIsInVybElucHV0IiwicHJpY2UiLCJwcmljZUlucHV0IiwiTkZUYWRkcmVzcyIsIk5GVGFkZHJlc3NJbnB1dCIsIkNyeXB0b3B1bmthZGRyZXNzIiwiQ3J5cHRvcHVua2FkZHJlc3NJbnB1dCIsImNyZWF0ZU5GVCIsIk1ldGlzdHlwZSIsInRva2VuQWRkcmVzcyIsImNyZWF0ZWRPYmplY3QiLCJ0aXRsZSIsInByb3BlcnRpZXMiLCJpbWFnZSIsInR5cGVpbWciLCJuZnRhZGRyZXNzIiwiaGlnaGVyYmlkYWRkIiwiYmlkcyIsImNsYWltVG9rZW4iLCJKU09OIiwic3RyaW5naWZ5IiwicmVzdWx0Iiwid2luZG93IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0EsY0FBVCxPQVFaO0FBQUEsTUFQRkMsSUFPRSxRQVBGQSxJQU9FO0FBQUEsTUFORkMsTUFNRSxRQU5GQSxNQU1FO0FBQUEsTUFMRkMsUUFLRSxRQUxGQSxRQUtFO0FBQUEsTUFKRkMsYUFJRSxRQUpGQSxhQUlFO0FBQUEsTUFIRkMsSUFHRSxRQUhGQSxJQUdFO0FBQUEsTUFGRkMsT0FFRSxRQUZGQSxPQUVFO0FBQUEsTUFERkMsYUFDRSxRQURGQSxhQUNF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QUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBbUVBO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7S0E5S3dCekIsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb25hdGlvbi41MWU3Mzg5ZDM4N2VkMWY5NzBhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJztcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5cbmltcG9ydCBVc2VGb3JtSW5wdXQgZnJvbSAnLi4vVXNlRm9ybUlucHV0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9uYXRlTkZUTW9kYWwoe1xuXHRzaG93LFxuXHRvbkhpZGUsXG5cdGNvbnRyYWN0LFxuXHRzZW5kZXJBZGRyZXNzLFxuXHR0eXBlLFxuXHRFdmVudElELFxuXHRTZWxlY3RlZFRpdGxlLFxufSkge1xuXHRjb25zb2xlLmxvZyhFdmVudElEKTtcblx0Y29uc3QgW25hbWUsIG5hbWVJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0VudGVyIG5hbWUnLFxuXHR9KTtcblx0Y29uc3QgW2Rlc2NyaXB0aW9uLCBkZXNjcmlwdGlvbklucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0YXM6ICd0ZXh0YXJlYScsXG5cdFx0cGxhY2Vob2xkZXI6ICdFbnRlciBkZXNjcmlwdGlvbicsXG5cdH0pO1xuXHRjb25zdCBbdXJsLCB1cmxJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0VudGVyIGltYWdlIHVybCcsXG5cdH0pO1xuXHRjb25zdCBbcHJpY2UsIHByaWNlSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcblx0XHR0eXBlOiAndGV4dCcsXG5cdFx0cGxhY2Vob2xkZXI6ICdFbnRlciBQcmljZScsXG5cdH0pO1xuXHRjb25zdCBbTkZUYWRkcmVzcywgTkZUYWRkcmVzc0lucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHBsYWNlaG9sZGVyOiAnRW50ZXIgTkZUIGFkZHJlc3MnLFxuXHR9KTtcblx0Y29uc3QgW0NyeXB0b3B1bmthZGRyZXNzLCBDcnlwdG9wdW5rYWRkcmVzc0lucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHBsYWNlaG9sZGVyOiAnRW50ZXIgQ3J5cHRvcHVuayBhZGRyZXNzJyxcblx0fSk7XG5cdGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZU5GVCgpIHtcblx0XHR2YXIgTWV0aXN0eXBlID0gXCJORlRcIjtcblx0XHR2YXIgdG9rZW5BZGRyZXNzID0gTkZUYWRkcmVzcztcblx0XHRpZiAoXCJDcnlwdG9wdW5rXCIgPT0gdHlwZSkge1xuXHRcdFx0TWV0aXN0eXBlID0gXCJDcnlwdG9wdW5rXCI7XG5cdFx0XHR0b2tlbkFkZHJlc3MgPSBDcnlwdG9wdW5rYWRkcmVzcztcblx0XHR9XG5cdFx0Y29uc3QgY3JlYXRlZE9iamVjdCA9IHtcblx0XHRcdHRpdGxlOiAnQXNzZXQgTWV0YWRhdGEnLFxuXHRcdFx0dHlwZTogJ29iamVjdCcsXG5cdFx0XHRwcm9wZXJ0aWVzOiB7XG5cdFx0XHRcdG5hbWU6IHtcblx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogbmFtZSxcblx0XHRcdFx0fSxcblx0XHRcdFx0ZGVzY3JpcHRpb246IHtcblx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGltYWdlOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IHVybCxcblx0XHRcdFx0fSxcblx0XHRcdFx0cHJpY2U6IHtcblx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogcHJpY2Vcblx0XHRcdFx0fSxcblx0XHRcdFx0dHlwZWltZzoge1xuXHRcdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBNZXRpc3R5cGVcblx0XHRcdFx0fSxcblx0XHRcdFx0bmZ0YWRkcmVzczoge1xuXHRcdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiB0b2tlbkFkZHJlc3Ncblx0XHRcdFx0fSxcblx0XHRcdFx0aGlnaGVyYmlkYWRkOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IFwiXCJcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGJpZHM6IFtdXG5cdFx0fTtcblxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0LmNsYWltVG9rZW4oXG5cdFx0XHRzZW5kZXJBZGRyZXNzLFxuXHRcdFx0SlNPTi5zdHJpbmdpZnkoY3JlYXRlZE9iamVjdClcblx0XHQpO1xuXG5cdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcblx0XHR3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJ0bi1jbG9zZVwiKVswXS5jbGljaygpO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8TW9kYWxcblx0XHRcdHNob3c9e3Nob3d9XG5cdFx0XHRvbkhpZGU9e29uSGlkZX1cblx0XHRcdGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCJcblx0XHRcdHNpemU9XCJsZ1wiXG5cdFx0XHRjZW50ZXJlZFxuXHRcdD5cblx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdHsodHlwZSA9PSBcIkNyeXB0b3B1bmtcIikgPyAoXG5cdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIj5cblx0XHRcdFx0XHRcdENyZWF0ZSBDcnlwdG9wdW5rXG5cdFx0XHRcdFx0PC9Nb2RhbC5UaXRsZT4pXG5cdFx0XHRcdFx0OiAoXG5cdFx0XHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRDcmVhdGUgTkZUXG5cdFx0XHRcdFx0XHQ8L01vZGFsLlRpdGxlPil9XG5cdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT1cInNob3ctZ3JpZFwiPlxuXHRcdFx0XHQ8Rm9ybT5cblx0XHRcdFx0XHQ8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwTmFtZVwiPlxuXHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+TmFtZTwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdHtuYW1lSW5wdXR9XG5cdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBOYW1lXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5PcGVuaW5nIHByaWNlIGluIEVUSDwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdHtwcmljZUlucHV0fVxuXHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHQ8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwRGVzY3JpcHRpb25cIj5cblx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkRlc2NyaXB0aW9uPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0e2Rlc2NyaXB0aW9uSW5wdXR9XG5cdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBJbWFnZVVybFwiPlxuXHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+SW1hZ2UgVVJMPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0e3VybElucHV0fVxuXHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHR7KHR5cGUgPT0gXCJDcnlwdG9wdW5rXCIpID8gKFxuXHRcdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cEltYWdlVXJsXCI+XG5cdFx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkNyeXB0b3B1bmsgYWRkcmVzczwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdFx0e0NyeXB0b3B1bmthZGRyZXNzSW5wdXR9XG5cdFx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBJbWFnZVVybFwiPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5ORlQgYWRkcmVzczwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdFx0e05GVGFkZHJlc3NJbnB1dH1cblx0XHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHQpXG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZFwiPlxuXHRcdFx0XHRcdFx0eyh0eXBlID09IFwiQ3J5cHRvcHVua1wiKSA/IChcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2NyZWF0ZU5GVH0+XG5cdFx0XHRcdFx0XHRcdFx0Q3JlYXRlIENyeXB0b3B1bmtcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+KVxuXHRcdFx0XHRcdFx0XHQ6IChcblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17Y3JlYXRlTkZUfT5cblx0XHRcdFx0XHRcdFx0XHRcdENyZWF0ZSBORlRcblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0KX1cblxuXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvRm9ybT5cblx0XHRcdDwvTW9kYWwuQm9keT5cblx0XHQ8L01vZGFsPlxuXHQpO1xufVxuXG4vKlxue1xuXHRcInRpdGxlXCI6IFwiQXNzZXQgTWV0YWRhdGFcIixcblx0XCJ0eXBlXCI6IFwib2JqZWN0XCIsXG5cdFwicHJvcGVydGllc1wiOiB7XG5cdFx0XCJuYW1lXCI6IHtcblx0XHRcdFwidHlwZVwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XCJkZXNjcmlwdGlvblwiOiBcIklkZW50aWZpZXMgdGhlIGFzc2V0IHRvIHdoaWNoIHRoaXMgTkZUIHJlcHJlc2VudHNcIlxuXHRcdH0sXG5cdFx0XCJkZXNjcmlwdGlvblwiOiB7XG5cdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJEZXNjcmliZXMgdGhlIGFzc2V0IHRvIHdoaWNoIHRoaXMgTkZUIHJlcHJlc2VudHNcIlxuXHRcdH0sXG5cdFx0XCJpbWFnZVwiOiB7XG5cdFx0XHRcInR5cGVcIjogXCJzdHJpbmdcIixcblx0XHRcdFwiZGVzY3JpcHRpb25cIjogXCJBIFVSSSBwb2ludGluZyB0byBhIHJlc291cmNlIHdpdGggbWltZSB0eXBlIGltYWdlLyogcmVwcmVzZW50aW5nIHRoZSBhc3NldCB0byB3aGljaCB0aGlzIE5GVCByZXByZXNlbnRzLiBDb25zaWRlciBtYWtpbmcgYW55IGltYWdlcyBhdCBhIHdpZHRoIGJldHdlZW4gMzIwIGFuZCAxMDgwIHBpeGVscyBhbmQgYXNwZWN0IHJhdGlvIGJldHdlZW4gMS45MToxIGFuZCA0OjUgaW5jbHVzaXZlLlwiXG5cdFx0fVxuXHR9XG59XG4qL1xuIl0sInNvdXJjZVJvb3QiOiIifQ==