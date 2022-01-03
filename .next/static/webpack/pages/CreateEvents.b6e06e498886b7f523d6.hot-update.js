self["webpackHotUpdate_N_E"]("pages/CreateEvents",{

/***/ "./pages/CreateEvents.jsx":
/*!********************************!*\
  !*** ./pages/CreateEvents.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CreateEvents; }
/* harmony export */ });
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap/Button */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var _components_UseFormInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UseFormInput */ "./components/UseFormInput.jsx");
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/useContract */ "./services/useContract.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_file_base64__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-file-base64 */ "./node_modules/react-file-base64/build/build.min.js");
/* harmony import */ var react_file_base64__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_file_base64__WEBPACK_IMPORTED_MODULE_9__);
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Users\\zakir\\Documents\\test\\metis-demo-master\\pages\\CreateEvents.jsx",
    _s = $RefreshSig$();










function CreateEvents() {
  _s();

  var _useContract = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_7__.default)('ERC721'),
      contract = _useContract.contract,
      signerAddress = _useContract.signerAddress;

  var _UseFormInput = (0,_components_UseFormInput__WEBPACK_IMPORTED_MODULE_6__.default)({
    defaultValue: "",
    type: 'text',
    placeholder: 'Event Title',
    id: ''
  }),
      _UseFormInput2 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput, 2),
      EventTitle = _UseFormInput2[0],
      EventTitleInput = _UseFormInput2[1];

  var _UseFormInput3 = (0,_components_UseFormInput__WEBPACK_IMPORTED_MODULE_6__.default)({
    defaultValue: "",
    type: 'text',
    placeholder: 'Event Description',
    id: ''
  }),
      _UseFormInput4 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput3, 2),
      EventDescription = _UseFormInput4[0],
      EventDescriptionInput = _UseFormInput4[1];

  var _UseFormInput5 = (0,_components_UseFormInput__WEBPACK_IMPORTED_MODULE_6__.default)({
    defaultValue: "",
    type: 'datetime-local',
    placeholder: 'Event End Date ',
    id: 'enddate'
  }),
      _UseFormInput6 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput5, 2),
      EventDate = _UseFormInput6[0],
      EventDateInput = _UseFormInput6[1];

  var _UseFormInput7 = (0,_components_UseFormInput__WEBPACK_IMPORTED_MODULE_6__.default)({
    defaultValue: "",
    type: 'text',
    placeholder: 'Event Goal in ETH',
    id: 'goal'
  }),
      _UseFormInput8 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput7, 2),
      EventGoal = _UseFormInput8[0],
      EventGoalInput = _UseFormInput8[1];

  var _UseFormInput9 = (0,_components_UseFormInput__WEBPACK_IMPORTED_MODULE_6__.default)({
    defaultValue: "",
    type: 'file',
    placeholder: 'Event Logo',
    id: 'logo'
  }),
      _UseFormInput10 = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_UseFormInput9, 2),
      EventLogo = _UseFormInput10[0],
      EventLogoInput = _UseFormInput10[1];

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

  function createEvent() {
    return _createEvent.apply(this, arguments);
  }

  function _createEvent() {
    _createEvent = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      var base64;
      return C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return getBase64();

            case 2:
              base64 = _context2.sent;
              console.log(base64); // const createdObject = {
              //     title: 'Asset Metadata',
              //     type: 'object',
              //     properties: {
              //         Title: {
              //             type: 'string',
              //             description: EventTitle,
              //         },
              //         Description: {
              //             type: 'string',
              //             description: EventDescription,
              //         },
              //         Date: {
              //             type: 'string',
              //             description: EventDate,
              //         },
              //         Goal: {
              //             type: 'string',
              //             description: EventGoal
              //         },
              //         logo: {
              //             type: 'string',
              //             description: await reader.result
              //         },
              //         typeimg: {
              //             type: 'string',
              //             description: "Event"
              //         }
              //     }
              // };
              // try {
              //     const result = await contract.createEvent(
              //         signerAddress,
              //         JSON.stringify(createdObject)
              //     );
              //     console.log(result);
              // } catch {
              //     Router.push('/login');
              // }
              // Router.push('/donation');

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _createEvent.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("title", {
          children: "Create Event"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
          name: "description",
          content: "Create Event"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 17
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("link", {
          rel: "icon",
          href: "/favicon.ico"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_11__.default, {
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
                margin: "0px 0px 30px 0px"
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
                children: "Create Event"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              style: {
                margin: "18px 0"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
                children: "Event Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 29
              }, this), EventTitleInput]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              style: {
                margin: "18px 0"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
                children: "Event Description"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 29
              }, this), EventDescriptionInput]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              style: {
                margin: "18px 0"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
                children: "Event End Date"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 29
              }, this), EventDateInput]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              style: {
                margin: "18px 0"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
                children: "Event Goal"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 29
              }, this), EventGoalInput]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              style: {
                margin: "18px 0"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
                children: "Event Logo"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 29
              }, this), EventLogoInput]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 25
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_12__.default, {
              style: {
                margin: "17px 0 0px 0px",
                width: "100%"
              },
              onClick: createEvent,
              children: "Create Event"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 13
      }, this)]
    }, void 0, true)
  }, void 0, false);
}

