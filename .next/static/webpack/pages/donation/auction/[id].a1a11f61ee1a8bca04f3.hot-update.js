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
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _UseFormInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UseFormInput */ "./components/UseFormInput.jsx");
/* harmony import */ var _WarningModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .//WarningModal */ "./components/modals/WarningModal.jsx");
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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      modalShow = _useState[0],
      setModalShow = _useState[1];

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
              if (Amount < Highestbid) {
                activateWarningModal();
              }

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

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__.default, {
    show: show,
    onHide: onHide,
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__.default.Header, {
      closeButton: true,
      children: type == "Cryptopunk" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__.default.Title, {
        id: "contained-modal-title-vcenter",
        children: "Bid Cryptopunk"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 6
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__.default.Title, {
        id: "contained-modal-title-vcenter",
        children: "Bid NFT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 6
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__.default.Body, {
      className: "show-grid",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Group, {
          className: "mb-3",
          controlId: "formGroupName",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_8__.default.Label, {
            children: "Bid Amount in ETH"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 7
          }, this), AmountInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "d-grid",
          children: type == "Cryptopunk" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__.default, {
            variant: "primary",
            onClick: bidNFT,
            children: "Bid Cryptopunk"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 8
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__.default, {
            variant: "primary",
            onClick: bidNFT,
            children: "Bid NFT"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 8
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_WarningModal__WEBPACK_IMPORTED_MODULE_6__.default, {
      show: modalShow,
      onHide: function onHide() {
        setModalShow(false);
      },
      message: "Bid cannot be placed under ".concat(Highestbid, " ETH")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbHMvQmlkTkZUTW9kYWwuanN4Il0sIm5hbWVzIjpbIkJpZE5GVE1vZGFsIiwic2hvdyIsIm9uSGlkZSIsImNvbnRyYWN0Iiwic2VuZGVyQWRkcmVzcyIsInRva2VuSWQiLCJldmVudElkIiwidHlwZSIsIkhpZ2hlc3RiaWQiLCJ1c2VTdGF0ZSIsIm1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsIlVzZUZvcm1JbnB1dCIsInBsYWNlaG9sZGVyIiwiQW1vdW50IiwiQW1vdW50SW5wdXQiLCJhY3RpdmF0ZVdhcm5pbmdNb2RhbCIsImJpZE5GVCIsInRva2VuVVJJIiwidG9rZW5VcmkiLCJKU09OIiwicGFyc2UiLCJwYXJzZWQiLCJOdW1iZXIiLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJjcmVhdGVkT2JqZWN0IiwidGl0bGUiLCJwcm9wZXJ0aWVzIiwidXNlcm5hbWUiLCJkZXNjcmlwdGlvbiIsImJpZCIsInRpbWUiLCJjcmVhdGVCaWQiLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRWUsU0FBU0EsV0FBVCxPQVVaO0FBQUE7O0FBQUEsTUFURkMsSUFTRSxRQVRGQSxJQVNFO0FBQUEsTUFSRkMsTUFRRSxRQVJGQSxNQVFFO0FBQUEsTUFQRkMsUUFPRSxRQVBGQSxRQU9FO0FBQUEsTUFORkMsYUFNRSxRQU5GQSxhQU1FO0FBQUEsTUFMRkMsT0FLRSxRQUxGQSxPQUtFO0FBQUEsTUFKRkMsT0FJRSxRQUpGQSxPQUlFO0FBQUEsTUFIRkMsSUFHRSxRQUhGQSxJQUdFO0FBQUEsTUFGRkMsVUFFRSxRQUZGQSxVQUVFOztBQUFBLGtCQUNnQ0MsK0NBQVEs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O0FBQUEsNkJBQ0MsOERBQUMseURBQUQ7QUFBQSxnQ0FFQyw4REFBQywrREFBRDtBQUFZLG1CQUFTLEVBQUMsTUFBdEI7QUFBNkIsbUJBQVMsRUFBQyxlQUF2QztBQUFBLGtDQUNDLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELEVBRUVRLFdBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZELGVBTUM7QUFBSyxtQkFBUyxFQUFDLFFBQWY7QUFBQSxvQkFFR1IsSUFBSSxJQUFJLFlBQVQsZ0JBQ0EsOERBQUMsMkRBQUQ7QUFBUSxtQkFBTyxFQUFDLFNBQWhCO0FBQTBCLG1CQUFPLEVBQUVVLE1BQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBLGdCQUlBLDhEQUFDLDJEQUFEO0FBQVEsbUJBQU8sRUFBQyxTQUFoQjtBQUEwQixtQkFBTyxFQUFFQSxNQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCRCxlQW9DQyw4REFBQyxrREFBRDtBQUNDLFVBQUksRUFBRVAsU0FEUDtBQUVDLFlBQU0sRUFBRSxrQkFBTTtBQUNiQyxvQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNBLE9BSkY7QUFLQyxhQUFPLHVDQUFnQ0gsVUFBaEM7QUFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcENEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBK0NBOztHQTFHdUJSLFc7O0tBQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9uYXRpb24vYXVjdGlvbi9baWRdLmExYTExZjYxZWUxYThiY2EwNGYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcblxuaW1wb3J0IFVzZUZvcm1JbnB1dCBmcm9tICcuLi9Vc2VGb3JtSW5wdXQnO1xuaW1wb3J0IFdhcm5pbmdNb2RhbCBmcm9tICcuLy9XYXJuaW5nTW9kYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCaWRORlRNb2RhbCh7XG5cdHNob3csXG5cdG9uSGlkZSxcblx0Y29udHJhY3QsXG5cdHNlbmRlckFkZHJlc3MsXG5cdHRva2VuSWQsXG5cdGV2ZW50SWQsXG5cdHR5cGUsXG5cdEhpZ2hlc3RiaWRcblxufSkge1xuXHRjb25zdCBbbW9kYWxTaG93LCBzZXRNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbQW1vdW50LCBBbW91bnRJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0Ftb3VudCcsXG5cdH0pO1xuXG5cblx0ZnVuY3Rpb24gYWN0aXZhdGVXYXJuaW5nTW9kYWwoKSB7XG5cblx0XHRzZXRNb2RhbFNob3codHJ1ZSk7XG5cdH1cblx0YXN5bmMgZnVuY3Rpb24gYmlkTkZUKCkge1xuXHRcdGlmIChBbW91bnQgPCBIaWdoZXN0YmlkKSB7XG5cdFx0XHRhY3RpdmF0ZVdhcm5pbmdNb2RhbCgpO1xuXHRcdH1cblx0XHRjb25zdCB0b2tlblVyaSA9IGF3YWl0IGNvbnRyYWN0LnRva2VuVVJJKHRva2VuSWQpO1xuXHRcdHZhciBwYXJzZWQgPSBhd2FpdCBKU09OLnBhcnNlKHRva2VuVXJpKTtcblx0XHRpZiAoTnVtYmVyKHBhcnNlZFsncHJvcGVydGllcyddWydwcmljZSddWydkZXNjcmlwdGlvbiddKSA8IE51bWJlcihBbW91bnQpKSB7XG5cdFx0XHRwYXJzZWRbJ3Byb3BlcnRpZXMnXVsncHJpY2UnXVsnZGVzY3JpcHRpb24nXSA9IEFtb3VudDtcblx0XHRcdHBhcnNlZFsncHJvcGVydGllcyddWydoaWdoZXJiaWRhZGQnXVsnZGVzY3JpcHRpb24nXSA9IHNlbmRlckFkZHJlc3M7XG5cblx0XHR9XG5cdFx0bGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblx0XHRjb25zdCBjcmVhdGVkT2JqZWN0ID0ge1xuXHRcdFx0dGl0bGU6ICdBc3NldCBNZXRhZGF0YSBCaWRzJyxcblx0XHRcdHR5cGU6ICdvYmplY3QnLFxuXHRcdFx0cHJvcGVydGllczoge1xuXHRcdFx0XHR1c2VybmFtZToge1xuXHRcdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBzZW5kZXJBZGRyZXNzXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGJpZDoge1xuXHRcdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBBbW91bnRcblx0XHRcdFx0fSxcblx0XHRcdFx0dGltZToge1xuXHRcdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBjdXJyZW50RGF0ZVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cmFjdC5jcmVhdGVCaWQodG9rZW5JZCwgSlNPTi5zdHJpbmdpZnkoY3JlYXRlZE9iamVjdCksIEpTT04uc3RyaW5naWZ5KHBhcnNlZCksIGV2ZW50SWQpO1xuXG5cblx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xuXHRcdHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnRuLWNsb3NlXCIpWzBdLmNsaWNrKCk7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxNb2RhbFxuXHRcdFx0c2hvdz17c2hvd31cblx0XHRcdG9uSGlkZT17b25IaWRlfVxuXHRcdFx0YXJpYS1sYWJlbGxlZGJ5PVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIlxuXHRcdFx0Y2VudGVyZWRcblx0XHQ+XG5cdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHR7KHR5cGUgPT0gXCJDcnlwdG9wdW5rXCIpID8gKFxuXHRcdFx0XHRcdDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCI+XG5cdFx0XHRcdFx0XHRCaWQgQ3J5cHRvcHVua1xuXHRcdFx0XHRcdDwvTW9kYWwuVGl0bGU+KSA6IChcblx0XHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiPlxuXHRcdFx0XHRcdFx0QmlkIE5GVFxuXHRcdFx0XHRcdDwvTW9kYWwuVGl0bGU+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT1cInNob3ctZ3JpZFwiPlxuXHRcdFx0XHQ8Rm9ybT5cblxuXHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBOYW1lXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5CaWQgQW1vdW50IGluIEVUSDwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdHtBbW91bnRJbnB1dH1cblx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWdyaWRcIj5cblxuXHRcdFx0XHRcdFx0eyh0eXBlID09IFwiQ3J5cHRvcHVua1wiKSA/IChcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2JpZE5GVH0+XG5cdFx0XHRcdFx0XHRcdFx0QmlkIENyeXB0b3B1bmtcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+KSA6IChcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2JpZE5GVH0+XG5cdFx0XHRcdFx0XHRcdFx0QmlkIE5GVFxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvRm9ybT5cblx0XHRcdDwvTW9kYWwuQm9keT5cblx0XHRcdDxXYXJuaW5nTW9kYWxcblx0XHRcdFx0c2hvdz17bW9kYWxTaG93fVxuXHRcdFx0XHRvbkhpZGU9eygpID0+IHtcblx0XHRcdFx0XHRzZXRNb2RhbFNob3coZmFsc2UpO1xuXHRcdFx0XHR9fVxuXHRcdFx0XHRtZXNzYWdlPXtgQmlkIGNhbm5vdCBiZSBwbGFjZWQgdW5kZXIgJHtIaWdoZXN0YmlkfSBFVEhgfVxuXHRcdFx0Lz5cblx0XHQ8L01vZGFsPlxuXG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9