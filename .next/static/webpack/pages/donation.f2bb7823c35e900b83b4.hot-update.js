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
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/readOnlyError */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _UseFormInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UseFormInput */ "./components/UseFormInput.jsx");
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

  var _UseFormInput = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_6__.default)({
    type: 'text',
    placeholder: 'Enter name'
  }),
      _UseFormInput2 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput, 2),
      name = _UseFormInput2[0],
      nameInput = _UseFormInput2[1];

  var _UseFormInput3 = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_6__.default)({
    as: 'textarea',
    placeholder: 'Enter description'
  }),
      _UseFormInput4 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput3, 2),
      description = _UseFormInput4[0],
      descriptionInput = _UseFormInput4[1];

  var _UseFormInput5 = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_6__.default)({
    type: 'text',
    placeholder: 'Choose image or Enter url'
  }),
      _UseFormInput6 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput5, 2),
      url = _UseFormInput6[0],
      urlInput = _UseFormInput6[1];

  var _UseFormInput7 = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_6__.default)({
    defaultValue: "",
    type: 'file',
    placeholder: 'NFT Logo',
    id: 'logo'
  }),
      _UseFormInput8 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput7, 2),
      NFTLogo = _UseFormInput8[0],
      NFTLogoInput = _UseFormInput8[1];

  var _UseFormInput9 = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_6__.default)({
    type: 'text',
    placeholder: 'Enter Price'
  }),
      _UseFormInput10 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput9, 2),
      price = _UseFormInput10[0],
      priceInput = _UseFormInput10[1];

  var _UseFormInput11 = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_6__.default)({
    type: 'text',
    placeholder: 'Enter NFT address'
  }),
      _UseFormInput12 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput11, 2),
      NFTaddress = _UseFormInput12[0],
      NFTaddressInput = _UseFormInput12[1];

  var _UseFormInput13 = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_6__.default)({
    type: 'text',
    placeholder: 'Enter Cryptopunk address'
  }),
      _UseFormInput14 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput13, 2),
      Cryptopunkaddress = _UseFormInput14[0],
      CryptopunkaddressInput = _UseFormInput14[1];

  function getBase64() {
    return _getBase.apply(this, arguments);
  }

  function _getBase() {
    _getBase = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var file, reader, response;
      return C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              file = document.getElementById("logo").files[0]; // Make new FileReader

              reader = new FileReader(); // Convert the file to base64 text

              _context.next = 4;
              return reader.readAsDataURL(file);

            case 4:
              response = _context.sent;
              _context.next = 7;
              return new Promise(function (r) {
                return setTimeout(r, 200);
              });

            case 7:
              console.log(reader.result);
              return _context.abrupt("return", reader.result);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getBase.apply(this, arguments);
  }

  function createNFT() {
    return _createNFT.apply(this, arguments);
  }

  function _createNFT() {
    _createNFT = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      var Metistype, Logourl, base64, tokenAddress, createdObject, result;
      return C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              Metistype = "NFT";
              Logourl = NFTaddress;

              if (!(NFTaddress = ((0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_4__.default)("NFTaddress"), ""))) {
                _context2.next = 7;
                break;
              }

              _context2.next = 5;
              return getBase64();

            case 5:
              base64 = _context2.sent;
              Logourl = base64;

            case 7:
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
              _context2.next = 12;
              return contract.claimToken(senderAddress, JSON.stringify(createdObject));

            case 12:
              result = _context2.sent;
              console.log(result);
              window.document.getElementsByClassName("btn-close")[0].click();

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _createNFT.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__.default, {
    show: show,
    onHide: onHide,
    "aria-labelledby": "contained-modal-title-vcenter",
    size: "lg",
    centered: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__.default.Header, {
      closeButton: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__.default.Title, {
        id: "contained-modal-title-vcenter",
        children: ["Donate ", type, " - ", SelectedTitle]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__.default.Body, {
      className: "show-grid",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
          className: "mb-3",
          controlId: "formGroupName",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Label, {
            children: "Name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 7
          }, this), nameInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
          className: "mb-3",
          controlId: "formGroupName",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Label, {
            children: "Opening price in ETH"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 7
          }, this), priceInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
          className: "mb-3",
          controlId: "formGroupDescription",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Label, {
            children: "Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 7
          }, this), descriptionInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
          className: "mb-3",
          controlId: "formGroupImageUrl",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Label, {
            children: "Choose Image or Enter URL"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            style: {
              display: "flex",
              gap: "20px"
            },
            children: [urlInput, NFTLogoInput]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 6
        }, this), type == "Cryptopunk" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
          className: "mb-3",
          controlId: "formGroupImageUrl",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Label, {
            children: "Cryptopunk address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 8
          }, this), CryptopunkaddressInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 7
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
          className: "mb-3",
          controlId: "formGroupImageUrl",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Label, {
            children: "NFT address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 8
          }, this), NFTaddressInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "d-grid",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__.default, {
            variant: "primary",
            onClick: createNFT,
            children: ["Donate ", type]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 120,
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


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _readOnlyError; }
/* harmony export */ });
function _readOnlyError(name) {
  throw new TypeError("\"" + name + "\" is read-only");
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbHMvRG9uYXRlTkZUTW9kYWwuanN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vcmVhZE9ubHlFcnJvci5qcyJdLCJuYW1lcyI6WyJEb25hdGVORlRNb2RhbCIsInNob3ciLCJvbkhpZGUiLCJjb250cmFjdCIsInNlbmRlckFkZHJlc3MiLCJ0eXBlIiwiRXZlbnRJRCIsIlNlbGVjdGVkVGl0bGUiLCJjb25zb2xlIiwibG9nIiwiVXNlRm9ybUlucHV0IiwicGxhY2Vob2xkZXIiLCJuYW1lIiwibmFtZUlucHV0IiwiYXMiLCJkZXNjcmlwdGlvbiIsImRlc2NyaXB0aW9uSW5wdXQiLCJ1cmwiLCJ1cmxJbnB1dCIsImRlZmF1bHRWYWx1ZSIsImlkIiwiTkZUTG9nbyIsIk5GVExvZ29JbnB1dCIsInByaWNlIiwicHJpY2VJbnB1dCIsIk5GVGFkZHJlc3MiLCJORlRhZGRyZXNzSW5wdXQiLCJDcnlwdG9wdW5rYWRkcmVzcyIsIkNyeXB0b3B1bmthZGRyZXNzSW5wdXQiLCJnZXRCYXNlNjQiLCJmaWxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJyZXNwb25zZSIsIlByb21pc2UiLCJyIiwic2V0VGltZW91dCIsInJlc3VsdCIsImNyZWF0ZU5GVCIsIk1ldGlzdHlwZSIsIkxvZ291cmwiLCJiYXNlNjQiLCJ0b2tlbkFkZHJlc3MiLCJjcmVhdGVkT2JqZWN0IiwidGl0bGUiLCJwcm9wZXJ0aWVzIiwiaW1hZ2UiLCJ0eXBlaW1nIiwibmZ0YWRkcmVzcyIsImhpZ2hlcmJpZGFkZCIsImJpZHMiLCJjbGFpbVRva2VuIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpbmRvdyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjbGljayIs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SyxtQkFBUyxFQUFDLFFBQWY7QUFBQSxpQ0FDQyw4REFBQywyREFBRDtBQUFRLG1CQUFPLEVBQUMsU0FBaEI7QUFBMEIsbUJBQU8sRUFBRWdCLFNBQW5DO0FBQUEsa0NBQ1NyQyxJQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbENEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQTBEQTtLQXpLdUJMLGM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BUO0FBQ2Y7QUFDQSxDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvbmF0aW9uLmYyYmI3ODIzYzM1ZTkwMGI4M2I0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcblxuaW1wb3J0IFVzZUZvcm1JbnB1dCBmcm9tICcuLi9Vc2VGb3JtSW5wdXQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb25hdGVORlRNb2RhbCh7XG5cdHNob3csXG5cdG9uSGlkZSxcblx0Y29udHJhY3QsXG5cdHNlbmRlckFkZHJlc3MsXG5cdHR5cGUsXG5cdEV2ZW50SUQsXG5cdFNlbGVjdGVkVGl0bGUsXG59KSB7XG5cdGNvbnNvbGUubG9nKEV2ZW50SUQpO1xuXHRjb25zdCBbbmFtZSwgbmFtZUlucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHBsYWNlaG9sZGVyOiAnRW50ZXIgbmFtZScsXG5cdH0pO1xuXHRjb25zdCBbZGVzY3JpcHRpb24sIGRlc2NyaXB0aW9uSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcblx0XHRhczogJ3RleHRhcmVhJyxcblx0XHRwbGFjZWhvbGRlcjogJ0VudGVyIGRlc2NyaXB0aW9uJyxcblx0fSk7XG5cdGNvbnN0IFt1cmwsIHVybElucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHBsYWNlaG9sZGVyOiAnQ2hvb3NlIGltYWdlIG9yIEVudGVyIHVybCcsXG5cdH0pO1xuXHRjb25zdCBbTkZUTG9nbywgTkZUTG9nb0lucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0ZGVmYXVsdFZhbHVlOiBcIlwiLFxuXHRcdHR5cGU6ICdmaWxlJyxcblx0XHRwbGFjZWhvbGRlcjogJ05GVCBMb2dvJyxcblx0XHRpZDogJ2xvZ28nLFxuXHR9KTtcblx0Y29uc3QgW3ByaWNlLCBwcmljZUlucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHBsYWNlaG9sZGVyOiAnRW50ZXIgUHJpY2UnLFxuXHR9KTtcblx0Y29uc3QgW05GVGFkZHJlc3MsIE5GVGFkZHJlc3NJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0VudGVyIE5GVCBhZGRyZXNzJyxcblx0fSk7XG5cdGNvbnN0IFtDcnlwdG9wdW5rYWRkcmVzcywgQ3J5cHRvcHVua2FkZHJlc3NJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0VudGVyIENyeXB0b3B1bmsgYWRkcmVzcycsXG5cdH0pO1xuXG5cdGFzeW5jIGZ1bmN0aW9uIGdldEJhc2U2NCgpIHtcblx0XHRsZXQgZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9nb1wiKS5maWxlc1swXTtcblxuXHRcdC8vIE1ha2UgbmV3IEZpbGVSZWFkZXJcblx0XHRsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblx0XHQvLyBDb252ZXJ0IHRoZSBmaWxlIHRvIGJhc2U2NCB0ZXh0XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcblx0XHRhd2FpdCBuZXcgUHJvbWlzZShyID0+IHNldFRpbWVvdXQociwgMjAwKSk7XG5cdFx0Y29uc29sZS5sb2cocmVhZGVyLnJlc3VsdCk7XG5cdFx0cmV0dXJuIHJlYWRlci5yZXN1bHQ7XG5cdH1cblxuXHRhc3luYyBmdW5jdGlvbiBjcmVhdGVORlQoKSB7XG5cdFx0dmFyIE1ldGlzdHlwZSA9IFwiTkZUXCI7XG5cdFx0bGV0IExvZ291cmwgPSBORlRhZGRyZXNzO1xuXHRcdGlmIChORlRhZGRyZXNzID0gXCJcIikge1xuXHRcdFx0dmFyIGJhc2U2NCA9IGF3YWl0IGdldEJhc2U2NCgpO1xuXHRcdFx0TG9nb3VybCA9IGJhc2U2NDtcblx0XHR9XG5cblx0XHR2YXIgdG9rZW5BZGRyZXNzID0gTkZUYWRkcmVzcztcblx0XHRpZiAoXCJDcnlwdG9wdW5rXCIgPT0gdHlwZSkge1xuXHRcdFx0TWV0aXN0eXBlID0gXCJDcnlwdG9wdW5rXCI7XG5cdFx0XHR0b2tlbkFkZHJlc3MgPSBDcnlwdG9wdW5rYWRkcmVzcztcblx0XHR9XG5cdFx0Y29uc3QgY3JlYXRlZE9iamVjdCA9IHtcblx0XHRcdHRpdGxlOiAnQXNzZXQgTWV0YWRhdGEnLFxuXHRcdFx0dHlwZTogJ29iamVjdCcsXG5cdFx0XHRwcm9wZXJ0aWVzOiB7XG5cdFx0XHRcdG5hbWU6IHtcblx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogbmFtZSxcblx0XHRcdFx0fSxcblx0XHRcdFx0ZGVzY3JpcHRpb246IHtcblx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGltYWdlOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IHVybCxcblx0XHRcdFx0fSxcblx0XHRcdFx0cHJpY2U6IHtcblx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogcHJpY2Vcblx0XHRcdFx0fSxcblx0XHRcdFx0dHlwZWltZzoge1xuXHRcdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBNZXRpc3R5cGVcblx0XHRcdFx0fSxcblx0XHRcdFx0bmZ0YWRkcmVzczoge1xuXHRcdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiB0b2tlbkFkZHJlc3Ncblx0XHRcdFx0fSxcblx0XHRcdFx0aGlnaGVyYmlkYWRkOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IFwiXCJcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGJpZHM6IFtdXG5cdFx0fTtcblxuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0LmNsYWltVG9rZW4oXG5cdFx0XHRzZW5kZXJBZGRyZXNzLFxuXHRcdFx0SlNPTi5zdHJpbmdpZnkoY3JlYXRlZE9iamVjdClcblx0XHQpO1xuXG5cdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcblx0XHR3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJ0bi1jbG9zZVwiKVswXS5jbGljaygpO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8TW9kYWxcblx0XHRcdHNob3c9e3Nob3d9XG5cdFx0XHRvbkhpZGU9e29uSGlkZX1cblx0XHRcdGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCJcblx0XHRcdHNpemU9XCJsZ1wiXG5cdFx0XHRjZW50ZXJlZFxuXHRcdD5cblx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCI+XG5cdFx0XHRcdFx0RG9uYXRlIHt0eXBlfSAtIHtTZWxlY3RlZFRpdGxlfVxuXHRcdFx0XHQ8L01vZGFsLlRpdGxlPlxuXG5cdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT1cInNob3ctZ3JpZFwiPlxuXHRcdFx0XHQ8Rm9ybT5cblx0XHRcdFx0XHQ8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwTmFtZVwiPlxuXHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+TmFtZTwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdHtuYW1lSW5wdXR9XG5cdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBOYW1lXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5PcGVuaW5nIHByaWNlIGluIEVUSDwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdHtwcmljZUlucHV0fVxuXHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHQ8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwRGVzY3JpcHRpb25cIj5cblx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkRlc2NyaXB0aW9uPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0e2Rlc2NyaXB0aW9uSW5wdXR9XG5cdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBJbWFnZVVybFwiPlxuXHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+Q2hvb3NlIEltYWdlIG9yIEVudGVyIFVSTDwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGdhcDogXCIyMHB4XCIgfX0+XG5cdFx0XHRcdFx0XHRcdHt1cmxJbnB1dH1cblx0XHRcdFx0XHRcdFx0e05GVExvZ29JbnB1dH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHR7KHR5cGUgPT0gXCJDcnlwdG9wdW5rXCIpID8gKFxuXHRcdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cEltYWdlVXJsXCI+XG5cdFx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkNyeXB0b3B1bmsgYWRkcmVzczwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdFx0e0NyeXB0b3B1bmthZGRyZXNzSW5wdXR9XG5cdFx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBJbWFnZVVybFwiPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5ORlQgYWRkcmVzczwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdFx0e05GVGFkZHJlc3NJbnB1dH1cblx0XHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHQpXG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZFwiPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2NyZWF0ZU5GVH0+XG5cdFx0XHRcdFx0XHRcdERvbmF0ZSB7dHlwZX1cblx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L0Zvcm0+XG5cdFx0XHQ8L01vZGFsLkJvZHk+XG5cdFx0PC9Nb2RhbD5cblx0KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9yZWFkT25seUVycm9yKG5hbWUpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlxcXCJcIiArIG5hbWUgKyBcIlxcXCIgaXMgcmVhZC1vbmx5XCIpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=