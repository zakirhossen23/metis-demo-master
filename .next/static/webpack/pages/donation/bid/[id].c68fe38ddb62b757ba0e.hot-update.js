self["webpackHotUpdate_N_E"]("pages/donation/bid/[id]",{

/***/ "./pages/donation/bid/[id].jsx":
/*!*************************************!*\
  !*** ./pages/donation/bid/[id].jsx ***!
  \*************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_modals_BidNFTModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/modals/BidNFTModal */ "./components/modals/BidNFTModal.jsx");
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/useContract */ "./services/useContract.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\zakir\\Documents\\test\\metis-demo-master\\pages\\donation\\bid\\[id].jsx",
    _s = $RefreshSig$();












function ViewNFT(user) {
  _s();

  var _this = this;

  var _useContract = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_8__.default)('ERC721'),
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
      title = _useState3[0],
      setTitle = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      description = _useState4[0],
      setdescription = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      type = _useState5[0],
      settype = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      higherbid = _useState6[0],
      sethigherbid = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      higherbidusd = _useState7[0],
      sethigherbidusd = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      dateleft = _useState8[0],
      setdateleft = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      logo = _useState9[0],
      setlogo = _useState9[1];

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      selectid = _useState10[0],
      setselectid = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      selecttype = _useState11[0],
      setselecttype = _useState11[1];

  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      tokenuri = _useState12[0],
      setTokenuri = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      modalShow = _useState13[0],
      setModalShow = _useState13[1];

  function addZero(num) {
    return num < 10 ? "0".concat(num) : num;
  }

  function AmPM(num) {
    return num < 12 ? 'AM' : 'PM';
  }

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

  var formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  function fetchContractData() {
    return _fetchContractData.apply(this, arguments);
  }

  function _fetchContractData() {
    _fetchContractData = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var id, value, arr, totalBids, i, obj, _object, pricedes1, BidId, Datetime, currentdate, object;

      return C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              id = router.query.id;

              if (!(contract && id)) {
                _context.next = 53;
                break;
              }

              setTokenId(id);
              _context.next = 6;
              return contract.tokenURI(id);

            case 6:
              value = _context.sent;
              console.log(value);
              arr = [];
              _context.next = 11;
              return contract.getBidsSearchToken(id);

            case 11:
              totalBids = _context.sent;
              console.log(totalBids);
              i = 0;

            case 14:
              if (!(i < Number(10))) {
                _context.next = 41;
                break;
              }

              _context.next = 17;
              return totalBids[i];

            case 17:
              obj = _context.sent;
              _object = {};
              _context.prev = 19;
              _context.next = 22;
              return JSON.parse(obj);

            case 22:
              _object = _context.sent;
              _context.next = 27;
              break;

            case 25:
              _context.prev = 25;
              _context.t0 = _context["catch"](19);

            case 27:
              if (!_object.title) {
                _context.next = 38;
                break;
              }

              pricedes1 = 0;

              try {
                pricedes1 = formatter.format(Number(_object.properties.bid.description * 3817.09));
              } catch (ex) {}

              _context.t1 = Number;
              _context.next = 33;
              return contract.getBidIdByUri(obj);

            case 33:
              _context.t2 = _context.sent;
              BidId = (0, _context.t1)(_context.t2);
              Datetime = new Date(_object.properties.time.description);
              currentdate = "".concat(addZero(Datetime.getDate()), "/").concat(addZero(Datetime.getMonth() + 1), "/").concat(addZero(Datetime.getFullYear()), " ").concat(addZero(Datetime.getHours()), ":").concat(addZero(Datetime.getMinutes()), ":").concat(addZero(Datetime.getSeconds()), " ").concat(AmPM(Datetime.getHours()));
              arr.push({
                Id: BidId,
                name: _object.properties.username.description,
                time: currentdate,
                bidprice: _object.properties.bid.description,
                bidpriceusd: pricedes1
              });

            case 38:
              i++;
              _context.next = 14;
              break;

            case 41:
              console.log(arr);
              setList(arr);
              if (document.getElementById("Loading")) document.getElementById("Loading").style = "display:none";
              setTokenuri(value);
              object = JSON.parse(value);
              setTitle(object.properties.name.description);
              setdescription(object.properties.description.description);
              sethigherbidusd(formatter.format(Number(object.properties.price.description * 3817.09)));
              sethigherbid(Number(object.properties.price.description));
              setdateleft(object.properties.date.description);
              settype(object.properties.typeimg.description);
              setlogo(object.properties.logo.description);

            case 53:
              _context.next = 58;
              break;

            case 55:
              _context.prev = 55;
              _context.t3 = _context["catch"](0);
              console.error(_context.t3);

            case 58:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 55], [19, 25]]);
    }));
    return _fetchContractData.apply(this, arguments);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    fetchContractData();
  }, [router.query, contract]);
  setInterval(function () {
    calculateTimeLeft();
  }, 1000);

  function calculateTimeLeft() {
    try {
      var allDates = document.getElementsByName("dateleft");

      for (var i = 0; i < allDates.length; i++) {
        var date = allDates[i].getAttribute("date");
        allDates[i].innerHTML = LeftDate(date);
      }
    } catch (error) {}
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("title", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "description",
        content: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 132,
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
          lineNumber: 140,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "TokenDetialsContainer",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "TextContainer",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
              children: "Description: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
              children: description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "TextContainer",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
              children: "Type: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 148,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
              children: type
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "TextContainer",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
              children: "Higher Bid: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
              children: ["$ ", higherbidusd, " (", higherbid, " ETH)"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "TextContainer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
              name: "dateleft",
              date: dateleft,
              children: dateleft
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 156,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      id: "Loading",
      className: "LoadingArea",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "ElementsContainer",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "tableHeader",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "tableHeaderContainer",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "tableheaderDateContainer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
              className: "header",
              children: "Date"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "tableheaderUserContainer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
              className: "header",
              children: "User Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "tableheaderBidContainer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
              className: "header",
              children: "Bid"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 17
      }, this), " ", list.map(function (listItem) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "tableFullRowContainer",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "tableRowContainer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "tableRowCellContainer",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "tableRowCellDateContainer",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h5", {
                  className: "cell",
                  children: listItem.time
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "tableRowCellUserContainer",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h5", {
                  className: "cell",
                  children: listItem.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 187,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "tableRowCellBidContainer",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h5", {
                  className: "cell",
                  children: ["$", listItem.bidpriceusd, " (", listItem.bidprice, " ETH)"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 190,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 25
          }, _this)
        }, listItem.Id, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 21
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(ViewNFT, "xNOnM0mqCQBaKljx0Zv3JuyWGDo=", false, function () {
  return [_services_useContract__WEBPACK_IMPORTED_MODULE_8__.default, next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9uYXRpb24vYmlkL1tpZF0uanN4Il0sIm5hbWVzIjpbIlZpZXdORlQiLCJ1c2VyIiwidXNlQ29udHJhY3QiLCJjb250cmFjdCIsInNpZ25lckFkZHJlc3MiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInRva2VuSWQiLCJzZXRUb2tlbklkIiwibGlzdCIsInNldExpc3QiLCJ0aXRsZSIsInNldFRpdGxlIiwiZGVzY3JpcHRpb24iLCJzZXRkZXNjcmlwdGlvbiIsInR5cGUiLCJzZXR0eXBlIiwiaGlnaGVyYmlkIiwic2V0aGlnaGVyYmlkIiwiaGlnaGVyYmlkdXNkIiwic2V0aGlnaGVyYmlkdXNkIiwiZGF0ZWxlZnQiLCJzZXRkYXRlbGVmdCIsImxvZ28iLCJzZXRsb2dvIiwic2VsZWN0aWQiLCJzZXRzZWxlY3RpZCIsInNlbGVjdHR5cGUiLCJzZXRzZWxlY3R0eXBlIiwidG9rZW51cmkiLCJzZXRUb2tlbnVyaSIsIm1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsImFkZFplcm8iLCJudW0iLCJBbVBNIiwiTGVmdERhdGUiLCJkYXRldGV4dCIsImMiLCJEYXRlIiwiZ2V0VGltZSIsIm4iLCJkIiwiZGEiLCJNYXRoIiwiZmxvb3IiLCJoIiwibSIsInMiLCJ0b1N0cmluZyIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJmZXRjaENvbnRyYWN0RGF0YSIsImlkIiwicXVlcnkiLCJ0b2tlblVSSSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImFyciIsImdldEJpZHNTZWFyY2hUb2tlbiIsInRvdGFsQmlkcyIsImkiLCJOdW1iZXIiLCJvYmoiLCJvYmplY3QiLCJKU09OIiwicGFyc2UiLCJwcmljZWRlczEiLCJmb3JtYXQiLCJwcm9wZXJ0aWVzIiwiYmlkIiwiZXgiLCJnZXRCaWRJZEJ5VXJpIiwiQmlkSWQiLCJEYXRldGltZSIsInRpbWUiLCJjdXJyZW50ZGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsInB1c2giLCJJZCIsIm5hbWUiLCJ1c2VybmFtZSIsImJpZHByaWNlIiwiYmlkcHJpY2V1c2QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJwcmljZSIsImRhdGUiLCJ0eXBlaW1nIiwiZXJyb3IiLCJ1c2VFZmZlY3QiLCJzZXRJbnRlcnZhbCIsImNhbGN1bGF0ZVRpbWVMZWZ0IiwiYWxsRGF0ZXMiLCJnZXRFbGVtZW50c0J5TmFtZSIsImxlbmd0aCIsImdldEF0dHJpYnV0ZSIsImlubmVySFRNTCIsIm1hcCIsImxpc3RJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVlLFNBQVNBLE9BQVQsQ0FBaUJDLElBQWpCLEVBQXVCO0FBQUE7O0FBQUE7O0FBQUEscUJBQ0VDLDhEQUFXLENBQUMsUUFBRCxDQURiO0FBQUEsTUFDMUJDLFFBRDBCLGdCQUMxQkEsUUFEMEI7QUFBQSxNQUNoQkMsYUFEZ0IsZ0JBQ2hCQSxhQURnQjs7QUFFbEMsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFGa0Msa0JBR0pDLCtDQUFRLENBQUMsQ0FBQyxDQUFGLENBSEo7QUFBQSxNQUczQkMsT0FIMkI7QUFBQSxNQUdsQkMsVUFIa0I7O0FBQUEsbUJBSVZGLCtDQUFRLENBQUMsRUFBRCxDQUpFO0FBQUEsTUFJM0JHLElBSjJCO0FBQUEsTUFJckJDLE9BSnFCOztBQUFBLG1CQUtSSiwrQ0FBUSxDQUFDLEVBQUQsQ0FMQTtBQUFBLE1BSzNCSyxLQUwyQjtBQUFBLE1BS3BCQyxRQUxvQjs7QUFBQSxtQkFNSU4sK0NBQVEsQ0FBQyxFQUFELENBTlo7QUFBQSxNQU0zQk8sV0FOMkI7QUFBQSxNQU1kQyxjQU5jOztBQUFBLG1CQU9WUiwrQ0FBUSxDQUFDLEVBQUQsQ0FQRTtBQUFBLE1BTzNCUyxJQVAyQjtBQUFBLE1BT3JCQyxPQVBxQjs7QUFBQSxtQkFTQVYsK0NBQVEsQ0FBQyxFQUFELENBVFI7QUFBQSxNQVMzQlcsU0FUMkI7QUFBQSxNQVNoQkMsWUFUZ0I7O0FBQUEsbUJBV01aLCtDQUFRLENBQUMsRUFBRCxDQVhkO0FBQUEsTUFXM0JhLFlBWDJCO0FBQUEsTUFXYkMsZUFYYTs7QUFBQSxtQkFhRmQsK0NBQVEsQ0FBQyxFQUFELENBYk47QUFBQSxNQWEzQmUsUUFiMkI7QUFBQSxNQWFqQkMsV0FiaUI7O0FBQUEsbUJBY1ZoQiwrQ0FBUSxDQUFDLEVBQUQsQ0FkRTtBQUFBLE1BYzNCaUIsSUFkMkI7QUFBQSxNQWNyQkMsT0FkcUI7O0FBQUEsb0JBZUZsQiwrQ0FBUSxDQUFDLEVBQUQsQ0FmTjtBQUFBLE1BZTNCbUIsUUFmMkI7QUFBQSxNQWVqQkMsV0FmaUI7O0FBQUEsb0JBZ0JFcEIsK0NBQVEsQ0FBQyxFQUFELENBaEJWO0FBQUEsTUFnQjNCcUIsVUFoQjJCO0FBQUEsTUFnQmZDLGFBaEJlOztBQUFBLG9CQWtCRnRCLCtDQUFRLENBQUMsRUFBRCxDQWxCTjtBQUFBLE1Ba0IzQnVCLFFBbEIyQjtBQUFBLE1Ba0JqQkMsV0FsQmlCOztBQUFBLG9CQW1CQXhCLCtDQUFRLENBQUMsS0FBRCxDQW5CUjtBQUFBLE1BbUIzQnlCLFNBbkIyQjtBQUFBLE1BbUJoQkMsWUFuQmdCOztBQXFCbEMsV0FBU0MsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0I7QUFDbEIsV0FBT0EsR0FBRyxHQUFHLEVBQU4sY0FBZUEsR0FBZixJQUF1QkEsR0FBOUI7QUFDSDs7QUFDRCxXQUFTQyxJQUFULENBQWNELEdBQWQsRUFBbUI7QUFDZixXQUFPQSxHQUFHLEdBQUcsRUFBTixHQUFXLElBQVgsR0FBa0IsSUFBekI7QUFDSDs7QUFDRCxXQUFTRSxRQUFULENBQWtCQyxRQUFsQixFQUE0QjtBQUN4QixRQUFJQyxDQUFDLEdBQUcsSUFBSUMsSUFBSixDQUFTRixRQUFULEVBQW1CRyxPQUFuQixFQUFSO0FBQ0EsUUFBSUMsQ0FBQyxHQUFHLElBQUlGLElBQUosR0FBV0MsT0FBWCxFQUFSO0FBQ0EsUUFBSUUsQ0FBQyxHQUFHSixDQUFDLEdBQUdHLENBQVo7QUFDQSxRQUFJRSxFQUFFLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxDQUFDLElBQUksT0FBTyxFQUFQLEdBQVksRUFBWixHQUFpQixFQUFyQixDQUFaLENBQVQ7QUFDQSxRQUFJSSxDQUFDLEdBQUdGLElBQUksQ0FBQ0MsS0FBTCxDQUFZSCxDQUFDLElBQUksT0FBTyxFQUFQLEdBQVksRUFBWixHQUFpQixFQUFyQixDQUFGLElBQStCLE9BQU8sRUFBUCxHQUFZLEVBQTNDLENBQVgsQ0FBUjtBQUNBLFFBQUlLLENBQUMsR0FBR0gsSUFBSSxDQUFDQyxLQUFMLENBQVlILENBQUMsSUFBSSxPQUFPLEVBQVAsR0FBWSxFQUFoQixDQUFGLElBQTBCLE9BQU8sRUFBakMsQ0FBWCxDQUFSO0FBQ0EsUUFBSU0sQ0FBQyxHQUFHSixJQUFJLENBQUNDLEtBQUwsQ0FBWUgsQ0FBQyxJQUFJLE9BQU8sRUFBWCxDQUFGLEdBQW9CLElBQS9CLENBQVI7QUFDQSxXQUFRQyxFQUFFLENBQUNNLFFBQUgsS0FBZ0IsUUFBaEIsR0FBMkJILENBQUMsQ0FBQ0csUUFBRixFQUEzQixHQUEwQyxTQUExQyxHQUFzREYsQ0FBQyxDQUFDRSxRQUFGLEVBQXRELEdBQXFFLFdBQXJFLEdBQW1GRCxDQUFDLENBQUNDLFFBQUYsRUFBbkYsR0FBa0csVUFBMUc7QUFDSDs7QUFDRCxNQUFNQyxTQUFTLEdBQUcsSUFBSUMsSUFBSSxDQUFDQyxZQUFULENBQXNCLE9BQXRCLEVBQStCO0FBQzdDQyx5QkFBcUIsRUFBRSxDQURzQjtBQUU3Q0MseUJBQXFCLEVBQUU7QUFGc0IsR0FBL0IsQ0FBbEI7O0FBckNrQyxXQTBDbkJDLGlCQTFDbUI7QUFBQTtBQUFBOztBQUFBO0FBQUEsNlZBMENsQztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFZ0JDLGdCQUZoQixHQUV1QnBELE1BQU0sQ0FBQ3FELEtBRjlCLENBRWdCRCxFQUZoQjs7QUFBQSxvQkFHWXRELFFBQVEsSUFBSXNELEVBSHhCO0FBQUE7QUFBQTtBQUFBOztBQUlZaEQsd0JBQVUsQ0FBQ2dELEVBQUQsQ0FBVjtBQUpaO0FBQUEscUJBS2dDdEQsUUFBUSxDQUFDd0QsUUFBVCxDQUFrQkYsRUFBbEIsQ0FMaEM7O0FBQUE7QUFLa0JHLG1CQUxsQjtBQU1ZQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDTUcsaUJBUGxCLEdBT3dCLEVBUHhCO0FBQUE7QUFBQSxxQkFRb0M1RCxRQUFRLENBQUM2RCxrQkFBVCxDQUE0QlAsRUFBNUIsQ0FScEM7O0FBQUE7QUFRa0JRLHVCQVJsQjtBQVNZSixxQkFBTyxDQUFDQyxHQUFSLENBQVlHLFNBQVo7QUFDU0MsZUFWckIsR0FVeUIsQ0FWekI7O0FBQUE7QUFBQSxvQkFVNEJBLENBQUMsR0FBR0MsTUFBTSxDQUFDLEVBQUQsQ0FWdEM7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxxQkFXa0NGLFNBQVMsQ0FBQ0MsQ0FBRCxDQVgzQzs7QUFBQTtBQVdzQkUsaUJBWHRCO0FBWXNCQyxxQkFadEIsR0FZK0IsRUFaL0I7QUFBQTtBQUFBO0FBQUEscUJBYXFDQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsR0FBWCxDQWJyQzs7QUFBQTtBQWFzQkMscUJBYnRCO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQkFjb0JBLE9BQU0sQ0FBQ3pELEtBZDNCO0FBQUE7QUFBQTtBQUFBOztBQWV3QjRELHVCQWZ4QixHQWVvQyxDQWZwQzs7QUFnQm9CLGtCQUFJO0FBQUVBLHlCQUFTLEdBQUdyQixTQUFTLENBQUNzQixNQUFWLENBQWlCTixNQUFNLENBQUNFLE9BQU0sQ0FBQ0ssVUFBUCxDQUFrQkMsR0FBbEIsQ0FBc0I3RCxXQUF0QixHQUFvQyxPQUFyQyxDQUF2QixDQUFaO0FBQW1GLGVBQXpGLENBQTBGLE9BQU84RCxFQUFQLEVBQVcsQ0FBRzs7QUFoQjVILDRCQWlCa0NULE1BakJsQztBQUFBO0FBQUEscUJBaUIrQ2hFLFFBQVEsQ0FBQzBFLGFBQVQsQ0FBdUJULEdBQXZCLENBakIvQzs7QUFBQTtBQUFBO0FBaUIwQlUsbUJBakIxQjtBQWtCMEJDLHNCQWxCMUIsR0FrQnFDLElBQUl2QyxJQUFKLENBQVM2QixPQUFNLENBQUNLLFVBQVAsQ0FBa0JNLElBQWxCLENBQXVCbEUsV0FBaEMsQ0FsQnJDO0FBb0J3Qm1FLHlCQXBCeEIsYUFvQnlDL0MsT0FBTyxDQUFDNkMsUUFBUSxDQUFDRyxPQUFULEVBQUQsQ0FwQmhELGNBb0J3RWhELE9BQU8sQ0FBQzZDLFFBQVEsQ0FBQ0ksUUFBVCxLQUFzQixDQUF2QixDQXBCL0UsY0FvQjRHakQsT0FBTyxDQUFDNkMsUUFBUSxDQUFDSyxXQUFULEVBQUQsQ0FwQm5ILGNBb0IrSWxELE9BQU8sQ0FBQzZDLFFBQVEsQ0FBQ00sUUFBVCxFQUFELENBcEJ0SixjQW9CK0tuRCxPQUFPLENBQUM2QyxRQUFRLENBQUNPLFVBQVQsRUFBRCxDQXBCdEwsY0FvQmlOcEQsT0FBTyxDQUFDNkMsUUFBUSxDQUFDUSxVQUFULEVBQUQsQ0FwQnhOLGNBb0JtUG5ELElBQUksQ0FBQzJDLFFBQVEsQ0FBQ00sUUFBVCxFQUFELENBcEJ2UDtBQXFCb0J0QixpQkFBRyxDQUFDeUIsSUFBSixDQUFTO0FBQ0xDLGtCQUFFLEVBQUVYLEtBREM7QUFFTFksb0JBQUksRUFBRXJCLE9BQU0sQ0FBQ0ssVUFBUCxDQUFrQmlCLFFBQWxCLENBQTJCN0UsV0FGNUI7QUFHTGtFLG9CQUFJLEVBQUVDLFdBSEQ7QUFJTFcsd0JBQVEsRUFBRXZCLE9BQU0sQ0FBQ0ssVUFBUCxDQUFrQkMsR0FBbEIsQ0FBc0I3RCxXQUozQjtBQUtMK0UsMkJBQVcsRUFBRXJCO0FBTFIsZUFBVDs7QUFyQnBCO0FBVTRDTixlQUFDLEVBVjdDO0FBQUE7QUFBQTs7QUFBQTtBQThCWUwscUJBQU8sQ0FBQ0MsR0FBUixDQUFZQyxHQUFaO0FBQ0FwRCxxQkFBTyxDQUFDb0QsR0FBRCxDQUFQO0FBQ0Esa0JBQUkrQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBSixFQUNJRCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUNDLEtBQW5DLEdBQTJDLGNBQTNDO0FBR0pqRSx5QkFBVyxDQUFDNkIsS0FBRCxDQUFYO0FBRU1TLG9CQXRDbEIsR0FzQzJCQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1gsS0FBWCxDQXRDM0I7QUF1Q1kvQyxzQkFBUSxDQUFDd0QsTUFBTSxDQUFDSyxVQUFQLENBQWtCZ0IsSUFBbEIsQ0FBdUI1RSxXQUF4QixDQUFSO0FBQ0FDLDRCQUFjLENBQUNzRCxNQUFNLENBQUNLLFVBQVAsQ0FBa0I1RCxXQUFsQixDQUE4QkEsV0FBL0IsQ0FBZDtBQUNBTyw2QkFBZSxDQUFDOEIsU0FBUyxDQUFDc0IsTUFBVixDQUFpQk4sTUFBTSxDQUFDRSxNQUFNLENBQUNLLFVBQVAsQ0FBa0J1QixLQUFsQixDQUF3Qm5GLFdBQXhCLEdBQXNDLE9BQXZDLENBQXZCLENBQUQsQ0FBZjtBQUNBSywwQkFBWSxDQUFDZ0QsTUFBTSxDQUFDRSxNQUFNLENBQUNLLFVBQVAsQ0FBa0J1QixLQUFsQixDQUF3Qm5GLFdBQXpCLENBQVAsQ0FBWjtBQUNBUyx5QkFBVyxDQUFDOEMsTUFBTSxDQUFDSyxVQUFQLENBQWtCd0IsSUFBbEIsQ0FBdUJwRixXQUF4QixDQUFYO0FBQ0FHLHFCQUFPLENBQUNvRCxNQUFNLENBQUNLLFVBQVAsQ0FBa0J5QixPQUFsQixDQUEwQnJGLFdBQTNCLENBQVA7QUFDQVcscUJBQU8sQ0FBQzRDLE1BQU0sQ0FBQ0ssVUFBUCxDQUFrQmxELElBQWxCLENBQXVCVixXQUF4QixDQUFQOztBQTdDWjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBZ0RRK0MscUJBQU8sQ0FBQ3VDLEtBQVI7O0FBaERSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBMUNrQztBQUFBO0FBQUE7O0FBNkZsQ0Msa0RBQVMsQ0FBQyxZQUFNO0FBQ1o3QyxxQkFBaUI7QUFFcEIsR0FIUSxFQUdOLENBQUNuRCxNQUFNLENBQUNxRCxLQUFSLEVBQWV2RCxRQUFmLENBSE0sQ0FBVDtBQUtBbUcsYUFBVyxDQUFDLFlBQVk7QUFDcEJDLHFCQUFpQjtBQUNwQixHQUZVLEVBRVIsSUFGUSxDQUFYOztBQUlBLFdBQVNBLGlCQUFULEdBQTZCO0FBQ3pCLFFBQUk7QUFDQSxVQUFJQyxRQUFRLEdBQUdWLFFBQVEsQ0FBQ1csaUJBQVQsQ0FBMkIsVUFBM0IsQ0FBZjs7QUFDQSxXQUFLLElBQUl2QyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHc0MsUUFBUSxDQUFDRSxNQUE3QixFQUFxQ3hDLENBQUMsRUFBdEMsRUFBMEM7QUFDdEMsWUFBSWdDLElBQUksR0FBSU0sUUFBUSxDQUFDdEMsQ0FBRCxDQUFULENBQWN5QyxZQUFkLENBQTJCLE1BQTNCLENBQVg7QUFDQUgsZ0JBQVEsQ0FBQ3RDLENBQUQsQ0FBUixDQUFZMEMsU0FBWixHQUF3QnZFLFFBQVEsQ0FBQzZELElBQUQsQ0FBaEM7QUFDSDtBQUNKLEtBTkQsQ0FNRSxPQUFPRSxLQUFQLEVBQWMsQ0FFZjtBQUVKOztBQUNELHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBQSw4QkFDSTtBQUFBLGtCQUFReEY7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBRUE7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBT0k7QUFBSyxlQUFTLEVBQUMsb0JBQWY7QUFBQSw2QkFDSTtBQUFLLGFBQUssRUFBRTtBQUFFLHFCQUFXO0FBQWIsU0FBWjtBQUFBLGdDQUNJO0FBQUssYUFBRyxFQUFFWSxJQUFWO0FBQWdCLG1CQUFTLEVBQUM7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUssbUJBQVMsRUFBQyx1QkFBZjtBQUFBLGtDQUNJO0FBQUEsc0JBQUtaO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUsscUJBQVMsRUFBQyxlQUFmO0FBQUEsb0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSTtBQUFBLHdCQUFLRTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZKLGVBTUk7QUFBSyxxQkFBUyxFQUFDLGVBQWY7QUFBQSxvQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUVJO0FBQUEsd0JBQUtFO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTkosZUFXSTtBQUFLLHFCQUFTLEVBQUMsZUFBZjtBQUFBLG9DQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBQSwrQkFBT0ksWUFBUCxRQUF1QkYsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFYSixlQWVJO0FBQUsscUJBQVMsRUFBQyxlQUFmO0FBQUEsbUNBQ0k7QUFBSSxrQkFBSSxFQUFDLFVBQVQ7QUFBb0Isa0JBQUksRUFBRUksUUFBMUI7QUFBQSx3QkFBcUNBO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEosZUErQkk7QUFBSyxRQUFFLEVBQUMsU0FBUjtBQUFrQixlQUFTLEVBQUMsYUFBNUI7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEvQkosZUFtQ0k7QUFBSyxlQUFTLEVBQUMsbUJBQWY7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxzQkFBZjtBQUFBLGtDQUNJO0FBQUsscUJBQVMsRUFBQywwQkFBZjtBQUFBLG1DQUNJO0FBQUksdUJBQVMsRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUlJO0FBQUsscUJBQVMsRUFBQywwQkFBZjtBQUFBLG1DQUNJO0FBQUksdUJBQVMsRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSixlQU9JO0FBQUsscUJBQVMsRUFBQyx5QkFBZjtBQUFBLG1DQUNJO0FBQUksdUJBQVMsRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosT0FhWVosSUFBSSxDQUFDbUcsR0FBTCxDQUFTLFVBQUNDLFFBQUQ7QUFBQSw0QkFDYjtBQUF1QixtQkFBUyxFQUFDLHVCQUFqQztBQUFBLGlDQUNJO0FBQUsscUJBQVMsRUFBQyxtQkFBZjtBQUFBLG1DQUNJO0FBQUssdUJBQVMsRUFBQyx1QkFBZjtBQUFBLHNDQUNJO0FBQUsseUJBQVMsRUFBQywyQkFBZjtBQUFBLHVDQUNJO0FBQUksMkJBQVMsRUFBQyxNQUFkO0FBQUEsNEJBQXNCQSxRQUFRLENBQUM5QjtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUlJO0FBQUsseUJBQVMsRUFBQywyQkFBZjtBQUFBLHVDQUNJO0FBQUksMkJBQVMsRUFBQyxNQUFkO0FBQUEsNEJBQXNCOEIsUUFBUSxDQUFDcEI7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkosZUFPSTtBQUFLLHlCQUFTLEVBQUMsMEJBQWY7QUFBQSx1Q0FDSTtBQUFJLDJCQUFTLEVBQUMsTUFBZDtBQUFBLGtDQUF1Qm9CLFFBQVEsQ0FBQ2pCLFdBQWhDLFFBQStDaUIsUUFBUSxDQUFDbEIsUUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosV0FBVWtCLFFBQVEsQ0FBQ3JCLEVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGE7QUFBQSxPQUFULENBYlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkNKO0FBQUEsa0JBREo7QUF1RUg7O0dBekx1QnpGLE87VUFDZ0JFLDBELEVBQ3JCSSxrRDs7O0tBRktOLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9uYXRpb24vYmlkL1tpZF0uYzY4ZmUzOGRkYjYyYjc1N2JhMGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdyZWFjdC1ib290c3RyYXAvSW1hZ2UnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5cclxuaW1wb3J0IEJpZE5GVE1vZGFsIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbW9kYWxzL0JpZE5GVE1vZGFsJztcclxuXHJcbmltcG9ydCB1c2VDb250cmFjdCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91c2VDb250cmFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3TkZUKHVzZXIpIHtcclxuICAgIGNvbnN0IHsgY29udHJhY3QsIHNpZ25lckFkZHJlc3MgfSA9IHVzZUNvbnRyYWN0KCdFUkM3MjEnKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW3Rva2VuSWQsIHNldFRva2VuSWRdID0gdXNlU3RhdGUoLTEpO1xyXG4gICAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sIHNldGRlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt0eXBlLCBzZXR0eXBlXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBbaGlnaGVyYmlkLCBzZXRoaWdoZXJiaWRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IFtoaWdoZXJiaWR1c2QsIHNldGhpZ2hlcmJpZHVzZF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgW2RhdGVsZWZ0LCBzZXRkYXRlbGVmdF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbG9nbywgc2V0bG9nb10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2VsZWN0aWQsIHNldHNlbGVjdGlkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWxlY3R0eXBlLCBzZXRzZWxlY3R0eXBlXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBbdG9rZW51cmksIHNldFRva2VudXJpXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkWmVybyhudW0pIHtcclxuICAgICAgICByZXR1cm4gbnVtIDwgMTAgPyBgMCR7bnVtfWAgOiBudW07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBBbVBNKG51bSkge1xyXG4gICAgICAgIHJldHVybiBudW0gPCAxMiA/ICdBTScgOiAnUE0nO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gTGVmdERhdGUoZGF0ZXRleHQpIHtcclxuICAgICAgICB2YXIgYyA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgZCA9IGMgLSBuO1xyXG4gICAgICAgIHZhciBkYSA9IE1hdGguZmxvb3IoZCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XHJcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xyXG4gICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xyXG4gICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjApKSAvIDEwMDApO1xyXG4gICAgICAgIHJldHVybiAoZGEudG9TdHJpbmcoKSArIFwiIERheXMgXCIgKyBoLnRvU3RyaW5nKCkgKyBcIiBob3VycyBcIiArIG0udG9TdHJpbmcoKSArIFwiIG1pbnV0ZXMgXCIgKyBzLnRvU3RyaW5nKCkgKyBcIiBzZWNvbmRzXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcclxuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgfSk7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDb250cmFjdERhdGEoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gICAgICAgICAgICBpZiAoY29udHJhY3QgJiYgaWQpIHtcclxuICAgICAgICAgICAgICAgIHNldFRva2VuSWQoaWQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBhd2FpdCBjb250cmFjdC50b2tlblVSSShpZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsQmlkcyA9IGF3YWl0IGNvbnRyYWN0LmdldEJpZHNTZWFyY2hUb2tlbihpZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0b3RhbEJpZHMpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOdW1iZXIoMTApOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmogPSBhd2FpdCB0b3RhbEJpZHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0ID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHsgb2JqZWN0ID0gYXdhaXQgSlNPTi5wYXJzZShvYmopIH0gY2F0Y2ggeyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdC50aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJpY2VkZXMxID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHsgcHJpY2VkZXMxID0gZm9ybWF0dGVyLmZvcm1hdChOdW1iZXIob2JqZWN0LnByb3BlcnRpZXMuYmlkLmRlc2NyaXB0aW9uICogMzgxNy4wOSkpIH0gY2F0Y2ggKGV4KSB7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgQmlkSWQgPSBOdW1iZXIoYXdhaXQgY29udHJhY3QuZ2V0QmlkSWRCeVVyaShvYmopKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgRGF0ZXRpbWUgPSBuZXcgRGF0ZShvYmplY3QucHJvcGVydGllcy50aW1lLmRlc2NyaXB0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50ZGF0ZSA9IGAke2FkZFplcm8oRGF0ZXRpbWUuZ2V0RGF0ZSgpKX0vJHthZGRaZXJvKERhdGV0aW1lLmdldE1vbnRoKCkgKyAxKX0vJHthZGRaZXJvKERhdGV0aW1lLmdldEZ1bGxZZWFyKCkpfSAke2FkZFplcm8oRGF0ZXRpbWUuZ2V0SG91cnMoKSl9OiR7YWRkWmVybyhEYXRldGltZS5nZXRNaW51dGVzKCkpfToke2FkZFplcm8oRGF0ZXRpbWUuZ2V0U2Vjb25kcygpKX0gJHtBbVBNKERhdGV0aW1lLmdldEhvdXJzKCkpfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSWQ6IEJpZElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogb2JqZWN0LnByb3BlcnRpZXMudXNlcm5hbWUuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lOiBjdXJyZW50ZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpZHByaWNlOiBvYmplY3QucHJvcGVydGllcy5iaWQuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiaWRwcmljZXVzZDogcHJpY2VkZXMxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFycik7XHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0KGFycik7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJMb2FkaW5nXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKS5zdHlsZSA9IFwiZGlzcGxheTpub25lXCI7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHNldFRva2VudXJpKHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvYmplY3QgPSBKU09OLnBhcnNlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHNldFRpdGxlKG9iamVjdC5wcm9wZXJ0aWVzLm5hbWUuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgc2V0ZGVzY3JpcHRpb24ob2JqZWN0LnByb3BlcnRpZXMuZGVzY3JpcHRpb24uZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgc2V0aGlnaGVyYmlkdXNkKGZvcm1hdHRlci5mb3JtYXQoTnVtYmVyKG9iamVjdC5wcm9wZXJ0aWVzLnByaWNlLmRlc2NyaXB0aW9uICogMzgxNy4wOSkpKTtcclxuICAgICAgICAgICAgICAgIHNldGhpZ2hlcmJpZChOdW1iZXIob2JqZWN0LnByb3BlcnRpZXMucHJpY2UuZGVzY3JpcHRpb24pKTtcclxuICAgICAgICAgICAgICAgIHNldGRhdGVsZWZ0KG9iamVjdC5wcm9wZXJ0aWVzLmRhdGUuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgc2V0dHlwZShvYmplY3QucHJvcGVydGllcy50eXBlaW1nLmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgICAgIHNldGxvZ28ob2JqZWN0LnByb3BlcnRpZXMubG9nby5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoQ29udHJhY3REYXRhKCk7XHJcblxyXG4gICAgfSwgW3JvdXRlci5xdWVyeSwgY29udHJhY3RdKTtcclxuXHJcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2FsY3VsYXRlVGltZUxlZnQoKTtcclxuICAgIH0sIDEwMDApO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZVRpbWVMZWZ0KCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciBhbGxEYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZGF0ZWxlZnRcIik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gKGFsbERhdGVzW2ldKS5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgYWxsRGF0ZXNbaV0uaW5uZXJIVE1MID0gTGVmdERhdGUoZGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBFdmVudENvbnRhaW5lclwiID5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgXCJkaXNwbGF5XCI6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBjbGFzc05hbWU9XCJBdWN0aW9uSW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVG9rZW5EZXRpYWxzQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND57dGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1RleHRDb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkRlc2NyaXB0aW9uOiA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PntkZXNjcmlwdGlvbn08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1RleHRDb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlR5cGU6IDwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+e3R5cGV9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nVGV4dENvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+SGlnaGVyIEJpZDogPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj4kIHtoaWdoZXJiaWR1c2R9ICh7aGlnaGVyYmlkfSBFVEgpPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdUZXh0Q29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNiBuYW1lPSdkYXRlbGVmdCcgZGF0ZT17ZGF0ZWxlZnR9PntkYXRlbGVmdH08L2g2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD0nTG9hZGluZycgY2xhc3NOYW1lPVwiTG9hZGluZ0FyZWFcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkVsZW1lbnRzQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFibGVIZWFkZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YWJsZUhlYWRlckNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YWJsZWhlYWRlckRhdGVDb250YWluZXInID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJoZWFkZXJcIj5EYXRlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVoZWFkZXJVc2VyQ29udGFpbmVyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImhlYWRlclwiPlVzZXIgTmFtZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlaGVhZGVyQmlkQ29udGFpbmVyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImhlYWRlclwiPkJpZDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IHtsaXN0Lm1hcCgobGlzdEl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17bGlzdEl0ZW0uSWR9IGNsYXNzTmFtZT0ndGFibGVGdWxsUm93Q29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RhYmxlUm93Q29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YWJsZVJvd0NlbGxDb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YWJsZVJvd0NlbGxEYXRlQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNlbGxcIj57bGlzdEl0ZW0udGltZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YWJsZVJvd0NlbGxVc2VyQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNlbGxcIj57bGlzdEl0ZW0ubmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVSb3dDZWxsQmlkQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjZWxsXCI+JHtsaXN0SXRlbS5iaWRwcmljZXVzZH0gKHtsaXN0SXRlbS5iaWRwcmljZX0gRVRIKTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9