_s(CreateEvents, "TQi2A5gbNcjtySTVOm7Dv9H4vN8=", false, function () {
  return [_services_useContract__WEBPACK_IMPORTED_MODULE_7__.default];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ3JlYXRlRXZlbnRzLmpzeCJdLCJuYW1lcyI6WyJDcmVhdGVFdmVudHMiLCJ1c2VDb250cmFjdCIsImNvbnRyYWN0Iiwic2lnbmVyQWRkcmVzcyIsIlVzZUZvcm1JbnB1dCIsImRlZmF1bHRWYWx1ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImlkIiwiRXZlbnRUaXRsZSIsIkV2ZW50VGl0bGVJbnB1dCIsIkV2ZW50RGVzY3JpcHRpb24iLCJFdmVudERlc2NyaXB0aW9uSW5wdXQiLCJFdmVudERhdGUiLCJFdmVudERhdGVJbnB1dCIsIkV2ZW50R29hbCIsIkV2ZW50R29hbElucHV0IiwiRXZlbnRMb2dvIiwiRXZlbnRMb2dvSW5wdXQiLCJnZXRCYXNlNjQiLCJmaWxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJyZXNwb25zZSIsIlByb21pc2UiLCJyIiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHQiLCJjcmVhdGVFdmVudCIsImJhc2U2NCIsInBhZGRpbmciLCJ3aWR0aCIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJib3JkZXIiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLFlBQVQsR0FBd0I7QUFBQTs7QUFBQSxxQkFHQ0MsOERBQVcsQ0FBQyxRQUFELENBSFo7QUFBQSxNQUczQkMsUUFIMkIsZ0JBRzNCQSxRQUgyQjtBQUFBLE1BR2pCQyxhQUhpQixnQkFHakJBLGFBSGlCOztBQUFBLHNCQUlHQyxpRUFBWSxDQUFDO0FBQy9DQyxnQkFBWSxFQUFFLEVBRGlDO0FBRS9DQyxRQUFJLEVBQUUsTUFGeUM7QUFH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QUFFO0FBQUU4QixzQkFBTSxFQUFFO0FBQVYsZUFBWjtBQUFBLHNDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLEVBRUs1QixjQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFiSixlQWlCSTtBQUFLLG1CQUFLLEVBQUU7QUFBRTRCLHNCQUFNLEVBQUU7QUFBVixlQUFaO0FBQUEsc0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosRUFFSzFCLGNBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWpCSixlQXFCSTtBQUFLLG1CQUFLLEVBQUU7QUFBRTBCLHNCQUFNLEVBQUU7QUFBVixlQUFaO0FBQUEsc0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosRUFFS3hCLGNBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXJCSixlQTBCSSw4REFBQyw0REFBRDtBQUFRLG1CQUFLLEVBQUU7QUFBRXdCLHNCQUFNLEVBQUUsZ0JBQVY7QUFBNEJMLHFCQUFLLEVBQUU7QUFBbkMsZUFBZjtBQUNJLHFCQUFPLEVBQUVILFdBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBMUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkY7QUFBQTtBQUFGLG1CQURKO0FBK0NIOztHQTdJdUJsQyxZO1VBR2dCQywwRDs7O0tBSGhCRCxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0NyZWF0ZUV2ZW50cy5iNmUwNmU0OTg4ODZiN2Y1MjNkNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xyXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5pbXBvcnQgVXNlRm9ybUlucHV0IGZyb20gJy4uL2NvbXBvbmVudHMvVXNlRm9ybUlucHV0JztcclxuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IEZpbGVCYXNlNjQgZnJvbSAncmVhY3QtZmlsZS1iYXNlNjQnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZUV2ZW50cygpIHtcclxuXHJcblxyXG4gICAgY29uc3QgeyBjb250cmFjdCwgc2lnbmVyQWRkcmVzcyB9ID0gdXNlQ29udHJhY3QoJ0VSQzcyMScpO1xyXG4gICAgY29uc3QgW0V2ZW50VGl0bGUsIEV2ZW50VGl0bGVJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcclxuICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdFdmVudCBUaXRsZScsXHJcbiAgICAgICAgaWQ6ICcnXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtFdmVudERlc2NyaXB0aW9uLCBFdmVudERlc2NyaXB0aW9uSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXHJcbiAgICAgICAgdHlwZTogJ3RleHQnLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRXZlbnQgRGVzY3JpcHRpb24nLFxyXG4gICAgICAgIGlkOiAnJ1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbRXZlbnREYXRlLCBFdmVudERhdGVJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcclxuICAgICAgICB0eXBlOiAnZGF0ZXRpbWUtbG9jYWwnLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRXZlbnQgRW5kIERhdGUgJyxcclxuICAgICAgICBpZDogJ2VuZGRhdGUnLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbRXZlbnRHb2FsLCBFdmVudEdvYWxJbnB1dF0gPSBVc2VGb3JtSW5wdXQoe1xyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcclxuICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdFdmVudCBHb2FsIGluIEVUSCcsXHJcbiAgICAgICAgaWQ6ICdnb2FsJyxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW0V2ZW50TG9nbywgRXZlbnRMb2dvSW5wdXRdID0gVXNlRm9ybUlucHV0KHtcclxuICAgICAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXHJcbiAgICAgICAgdHlwZTogJ2ZpbGUnLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnRXZlbnQgTG9nbycsXHJcbiAgICAgICAgaWQ6ICdsb2dvJyxcclxuICAgIH0pO1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0QmFzZTY0KCkge1xyXG4gICAgICAgIGxldCBmaWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dvXCIpLmZpbGVzWzBdO1xyXG5cclxuICAgICAgICAvLyBNYWtlIG5ldyBGaWxlUmVhZGVyXHJcbiAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgLy8gQ29udmVydCB0aGUgZmlsZSB0byBiYXNlNjQgdGV4dFxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UociA9PiBzZXRUaW1lb3V0KHIsIDIwMCkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICAgIHJldHVybiByZWFkZXIucmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUV2ZW50KCkge1xyXG4gICAgICAgIHZhciBiYXNlNjQgPSBhd2FpdCBnZXRCYXNlNjQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhiYXNlNjQpO1xyXG4gICAgICAgIC8vIGNvbnN0IGNyZWF0ZWRPYmplY3QgPSB7XHJcbiAgICAgICAgLy8gICAgIHRpdGxlOiAnQXNzZXQgTWV0YWRhdGEnLFxyXG4gICAgICAgIC8vICAgICB0eXBlOiAnb2JqZWN0JyxcclxuICAgICAgICAvLyAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vICAgICAgICAgVGl0bGU6IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgICAvLyAgICAgICAgICAgICBkZXNjcmlwdGlvbjogRXZlbnRUaXRsZSxcclxuICAgICAgICAvLyAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgICBEZXNjcmlwdGlvbjoge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBFdmVudERlc2NyaXB0aW9uLFxyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgIERhdGU6IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgICAvLyAgICAgICAgICAgICBkZXNjcmlwdGlvbjogRXZlbnREYXRlLFxyXG4gICAgICAgIC8vICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgIEdvYWw6IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcclxuICAgICAgICAvLyAgICAgICAgICAgICBkZXNjcmlwdGlvbjogRXZlbnRHb2FsXHJcbiAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgIC8vICAgICAgICAgbG9nbzoge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBhd2FpdCByZWFkZXIucmVzdWx0XHJcbiAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgIC8vICAgICAgICAgdHlwZWltZzoge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkV2ZW50XCJcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgICAgLy8gdHJ5IHtcclxuICAgICAgICAvLyAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY29udHJhY3QuY3JlYXRlRXZlbnQoXHJcbiAgICAgICAgLy8gICAgICAgICBzaWduZXJBZGRyZXNzLFxyXG4gICAgICAgIC8vICAgICAgICAgSlNPTi5zdHJpbmdpZnkoY3JlYXRlZE9iamVjdClcclxuICAgICAgICAvLyAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgLy8gfSBjYXRjaCB7XHJcbiAgICAgICAgLy8gICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIFJvdXRlci5wdXNoKCcvZG9uYXRpb24nKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Pjw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkNyZWF0ZSBFdmVudDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQ3JlYXRlIEV2ZW50XCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbCBzdHlsZT17eyBwYWRkaW5nOiBcIjAgMzAlXCIsIFwicGFkZGluZ1RvcFwiOiAwLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI1MDBweFwiLCBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsIHBhZGRpbmc6IFwiMTlweFwiLCBib3JkZXJSYWRpdXM6IFwiNHB4XCIsIGhlaWdodDogXCIxMDAlXCIsIGJvcmRlcjogXCJ3aGl0ZSBzb2xpZFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIwcHggMHB4IDMwcHggMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+Q3JlYXRlIEV2ZW50PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogXCIxOHB4IDBcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj5FdmVudCBUaXRsZTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnRUaXRsZUlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+RXZlbnQgRGVzY3JpcHRpb248L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50RGVzY3JpcHRpb25JbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkV2ZW50IEVuZCBEYXRlPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtFdmVudERhdGVJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiBcIjE4cHggMFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkV2ZW50IEdvYWw8L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0V2ZW50R29hbElucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW46IFwiMThweCAwXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+RXZlbnQgTG9nbzwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7RXZlbnRMb2dvSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBtYXJnaW46IFwiMTdweCAwIDBweCAwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjcmVhdGVFdmVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIEV2ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICA8Lz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==