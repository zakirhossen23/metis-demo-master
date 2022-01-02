self["webpackHotUpdate_N_E"]("pages/CreateEvents",{

/***/ "./pages/CreateEvents.tsx":
/*!********************************!*\
  !*** ./pages/CreateEvents.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CreateEvents; }
/* harmony export */ });
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _components_UseFormInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UseFormInput */ "./components/UseFormInput.jsx");
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/useContract */ "./services/useContract.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\zakir\\Documents\\test\\metis-demo-master\\pages\\CreateEvents.tsx",
    _s = $RefreshSig$();







function CreateEvents() {
  _s();

  var _useContract = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_6__.default)('ERC721'),
      contract = _useContract.contract,
      signerAddress = _useContract.signerAddress;

  var _UseFormInput = (0,_components_UseFormInput__WEBPACK_IMPORTED_MODULE_5__.default)({
    defaultValue: "",
    type: 'text',
    placeholder: 'Event Title',
    id: ''
  }),
      _UseFormInput2 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput, 2),
      EventTitle = _UseFormInput2[0],
      EventTitleInput = _UseFormInput2[1];

  var _UseFormInput3 = (0,_components_UseFormInput__WEBPACK_IMPORTED_MODULE_5__.default)({
    defaultValue: "",
    type: 'text',
    placeholder: 'Event Description',
    id: ''
  }),
      _UseFormInput4 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput3, 2),
      EventDescription = _UseFormInput4[0],
      EventDescriptionInput = _UseFormInput4[1];

  var _UseFormInput5 = (0,_components_UseFormInput__WEBPACK_IMPORTED_MODULE_5__.default)({
    defaultValue: "",
    type: 'datetime-local',
    placeholder: 'Event End Date ',
    id: 'enddate'
  }),
      _UseFormInput6 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput5, 2),
      EventDate = _UseFormInput6[0],
      EventDateInput = _UseFormInput6[1];

  var _UseFormInput7 = (0,_components_UseFormInput__WEBPACK_IMPORTED_MODULE_5__.default)({
    defaultValue: "",
    type: 'text',
    placeholder: 'Event Goal in ETH',
    id: 'goal'
  }),
      _UseFormInput8 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput7, 2),
      EventGoal = _UseFormInput8[0],
      EventGoalInput = _UseFormInput8[1];

  function createEvent() {
    return _createEvent.apply(this, arguments);
  }

  function _createEvent() {
    _createEvent = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var createdObject, result;
      return C_Users_zakir_Documents_test_metis_demo_master_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              createdObject = {
                title: 'Asset Metadata',
                type: 'object',
                properties: {
                  Title: {
                    type: 'string',
                    description: EventTitle
                  },
                  Description: {
                    type: 'string',
                    description: EventDescription
                  },
                  Date: {
                    type: 'string',
                    description: EventDate
                  },
                  Goal: {
                    type: 'string',
                    description: EventGoal
                  },
                  typeimg: {
                    type: 'string',
                    description: "Event"
                  }
                }
              };
              _context.next = 3;
              return contract.claimToken(signerAddress, JSON.stringify(createdObject));

            case 3:
              result = _context.sent;
              console.log(result);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _createEvent.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("title", {
          children: "Create Event"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
          name: "description",
          content: "Create Event"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("link", {
          rel: "icon",
          href: "/favicon.ico"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_7__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__.default, {
          style: {
            padding: "0 30%",
            "paddingTop": 0,
            width: "100%"
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            style: {
              width: "500px",
              background: "transparent",
              padding: "19px",
              borderRadius: "4px",
              height: "100%",
              border: "white solid"
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              style: {
                margin: "0px 0px 53px 0px"
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
                children: "Create Event"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              style: {
                margin: "18px 0"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
                children: "Event Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 29
              }, this), EventTitleInput]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              style: {
                margin: "18px 0"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
                children: "Event Description"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 29
              }, this), EventDescriptionInput]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              style: {
                margin: "18px 0"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
                children: "Event End Date"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 29
              }, this), EventDateInput]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              style: {
                margin: "18px 0"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
                children: "Event Goal"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 29
              }, this), EventGoalInput]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__.default, {
              style: {
                margin: "17px 0 0px 0px",
                width: "100%"
              },
              onClick: createEvent,
              children: "Create Event"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 13
      }, this)]
    }, void 0, true)
  }, void 0, false);
}

