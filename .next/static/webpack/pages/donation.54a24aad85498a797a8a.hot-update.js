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
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__.default.Title, {
        id: "contained-modal-title-vcenter",
        children: ["Donate ", type, " - ", SelectedTitle]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 5
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
            lineNumber: 111,
            columnNumber: 7
          }, this), nameInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Group, {
          className: "mb-3",
          controlId: "formGroupName",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Label, {
            children: "Opening price in ETH"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 7
          }, this), priceInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Group, {
          className: "mb-3",
          controlId: "formGroupDescription",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Label, {
            children: "Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 7
          }, this), descriptionInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Group, {
          className: "mb-3",
          controlId: "formGroupImageUrl",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Label, {
            children: "Image URL"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 7
          }, this), urlInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 6
        }, this), type == "Cryptopunk" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Group, {
          className: "mb-3",
          controlId: "formGroupImageUrl",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Label, {
            children: "Cryptopunk address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 8
          }, this), CryptopunkaddressInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 7
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Group, {
          className: "mb-3",
          controlId: "formGroupImageUrl",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Label, {
            children: "NFT address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 8
          }, this), NFTaddressInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "d-grid",
          children: type == "Cryptopunk" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
            variant: "primary",
            onClick: createNFT,
            children: "Donate Cryptopunk"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 8
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
            variant: "primary",
            onClick: createNFT,
            children: "Donate NFT"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 95,
    columnNumber: 3
  }, this);
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbHMvRG9uYXRlTkZUTW9kYWwuanN4Il0sIm5hbWVzIjpbIkRvbmF0ZU5GVE1vZGFsIiwic2hvdyIsIm9uSGlkZSIsImNvbnRyYWN0Iiwic2VuZGVyQWRkcmVzcyIsInR5cGUiLCJFdmVudElEIiwiU2VsZWN0ZWRUaXRsZSIsImNvbnNvbGUiLCJsb2ciLCJVc2VGb3JtSW5wdXQiLCJwbGFjZWhvbGRlciIsIm5hbWUiLCJuYW1lSW5wdXQiLCJhcyIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25JbnB1dCIsInVybCIsInVybElucHV0IiwicHJpY2UiLCJwcmljZUlucHV0IiwiTkZUYWRkcmVzcyIsIk5GVGFkZHJlc3NJbnB1dCIsIkNyeXB0b3B1bmthZGRyZXNzIiwiQ3J5cHRvcHVua2FkZHJlc3NJbnB1dCIsImNyZWF0ZU5GVCIsIk1ldGlzdHlwZSIsInRva2VuQWRkcmVzcyIsImNyZWF0ZWRPYmplY3QiLCJ0aXRsZSIsInByb3BlcnRpZXMiLCJpbWFnZSIsInR5cGVpbWciLCJuZnRhZGRyZXNzIiwiaGlnaGVyYmlkYWRkIiwiYmlkcyIsImNsYWltVG9rZW4iLCJKU09OIiwic3RyaW5naWZ5IiwicmVzdWx0Iiwid2luZG93IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0EsY0FBVCxPQVFaO0FBQUEsTUFQRkMsSUFPRSxRQVBGQSxJQU9FO0FBQUEsTUFORkMsTUFNRSxRQU5GQSxNQU1FO0FBQUEsTUFMRkMsUUFLRSxRQUxGQSxRQUtFO0FBQUEsTUFKRkMsYUFJRSxRQUpGQSxhQUlFO0FBQUEsTUFIRkMsSUFHRSxRQUhGQSxJQUdFO0FBQUEsTUFGRkMsT0FFRSxRQUZGQSxPQUVFO0FBQUEsTUFERkMsYUFDRSxRQURGQSxhQUNF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VUFERDtBQStEQTtLQXJKdUJ6QixjIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvbmF0aW9uLjU0YTI0YWFkODU0OThhNzk3YThhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcblxuaW1wb3J0IFVzZUZvcm1JbnB1dCBmcm9tICcuLi9Vc2VGb3JtSW5wdXQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb25hdGVORlRNb2RhbCh7XG5cdHNob3csXG5cdG9uSGlkZSxcblx0Y29udHJhY3QsXG5cdHNlbmRlckFkZHJlc3MsXG5cdHR5cGUsXG5cdEV2ZW50SUQsXG5cdFNlbGVjdGVkVGl0bGUsXG59KSB7XG5cdGNvbnNvbGUubG9nKEV2ZW50SUQpO1xuXHRjb25zdCBbbmFtZSwgbmFtZUlucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHBsYWNlaG9sZGVyOiAnRW50ZXIgbmFtZScsXG5cdH0pO1xuXHRjb25zdCBbZGVzY3JpcHRpb24sIGRlc2NyaXB0aW9uSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcblx0XHRhczogJ3RleHRhcmVhJyxcblx0XHRwbGFjZWhvbGRlcjogJ0VudGVyIGRlc2NyaXB0aW9uJyxcblx0fSk7XG5cdGNvbnN0IFt1cmwsIHVybElucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHBsYWNlaG9sZGVyOiAnRW50ZXIgaW1hZ2UgdXJsJyxcblx0fSk7XG5cdGNvbnN0IFtwcmljZSwgcHJpY2VJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0VudGVyIFByaWNlJyxcblx0fSk7XG5cdGNvbnN0IFtORlRhZGRyZXNzLCBORlRhZGRyZXNzSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcblx0XHR0eXBlOiAndGV4dCcsXG5cdFx0cGxhY2Vob2xkZXI6ICdFbnRlciBORlQgYWRkcmVzcycsXG5cdH0pO1xuXHRjb25zdCBbQ3J5cHRvcHVua2FkZHJlc3MsIENyeXB0b3B1bmthZGRyZXNzSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcblx0XHR0eXBlOiAndGV4dCcsXG5cdFx0cGxhY2Vob2xkZXI6ICdFbnRlciBDcnlwdG9wdW5rIGFkZHJlc3MnLFxuXHR9KTtcblx0YXN5bmMgZnVuY3Rpb24gY3JlYXRlTkZUKCkge1xuXHRcdHZhciBNZXRpc3R5cGUgPSBcIk5GVFwiO1xuXHRcdHZhciB0b2tlbkFkZHJlc3MgPSBORlRhZGRyZXNzO1xuXHRcdGlmIChcIkNyeXB0b3B1bmtcIiA9PSB0eXBlKSB7XG5cdFx0XHRNZXRpc3R5cGUgPSBcIkNyeXB0b3B1bmtcIjtcblx0XHRcdHRva2VuQWRkcmVzcyA9IENyeXB0b3B1bmthZGRyZXNzO1xuXHRcdH1cblx0XHRjb25zdCBjcmVhdGVkT2JqZWN0ID0ge1xuXHRcdFx0dGl0bGU6ICdBc3NldCBNZXRhZGF0YScsXG5cdFx0XHR0eXBlOiAnb2JqZWN0Jyxcblx0XHRcdHByb3BlcnRpZXM6IHtcblx0XHRcdFx0bmFtZToge1xuXHRcdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBuYW1lLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcblx0XHRcdFx0fSxcblx0XHRcdFx0aW1hZ2U6IHtcblx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogdXJsLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRwcmljZToge1xuXHRcdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBwcmljZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR0eXBlaW1nOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IE1ldGlzdHlwZVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRuZnRhZGRyZXNzOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IHRva2VuQWRkcmVzc1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRoaWdoZXJiaWRhZGQ6IHtcblx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogXCJcIlxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0YmlkczogW11cblx0XHR9O1xuXG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QuY2xhaW1Ub2tlbihcblx0XHRcdHNlbmRlckFkZHJlc3MsXG5cdFx0XHRKU09OLnN0cmluZ2lmeShjcmVhdGVkT2JqZWN0KVxuXHRcdCk7XG5cblx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xuXHRcdHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnRuLWNsb3NlXCIpWzBdLmNsaWNrKCk7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxNb2RhbFxuXHRcdFx0c2hvdz17c2hvd31cblx0XHRcdG9uSGlkZT17b25IaWRlfVxuXHRcdFx0YXJpYS1sYWJlbGxlZGJ5PVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIlxuXHRcdFx0c2l6ZT1cImxnXCJcblx0XHRcdGNlbnRlcmVkXG5cdFx0PlxuXHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIj5cblx0XHRcdFx0XHREb25hdGUge3R5cGV9IC0ge1NlbGVjdGVkVGl0bGV9XG5cdFx0XHRcdDwvTW9kYWwuVGl0bGU+XG5cblx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXHRcdFx0PE1vZGFsLkJvZHkgY2xhc3NOYW1lPVwic2hvdy1ncmlkXCI+XG5cdFx0XHRcdDxGb3JtPlxuXHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBOYW1lXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5OYW1lPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0e25hbWVJbnB1dH1cblx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cE5hbWVcIj5cblx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPk9wZW5pbmcgcHJpY2UgaW4gRVRIPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0e3ByaWNlSW5wdXR9XG5cdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBEZXNjcmlwdGlvblwiPlxuXHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+RGVzY3JpcHRpb248L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHR7ZGVzY3JpcHRpb25JbnB1dH1cblx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cEltYWdlVXJsXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5JbWFnZSBVUkw8L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHR7dXJsSW5wdXR9XG5cdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdHsodHlwZSA9PSBcIkNyeXB0b3B1bmtcIikgPyAoXG5cdFx0XHRcdFx0XHQ8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwSW1hZ2VVcmxcIj5cblx0XHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+Q3J5cHRvcHVuayBhZGRyZXNzPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0XHR7Q3J5cHRvcHVua2FkZHJlc3NJbnB1dH1cblx0XHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cEltYWdlVXJsXCI+XG5cdFx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPk5GVCBhZGRyZXNzPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0XHR7TkZUYWRkcmVzc0lucHV0fVxuXHRcdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdClcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1ncmlkXCI+XG5cdFx0XHRcdFx0XHR7KHR5cGUgPT0gXCJDcnlwdG9wdW5rXCIpID8gKFxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17Y3JlYXRlTkZUfT5cblx0XHRcdFx0XHRcdFx0XHREb25hdGUgQ3J5cHRvcHVua1xuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj4pXG5cdFx0XHRcdFx0XHRcdDogKFxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtjcmVhdGVORlR9PlxuXHRcdFx0XHRcdFx0XHRcdFx0RG9uYXRlIE5GVFxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQpfVxuXG5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9Gb3JtPlxuXHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXHRcdDwvTW9kYWw+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9