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
      var alertELM, tokenUri, parsed, currentDate, createdObject, result;
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
              alertELM = document.getElementById("alert");
              alertELM.style = 'none';
              _context.next = 7;
              return contract.tokenURI(tokenId);

            case 7:
              tokenUri = _context.sent;
              _context.next = 10;
              return JSON.parse(tokenUri);

            case 10:
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
              _context.next = 16;
              return contract.createBid(tokenId, JSON.stringify(createdObject), JSON.stringify(parsed), eventId);

            case 16:
              result = _context.sent;
              console.log(result);
              window.document.getElementsByClassName("btn-close")[0].click();

            case 19:
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
        lineNumber: 80,
        columnNumber: 6
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_6__.default.Title, {
        id: "contained-modal-title-vcenter",
        children: "Bid NFT"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 6
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
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
          lineNumber: 90,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Group, {
          className: "mb-3",
          controlId: "formGroupName",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_7__.default.Label, {
            children: "Bid Amount in ETH"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 7
          }, this), AmountInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "d-grid",
          children: type == "Cryptopunk" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
            variant: "primary",
            onClick: bidNFT,
            children: "Bid Cryptopunk"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 8
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_8__.default, {
            variant: "primary",
            onClick: bidNFT,
            children: "Bid NFT"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 8
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 72,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbHMvQmlkTkZUTW9kYWwuanN4Il0sIm5hbWVzIjpbIkJpZE5GVE1vZGFsIiwic2hvdyIsIm9uSGlkZSIsImNvbnRyYWN0Iiwic2VuZGVyQWRkcmVzcyIsInRva2VuSWQiLCJldmVudElkIiwidHlwZSIsIkhpZ2hlc3RiaWQiLCJ1c2VTdGF0ZSIsIkFsZXJ0Iiwic2V0QWxlcnQiLCJVc2VGb3JtSW5wdXQiLCJwbGFjZWhvbGRlciIsIkFtb3VudCIsIkFtb3VudElucHV0IiwiYWN0aXZhdGVXYXJuaW5nTW9kYWwiLCJhbGVydEVMTSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImJpZE5GVCIsInRva2VuVVJJIiwidG9rZW5VcmkiLCJKU09OIiwicGFyc2UiLCJwYXJzZWQiLCJOdW1iZXIiLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJjcmVhdGVkT2JqZWN0IiwidGl0bGUiLCJwcm9wZXJ0aWVzIiwidXNlcm5hbWUiLCJkZXNjcmlwdGlvbiIsImJpZCIsInRpbWUiLCJjcmVhdGVCaWQiLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsaWNrIiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxXQUFULE9BVVo7QUFBQTs7QUFBQSxNQVRGQyxJQVNFLFFBVEZBLElBU0U7QUFBQSxNQVJGQyxNQVFFLFFBUkZBLE1BUUU7QUFBQSxNQVBGQyxRQU9FLFFBUEZBLFFBT0U7QUFBQSxNQU5GQyxhQU1FLFFBTkZBLGFBTUU7QUFBQSxNQUxGQyxPQUtFLFFBTEZBLE9BS0U7QUFBQSxNQUpGQyxPQUlFLFFBSkZBLE9BSUU7QUFBQSxNQUhGQyxJQUdFLFFBSEZBLElBR0U7QUFBQSxNQUZGQyxVQUVF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QTtBQUFBLFlBaEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBMkNBOztHQTFHdUJyQixXOztLQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvbmF0aW9uL2F1Y3Rpb24vW2lkXS45OTJjMWQ4OTk0ODIxYTFlNTc0NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJztcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5cbmltcG9ydCBVc2VGb3JtSW5wdXQgZnJvbSAnLi4vVXNlRm9ybUlucHV0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmlkTkZUTW9kYWwoe1xuXHRzaG93LFxuXHRvbkhpZGUsXG5cdGNvbnRyYWN0LFxuXHRzZW5kZXJBZGRyZXNzLFxuXHR0b2tlbklkLFxuXHRldmVudElkLFxuXHR0eXBlLFxuXHRIaWdoZXN0YmlkXG5cbn0pIHtcblx0Y29uc3QgW0FsZXJ0LCBzZXRBbGVydF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFtBbW91bnQsIEFtb3VudElucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHBsYWNlaG9sZGVyOiAnQW1vdW50Jyxcblx0fSk7XG5cblxuXHRmdW5jdGlvbiBhY3RpdmF0ZVdhcm5pbmdNb2RhbCgpIHtcblx0XHR2YXIgYWxlcnRFTE0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsZXJ0XCIpO1xuXHRcdGFsZXJ0RUxNLnN0eWxlID0gJ2NvbnRlbnRzJztcblx0XHRzZXRBbGVydChgQW1vdW50IGNhbm5vdCBiZSB1bmRlciAke0hpZ2hlc3RiaWR9YClcblx0fVxuXHRhc3luYyBmdW5jdGlvbiBiaWRORlQoKSB7XG5cdFx0aWYgKEFtb3VudCA8IEhpZ2hlc3RiaWQpIHtcblx0XHRcdGFjdGl2YXRlV2FybmluZ01vZGFsKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHZhciBhbGVydEVMTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxlcnRcIik7XG5cdFx0YWxlcnRFTE0uc3R5bGUgPSAnbm9uZSc7XG5cdFx0Y29uc3QgdG9rZW5VcmkgPSBhd2FpdCBjb250cmFjdC50b2tlblVSSSh0b2tlbklkKTtcblx0XHR2YXIgcGFyc2VkID0gYXdhaXQgSlNPTi5wYXJzZSh0b2tlblVyaSk7XG5cdFx0aWYgKE51bWJlcihwYXJzZWRbJ3Byb3BlcnRpZXMnXVsncHJpY2UnXVsnZGVzY3JpcHRpb24nXSkgPCBOdW1iZXIoQW1vdW50KSkge1xuXHRcdFx0cGFyc2VkWydwcm9wZXJ0aWVzJ11bJ3ByaWNlJ11bJ2Rlc2NyaXB0aW9uJ10gPSBBbW91bnQ7XG5cdFx0XHRwYXJzZWRbJ3Byb3BlcnRpZXMnXVsnaGlnaGVyYmlkYWRkJ11bJ2Rlc2NyaXB0aW9uJ10gPSBzZW5kZXJBZGRyZXNzO1xuXG5cdFx0fVxuXHRcdGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG5cdFx0Y29uc3QgY3JlYXRlZE9iamVjdCA9IHtcblx0XHRcdHRpdGxlOiAnQXNzZXQgTWV0YWRhdGEgQmlkcycsXG5cdFx0XHR0eXBlOiAnb2JqZWN0Jyxcblx0XHRcdHByb3BlcnRpZXM6IHtcblx0XHRcdFx0dXNlcm5hbWU6IHtcblx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogc2VuZGVyQWRkcmVzc1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRiaWQ6IHtcblx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogQW1vdW50XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRpbWU6IHtcblx0XHRcdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogY3VycmVudERhdGVcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QuY3JlYXRlQmlkKHRva2VuSWQsIEpTT04uc3RyaW5naWZ5KGNyZWF0ZWRPYmplY3QpLCBKU09OLnN0cmluZ2lmeShwYXJzZWQpLCBldmVudElkKTtcblxuXG5cdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcblx0XHR3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJ0bi1jbG9zZVwiKVswXS5jbGljaygpO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8TW9kYWxcblx0XHRcdHNob3c9e3Nob3d9XG5cdFx0XHRvbkhpZGU9e29uSGlkZX1cblx0XHRcdGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCJcblx0XHRcdGNlbnRlcmVkXG5cdFx0PlxuXHRcdFx0PE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cblx0XHRcdFx0eyh0eXBlID09IFwiQ3J5cHRvcHVua1wiKSA/IChcblx0XHRcdFx0XHQ8TW9kYWwuVGl0bGUgaWQ9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiPlxuXHRcdFx0XHRcdFx0QmlkIENyeXB0b3B1bmtcblx0XHRcdFx0XHQ8L01vZGFsLlRpdGxlPikgOiAoXG5cdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIj5cblx0XHRcdFx0XHRcdEJpZCBORlRcblx0XHRcdFx0XHQ8L01vZGFsLlRpdGxlPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9Nb2RhbC5IZWFkZXI+XG5cdFx0XHQ8TW9kYWwuQm9keSBjbGFzc05hbWU9XCJzaG93LWdyaWRcIj5cblx0XHRcdFx0PEZvcm0+XG5cdFx0XHRcdFx0PGRpdiBpZD0nYWxlcnQnIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fSBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiPlxuXHRcdFx0XHRcdFx0e0FsZXJ0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtR3JvdXBOYW1lXCI+XG5cdFx0XHRcdFx0XHQ8Rm9ybS5MYWJlbD5CaWQgQW1vdW50IGluIEVUSDwvRm9ybS5MYWJlbD5cblx0XHRcdFx0XHRcdHtBbW91bnRJbnB1dH1cblx0XHRcdFx0XHQ8L0Zvcm0uR3JvdXA+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWdyaWRcIj5cblxuXHRcdFx0XHRcdFx0eyh0eXBlID09IFwiQ3J5cHRvcHVua1wiKSA/IChcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2JpZE5GVH0+XG5cdFx0XHRcdFx0XHRcdFx0QmlkIENyeXB0b3B1bmtcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+KSA6IChcblx0XHRcdFx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIG9uQ2xpY2s9e2JpZE5GVH0+XG5cdFx0XHRcdFx0XHRcdFx0QmlkIE5GVFxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvRm9ybT5cblx0XHRcdDwvTW9kYWwuQm9keT5cblxuXHRcdDwvTW9kYWw+XG5cblx0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=