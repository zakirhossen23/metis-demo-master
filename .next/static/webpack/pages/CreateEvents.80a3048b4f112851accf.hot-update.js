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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_8__.default, {
          style: {
            padding: "0 30%",
            "paddingTop": 0,
            width: "100%"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            style: {
              width: "500px",
              background: "transparent",
              padding: "19px",
              borderRadius: "4px",
              height: "100%",
              border: "white solid"
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              style: {
                margin: "18px 0"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
                children: "Event Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 29
              }, this), EventTitleInput]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            style: {
              margin: "18px 0"
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
              children: "Event Description"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 25
            }, this), EventDescriptionInput]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            style: {
              margin: "18px 0"
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
              children: "Event End Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 25
            }, this), EventDateInput]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 21
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            style: {
              margin: "18px 0"
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
              children: "Event Goal"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 25
            }, this), EventGoalInput]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_9__.default, {
          className: "float-end",
          onClick: createEvent,
          children: "Create Event"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ3JlYXRlRXZlbnRzLnRzeCJdLCJuYW1lcyI6WyJDcmVhdGVFdmVudHMiLCJ1c2VDb250cmFjdCIsImNvbnRyYWN0Iiwic2lnbmVyQWRkcmVzcyIsIlVzZUZvcm1JbnB1dCIsImRlZmF1bHRWYWx1ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImlkIiwiRXZlbnRUaXRsZSIsIkV2ZW50VGl0bGVJbnB1dCIsIkV2ZW50RGVzY3JpcHRpb24iLCJFdmVudERlc2NyaXB0aW9uSW5wdXQiLCJFdmVudERhdGUiLCJFdmVudERhdGVJbnB1dCIsIkV2ZW50R29hbCIsIkV2ZW50R29hbElucHV0IiwiY3JlYXRlRXZlbnQiLCJjcmVhdGVkT2JqZWN0IiwidGl0bGUiLCJwcm9wZXJ0aWVzIiwiVGl0bGUiLCJkZXNjcmlwdGlvbiIsIkRlc2NyaXB0aW9uIiwiRGF0ZSIsIkdvYWwiLCJ0eXBlaW1nIiwiY2xhaW1Ub2tlbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwicGFkZGluZyIsIndpZHRoIiwiYmFja2dyb3VuZCIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsImJvcmRlciIsIm1hcmdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBR2UsU0FBU0EsWUFBVCxHQUF3QjtBQUFBOztBQUFBLHFCQUNDQyw4REFBVyxDQUFDLFFBQUQsQ0FEWjtBQUFBLE1BQzNCQyxRQUQyQixnQkFDM0JBLFFBRDJCO0FBQUEsTUFDakJDLGFBRGlCLGdCQUNqQkEsYUFEaUI7O0FBQUEsc0JBRUdDLGlFQUFZLENBQUM7QUFDL0NDLGdCQUFZLEVBQUUsRUFEaUM7QUFFL0NDLFFBQUksRUFBRSxNQUZ5QztBQUcvQ0MsZUFBVyxFQUFFLGFBSGtDO0FBSS9DQyxNQUFFLEVBQUU7QUFKMkMsR0FBRCxDQUZmO0FBQUE7QUFB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LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHNldHRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvdmFyaWFibGVzL0V2ZW50cyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XHJcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XHJcbmltcG9ydCAqIGFzIGRvdGVudiBmcm9tICdkb3RlbnYnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgeyByZWFkRmlsZVN5bmMgfSBmcm9tICdmcyc7XHJcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IFVzZUZvcm1JbnB1dCBmcm9tICcuLi9jb21wb25lbnRzL1VzZUZvcm1JbnB1dCc7XHJcbmltcG9ydCB1c2VDb250cmFjdCBmcm9tICcuLi9zZXJ2aWNlcy91c2VDb250cmFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlRXZlbnRzKCkge1xyXG4gICAgY29uc3QgeyBjb250cmFjdCwgc2lnbmVyQWRkcmVzcyB9ID0gdXNlQ29udHJhY3QoJ0VSQzcyMScpO1xyXG4gICAgY29uc3QgW0V2ZW50VGl0bGUsIEV2ZW50VGl0bGVJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcclxuICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdFdmVudCBUaXRsZScsXHJcbiAgICAgICAgaWQ6ICcnXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtFdmVudERlc2NyaXB0aW9uLCBFdmVudERlc2NyaXB0aW9uSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXHJcbiAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRXZlbnQgRGVzY3JpcHRpb24nLFxyXG4gICAgICAgIGlkOiAnJ1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbRXZlbnREYXRlLCBFdmVudERhdGVJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcclxuICAgICAgICB0eXBlOiAnZGF0ZXRpbWUtbG9jYWwnLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRXZlbnQgRW5kIERhdGUgJyxcclxuICAgICAgICBpZDogJ2VuZGRhdGUnLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbRXZlbnRHb2FsLCBFdmVudEdvYWxJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcclxuICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdFdmVudCBHb2FsIGluIEVUSCcsXHJcbiAgICAgICAgaWQ6ICdnb2FsJyxcclxuICAgIH0pO1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRXZlbnQoKSB7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlZE9iamVjdCA9IHtcclxuICAgICAgICAgICAgdGl0bGU6ICdBc3NldCBNZXRhZGF0YScsXHJcbiAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnLFxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgICAgICBUaXRsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBFdmVudFRpdGxlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IEV2ZW50RGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgRGF0ZToge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBFdmVudERhdGUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgR29hbDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBFdmVudEdvYWxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0eXBlaW1nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRXZlbnRcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNvbnRyYWN0LmNsYWltVG9rZW4oXHJcbiAgICAgICAgICAgIHNpZ25lckFkZHJlc3MsXHJcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGNyZWF0ZWRPYmplY3QpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+PD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Q3JlYXRlIEV2ZW50PC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJDcmVhdGUgRXZlbnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMCAzMCVcIixcclxuICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmdUb3BcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCJcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNTAwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjE5cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwid2hpdGUgc29saWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5FdmVudCBUaXRsZTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnRUaXRsZUlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDY+RXZlbnQgRGVzY3JpcHRpb248L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnREZXNjcmlwdGlvbklucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDY+RXZlbnQgRW5kIERhdGU8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnREYXRlSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5FdmVudCBHb2FsPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50R29hbElucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsb2F0LWVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y3JlYXRlRXZlbnR9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIEV2ZW50XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9