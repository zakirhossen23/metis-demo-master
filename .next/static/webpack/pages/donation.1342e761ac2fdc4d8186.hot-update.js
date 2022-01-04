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
    placeholder: 'Choose image or Enter url'
  }),
      _UseFormInput6 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput5, 2),
      url = _UseFormInput6[0],
      urlInput = _UseFormInput6[1];

  var _UseFormInput7 = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__.default)({
    defaultValue: "",
    type: 'file',
    placeholder: 'NFT Logo',
    id: 'logo'
  }),
      _UseFormInput8 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput7, 2),
      NFTLogo = _UseFormInput8[0],
      NFTLogoInput = _UseFormInput8[1];

  var _UseFormInput9 = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__.default)({
    type: 'text',
    placeholder: 'Enter Price'
  }),
      _UseFormInput10 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput9, 2),
      price = _UseFormInput10[0],
      priceInput = _UseFormInput10[1];

  var _UseFormInput11 = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__.default)({
    type: 'text',
    placeholder: 'Enter NFT address'
  }),
      _UseFormInput12 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput11, 2),
      NFTaddress = _UseFormInput12[0],
      NFTaddressInput = _UseFormInput12[1];

  var _UseFormInput13 = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__.default)({
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
      var Logourl, base64, tokenAddress;
      return C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              Logourl = NFTLogo;

              if (!(NFTLogo == "")) {
                _context2.next = 6;
                break;
              }

              _context2.next = 4;
              return getBase64();

            case 4:
              base64 = _context2.sent;
              Logourl = base64;

            case 6:
              tokenAddress = NFTaddress;

              if ("Cryptopunk" == type) {
                Metistype = "Cryptopunk";
                tokenAddress = Cryptopunkaddress;
              }

              console.log(Logourl); // const createdObject = {
              // 	title: 'Asset Metadata',
              // 	type: 'object',
              // 	properties: {
              // 		name: {
              // 			type: 'string',
              // 			description: name,
              // 		},
              // 		description: {
              // 			type: 'string',
              // 			description: description,
              // 		},
              // 		image: {
              // 			type: 'string',
              // 			description: Logourl,
              // 		},
              // 		price: {
              // 			type: 'string',
              // 			description: price
              // 		},
              // 		typeimg: {
              // 			type: 'string',
              // 			description: Metistype
              // 		},
              // 		nftaddress: {
              // 			type: 'string',
              // 			description: tokenAddress
              // 		},
              // 		higherbidadd: {
              // 			type: 'string',
              // 			description: ""
              // 		}
              // 	},
              // 	bids: []
              // };
              // const result = await contract.claimToken(
              // 	senderAddress,
              // 	JSON.stringify(createdObject),
              // 	EventID
              // );
              // console.log(result);
              // window.document.getElementsByClassName("btn-close")[0].click();

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
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
        lineNumber: 129,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
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
            lineNumber: 137,
            columnNumber: 7
          }, this), nameInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Group, {
          className: "mb-3",
          controlId: "formGroupName",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Label, {
            children: "Opening price in ETH"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 7
          }, this), priceInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Group, {
          className: "mb-3",
          controlId: "formGroupDescription",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Label, {
            children: "Description"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 145,
            columnNumber: 7
          }, this), descriptionInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Group, {
          className: "mb-3",
          controlId: "formGroupImageUrl",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Label, {
            children: "Choose Image or Enter URL"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 7
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            style: {
              display: "flex",
              gap: "20px"
            },
            children: [urlInput, NFTLogoInput]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 6
        }, this), type == "Cryptopunk" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Group, {
          className: "mb-3",
          controlId: "formGroupImageUrl",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Label, {
            children: "Cryptopunk address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 8
          }, this), CryptopunkaddressInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 7
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Group, {
          className: "mb-3",
          controlId: "formGroupImageUrl",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Label, {
            children: "NFT address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 8
          }, this), NFTaddressInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 7
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "d-grid",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
            variant: "primary",
            onClick: createNFT,
            children: ["Donate ", type]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 121,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbHMvRG9uYXRlTkZUTW9kYWwuanN4Il0sIm5hbWVzIjpbIkRvbmF0ZU5GVE1vZGFsIiwic2hvdyIsIm9uSGlkZSIsImNvbnRyYWN0Iiwic2VuZGVyQWRkcmVzcyIsInR5cGUiLCJFdmVudElEIiwiU2VsZWN0ZWRUaXRsZSIsImNvbnNvbGUiLCJsb2ciLCJVc2VGb3JtSW5wdXQiLCJwbGFjZWhvbGRlciIsIm5hbWUiLCJuYW1lSW5wdXQiLCJhcyIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25JbnB1dCIsInVybCIsInVybElucHV0IiwiZGVmYXVsdFZhbHVlIiwiaWQiLCJORlRMb2dvIiwiTkZUTG9nb0lucHV0IiwicHJpY2UiLCJwcmljZUlucHV0IiwiTkZUYWRkcmVzcyIsIk5GVGFkZHJlc3NJbnB1dCIsIkNyeXB0b3B1bmthZGRyZXNzIiwiQ3J5cHRvcHVua2FkZHJlc3NJbnB1dCIsImdldEJhc2U2NCIsImZpbGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZmlsZXMiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsInJlc3BvbnNlIiwiUHJvbWlzZSIsInIiLCJzZXRUaW1lb3V0IiwicmVzdWx0IiwiY3JlYXRlTkZUIiwiTG9nb3VybCIsImJhc2U2NCIsInRva2VuQWRkcmVzcyIsIk1ldGlzdHlwZSIsImRpc3BsYXkiLCJnYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0EsY0FBVCxPQVFaO0FBQUEsTUFQRkMsSUFPRSxRQVBGQSxJQU9FO0FBQUEsTUFORkMsTUFNRSxRQU5GQSxNQU1FO0FBQUEsTUFMRkMsUUFLRSxRQUxGQSxRQUtFO0FBQUEsTUFKRkMsYUFJRSxRQUpGQSxhQUlFO0FBQUEsTUFIRkMsSUFHRSxRQUhGQSxJQUdFO0FBQUEsTUFGRkMsT0FFRSxR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QTFCRixlQWtDQztBQUFLLG1CQUFTLEVBQUMsUUFBZjtBQUFBLGlDQUNDLDhEQUFDLDJEQUFEO0FBQVEsbUJBQU8sRUFBQyxTQUFoQjtBQUEwQixtQkFBTyxFQUFFZ0IsU0FBbkM7QUFBQSxrQ0FDU3JDLElBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBMERBO0tBMUt1QkwsYyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb25hdGlvbi4xMzQyZTc2MWFjMmZkYzRkODE4Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJztcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5cbmltcG9ydCBVc2VGb3JtSW5wdXQgZnJvbSAnLi4vVXNlRm9ybUlucHV0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9uYXRlTkZUTW9kYWwoe1xuXHRzaG93LFxuXHRvbkhpZGUsXG5cdGNvbnRyYWN0LFxuXHRzZW5kZXJBZGRyZXNzLFxuXHR0eXBlLFxuXHRFdmVudElELFxuXHRTZWxlY3RlZFRpdGxlLFxufSkge1xuXHRjb25zb2xlLmxvZyhFdmVudElEKTtcblx0Y29uc3QgW25hbWUsIG5hbWVJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0VudGVyIG5hbWUnLFxuXHR9KTtcblx0Y29uc3QgW2Rlc2NyaXB0aW9uLCBkZXNjcmlwdGlvbklucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0YXM6ICd0ZXh0YXJlYScsXG5cdFx0cGxhY2Vob2xkZXI6ICdFbnRlciBkZXNjcmlwdGlvbicsXG5cdH0pO1xuXHRjb25zdCBbdXJsLCB1cmxJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0Nob29zZSBpbWFnZSBvciBFbnRlciB1cmwnLFxuXHR9KTtcblx0Y29uc3QgW05GVExvZ28sIE5GVExvZ29JbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdGRlZmF1bHRWYWx1ZTogXCJcIixcblx0XHR0eXBlOiAnZmlsZScsXG5cdFx0cGxhY2Vob2xkZXI6ICdORlQgTG9nbycsXG5cdFx0aWQ6ICdsb2dvJyxcblx0fSk7XG5cdGNvbnN0IFtwcmljZSwgcHJpY2VJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0VudGVyIFByaWNlJyxcblx0fSk7XG5cdGNvbnN0IFtORlRhZGRyZXNzLCBORlRhZGRyZXNzSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcblx0XHR0eXBlOiAndGV4dCcsXG5cdFx0cGxhY2Vob2xkZXI6ICdFbnRlciBORlQgYWRkcmVzcycsXG5cdH0pO1xuXHRjb25zdCBbQ3J5cHRvcHVua2FkZHJlc3MsIENyeXB0b3B1bmthZGRyZXNzSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcblx0XHR0eXBlOiAndGV4dCcsXG5cdFx0cGxhY2Vob2xkZXI6ICdFbnRlciBDcnlwdG9wdW5rIGFkZHJlc3MnLFxuXHR9KTtcblxuXHRhc3luYyBmdW5jdGlvbiBnZXRCYXNlNjQoKSB7XG5cdFx0bGV0IGZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ29cIikuZmlsZXNbMF07XG5cblx0XHQvLyBNYWtlIG5ldyBGaWxlUmVhZGVyXG5cdFx0bGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cdFx0Ly8gQ29udmVydCB0aGUgZmlsZSB0byBiYXNlNjQgdGV4dFxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG5cdFx0YXdhaXQgbmV3IFByb21pc2UociA9PiBzZXRUaW1lb3V0KHIsIDIwMCkpO1xuXHRcdGNvbnNvbGUubG9nKHJlYWRlci5yZXN1bHQpO1xuXHRcdHJldHVybiByZWFkZXIucmVzdWx0O1xuXHR9XG5cblx0YXN5bmMgZnVuY3Rpb24gY3JlYXRlTkZUKCkge1xuXHRcdGxldCBMb2dvdXJsID0gTkZUTG9nbztcblx0XHRpZiAoTkZUTG9nbyA9PSBcIlwiKSB7XG5cdFx0XHR2YXIgYmFzZTY0ID0gYXdhaXQgZ2V0QmFzZTY0KCk7XG5cdFx0XHRMb2dvdXJsID0gYmFzZTY0O1xuXHRcdH1cblxuXHRcdHZhciB0b2tlbkFkZHJlc3MgPSBORlRhZGRyZXNzO1xuXHRcdGlmIChcIkNyeXB0b3B1bmtcIiA9PSB0eXBlKSB7XG5cdFx0XHRNZXRpc3R5cGUgPSBcIkNyeXB0b3B1bmtcIjtcblx0XHRcdHRva2VuQWRkcmVzcyA9IENyeXB0b3B1bmthZGRyZXNzO1xuXHRcdH1cblx0XHRjb25zb2xlLmxvZyhMb2dvdXJsKTtcblx0XHQvLyBjb25zdCBjcmVhdGVkT2JqZWN0ID0ge1xuXHRcdC8vIFx0dGl0bGU6ICdBc3NldCBNZXRhZGF0YScsXG5cdFx0Ly8gXHR0eXBlOiAnb2JqZWN0Jyxcblx0XHQvLyBcdHByb3BlcnRpZXM6IHtcblx0XHQvLyBcdFx0bmFtZToge1xuXHRcdC8vIFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdC8vIFx0XHRcdGRlc2NyaXB0aW9uOiBuYW1lLFxuXHRcdC8vIFx0XHR9LFxuXHRcdC8vIFx0XHRkZXNjcmlwdGlvbjoge1xuXHRcdC8vIFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdC8vIFx0XHRcdGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcblx0XHQvLyBcdFx0fSxcblx0XHQvLyBcdFx0aW1hZ2U6IHtcblx0XHQvLyBcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHQvLyBcdFx0XHRkZXNjcmlwdGlvbjogTG9nb3VybCxcblx0XHQvLyBcdFx0fSxcblx0XHQvLyBcdFx0cHJpY2U6IHtcblx0XHQvLyBcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHQvLyBcdFx0XHRkZXNjcmlwdGlvbjogcHJpY2Vcblx0XHQvLyBcdFx0fSxcblx0XHQvLyBcdFx0dHlwZWltZzoge1xuXHRcdC8vIFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdC8vIFx0XHRcdGRlc2NyaXB0aW9uOiBNZXRpc3R5cGVcblx0XHQvLyBcdFx0fSxcblx0XHQvLyBcdFx0bmZ0YWRkcmVzczoge1xuXHRcdC8vIFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdC8vIFx0XHRcdGRlc2NyaXB0aW9uOiB0b2tlbkFkZHJlc3Ncblx0XHQvLyBcdFx0fSxcblx0XHQvLyBcdFx0aGlnaGVyYmlkYWRkOiB7XG5cdFx0Ly8gXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0Ly8gXHRcdFx0ZGVzY3JpcHRpb246IFwiXCJcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0fSxcblx0XHQvLyBcdGJpZHM6IFtdXG5cdFx0Ly8gfTtcblxuXHRcdC8vIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0LmNsYWltVG9rZW4oXG5cdFx0Ly8gXHRzZW5kZXJBZGRyZXNzLFxuXHRcdC8vIFx0SlNPTi5zdHJpbmdpZnkoY3JlYXRlZE9iamVjdCksXG5cdFx0Ly8gXHRFdmVudElEXG5cdFx0Ly8gKTtcblxuXHRcdC8vIGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cdFx0Ly8gd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4tY2xvc2VcIilbMF0uY2xpY2soKTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PE1vZGFsXG5cdFx0XHRzaG93PXtzaG93fVxuXHRcdFx0b25IaWRlPXtvbkhpZGV9XG5cdFx0XHRhcmlhLWxhYmVsbGVkYnk9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiXG5cdFx0XHRzaXplPVwibGdcIlxuXHRcdFx0Y2VudGVyZWRcblx0XHQ+XG5cdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiPlxuXHRcdFx0XHRcdERvbmF0ZSB7dHlwZX0gLSB7U2VsZWN0ZWRUaXRsZX1cblx0XHRcdFx0PC9Nb2RhbC5UaXRsZT5cblxuXHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHQ8TW9kYWwuQm9keSBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cblx0XHRcdFx0PEZvcm0+XG5cdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cE5hbWVcIj5cblx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPk5hbWU8L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHR7bmFtZUlucHV0fVxuXHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHQ8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwTmFtZVwiPlxuXHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+T3BlbmluZyBwcmljZSBpbiBFVEg8L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHR7cHJpY2VJbnB1dH1cblx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cERlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5EZXNjcmlwdGlvbjwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdHtkZXNjcmlwdGlvbklucHV0fVxuXHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHQ8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwSW1hZ2VVcmxcIj5cblx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkNob29zZSBJbWFnZSBvciBFbnRlciBVUkw8L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBnYXA6IFwiMjBweFwiIH19PlxuXHRcdFx0XHRcdFx0XHR7dXJsSW5wdXR9XG5cdFx0XHRcdFx0XHRcdHtORlRMb2dvSW5wdXR9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdFx0eyh0eXBlID09IFwiQ3J5cHRvcHVua1wiKSA/IChcblx0XHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBJbWFnZVVybFwiPlxuXHRcdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5DcnlwdG9wdW5rIGFkZHJlc3M8L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHRcdHtDcnlwdG9wdW5rYWRkcmVzc0lucHV0fVxuXHRcdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHQ8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwSW1hZ2VVcmxcIj5cblx0XHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+TkZUIGFkZHJlc3M8L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHRcdHtORlRhZGRyZXNzSW5wdXR9XG5cdFx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdFx0KVxuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWdyaWRcIj5cblx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtjcmVhdGVORlR9PlxuXHRcdFx0XHRcdFx0XHREb25hdGUge3R5cGV9XG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9Gb3JtPlxuXHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXHRcdDwvTW9kYWw+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9