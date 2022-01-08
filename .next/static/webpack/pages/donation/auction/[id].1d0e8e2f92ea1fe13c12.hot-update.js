self["webpackHotUpdate_N_E"]("pages/donation/auction/[id]",{

/***/ "./components/modals/BidNFTModal.jsx":
/*!*******************************************!*\
  !*** ./components/modals/BidNFTModal.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BidNFTModal; }
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





var _jsxFileName = "C:\\Users\\zakir\\Documents\\test\\metis-demo-master\\components\\modals\\BidNFTModal.jsx",
    _s = $RefreshSig$();






function BidNFTModal(_ref) {
  _s();

  var show = _ref.show,
      onHide = _ref.onHide,
      contract = _ref.contract,
      senderAddress = _ref.senderAddress,
      tokenId = _ref.tokenId,
      eventId = _ref.eventId,
      type = _ref.type,
      Highestbid = _ref.Highestbid;

  var _useState = useState(false),
      _useState2 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useState, 2),
      modalShow = _useState2[0],
      setModalShow = _useState2[1];

  var _UseFormInput = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__.default)({
    type: 'text',
    placeholder: 'Amount'
  }),
      _UseFormInput2 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput, 2),
      Amount = _UseFormInput2[0],
      AmountInput = _UseFormInput2[1];

  function activateWarningModal() {
    setModalShow(true);
  }

  function bidNFT() {
    return _bidNFT.apply(this, arguments);
  }

  function _bidNFT() {
    _bidNFT = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var tokenUri, parsed, currentDate, createdObject, result;
      return C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (Amount < Highestbid) {}

              _context.next = 3;
              return contract.tokenURI(tokenId);

            case 3:
              tokenUri = _context.sent;
              _context.next = 6;
              return JSON.parse(tokenUri);

            case 6:
              parsed = _context.sent;

              if (Number(parsed['properties']['price']['description']) < Number(Amount)) {
                parsed['properties']['price']['description'] = Amount;
                parsed['properties']['higherbidadd']['description'] = senderAddress;
              }

              currentDate = new Date();
              createdObject = {
                title: 'Asset Metadata Bids',
                type: 'object',
                properties: {
                  username: {
                    type: 'string',
                    description: senderAddress
                  },
                  bid: {
                    type: 'string',
                    description: Amount
                  },
                  time: {
                    type: 'string',
                    description: currentDate
                  }
                }
              };
              _context.next = 12;
              return contract.createBid(tokenId, JSON.stringify(createdObject), JSON.stringify(parsed), eventId);

            case 12:
              result = _context.sent;
              console.log(result);
              window.document.getElementsByClassName("btn-close")[0].click();

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _bidNFT.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__.default, {
    show: show,
    onHide: onHide,
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__.default.Header, {
      closeButton: true,
      children: type == "Cryptopunk" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__.default.Title, {
        id: "contained-modal-title-vcenter",
        children: "Bid Cryptopunk"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 6
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__.default.Title, {
        id: "contained-modal-title-vcenter",
        children: "Bid NFT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 6
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__.default.Body, {
      className: "show-grid",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Group, {
          className: "mb-3",
          controlId: "formGroupName",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Label, {
            children: "Bid Amount in ETH"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 7
          }, this), AmountInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "d-grid",
          children: type == "Cryptopunk" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
            variant: "primary",
            onClick: bidNFT,
            children: "Bid Cryptopunk"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 8
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
            variant: "primary",
            onClick: bidNFT,
            children: "Bid NFT"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 8
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(WarningModal, {
      show: modalShow,
      onHide: function onHide() {
        setModalShow(false);
      },
      message: "Bid cannot be placed under ".concat(Highestbid, " ETH")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 3
  }, this);
}

_s(BidNFTModal, "xuPPltV/3J92+XaNotdpXxySp+I=");

_c = BidNFTModal;

var _c;

$RefreshReg$(_c, "BidNFTModal");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbHMvQmlkTkZUTW9kYWwuanN4Il0sIm5hbWVzIjpbIkJpZE5GVE1vZGFsIiwic2hvdyIsIm9uSGlkZSIsImNvbnRyYWN0Iiwic2VuZGVyQWRkcmVzcyIsInRva2VuSWQiLCJldmVudElkIiwidHlwZSIsIkhpZ2hlc3RiaWQiLCJ1c2VTdGF0ZSIsIm1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsIlVzZUZvcm1JbnB1dCIsInBsYWNlaG9sZGVyIiwiQW1vdW50IiwiQW1vdW50SW5wdXQiLCJhY3RpdmF0ZVdhcm5pbmdNb2RhbCIsImJpZE5GVCIsInRva2VuVVJJIiwidG9rZW5VcmkiLCJKU09OIiwicGFyc2UiLCJwYXJzZWQiLCJOdW1iZXIiLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJjcmVhdGVkT2JqZWN0IiwidGl0bGUiLCJwcm9wZXJ0aWVzIiwidXNlcm5hbWUiLCJkZXNjcmlwdGlvbiIsImJpZCIsInRpbWUiLCJjcmVhdGVCaWQiLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0EsV0FBVCxPQVVaO0FBQUE7O0FBQUEsTUFURkMsSUFTRSxRQVRGQSxJQVNFO0FBQUEsTUFSRkMsTUFRRSxRQVJGQSxNQVFFO0FBQUEsTUFQRkMsUUFPRSxRQVBGQSxRQU9FO0FBQUEsTUFORkMsYUFNRSxRQU5GQSxhQU1FO0FBQUEsTUFMRkMsT0FLRSxRQUxGQSxPQUtFO0FBQUEsTUFKRkMsT0FJRSxRQUpGQSxPQUlFO0FBQUEsTUFIRkMsSUFHRSxRQUhGQSxJQUdFO0FBQUEsTUFGRkMsVUFFRSxRQUZGQSxVQUVFOztBQUFBLGtCQUNnQ0MsUUFBUSxDQUFDLEtB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Qyx5REFBRDtBQUFBLGdDQUVDLDhEQUFDLCtEQUFEO0FBQVksbUJBQVMsRUFBQyxNQUF0QjtBQUE2QixtQkFBUyxFQUFDLGVBQXZDO0FBQUEsa0NBQ0MsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsRUFFRVEsV0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkQsZUFNQztBQUFLLG1CQUFTLEVBQUMsUUFBZjtBQUFBLG9CQUVHUixJQUFJLElBQUksWUFBVCxnQkFDQSw4REFBQywyREFBRDtBQUFRLG1CQUFPLEVBQUMsU0FBaEI7QUFBMEIsbUJBQU8sRUFBRVUsTUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREEsZ0JBSUEsOERBQUMsMkRBQUQ7QUFBUSxtQkFBTyxFQUFDLFNBQWhCO0FBQTBCLG1CQUFPLEVBQUVBLE1BQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJELGVBb0NDLDhEQUFDLFlBQUQ7QUFDQyxVQUFJLEVBQUVQLFNBRFA7QUFFQyxZQUFNLEVBQUUsa0JBQU07QUFDYkMsb0JBQVksQ0FBQyxLQUFELENBQVo7QUFDQSxPQUpGO0FBS0MsYUFBTyx1Q0FBZ0NILFVBQWhDO0FBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQStDQTs7R0ExR3VCUixXOztLQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvbmF0aW9uL2F1Y3Rpb24vW2lkXS4xZDBlOGUyZjkyZWExZmUxM2MxMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcblxuaW1wb3J0IFVzZUZvcm1JbnB1dCBmcm9tICcuLi9Vc2VGb3JtSW5wdXQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCaWRORlRNb2RhbCh7XG5cdHNob3csXG5cdG9uSGlkZSxcblx0Y29udHJhY3QsXG5cdHNlbmRlckFkZHJlc3MsXG5cdHRva2VuSWQsXG5cdGV2ZW50SWQsXG5cdHR5cGUsXG5cdEhpZ2hlc3RiaWRcblxufSkge1xuXHRjb25zdCBbbW9kYWxTaG93LCBzZXRNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbQW1vdW50LCBBbW91bnRJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0Ftb3VudCcsXG5cdH0pO1xuXG5cblx0ZnVuY3Rpb24gYWN0aXZhdGVXYXJuaW5nTW9kYWwoKSB7XG5cblx0XHRzZXRNb2RhbFNob3codHJ1ZSk7XG5cdH1cblx0YXN5bmMgZnVuY3Rpb24gYmlkTkZUKCkge1xuXHRcdGlmIChBbW91bnQgPCBIaWdoZXN0YmlkKSB7XG5cblx0XHR9XG5cdFx0Y29uc3QgdG9rZW5VcmkgPSBhd2FpdCBjb250cmFjdC50b2tlblVSSSh0b2tlbklkKTtcblx0XHR2YXIgcGFyc2VkID0gYXdhaXQgSlNPTi5wYXJzZSh0b2tlblVyaSk7XG5cdFx0aWYgKE51bWJlcihwYXJzZWRbJ3Byb3BlcnRpZXMnXVsncHJpY2UnXVsnZGVzY3JpcHRpb24nXSkgPCBOdW1iZXIoQW1vdW50KSkge1xuXHRcdFx0cGFyc2VkWydwcm9wZXJ0aWVzJ11bJ3ByaWNlJ11bJ2Rlc2NyaXB0aW9uJ10gPSBBbW91bnQ7XG5cdFx0XHRwYXJzZWRbJ3Byb3BlcnRpZXMnXVsnaGlnaGVyYmlkYWRkJ11bJ2Rlc2NyaXB0aW9uJ10gPSBzZW5kZXJBZGRyZXNzO1xuXG5cdFx0fVxuXHRcdGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0Y29uc3QgY3JlYXRlZE9iamVjdCA9IHtcblx0XHRcdHRpdGxlOiAnQXNzZXQgTWV0YWRhdGEgQmlkcycsXG5cdFx0XHR0eXBlOiAnb2JqZWN0Jyxcblx0XHRcdHByb3BlcnRpZXM6IHtcblx0XHRcdFx0dXNlcm5hbWU6IHtcblx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogc2VuZGVyQWRkcmVzc1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRiaWQ6IHtcblx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogQW1vdW50XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRpbWU6IHtcblx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogY3VycmVudERhdGVcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QuY3JlYXRlQmlkKHRva2VuSWQsIEpTT04uc3RyaW5naWZ5KGNyZWF0ZWRPYmplY3QpLCBKU09OLnN0cmluZ2lmeShwYXJzZWQpLCBldmVudElkKTtcblxuXG5cdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcblx0XHR3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJ0bi1jbG9zZVwiKVswXS5jbGljaygpO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8TW9kYWxcblx0XHRcdHNob3c9e3Nob3d9XG5cdFx0XHRvbkhpZGU9e29uSGlkZX1cblx0XHRcdGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCJcblx0XHRcdGNlbnRlcmVkXG5cdFx0PlxuXHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0eyh0eXBlID09IFwiQ3J5cHRvcHVua1wiKSA/IChcblx0XHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiPlxuXHRcdFx0XHRcdFx0QmlkIENyeXB0b3B1bmtcblx0XHRcdFx0XHQ8L01vZGFsLlRpdGxlPikgOiAoXG5cdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIj5cblx0XHRcdFx0XHRcdEJpZCBORlRcblx0XHRcdFx0XHQ8L01vZGFsLlRpdGxlPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHQ8TW9kYWwuQm9keSBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cblx0XHRcdFx0PEZvcm0+XG5cblx0XHRcdFx0XHQ8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZm9ybUdyb3VwTmFtZVwiPlxuXHRcdFx0XHRcdFx0PEZvcm0uTGFiZWw+QmlkIEFtb3VudCBpbiBFVEg8L0Zvcm0uTGFiZWw+XG5cdFx0XHRcdFx0XHR7QW1vdW50SW5wdXR9XG5cdFx0XHRcdFx0PC9Gb3JtLkdyb3VwPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1ncmlkXCI+XG5cblx0XHRcdFx0XHRcdHsodHlwZSA9PSBcIkNyeXB0b3B1bmtcIikgPyAoXG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtiaWRORlR9PlxuXHRcdFx0XHRcdFx0XHRcdEJpZCBDcnlwdG9wdW5rXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPikgOiAoXG5cdFx0XHRcdFx0XHRcdDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXtiaWRORlR9PlxuXHRcdFx0XHRcdFx0XHRcdEJpZCBORlRcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L0Zvcm0+XG5cdFx0XHQ8L01vZGFsLkJvZHk+XG5cdFx0XHQ8V2FybmluZ01vZGFsXG5cdFx0XHRcdHNob3c9e21vZGFsU2hvd31cblx0XHRcdFx0b25IaWRlPXsoKSA9PiB7XG5cdFx0XHRcdFx0c2V0TW9kYWxTaG93KGZhbHNlKTtcblx0XHRcdFx0fX1cblx0XHRcdFx0bWVzc2FnZT17YEJpZCBjYW5ub3QgYmUgcGxhY2VkIHVuZGVyICR7SGlnaGVzdGJpZH0gRVRIYH1cblx0XHRcdC8+XG5cdFx0PC9Nb2RhbD5cblxuXHQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==