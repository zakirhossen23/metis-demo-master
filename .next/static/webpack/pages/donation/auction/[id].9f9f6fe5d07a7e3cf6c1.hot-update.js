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

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''),
      Alert = _useState[0],
      setAlert = _useState[1];

  var _UseFormInput = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__.default)({
    type: 'text',
    placeholder: 'Amount'
  }),
      _UseFormInput2 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput, 2),
      Amount = _UseFormInput2[0],
      AmountInput = _UseFormInput2[1];

  function activateWarningModal() {
    var alertELM = document.getElementById("alert");
    alertELM.style = 'contents';
    setAlert("Amount cannot be under ".concat(Highestbid));
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
              if (!(Amount < Highestbid)) {
                _context.next = 3;
                break;
              }

              activateWarningModal();
              return _context.abrupt("return");

            case 3:
              _context.next = 5;
              return contract.tokenURI(tokenId);

            case 5:
              tokenUri = _context.sent;
              _context.next = 8;
              return JSON.parse(tokenUri);

            case 8:
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
              _context.next = 14;
              return contract.createBid(tokenId, JSON.stringify(createdObject), JSON.stringify(parsed), eventId);

            case 14:
              result = _context.sent;
              console.log(result);
              window.document.getElementsByClassName("btn-close")[0].click();

            case 17:
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
        lineNumber: 78,
        columnNumber: 6
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__.default.Title, {
        id: "contained-modal-title-vcenter",
        children: "Bid NFT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 6
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__.default.Body, {
      className: "show-grid",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          id: "alert",
          style: {
            display: 'none'
          },
          "class": "alert alert-danger",
          role: "alert",
          children: Alert
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Group, {
          className: "mb-3",
          controlId: "formGroupName",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Label, {
            children: "Bid Amount in ETH"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 7
          }, this), AmountInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "d-grid",
          children: type == "Cryptopunk" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
            variant: "primary",
            onClick: bidNFT,
            children: "Bid Cryptopunk"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 8
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
            variant: "primary",
            onClick: bidNFT,
            children: "Bid NFT"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 8
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 3
  }, this);
}