_s(CreateEvents, "TQi2A5gbNcjtySTVOm7Dv9H4vN8=", false, function () {
  return [_services_useContract__WEBPACK_IMPORTED_MODULE_6__.default];
});

_c = CreateEvents;

var _c;

$RefreshReg$(_c, "CreateEvents");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ3JlYXRlRXZlbnRzLnRzeCJdLCJuYW1lcyI6WyJDcmVhdGVFdmVudHMiLCJ1c2VDb250cmFjdCIsImNvbnRyYWN0Iiwic2lnbmVyQWRkcmVzcyIsIlVzZUZvcm1JbnB1dCIsImRlZmF1bHRWYWx1ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImlkIiwiRXZlbnRUaXRsZSIsIkV2ZW50VGl0bGVJbnB1dCIsIkV2ZW50RGVzY3JpcHRpb24iLCJFdmVudERlc2NyaXB0aW9uSW5wdXQiLCJFdmVudERhdGUiLCJFdmVudERhdGVJbnB1dCIsIkV2ZW50R29hbCIsIkV2ZW50R29hbElucHV0IiwiY3JlYXRlRXZlbnQiLCJjcmVhdGVkT2JqZWN0IiwidGl0bGUiLCJwcm9wZXJ0aWVzIiwiVGl0bGUiLCJkZXNjcmlwdGlvbiIsIkRlc2NyaXB0aW9uIiwiRGF0ZSIsIkdvYWwiLCJ0eXBlaW1nIiwiY2xhaW1Ub2tlbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwicGFkZGluZyIsIndpZHRoIiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsImJvcmRlciIsIm1hcmdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBR2UsU0FBU0EsWUFBVCxHQUF3QjtBQUFBOztBQUFBLHFCQUNDQyw4REFBVyxDQUFDLFFBQUQsQ0FEWjtBQUFBLE1BQzNCQyxRQUQyQixnQkFDM0JBLFFBRDJCO0FBQUEsTUFDakJDLGFBRGlCLGdCQUNqQkEsYUFEaUI7O0FBQUEsc0JBRUdDLGlFQUFZLENBQUM7QUFDL0NDLGdCQUFZLEVBQUUsRUFEaUM7QUFFL0NDLFFBQUksRUFBRSxNQUZ5QztBQUcvQ0MsZUFBVyxFQUFFLGFBSGtDO0FBSS9DQyxNQUFFLEVBQUU7QUFKMkMsR0FBRCxDQUZmO0FBQUE7QUFBQSxNQUU1QkMsVUFGNEI7QUFBQSxNQUVoQkMsZUFGZ0I7O0FBQUEsdUJBUWVOLGlFQUFZLENBQUM7QUFDM0RDLGdCQUFZLEVBQUUsRUFENkM7QUFFM0RDLFFBQUksRUFBRSxNQUZxRDtBQUczREMsZUFBVyxFQUFFLG1CQUg4QztBQUkzREMsTUFBRSxFQUFFO0FBSnVELEdBQUQsQ0FSM0I7QUFBQTtBQUFBLE1BUTVCRyxnQkFSNEI7QUFBQSxNQVFWQyxxQkFSVTs7QUFBQSx1QkFjQ1IsaUVBQVksQ0FBQztBQUM3Q0MsZ0JBQVksRUFBRSxFQUQrQjtBQUU3Q0MsUUFBSSxFQUFFLGdCQUZ1QztBQUc3Q0MsZUFBVyxFQUFFLGlCQUhnQztBQUk3Q0MsTUFBRSxFQUFFO0FBSnlDLEdBQUQsQ0FkYjtBQUFBO0FBQUEsTUFjNUJLLFNBZDRCO0FBQUEsTUFjakJDLGNBZGlCOztBQUFBLHVCQW9CQ1YsaUVBQVksQ0FBQztBQUM3Q0MsZ0JBQVksRUFBRSxFQUQrQjtBQUU3Q0MsUUFBSSxFQUFFLE1BRnVDO0FBRzdDQyxlQUFXLEVBQUUsbUJBSGdDO0FBSTdDQyxNQUFFLEVBQUU7QUFKeUMsR0FBRCxDQXBCYjtBQUFBO0FBQUEsTUFvQjVCTyxTQXBCNEI7QUFBQSxNQW9CakJDLGNBcEJpQjs7QUFBQSxXQTBCcEJDLFdBMUJvQjtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtVEEwQm5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNVQywyQkFEVixHQUMwQjtBQUNsQkMscUJBQUssRUFBRSxnQkFEVztBQUVsQmIsb0JBQUksRUFBRSxRQUZZO0FBR2xCYywwQkFBVSxFQUFFO0FBQ1JDLHVCQUFLLEVBQUU7QUFDSGYsd0JBQUksRUFBRSxRQURIO0FBRUhnQiwrQkFBVyxFQUFFYjtBQUZWLG1CQURDO0FBS1JjLDZCQUFXLEVBQUU7QUFDVGpCLHdCQUFJLEVBQUUsUUFERztBQUVUZ0IsK0JBQVcsRUFBRVg7QUFGSixtQkFMTDtBQVNSYSxzQkFBSSxFQUFFO0FBQ0ZsQix3QkFBSSxFQUFFLFFBREo7QUFFRmdCLCtCQUFXLEVBQUVUO0FBRlgsbUJBVEU7QUFhUlksc0JBQUksRUFBRTtBQUNGbkIsd0JBQUksRUFBRSxRQURKO0FBRUZnQiwrQkFBVyxFQUFFUDtBQUZYLG1CQWJFO0FBaUJSVyx5QkFBTyxFQUFFO0FBQ0xwQix3QkFBSSxFQUFFLFFBREQ7QUFFTGdCLCtCQUFXLEVBQUU7QUFGUjtBQWpCRDtBQUhNLGVBRDFCO0FBQUE7QUFBQSxxQkE0QnlCcEIsUUFBUSxDQUFDeUIsVUFBVCxDQUNqQnhCLGFBRGlCLEVBRWpCeUIsSUFBSSxDQUFDQyxTQUFMLENBQWVYLGFBQWYsQ0FGaUIsQ0E1QnpCOztBQUFBO0FBNEJVWSxvQkE1QlY7QUFpQ0lDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjs7QUFqQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0ExQm1DO0FBQUE7QUFBQTs7QUE4RG5DLHNCQUNJO0FBQUEsMkJBQUU7QUFBQSw4QkFDRSw4REFBQyxrREFBRDtBQUFBLGdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBTSxjQUFJLEVBQUMsYUFBWDtBQUF5QixpQkFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFHSTtBQUFNLGFBQUcsRUFBQyxNQUFWO0FBQWlCLGNBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBT0UsOERBQUMsd0RBQUQ7QUFBQSwrQkFDSSw4REFBQyx3REFBRDtBQUFLLGVBQUssRUFBRTtBQUNSRyxtQkFBTyxFQUFFLE9BREQ7QUFFUiwwQkFBYyxDQUZOO0FBR1JDLGlCQUFLLEVBQUU7QUFIQyxXQUFaO0FBQUEsaUNBS0k7QUFBSyxpQkFBSyxFQUFFO0FBQUVBLG1CQUFLLEVBQUUsT0FBVDtBQUFrQkMsd0JBQVUsRUFBRSxhQUE5QjtBQUE2Q0YscUJBQU8sRUFBRSxNQUF0RDtBQUE4REcsMEJBQVksRUFBRSxLQUE1RTtBQUFtRkMsb0JBQU0sRUFBRSxNQUEzRjtBQUFtR0Msb0JBQU0sRUFBRTtBQUEzRyxhQUFaO0FBQUEsb0NBQ0k7QUFBSyxtQkFBSyxFQUFFO0FBQUVDLHNCQUFNLEVBQUU7QUFBVixlQUFaO0FBQUEscUNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBS0k7QUFBSyxtQkFBSyxFQUFFO0FBQUVBLHNCQUFNLEVBQUU7QUFBVixlQUFaO0FBQUEsc0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosRUFFSzdCLGVBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxKLGVBU0k7QUFBSyxtQkFBSyxFQUFFO0FBQUU2QixzQkFBTSxFQUFFO0FBQVYsZUFBWjtBQUFBLHNDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLEVBRUszQixxQkFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEosZUFhSTtBQUFLLG1CQUFLLEVBQUU7QUFBRTJCLHNCQUFNLEVBQUU7QUFBVixlQUFaO0FBQUEsc0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosRUFFS3pCLGNBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWJKLGVBaUJJO0FBQUssbUJBQUssRUFBRTtBQUFFeUIsc0JBQU0sRUFBRTtBQUFWLGVBQVo7QUFBQSxzQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixFQUVLdkIsY0FGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBakJKLGVBcUJJLDhEQUFDLDJEQUFEO0FBQ0ksbUJBQUssRUFBRTtBQUNIdUIsc0JBQU0sRUFBRSxnQkFETDtBQUVITCxxQkFBSyxFQUFFO0FBRkosZUFEWDtBQUtJLHFCQUFPLEVBQUVqQixXQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGO0FBQUE7QUFBRixtQkFESjtBQW9ESDs7R0FsSHVCakIsWTtVQUNnQkMsMEQ7OztLQURoQkQsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9DcmVhdGVFdmVudHMuMjc1MGNmOTIzNDAzODZiZTE0ZGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgc2V0dGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy92YXJpYWJsZXMvRXZlbnRzJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcclxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcclxuaW1wb3J0ICogYXMgZG90ZW52IGZyb20gJ2RvdGVudic7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IHJlYWRGaWxlU3luYyB9IGZyb20gJ2ZzJztcclxuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgVXNlRm9ybUlucHV0IGZyb20gJy4uL2NvbXBvbmVudHMvVXNlRm9ybUlucHV0JztcclxuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVFdmVudHMoKSB7XHJcbiAgICBjb25zdCB7IGNvbnRyYWN0LCBzaWduZXJBZGRyZXNzIH0gPSB1c2VDb250cmFjdCgnRVJDNzIxJyk7XHJcbiAgICBjb25zdCBbRXZlbnRUaXRsZSwgRXZlbnRUaXRsZUlucHV0XSA9IFVzZUZvcm1JbnB1dCh7XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ0V2ZW50IFRpdGxlJyxcclxuICAgICAgICBpZDogJydcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW0V2ZW50RGVzY3JpcHRpb24sIEV2ZW50RGVzY3JpcHRpb25JbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcclxuICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdFdmVudCBEZXNjcmlwdGlvbicsXHJcbiAgICAgICAgaWQ6ICcnXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtFdmVudERhdGUsIEV2ZW50RGF0ZUlucHV0XSA9IFVzZUZvcm1JbnB1dCh7XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHR5cGU6ICdkYXRldGltZS1sb2NhbCcsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdFdmVudCBFbmQgRGF0ZSAnLFxyXG4gICAgICAgIGlkOiAnZW5kZGF0ZScsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtFdmVudEdvYWwsIEV2ZW50R29hbElucHV0XSA9IFVzZUZvcm1JbnB1dCh7XHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgICAgICBwbGFjZWhvbGRlcjogJ0V2ZW50IEdvYWwgaW4gRVRIJyxcclxuICAgICAgICBpZDogJ2dvYWwnLFxyXG4gICAgfSk7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBjcmVhdGVFdmVudCgpIHtcclxuICAgICAgICBjb25zdCBjcmVhdGVkT2JqZWN0ID0ge1xyXG4gICAgICAgICAgICB0aXRsZTogJ0Fzc2V0IE1ldGFkYXRhJyxcclxuICAgICAgICAgICAgdHlwZTogJ29iamVjdCcsXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgIFRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IEV2ZW50VGl0bGUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgRGVzY3JpcHRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogRXZlbnREZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBEYXRlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IEV2ZW50RGF0ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBHb2FsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IEV2ZW50R29hbFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHR5cGVpbWc6IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJFdmVudFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QuY2xhaW1Ub2tlbihcclxuICAgICAgICAgICAgc2lnbmVyQWRkcmVzcyxcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoY3JlYXRlZE9iamVjdClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD48PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5DcmVhdGUgRXZlbnQ8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkNyZWF0ZSBFdmVudFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIwIDMwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicGFkZGluZ1RvcFwiOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI1MDBweFwiLCBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsIHBhZGRpbmc6IFwiMTlweFwiLCBib3JkZXJSYWRpdXM6IFwiNHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIGJvcmRlcjogXCJ3aGl0ZSBzb2xpZFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIwcHggMHB4IDUzcHggMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+Q3JlYXRlIEV2ZW50PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5FdmVudCBUaXRsZTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnRUaXRsZUlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+RXZlbnQgRGVzY3JpcHRpb248L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50RGVzY3JpcHRpb25JbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkV2ZW50IEVuZCBEYXRlPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtFdmVudERhdGVJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkV2ZW50IEdvYWw8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50R29hbElucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTdweCAwIDBweCAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjcmVhdGVFdmVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIEV2ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=