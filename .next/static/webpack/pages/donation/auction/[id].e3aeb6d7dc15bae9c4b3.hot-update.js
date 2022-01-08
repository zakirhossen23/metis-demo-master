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
        lineNumber: 78,
        columnNumber: 6
      }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_7__.default.Title, {
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
            lineNumber: 90,
            columnNumber: 7
          }, this), AmountInput]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 6
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "d-grid",
          children: type == "Cryptopunk" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__.default, {
            variant: "primary",
            onClick: bidNFT,
            children: "Bid Cryptopunk"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 8
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__.default, {
            variant: "primary",
            onClick: bidNFT,
            children: "Bid NFT"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 8
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
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
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_WarningModal__WEBPACK_IMPORTED_MODULE_6__.default, {
      show: modalShow,
      onHide: function onHide() {
        setModalShow(false);
      },
      message: "Bid cannot be placed under ".concat(Highestbid, " ETH")
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbHMvQmlkTkZUTW9kYWwuanN4Il0sIm5hbWVzIjpbIkJpZE5GVE1vZGFsIiwic2hvdyIsIm9uSGlkZSIsImNvbnRyYWN0Iiwic2VuZGVyQWRkcmVzcyIsInRva2VuSWQiLCJldmVudElkIiwidHlwZSIsIkhpZ2hlc3RiaWQiLCJ1c2VTdGF0ZSIsIm1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsIlVzZUZvcm1JbnB1dCIsInBsYWNlaG9sZGVyIiwiQW1vdW50IiwiQW1vdW50SW5wdXQiLCJhY3RpdmF0ZVdhcm5pbmdNb2RhbCIsImJpZE5GVCIsInRva2VuVVJJIiwidG9rZW5VcmkiLCJKU09OIiwicGFyc2UiLCJwYXJzZWQiLCJOdW1iZXIiLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJjcmVhdGVkT2JqZWN0IiwidGl0bGUiLCJwcm9wZXJ0aWVzIiwidXNlcm5hbWUiLCJkZXNjcmlwdGlvbiIsImJpZCIsInRpbWUiLCJjcmVhdGVCaWQiLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiY2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRWUsU0FBU0EsV0FBVCxPQVVaO0FBQUE7O0FBQUEsTUFURkMsSUFTRSxRQVRGQSxJQVNFO0FBQUEsTUFSRkMsTUFRRSxRQVJGQSxNQVFFO0FBQUEsTUFQRkMsUUFPRSxRQVBGQSxRQU9FO0FBQUEsTUFORkMsYUFNRSxRQU5GQSxhQU1FO0FBQUEsTUFMRkMsT0FLRSxRQUxGQSxPQUtFO0FBQUEsTUFKRkMsT0FJRSxRQUpGQSxPQUlFO0FBQUEsTUFIRkMsSUFHRSxRQUhGQSxJQUdFO0FBQUEsTUFGRkMsVUFFRSxRQUZGQSxVQUVFOztBQUFBLGtCQUNnQ0MsK0NBQVEsQ0FBQyxLQUFELENBRHhDO0FBQUEsTUFDS0MsU0FETDtBQUFBLE1BQ2dCQyxZQURoQjs7QUFBQSxzQkFFNEJDLHNEQUFZLENBQUM7QUFDMUNMLFFBQUksRUFBRSxNQURvQztBQUUxQ00sZUFBVyxFQUFFO0FBRjZCLEdBQUQsQ0FGeEM7QUFBQTtBQUFBLE1BRUtDLE1BRkw7QUFBQSxNQUVhQyxXQUZiOztBQVFGLFdBQVNDLG9CQUFULEdBQWdDO0FBRS9CTCxnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBOztBQVhDLFdBWWFNLE1BWmI7QUFBQTtBQUFBOztBQUFBO0FBQUEsa1ZBWUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQ0tILE1BQU0sR0FBR04sVUFEZDtBQUFBO0FBQUE7QUFBQTs7QUFFRVEsa0NBQW9CO0FBRnRCOztBQUFBO0FBQUE7QUFBQSxxQkFLd0JiLFFBQVEsQ0FBQ2UsUUFBVCxDQUFrQmIsT0FBbEIsQ0FMeEI7O0FBQUE7QUFLT2Msc0JBTFA7QUFBQTtBQUFBLHFCQU1vQkMsSUFBSSxDQUFDQyxLQUFMLENBQVdGLFFBQVgsQ0FOcEI7O0FBQUE7QUFNS0csb0JBTkw7O0FBT0Msa0JBQUlDLE1BQU0sQ0FBQ0QsTUFBTSxDQUFDLFlBQUQsQ0FBTixDQUFxQixPQUFyQixFQUE4QixhQUE5QixDQUFELENBQU4sR0FBdURDLE1BQU0sQ0FBQ1QsTUFBRCxDQUFqRSxFQUEyRTtBQUMxRVEsc0JBQU0sQ0FBQyxZQUFELENBQU4sQ0FBcUIsT0FBckIsRUFBOEIsYUFBOUIsSUFBK0NSLE1BQS9DO0FBQ0FRLHNCQUFNLENBQUMsWUFBRCxDQUFOLENBQXFCLGNBQXJCLEVBQXFDLGFBQXJDLElBQXNEbEIsYUFBdEQ7QUFFQTs7QUFDR29CLHlCQVpMLEdBWW1CLElBQUlDLElBQUosRUFabkI7QUFhT0MsMkJBYlAsR0FhdUI7QUFDckJDLHFCQUFLLEVBQUUscUJBRGM7QUFFckJwQixvQkFBSSxFQUFFLFFBRmU7QUFHckJxQiwwQkFBVSxFQUFFO0FBQ1hDLDBCQUFRLEVBQUU7QUFDVHRCLHdCQUFJLEVBQUUsUUFERztBQUVUdUIsK0JBQVcsRUFBRTFCO0FBRkosbUJBREM7QUFLWDJCLHFCQUFHLEVBQUU7QUFDSnhCLHdCQUFJLEVBQUUsUUFERjtBQUVKdUIsK0JBQVcsRUFBRWhCO0FBRlQsbUJBTE07QUFTWGtCLHNCQUFJLEVBQUU7QUFDTHpCLHdCQUFJLEVBQUUsUUFERDtBQUVMdUIsK0JBQVcsRUFBRU47QUFGUjtBQVRLO0FBSFMsZUFidkI7QUFBQTtBQUFBLHFCQStCc0JyQixRQUFRLENBQUM4QixTQUFULENBQW1CNUIsT0FBbkIsRUFBNEJlLElBQUksQ0FBQ2MsU0FBTCxDQUFlUixhQUFmLENBQTVCLEVBQTJETixJQUFJLENBQUNjLFNBQUwsQ0FBZVosTUFBZixDQUEzRCxFQUFtRmhCLE9BQW5GLENBL0J0Qjs7QUFBQTtBQStCTzZCLG9CQS9CUDtBQWtDQ0MscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBQ0FHLG9CQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLHNCQUFoQixDQUF1QyxXQUF2QyxFQUFvRCxDQUFwRCxFQUF1REMsS0FBdkQ7O0FBbkNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBWkU7QUFBQTtBQUFBOztBQWtERixzQkFDQyw4REFBQywwREFBRDtBQUNDLFFBQUksRUFBRXhDLElBRFA7QUFFQyxVQUFNLEVBQUVDLE1BRlQ7QUFHQyx1QkFBZ0IsK0JBSGpCO0FBSUMsWUFBUSxNQUpUO0FBQUEsNEJBTUMsOERBQUMsaUVBQUQ7QUFBYyxpQkFBVyxNQUF6QjtBQUFBLGdCQUNHSyxJQUFJLElBQUksWUFBVCxnQkFDQSw4REFBQyxnRUFBRDtBQUFhLFVBQUUsRUFBQywrQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxnQkFJQSw4REFBQyxnRUFBRDtBQUFhLFVBQUUsRUFBQywrQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkQsZUFnQkMsOERBQUMsK0RBQUQ7QUFBWSxlQUFTLEVBQUMsV0FBdEI7QUFBQSw2QkFDQyw4REFBQyx5REFBRDtBQUFBLGdDQUVDLDhEQUFDLCtEQUFEO0FBQVksbUJBQVMsRUFBQyxNQUF0QjtBQUE2QixtQkFBUyxFQUFDLGVBQXZDO0FBQUEsa0NBQ0MsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsRUFFRVEsV0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkQsZUFNQztBQUFLLG1CQUFTLEVBQUMsUUFBZjtBQUFBLG9CQUVHUixJQUFJLElBQUksWUFBVCxnQkFDQSw4REFBQywyREFBRDtBQUFRLG1CQUFPLEVBQUMsU0FBaEI7QUFBMEIsbUJBQU8sRUFBRVUsTUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREEsZ0JBSUEsOERBQUMsMkRBQUQ7QUFBUSxtQkFBTyxFQUFDLFNBQWhCO0FBQTBCLG1CQUFPLEVBQUVBLE1BQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEJELGVBb0NDLDhEQUFDLGtEQUFEO0FBQ0MsVUFBSSxFQUFFUCxTQURQO0FBRUMsWUFBTSxFQUFFLGtCQUFNO0FBQ2JDLG9CQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0EsT0FKRjtBQUtDLGFBQU8sdUNBQWdDSCxVQUFoQztBQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUErQ0E7O0dBM0d1QlIsVzs7S0FBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb25hdGlvbi9hdWN0aW9uL1tpZF0uZTNhZWI2ZDdkYzE1YmFlOWM0YjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Nb2RhbCc7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuXG5pbXBvcnQgVXNlRm9ybUlucHV0IGZyb20gJy4uL1VzZUZvcm1JbnB1dCc7XG5pbXBvcnQgV2FybmluZ01vZGFsIGZyb20gJy4vL1dhcm5pbmdNb2RhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJpZE5GVE1vZGFsKHtcblx0c2hvdyxcblx0b25IaWRlLFxuXHRjb250cmFjdCxcblx0c2VuZGVyQWRkcmVzcyxcblx0dG9rZW5JZCxcblx0ZXZlbnRJZCxcblx0dHlwZSxcblx0SGlnaGVzdGJpZFxuXG59KSB7XG5cdGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtBbW91bnQsIEFtb3VudElucHV0XSA9IFVzZUZvcm1JbnB1dCh7XG5cdFx0dHlwZTogJ3RleHQnLFxuXHRcdHBsYWNlaG9sZGVyOiAnQW1vdW50Jyxcblx0fSk7XG5cblxuXHRmdW5jdGlvbiBhY3RpdmF0ZVdhcm5pbmdNb2RhbCgpIHtcblxuXHRcdHNldE1vZGFsU2hvdyh0cnVlKTtcblx0fVxuXHRhc3luYyBmdW5jdGlvbiBiaWRORlQoKSB7XG5cdFx0aWYgKEFtb3VudCA8IEhpZ2hlc3RiaWQpIHtcblx0XHRcdGFjdGl2YXRlV2FybmluZ01vZGFsKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHRva2VuVXJpID0gYXdhaXQgY29udHJhY3QudG9rZW5VUkkodG9rZW5JZCk7XG5cdFx0dmFyIHBhcnNlZCA9IGF3YWl0IEpTT04ucGFyc2UodG9rZW5VcmkpO1xuXHRcdGlmIChOdW1iZXIocGFyc2VkWydwcm9wZXJ0aWVzJ11bJ3ByaWNlJ11bJ2Rlc2NyaXB0aW9uJ10pIDwgTnVtYmVyKEFtb3VudCkpIHtcblx0XHRcdHBhcnNlZFsncHJvcGVydGllcyddWydwcmljZSddWydkZXNjcmlwdGlvbiddID0gQW1vdW50O1xuXHRcdFx0cGFyc2VkWydwcm9wZXJ0aWVzJ11bJ2hpZ2hlcmJpZGFkZCddWydkZXNjcmlwdGlvbiddID0gc2VuZGVyQWRkcmVzcztcblxuXHRcdH1cblx0XHRsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuXHRcdGNvbnN0IGNyZWF0ZWRPYmplY3QgPSB7XG5cdFx0XHR0aXRsZTogJ0Fzc2V0IE1ldGFkYXRhIEJpZHMnLFxuXHRcdFx0dHlwZTogJ29iamVjdCcsXG5cdFx0XHRwcm9wZXJ0aWVzOiB7XG5cdFx0XHRcdHVzZXJuYW1lOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IHNlbmRlckFkZHJlc3Ncblx0XHRcdFx0fSxcblx0XHRcdFx0YmlkOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IEFtb3VudFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR0aW1lOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246IGN1cnJlbnREYXRlXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZUJpZCh0b2tlbklkLCBKU09OLnN0cmluZ2lmeShjcmVhdGVkT2JqZWN0KSwgSlNPTi5zdHJpbmdpZnkocGFyc2VkKSwgZXZlbnRJZCk7XG5cblxuXHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cdFx0d2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJidG4tY2xvc2VcIilbMF0uY2xpY2soKTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PE1vZGFsXG5cdFx0XHRzaG93PXtzaG93fVxuXHRcdFx0b25IaWRlPXtvbkhpZGV9XG5cdFx0XHRhcmlhLWxhYmVsbGVkYnk9XCJjb250YWluZWQtbW9kYWwtdGl0bGUtdmNlbnRlclwiXG5cdFx0XHRjZW50ZXJlZFxuXHRcdD5cblx0XHRcdDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XG5cdFx0XHRcdHsodHlwZSA9PSBcIkNyeXB0b3B1bmtcIikgPyAoXG5cdFx0XHRcdFx0PE1vZGFsLlRpdGxlIGlkPVwiY29udGFpbmVkLW1vZGFsLXRpdGxlLXZjZW50ZXJcIj5cblx0XHRcdFx0XHRcdEJpZCBDcnlwdG9wdW5rXG5cdFx0XHRcdFx0PC9Nb2RhbC5UaXRsZT4pIDogKFxuXHRcdFx0XHRcdDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCI+XG5cdFx0XHRcdFx0XHRCaWQgTkZUXG5cdFx0XHRcdFx0PC9Nb2RhbC5UaXRsZT5cblx0XHRcdFx0KX1cblx0XHRcdDwvTW9kYWwuSGVhZGVyPlxuXHRcdFx0PE1vZGFsLkJvZHkgY2xhc3NOYW1lPVwic2hvdy1ncmlkXCI+XG5cdFx0XHRcdDxGb3JtPlxuXG5cdFx0XHRcdFx0PEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1Hcm91cE5hbWVcIj5cblx0XHRcdFx0XHRcdDxGb3JtLkxhYmVsPkJpZCBBbW91bnQgaW4gRVRIPC9Gb3JtLkxhYmVsPlxuXHRcdFx0XHRcdFx0e0Ftb3VudElucHV0fVxuXHRcdFx0XHRcdDwvRm9ybS5Hcm91cD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZFwiPlxuXG5cdFx0XHRcdFx0XHR7KHR5cGUgPT0gXCJDcnlwdG9wdW5rXCIpID8gKFxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17YmlkTkZUfT5cblx0XHRcdFx0XHRcdFx0XHRCaWQgQ3J5cHRvcHVua1xuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj4pIDogKFxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17YmlkTkZUfT5cblx0XHRcdFx0XHRcdFx0XHRCaWQgTkZUXG5cdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9Gb3JtPlxuXHRcdFx0PC9Nb2RhbC5Cb2R5PlxuXHRcdFx0PFdhcm5pbmdNb2RhbFxuXHRcdFx0XHRzaG93PXttb2RhbFNob3d9XG5cdFx0XHRcdG9uSGlkZT17KCkgPT4ge1xuXHRcdFx0XHRcdHNldE1vZGFsU2hvdyhmYWxzZSk7XG5cdFx0XHRcdH19XG5cdFx0XHRcdG1lc3NhZ2U9e2BCaWQgY2Fubm90IGJlIHBsYWNlZCB1bmRlciAke0hpZ2hlc3RiaWR9IEVUSGB9XG5cdFx0XHQvPlxuXHRcdDwvTW9kYWw+XG5cblx0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=