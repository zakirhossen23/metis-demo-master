self["webpackHotUpdate_N_E"]("pages/donation/auction/[id]",{

/***/ "./pages/donation/auction/[id].jsx":
/*!*****************************************!*\
  !*** ./pages/donation/auction/[id].jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ViewNFT; }
/* harmony export */ });
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_modals_BidNFTModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/modals/BidNFTModal */ "./components/modals/BidNFTModal.jsx");
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/useContract */ "./services/useContract.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\zakir\\Documents\\test\\metis-demo-master\\pages\\donation\\auction\\[id].jsx",
    _s = $RefreshSig$();











function ViewNFT(user) {
  _s();

  var _this = this;

  var _useContract = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_7__.default)('ERC721'),
      contract = _useContract.contract,
      signerAddress = _useContract.signerAddress;

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(-1),
      tokenId = _useState[0],
      setTokenId = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      list = _useState2[0],
      setList = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      tokenName = _useState3[0],
      setTokenName = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      tokenSymbol = _useState4[0],
      setTokenSymbol = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      title = _useState5[0],
      setTitle = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      goalusd = _useState6[0],
      setgoalusd = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      goal = _useState7[0],
      setgoal = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      dateleft = _useState8[0],
      setdateleft = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      logo = _useState9[0],
      setlogo = _useState9[1];

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      eventuri = _useState10[0],
      setEventuri = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      modalShow = _useState11[0],
      setModalShow = _useState11[1];

  function LeftDate(datetext) {
    var c = new Date(datetext).getTime();
    var n = new Date().getTime();
    var d = c - n;
    var da = Math.floor(d / (1000 * 60 * 60 * 24));
    var h = Math.floor(d % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var m = Math.floor(d % (1000 * 60 * 60) / (1000 * 60));
    var s = Math.floor(d % (1000 * 60) / 1000);
    return da.toString() + " Days " + h.toString() + " hours " + m.toString() + " minutes " + s.toString() + " seconds";
  }

  function fetchContractData() {
    return _fetchContractData.apply(this, arguments);
  }

  function _fetchContractData() {
    _fetchContractData = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var id, arr, totalTokens, i, obj, object, pricedes1;
      return C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              id = router.query.id;

              if (!(contract && id)) {
                _context.next = 26;
                break;
              }

              arr = [];
              _context.next = 6;
              return contract.gettokenSearchEventTotal(id);

            case 6:
              totalTokens = _context.sent;
              i = 0;

            case 8:
              if (!(i < Number(10))) {
                _context.next = 24;
                break;
              }

              _context.next = 11;
              return totalTokens[i];

            case 11:
              obj = _context.sent;
              _context.next = 14;
              return JSON.parse(obj);

            case 14:
              object = _context.sent;
              _context.t0 = console;
              _context.next = 18;
              return object;

            case 18:
              _context.t1 = _context.sent;

              _context.t0.log.call(_context.t0, _context.t1);

              if (object.title) {
                pricedes1 = 0;

                try {
                  pricedes1 = Number(object.properties.price.description * 3817.09);
                } catch (ex) {}

                arr.push({
                  Id: i,
                  name: object.name.description,
                  description: object.description.description,
                  Bidprice: pricedes1,
                  type: object.typeimg.description,
                  image: object.image.description
                });
              }

            case 21:
              i++;
              _context.next = 8;
              break;

            case 24:
              setList(arr);
              document.getElementById("Loading").style = "display:none"; // setEventuri(value);
              // const object = JSON.parse(value);
              // setTitle(object.properties.Title.description);
              // setgoalusd(Number(object.properties.Goal.description * 3817.09));
              // setgoal(Number(object.properties.Goal.description));
              // setdateleft(LeftDate(object.properties.Date.description));
              // setlogo(object.properties.logo.description);
              // setTokenName(await contract.name());
              // setTokenSymbol(await contract.symbol());

            case 26:
              _context.next = 31;
              break;

            case 28:
              _context.prev = 28;
              _context.t2 = _context["catch"](0);
              console.error(_context.t2);

            case 31:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 28]]);
    }));
    return _fetchContractData.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    fetchContractData();
  }, [router.query, contract]);

  function activateBidNFTModal() {
    setModalShow(true);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("title", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "description",
        content: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "row EventContainer",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        style: {
          "display": "flex"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
          src: logo,
          className: "AuctionImage"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "DetialsContainer",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "TextContainer",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
              children: "Goal: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
              children: ["$ ", goalusd, " (", goal, " ETH)"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "TextContainer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
              name: "dateleft",
              children: dateleft
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      id: "Loading",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }, this), list.map(function (listItem) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "row ElementsContainer bgWhite",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          style: {
            "display": "flex"
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            src: "",
            className: "AuctionImage"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            style: {
              width: "100%"
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "DetialsContainer",
              style: {
                rowGap: "5px"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
                children: listItem.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h5", {
                style: {
                  color: "rgb(139, 139, 139)"
                },
                children: "Type: "
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "TextContainer",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h5", {
                  style: {
                    color: "#8B8B8B"
                  },
                  children: listItem.description
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "ElementBottomContainer",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                style: {
                  width: "116px"
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h8", {
                  className: "smallgrey",
                  children: "Current bid"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
                  className: "bidprice",
                  children: ["$ ", listItem.Bidprice]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h8", {
                  className: "smallgrey",
                  children: dateleft
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 140,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "BidAllcontainer",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "Bidcontainer col",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "card BidcontainerCard",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      className: "card-body",
                      children: "Bid"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 145,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 144,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 143,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }, _this)
      }, listItem.Id, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_modals_BidNFTModal__WEBPACK_IMPORTED_MODULE_6__.default, {
      show: modalShow,
      onHide: function onHide() {
        setModalShow(false); // This is a poor implementation, better to implement an event listener

        fetchContractData();
      },
      contract: contract,
      Amount: signerAddress,
      tokenId: tokenId,
      senderAddress: signerAddress
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(ViewNFT, "NarmhhmFqdoCntJq3rkrtM8/5Dc=", false, function () {
  return [_services_useContract__WEBPACK_IMPORTED_MODULE_7__.default, next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
});

_c = ViewNFT;

var _c;

$RefreshReg$(_c, "ViewNFT");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9uYXRpb24vYXVjdGlvbi9baWRdLmpzeCJdLCJuYW1lcyI6WyJWaWV3TkZUIiwidXNlciIsInVzZUNvbnRyYWN0IiwiY29udHJhY3QiLCJzaWduZXJBZGRyZXNzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ0b2tlbklkIiwic2V0VG9rZW5JZCIsImxpc3QiLCJzZXRMaXN0IiwidG9rZW5OYW1lIiwic2V0VG9rZW5OYW1lIiwidG9rZW5TeW1ib2wiLCJzZXRUb2tlblN5bWJvbCIsInRpdGxlIiwic2V0VGl0bGUiLCJnb2FsdXNkIiwic2V0Z29hbHVzZCIsImdvYWwiLCJzZXRnb2FsIiwiZGF0ZWxlZnQiLCJzZXRkYXRlbGVmdCIsImxvZ28iLCJzZXRsb2dvIiwiZXZlbnR1cmkiLCJzZXRFdmVudHVyaSIsIm1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsIkxlZnREYXRlIiwiZGF0ZXRleHQiLCJjIiwiRGF0ZSIsImdldFRpbWUiLCJuIiwiZCIsImRhIiwiTWF0aCIsImZsb29yIiwiaCIsIm0iLCJzIiwidG9TdHJpbmciLCJmZXRjaENvbnRyYWN0RGF0YSIsImlkIiwicXVlcnkiLCJhcnIiLCJnZXR0b2tlblNlYXJjaEV2ZW50VG90YWwiLCJ0b3RhbFRva2VucyIsImkiLCJOdW1iZXIiLCJvYmoiLCJKU09OIiwicGFyc2UiLCJvYmplY3QiLCJjb25zb2xlIiwibG9nIiwicHJpY2VkZXMxIiwicHJvcGVydGllcyIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJleCIsInB1c2giLCJJZCIsIm5hbWUiLCJCaWRwcmljZSIsInR5cGUiLCJ0eXBlaW1nIiwiaW1hZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJlcnJvciIsInVzZUVmZmVjdCIsImFjdGl2YXRlQmlkTkZUTW9kYWwiLCJtYXAiLCJsaXN0SXRlbSIsIndpZHRoIiwicm93R2FwIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7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UyxFQUFDLHVCQUFmO0FBQUEsMkNBQ0k7QUFBSywrQkFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixTQUFVdUQsUUFBUSxDQUFDYixFQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRE07QUFBQSxLQUFULENBMUJMLGVBNERJLDhEQUFDLG1FQUFEO0FBQ0ksVUFBSSxFQUFFcEMsU0FEVjtBQUVJLFlBQU0sRUFBRSxrQkFBTTtBQUNWQyxvQkFBWSxDQUFDLEtBQUQsQ0FBWixDQURVLENBRVY7O0FBQ0FlLHlCQUFpQjtBQUNwQixPQU5MO0FBT0ksY0FBUSxFQUFFekMsUUFQZDtBQVFJLFlBQU0sRUFBRUMsYUFSWjtBQVNJLGFBQU8sRUFBRUksT0FUYjtBQVVJLG1CQUFhLEVBQUVKO0FBVm5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1REo7QUFBQSxrQkFESjtBQTRFSDs7R0E3SnVCSixPO1VBQ2dCRSwwRCxFQUNyQkksa0Q7OztLQUZLTixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RvbmF0aW9uL2F1Y3Rpb24vW2lkXS44Nzg3NTlkOWMwZDM5N2I0MDQ0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xyXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0ltYWdlJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuXHJcbmltcG9ydCBCaWRORlRNb2RhbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL21vZGFscy9CaWRORlRNb2RhbCc7XHJcblxyXG5pbXBvcnQgdXNlQ29udHJhY3QgZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXNlQ29udHJhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmlld05GVCh1c2VyKSB7XHJcbiAgICBjb25zdCB7IGNvbnRyYWN0LCBzaWduZXJBZGRyZXNzIH0gPSB1c2VDb250cmFjdCgnRVJDNzIxJyk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFt0b2tlbklkLCBzZXRUb2tlbklkXSA9IHVzZVN0YXRlKC0xKTtcclxuICAgIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt0b2tlbk5hbWUsIHNldFRva2VuTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdG9rZW5TeW1ib2wsIHNldFRva2VuU3ltYm9sXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2dvYWx1c2QsIHNldGdvYWx1c2RdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2dvYWwsIHNldGdvYWxdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2RhdGVsZWZ0LCBzZXRkYXRlbGVmdF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbG9nbywgc2V0bG9nb10gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgW2V2ZW50dXJpLCBzZXRFdmVudHVyaV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbW9kYWxTaG93LCBzZXRNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBMZWZ0RGF0ZShkYXRldGV4dCkge1xyXG4gICAgICAgIHZhciBjID0gbmV3IERhdGUoZGF0ZXRleHQpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgbiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHZhciBkID0gYyAtIG47XHJcbiAgICAgICAgdmFyIGRhID0gTWF0aC5mbG9vcihkIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICAgICAgICB2YXIgaCA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XHJcbiAgICAgICAgdmFyIG0gPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSk7XHJcbiAgICAgICAgdmFyIHMgPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuIChkYS50b1N0cmluZygpICsgXCIgRGF5cyBcIiArIGgudG9TdHJpbmcoKSArIFwiIGhvdXJzIFwiICsgbS50b1N0cmluZygpICsgXCIgbWludXRlcyBcIiArIHMudG9TdHJpbmcoKSArIFwiIHNlY29uZHNcIik7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaENvbnRyYWN0RGF0YSgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICAgICAgICAgIGlmIChjb250cmFjdCAmJiBpZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJyID0gW107XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbFRva2VucyA9IGF3YWl0IGNvbnRyYWN0LmdldHRva2VuU2VhcmNoRXZlbnRUb3RhbChpZCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE51bWJlcigxMCk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IGF3YWl0IHRvdGFsVG9rZW5zW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iamVjdCA9IGF3YWl0IEpTT04ucGFyc2Uob2JqKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhd2FpdCBvYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvYmplY3QudGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByaWNlZGVzMSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7IHByaWNlZGVzMSA9IE51bWJlcihvYmplY3QucHJvcGVydGllcy5wcmljZS5kZXNjcmlwdGlvbiAqIDM4MTcuMDkpIH0gY2F0Y2ggKGV4KSB7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSWQ6IGksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBvYmplY3QubmFtZS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBvYmplY3QuZGVzY3JpcHRpb24uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCaWRwcmljZTogcHJpY2VkZXMxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogb2JqZWN0LnR5cGVpbWcuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogb2JqZWN0LmltYWdlLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNldExpc3QoYXJyKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKS5zdHlsZSA9IFwiZGlzcGxheTpub25lXCI7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHNldEV2ZW50dXJpKHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBvYmplY3QgPSBKU09OLnBhcnNlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIC8vIHNldFRpdGxlKG9iamVjdC5wcm9wZXJ0aWVzLlRpdGxlLmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgICAgIC8vIHNldGdvYWx1c2QoTnVtYmVyKG9iamVjdC5wcm9wZXJ0aWVzLkdvYWwuZGVzY3JpcHRpb24gKiAzODE3LjA5KSk7XHJcbiAgICAgICAgICAgICAgICAvLyBzZXRnb2FsKE51bWJlcihvYmplY3QucHJvcGVydGllcy5Hb2FsLmRlc2NyaXB0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBzZXRkYXRlbGVmdChMZWZ0RGF0ZShvYmplY3QucHJvcGVydGllcy5EYXRlLmRlc2NyaXB0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBzZXRsb2dvKG9iamVjdC5wcm9wZXJ0aWVzLmxvZ28uZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgLy8gc2V0VG9rZW5OYW1lKGF3YWl0IGNvbnRyYWN0Lm5hbWUoKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBzZXRUb2tlblN5bWJvbChhd2FpdCBjb250cmFjdC5zeW1ib2woKSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaENvbnRyYWN0RGF0YSgpO1xyXG5cclxuICAgIH0sIFtyb3V0ZXIucXVlcnksIGNvbnRyYWN0XSk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlQmlkTkZUTW9kYWwoKSB7XHJcbiAgICAgICAgc2V0TW9kYWxTaG93KHRydWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBFdmVudENvbnRhaW5lclwiID5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgXCJkaXNwbGF5XCI6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBjbGFzc05hbWU9XCJBdWN0aW9uSW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGV0aWFsc0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3RpdGxlfTwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nVGV4dENvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+R29hbDogPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND4kIHtnb2FsdXNkfSAoe2dvYWx9IEVUSCk8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1RleHRDb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IG5hbWU9J2RhdGVsZWZ0Jz57ZGF0ZWxlZnR9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9J0xvYWRpbmcnPlxyXG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmcuLi48L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2xpc3QubWFwKChsaXN0SXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xpc3RJdGVtLklkfSBjbGFzc05hbWU9XCJyb3cgRWxlbWVudHNDb250YWluZXIgYmdXaGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgXCJkaXNwbGF5XCI6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiIGNsYXNzTmFtZT1cIkF1Y3Rpb25JbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEZXRpYWxzQ29udGFpbmVyXCIgc3R5bGU9e3sgcm93R2FwOiBcIjVweFwiIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e2xpc3RJdGVtLm5hbWV9PC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcInJnYigxMzksIDEzOSwgMTM5KVwiIH19PlR5cGU6IDwvaDU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGV4dENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6IFwiIzhCOEI4QlwiIH19PntsaXN0SXRlbS5kZXNjcmlwdGlvbn08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRWxlbWVudEJvdHRvbUNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMTZweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDggY2xhc3NOYW1lPVwic21hbGxncmV5XCI+Q3VycmVudCBiaWQ8L2g4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdiaWRwcmljZSc+JCB7bGlzdEl0ZW0uQmlkcHJpY2V9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg4IGNsYXNzTmFtZT1cInNtYWxsZ3JleVwiPntkYXRlbGVmdH08L2g4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdCaWRBbGxjb250YWluZXInID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJCaWRjb250YWluZXIgY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgQmlkY29udGFpbmVyQ2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+QmlkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcblxyXG5cclxuICAgICAgICAgICAgPEJpZE5GVE1vZGFsXHJcbiAgICAgICAgICAgICAgICBzaG93PXttb2RhbFNob3d9XHJcbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRNb2RhbFNob3coZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBwb29yIGltcGxlbWVudGF0aW9uLCBiZXR0ZXIgdG8gaW1wbGVtZW50IGFuIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hDb250cmFjdERhdGEoKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjb250cmFjdD17Y29udHJhY3R9XHJcbiAgICAgICAgICAgICAgICBBbW91bnQ9e3NpZ25lckFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICB0b2tlbklkPXt0b2tlbklkfVxyXG4gICAgICAgICAgICAgICAgc2VuZGVyQWRkcmVzcz17c2lnbmVyQWRkcmVzc31cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=