_s(BidNFTModal, "s9f30GwH3mbZ2iVoua5kwbjhVis=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbHMvQmlkTkZUTW9kYWwuanN4Il0sIm5hbWVzIjpbIkJpZE5GVE1vZGFsIiwic2hvdyIsIm9uSGlkZSIsImNvbnRyYWN0Iiwic2VuZGVyQWRkcmVzcyIsInRva2VuSWQiLCJldmVudElkIiwidHlwZSIsIkhpZ2hlc3RiaWQiLCJ1c2VTdGF0ZSIsIkFsZXJ0Iiwic2V0QWxlcnQiLCJVc2VGb3JtSW5wdXQiLCJwbGFjZWhvbGRlciIsIkFtb3VudCIsIkFtb3VudElucHV0IiwiYWN0aXZhdGVXYXJuaW5nTW9kYWwiLCJhbGVydEVMTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImJpZE5GVCIsInRva2VuVVJJIiwidG9rZW5VcmkiLCJKU09OIiwicGFyc2UiLCJwYXJzZWQiLCJOdW1iZXIiLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJjcmVhdGVkT2JqZWN0IiwidGl0bGUiLCJwcm9wZXJ0aWVzIiwidXNlcm5hbWUiLCJkZXNjcmlwdGlvbiIsImJpZCIsInRpbWUiLCJjcmVhdGVCaWQiLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsaWNrIiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxXQUFULE9BVVo7QUFBQTs7QUFBQSxNQVRGQyxJQVNFLFFBVEZBLElBU0U7QUFBQSxNQVJGQyxNQVFFLFFBUkZBLE1BUUU7QUFBQSxNQVBGQyxRQU9FLFFBUEZBLFFBT0U7QUFBQSxNQU5GQyxhQU1FLFFBTkZBLGFBTUU7QUFBQSxNQUxGQyxPQUtFLFFBTEZBLE9BS0U7QUFBQSxNQUpGQyxPQUlFLFFBSkZBLE9BSUU7QUFBQSxNQUhGQyxJQUdFLFFBSEZBLElBR0U7QUFBQSxNQUZGQyxVQUVF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cGFjay9wYWdlcy9kb25hdGlvbi9hdWN0aW9uL1tpZF0uOWY5ZjZmZTVkMDdhN2UzY2Y2YzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuXG5pbXBvcnQgVXNlRm9ybUlucHV0IGZyb20gJy4uL1VzZUZvcm1JbnB1dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJpZE5GVE1vZGFsKHtcblx0c2hvdyxcblx0b25IaWRlLFxuXHRjb250cmFjdCxcblx0c2VuZGVyQWRkcmVzcyxcblx0dG9rZW5JZCxcblx0ZXZlbnRJZCxcblx0dHlwZSxcblx0SGlnaGVzdGJpZFxuXG59KSB7XG5cdGNvbnN0IFtBbGVydCwgc2V0QWxlcnRdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbQW1vdW50LCBBbW91bnRJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xuXHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRwbGFjZWhvbGRlcjogJ0Ftb3VudCcsXG5cdH0pO1xuXG5cblx0ZnVuY3Rpb24gYWN0aXZhdGVXYXJuaW5nTW9kYWwoKSB7XG5cdFx0dmFyIGFsZXJ0RUxNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGVydFwiKTtcblx0XHRhbGVydEVMTS5zdHlsZSA9ICdjb250ZW50cyc7XG5cdFx0c2V0QWxlcnQoYEFtb3VudCBjYW5ub3QgYmUgdW5kZXIgJHtIaWdoZXN0YmlkfWApXG5cdH1cblx0YXN5bmMgZnVuY3Rpb24gYmlkTkZUKCkge1xuXHRcdGlmIChBbW91bnQgPCBIaWdoZXN0YmlkKSB7XG5cdFx0XHRhY3RpdmF0ZVdhcm5pbmdNb2RhbCgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCB0b2tlblVyaSA9IGF3YWl0IGNvbnRyYWN0LnRva2VuVVJJKHRva2VuSWQpO1xuXHRcdHZhciBwYXJzZWQgPSBhd2FpdCBKU09OLnBhcnNlKHRva2VuVXJpKTtcblx0XHRpZiAoTnVtYmVyKHBhcnNlZFsncHJvcGVydGllcyddWydwcmljZSddWydkZXNjcmlwdGlvbiddKSA8IE51bWJlcihBbW91bnQpKSB7XG5cdFx0XHRwYXJzZWRbJ3Byb3BlcnRpZXMnXVsncHJpY2UnXVsnZGVzY3JpcHRpb24nXSA9IEFtb3VudDtcblx0XHRcdHBhcnNlZFsncHJvcGVydGllcyddWydoaWdoZXJiaWRhZGQnXVsnZGVzY3JpcHRpb24nXSA9IHNlbmRlckFkZHJlc3M7XG5cblx0XHR9XG5cdFx0bGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcblx0XHRjb25zdCBjcmVhdGVkT2JqZWN0ID0ge1xuXHRcdFx0dGl0bGU6ICdBc3NldCBNZXRhZGF0YSBCaWRzJyxcblx0XHRcdHR5cGU6ICdvYmplY3QnLFxuXHRcdFx0cHJvcGVydGllczoge1xuXHRcdFx0XHR1c2VybmFtZToge1xuXHRcdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBzZW5kZXJBZGRyZXNzXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGJpZDoge1xuXHRcdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBBbW91bnRcblx0XHRcdFx0fSxcblx0XHRcdFx0dGltZToge1xuXHRcdFx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBjdXJyZW50RGF0ZVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBjb250cmFjdC5jcmVhdGVCaWQodG9rZW5JZCwgSlNPTi5zdHJpbmdpZnkoY3JlYXRlZE9iamVjdCksIEpTT04uc3RyaW5naWZ5KHBhcnNlZCksIGV2ZW50SWQpO1xuXG5cblx0XHRjb25zb2xlLmxvZyhyZXN1bHQpO1xuXHRcdHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYnRuLWNsb3NlXCIpWzBdLmNsaWNrKCk7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxNb2RhbFxuXHRcdFx0c2hvdz17c2hvd31cblx0XHRcdG9uSGlkZT17b25IaWRlfVxuXHRcdFx0YXJpYS1sYWJlbGxlZGJ5PVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIlxuXHRcdFx0Y2VudGVyZWRcblx0XHQ+XG5cdFx0XHQ8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuXHRcdFx0XHR7KHR5cGUgPT0gXCJDcnlwdG9wdW5rXCIpID8gKFxuXHRcdFx0XHRcdDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCI+XG5cdFx0XHRcdFx0XHRCaWQgQ3J5cHRvcHVua1xuXHRcdFx0XHRcdDwvTW9kYWwuVGl0bGU+KSA6IChcblx0XHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiPlxuXHRcdFx0XHRcdFx0QmlkIE5GVFxuXHRcdFx0XHRcdDwvTW9kYWwuVGl0bGU+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L01vZGFsLkhlYWRlcj5cblx0XHRcdDxNb2RhbC5Cb2R5IGNsYXNzTmFtZT1cInNob3ctZ3JpZFwiPlxuXHRcdFx0XHQ8Rm9ybT5cblx0XHRcdFx0XHQ8ZGl2IGlkPSdhbGVydCcgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XG5cdFx0XHRcdFx0XHR7QWxlcnR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cE5hbWVcIj5cblx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkJpZCBBbW91bnQgaW4gRVRIPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0e0Ftb3VudElucHV0fVxuXHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZFwiPlxuXG5cdFx0XHRcdFx0XHR7KHR5cGUgPT0gXCJDcnlwdG9wdW5rXCIpID8gKFxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17YmlkTkZUfT5cblx0XHRcdFx0XHRcdFx0XHRCaWQgQ3J5cHRvcHVua1xuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj4pIDogKFxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17YmlkTkZUfT5cblx0XHRcdFx0XHRcdFx0XHRCaWQgTkZUXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9Gb3JtPlxuXHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXG5cdFx0PC9Nb2RhbD5cblxuXHQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==