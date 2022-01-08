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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_modals_BidNFTModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/modals/BidNFTModal */ "./components/modals/BidNFTModal.jsx");
/* harmony import */ var _components_modals_ViewBidNFTModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/modals/ViewBidNFTModal */ "./components/modals/ViewBidNFTModal.jsx");
/* harmony import */ var _services_useContract__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/useContract */ "./services/useContract.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\zakir\\Documents\\test\\metis-demo-master\\pages\\donation\\auction\\[id].jsx",
    _s = $RefreshSig$();













function ViewNFT(user) {
  _s();

  var _this = this;

  var _useContract = (0,_services_useContract__WEBPACK_IMPORTED_MODULE_9__.default)('ERC721'),
      contract = _useContract.contract,
      signerAddress = _useContract.signerAddress;

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(-1),
      eventId = _useState[0],
      setEventId = _useState[1];

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
      date = _useState9[0],
      setdate = _useState9[1];

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      dateleftBid = _useState10[0],
      setdateleftBid = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      logo = _useState11[0],
      setlogo = _useState11[1];

  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      selectid = _useState12[0],
      setselectid = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      selecttitle = _useState13[0],
      setselecttitle = _useState13[1];

  var _useState14 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      selecttype = _useState14[0],
      setselecttype = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      selectbid = _useState15[0],
      setselectbid = _useState15[1];

  var _useState16 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      eventuri = _useState16[0],
      setEventuri = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      modalShow = _useState17[0],
      setModalShow = _useState17[1];

  var _useState18 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      ViewmodalShow = _useState18[0],
      setViewModalShow = _useState18[1];

  var formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

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

  function LeftDateBid(datetext) {
    var c = new Date(datetext).getTime();
    var n = new Date().getTime();
    var d = c - n;
    var da = Math.floor(d / (1000 * 60 * 60 * 24));
    var h = Math.floor(d % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var m = Math.floor(d % (1000 * 60 * 60) / (1000 * 60));
    var s = Math.floor(d % (1000 * 60) / 1000);
    return da.toString() + "d " + h.toString() + "h " + m.toString() + "m " + s.toString() + "s";
  }

  function fetchContractData() {
    return _fetchContractData.apply(this, arguments);
  }

  function _fetchContractData() {
    _fetchContractData = (0,C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var id, value, arr, totalTokens, i, obj, _object, pricedes1, TokenId, object;

      return C_Users_zakir_Documents_test_metis_demo_master_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              id = router.query.id;

              if (!(contract && id)) {
                _context.next = 59;
                break;
              }

              setEventId(id);
              _context.next = 6;
              return contract.eventURI(id);

            case 6:
              value = _context.sent;
              arr = [];
              _context.next = 10;
              return contract.gettokenSearchEventTotal(id);

            case 10:
              totalTokens = _context.sent;
              i = 0;

            case 12:
              if (!(i < Number(10))) {
                _context.next = 38;
                break;
              }

              _context.next = 15;
              return totalTokens[i];

            case 15:
              obj = _context.sent;
              _object = {};
              _context.prev = 17;
              _context.next = 20;
              return JSON.parse(obj);

            case 20:
              _object = _context.sent;
              _context.next = 25;
              break;

            case 23:
              _context.prev = 23;
              _context.t0 = _context["catch"](17);

            case 25:
              if (!_object.title) {
                _context.next = 35;
                break;
              }

              pricedes1 = 0;

              try {
                pricedes1 = formatter.format(Number(_object.properties.price.description * 3817.09));
              } catch (ex) {}

              _context.t1 = Number;
              _context.next = 31;
              return contract.gettokenIdByUri(obj);

            case 31:
              _context.t2 = _context.sent;
              TokenId = (0, _context.t1)(_context.t2);
              console.log(TokenId);
              arr.push({
                Id: TokenId,
                name: _object.properties.name.description,
                description: _object.properties.description.description,
                Bidprice: pricedes1,
                price: Number(_object.properties.price.description),
                type: _object.properties.typeimg.description,
                image: _object.properties.image.description
              });

            case 35:
              i++;
              _context.next = 12;
              break;

            case 38:
              setList(arr);
              if (document.getElementById("Loading")) document.getElementById("Loading").style = "display:none";
              setEventuri(value);
              object = JSON.parse(value);
              setTitle(object.properties.Title.description);
              setgoalusd(formatter.format(Number(object.properties.Goal.description * 3817.09)));
              setgoal(Number(object.properties.Goal.description));
              setdateleft(LeftDate(object.properties.Date.description));
              setdate(object.properties.Date.description);
              setdateleftBid(LeftDateBid(object.properties.Date.description));
              setlogo(object.properties.logo.description);
              _context.t3 = setTokenName;
              _context.next = 52;
              return contract.name();

            case 52:
              _context.t4 = _context.sent;
              (0, _context.t3)(_context.t4);
              _context.t5 = setTokenSymbol;
              _context.next = 57;
              return contract.symbol();

            case 57:
              _context.t6 = _context.sent;
              (0, _context.t5)(_context.t6);

            case 59:
              _context.next = 64;
              break;

            case 61:
              _context.prev = 61;
              _context.t7 = _context["catch"](0);
              console.error(_context.t7);

            case 64:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 61], [17, 23]]);
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

      var allDates = document.getElementsByName("date");

      for (var _i = 0; _i < allDates.length; _i++) {
        var date = allDates[_i].getAttribute("date");

        allDates[_i].innerHTML = LeftDateBid(date);
      }
    } catch (error) {}
  }

  function activateViewBidModal(e) {
    setselectid(e.target.getAttribute("tokenid"));
    setselecttitle(e.target.getAttribute("title"));
    setViewModalShow(true);
  }

  function activateBidNFTModal(e) {
    setselectid(e.target.getAttribute("tokenid"));
    console.log(e.target);
    setselectbid(e.target.getAttribute("highestbid"));
    setselecttype("NFT");
    setModalShow(true);
  }

  function activateBidCryptopunkTModal(e) {
    setselectid(e.target.getAttribute("tokenid"));
    setselecttype("Cryptopunk");
    console.log(e.target);
    setselectbid(e.target.getAttribute("highestbid"));
    setModalShow(true);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("title", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "description",
        content: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 171,
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
          lineNumber: 179,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "DetialsContainer",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "TextContainer",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
              children: "Goal: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
              children: ["$ ", goalusd, " (", goal, " ETH)"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 183,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "TextContainer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
              name: "dateleft",
              date: date,
              children: dateleft
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      id: "Loading",
      className: "LoadingArea",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 13
    }, this), list.map(function (listItem) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "row ElementsContainer bgWhite",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          style: {
            "display": "flex"
          },
          children: [listItem.type == "Cryptopunk" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            src: listItem.image,
            className: "AuctionBidImage pixel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 29
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            src: listItem.image,
            className: "AuctionBidImage"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 29
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
                lineNumber: 207,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h5", {
                style: {
                  color: "rgb(139, 139, 139)"
                },
                children: ["Type: ", listItem.type]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 209,
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
                  lineNumber: 212,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 211,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 206,
              columnNumber: 29
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "ElementBottomContainer",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                style: {
                  width: "116px"
                },
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h7", {
                  className: "smallgrey",
                  children: "Current bid"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 217,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
                  className: "bidprice",
                  children: ["$ ", listItem.Bidprice, " (", listItem.price, " ETH)"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 218,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h7", {
                  name: "date",
                  date: date,
                  className: "smallgrey",
                  children: dateleftBid
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 219,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "BidAllcontainer",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "Bidsbutton",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    tokenid: listItem.Id,
                    title: listItem.name,
                    onClick: activateViewBidModal,
                    className: "Bidcontainer col",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      tokenid: listItem.Id,
                      title: listItem.name,
                      className: "card BidcontainerCard",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                        tokenid: listItem.Id,
                        title: listItem.name,
                        className: "card-body bidbuttonText",
                        children: "View"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 225,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 224,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 223,
                    columnNumber: 41
                  }, _this), listItem.type == "Cryptopunk" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    tokenid: listItem.Id,
                    highestbid: listItem.price,
                    onClick: activateBidCryptopunkTModal,
                    className: "Bidcontainer col",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      tokenid: listItem.Id,
                      highestbid: listItem.price,
                      className: "card BidcontainerCard",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                        tokenid: listItem.Id,
                        highestbid: listItem.price,
                        className: "card-body bidbuttonText",
                        children: "Bid"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 233,
                        columnNumber: 53
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 232,
                      columnNumber: 49
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 231,
                    columnNumber: 45
                  }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    tokenid: listItem.Id,
                    highestbid: listItem.price,
                    onClick: activateBidNFTModal,
                    className: "Bidcontainer col",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      tokenid: listItem.Id,
                      highestbid: listItem.price,
                      className: "card BidcontainerCard",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                        tokenid: listItem.Id,
                        highestbid: listItem.price,
                        className: "card-body bidbuttonText",
                        children: "Bid"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 239,
                        columnNumber: 53
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 238,
                      columnNumber: 49
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 237,
                    columnNumber: 45
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 222,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 21
        }, _this)
      }, listItem.Id, false, {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 17
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_modals_BidNFTModal__WEBPACK_IMPORTED_MODULE_7__.default, {
      show: modalShow,
      onHide: function onHide() {
        setModalShow(false); // This is a poor implementation, better to implement an event listener

        fetchContractData();
      },
      contract: contract,
      Amount: signerAddress,
      tokenId: selectid,
      senderAddress: signerAddress,
      type: selecttype,
      eventId: eventId
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_modals_ViewBidNFTModal__WEBPACK_IMPORTED_MODULE_8__.default, {
      show: ViewmodalShow,
      onHide: function onHide() {
        setViewModalShow(false); // This is a poor implementation, better to implement an event listener

        fetchContractData();
      },
      id: selectid,
      title: selecttitle,
      Highestbid: selectbid
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(ViewNFT, "45LyQDihMB99OhdNSYPfZyQH3wc=", false, function () {
  return [_services_useContract__WEBPACK_IMPORTED_MODULE_9__.default, next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9uYXRpb24vYXVjdGlvbi9baWRdLmpzeCJdLCJuYW1lcyI6WyJWaWV3TkZUIiwidXNlciIsInVzZUNvbnRyYWN0IiwiY29udHJhY3QiLCJzaWduZXJBZGRyZXNzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJldmVudElkIiwic2V0RXZlbnRJZCIsImxpc3QiLCJzZXRMaXN0IiwidG9rZW5OYW1lIiwic2V0VG9rZW5OYW1lIiwidG9rZW5TeW1ib2wiLCJzZXRUb2tlblN5bWJvbCIsInRpdGxlIiwic2V0VGl0bGUiLCJnb2FsdXNkIiwic2V0Z29hbHVzZCIsImdvYWwiLCJzZXRnb2FsIiwiZGF0ZWxlZnQiLCJzZXRkYXRlbGVmdCIsImRhdGUiLCJzZXRkYXRlIiwiZGF0ZWxlZnRCaWQiLCJzZXRkYXRlbGVmdEJpZCIsImxvZ28iLCJzZXRsb2dvIiwic2VsZWN0aWQiLCJzZXRzZWxlY3RpZCIsInNlbGVjdHRpdGxlIiwic2V0c2VsZWN0dGl0bGUiLCJzZWxlY3R0eXBlIiwic2V0c2VsZWN0dHlwZSIsInNlbGVjdGJpZCIsInNldHNlbGVjdGJpZCIsImV2ZW50dXJpIiwic2V0RXZlbnR1cmkiLCJtb2RhbFNob3ciLCJzZXRNb2RhbFNob3ciLCJWaWV3bW9kYWxTaG93Iiwic2V0Vmlld01vZGFsU2hvdyIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJMZWZ0RGF0ZSIsImRhdGV0ZXh0IiwiYyIsIkRhdGUiLCJnZXRUaW1lIiwibiIsImQiLCJkYSIsIk1hdGgiLCJmbG9vciIsImgiLCJtIiwicyIsInRvU3RyaW5nIiwiTGVmdERhdGVCaWQiLCJmZXRjaENvbnRyYWN0RGF0YSIsImlkIiwicXVlcnkiLCJldmVudFVSSSIsInZhbHVlIiwiYXJyIiwiZ2V0dG9rZW5TZWFyY2hFdmVudFRvdGFsIiwidG90YWxUb2tlbnMiLCJpIiwiTnVtYmVyIiwib2JqIiwib2JqZWN0IiwiSlNPTiIsInBhcnNlIiwicHJpY2VkZXMxIiwiZm9ybWF0IiwicHJvcGVydGllcyIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJleCIsImdldHRva2VuSWRCeVVyaSIsIlRva2VuSWQiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsIklkIiwibmFtZSIsIkJpZHByaWNlIiwidHlwZSIsInR5cGVpbWciLCJpbWFnZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsIlRpdGxlIiwiR29hbCIsInN5bWJvbCIsImVycm9yIiwidXNlRWZmZWN0Iiwic2V0SW50ZXJ2YWwiLCJjYWxjdWxhdGVUaW1lTGVmdCIsImFsbERhdGVzIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJsZW5ndGgiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJhY3RpdmF0ZVZpZXdCaWRNb2RhbCIsImUiLCJ0YXJnZXQiLCJhY3RpdmF0ZUJpZE5GVE1vZGFsIiwiYWN0aXZhdGVCaWRDcnlwdG9wdW5rVE1vZGFsIiwibWFwIiwibGlzdEl0ZW0iLCJ3aWR0aCIsInJvd0dhcCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLE9BQVQsQ0FBaUJDLElBQWpCLEVBQXVCO0FBQUE7O0FBQUE7O0FBQUEscUJBQ0VDLDhEQUFXLENBQUMsUUFBRCxDQURiO0FBQUEsTUFDMUJDLFFBRDBCLGdCQUMxQkEsUUFEMEI7QUFBQSxNQUNoQkMsYUFEZ0IsZ0JBQ2hCQSxhQURnQjs7QUFFbEMsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFGa0Msa0JBR0pDLCtDQUFRLENBQUMsQ0FBQyxDQUFGLENBSEo7QUFBQSxNQUczQkMsT0FIMkI7QUFBQSxNQUdsQkMsVUFIa0I7O0FBQUEsbUJB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REo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLFNBQVVtQyxRQUFRLENBQUMzQixFQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRE07QUFBQSxLQUFULENBMUJMLGVBcUZJLDhEQUFDLG1FQUFEO0FBQ0ksVUFBSSxFQUFFakQsU0FEVjtBQUVJLFlBQU0sRUFBRSxrQkFBTTtBQUNWQyxvQkFBWSxDQUFDLEtBQUQsQ0FBWixDQURVLENBRVY7O0FBQ0F1Qix5QkFBaUI7QUFDcEIsT0FOTDtBQU9JLGNBQVEsRUFBRTdELFFBUGQ7QUFRSSxZQUFNLEVBQUVDLGFBUlo7QUFTSSxhQUFPLEVBQUUwQixRQVRiO0FBVUksbUJBQWEsRUFBRTFCLGFBVm5CO0FBV0ksVUFBSSxFQUFFOEIsVUFYVjtBQVlJLGFBQU8sRUFBRTFCO0FBWmI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJGSixlQW9HSSw4REFBQyx1RUFBRDtBQUNJLFVBQUksRUFBRWtDLGFBRFY7QUFFSSxZQUFNLEVBQUUsa0JBQU07QUFDVkMsd0JBQWdCLENBQUMsS0FBRCxDQUFoQixDQURVLENBRVY7O0FBQ0FxQix5QkFBaUI7QUFDcEIsT0FOTDtBQU9JLFFBQUUsRUFBRWxDLFFBUFI7QUFRSSxXQUFLLEVBQUVFLFdBUlg7QUFTSSxnQkFBVSxFQUFFSTtBQVRoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcEdKO0FBQUEsa0JBREo7QUFrSEg7O0dBMVF1QnBDLE87VUFDZ0JFLDBELEVBQ3JCSSxrRDs7O0tBRktOLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZG9uYXRpb24vYXVjdGlvbi9baWRdLjMxZDI1ZjNjYTdjMTk2MDMyN2M2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0ltYWdlJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcclxuXHJcbmltcG9ydCBCaWRORlRNb2RhbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL21vZGFscy9CaWRORlRNb2RhbCc7XHJcbmltcG9ydCBWaWV3QmlkTkZUTW9kYWwgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9tb2RhbHMvVmlld0JpZE5GVE1vZGFsJztcclxuXHJcbmltcG9ydCB1c2VDb250cmFjdCBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy91c2VDb250cmFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWV3TkZUKHVzZXIpIHtcclxuICAgIGNvbnN0IHsgY29udHJhY3QsIHNpZ25lckFkZHJlc3MgfSA9IHVzZUNvbnRyYWN0KCdFUkM3MjEnKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgW2V2ZW50SWQsIHNldEV2ZW50SWRdID0gdXNlU3RhdGUoLTEpO1xyXG4gICAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3Rva2VuTmFtZSwgc2V0VG9rZW5OYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt0b2tlblN5bWJvbCwgc2V0VG9rZW5TeW1ib2xdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZ29hbHVzZCwgc2V0Z29hbHVzZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZ29hbCwgc2V0Z29hbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZGF0ZWxlZnQsIHNldGRhdGVsZWZ0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtkYXRlLCBzZXRkYXRlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtkYXRlbGVmdEJpZCwgc2V0ZGF0ZWxlZnRCaWRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2xvZ28sIHNldGxvZ29dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlbGVjdGlkLCBzZXRzZWxlY3RpZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2VsZWN0dGl0bGUsIHNldHNlbGVjdHRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWxlY3R0eXBlLCBzZXRzZWxlY3R0eXBlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWxlY3RiaWQsIHNldHNlbGVjdGJpZF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgW2V2ZW50dXJpLCBzZXRFdmVudHVyaV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbW9kYWxTaG93LCBzZXRNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW1ZpZXdtb2RhbFNob3csIHNldFZpZXdNb2RhbFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCB7XHJcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIExlZnREYXRlKGRhdGV0ZXh0KSB7XHJcbiAgICAgICAgdmFyIGMgPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHZhciBuID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdmFyIGQgPSBjIC0gbjtcclxuICAgICAgICB2YXIgZGEgPSBNYXRoLmZsb29yKGQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xyXG4gICAgICAgIHZhciBoID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcclxuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcclxuICAgICAgICB2YXIgcyA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcclxuICAgICAgICByZXR1cm4gKGRhLnRvU3RyaW5nKCkgKyBcIiBEYXlzIFwiICsgaC50b1N0cmluZygpICsgXCIgaG91cnMgXCIgKyBtLnRvU3RyaW5nKCkgKyBcIiBtaW51dGVzIFwiICsgcy50b1N0cmluZygpICsgXCIgc2Vjb25kc1wiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIExlZnREYXRlQmlkKGRhdGV0ZXh0KSB7XHJcbiAgICAgICAgdmFyIGMgPSBuZXcgRGF0ZShkYXRldGV4dCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIHZhciBuID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdmFyIGQgPSBjIC0gbjtcclxuICAgICAgICB2YXIgZGEgPSBNYXRoLmZsb29yKGQgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xyXG4gICAgICAgIHZhciBoID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcclxuICAgICAgICB2YXIgbSA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcclxuICAgICAgICB2YXIgcyA9IE1hdGguZmxvb3IoKGQgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcclxuICAgICAgICByZXR1cm4gKGRhLnRvU3RyaW5nKCkgKyBcImQgXCIgKyBoLnRvU3RyaW5nKCkgKyBcImggXCIgKyBtLnRvU3RyaW5nKCkgKyBcIm0gXCIgKyBzLnRvU3RyaW5nKCkgKyBcInNcIik7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaENvbnRyYWN0RGF0YSgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICAgICAgICAgIGlmIChjb250cmFjdCAmJiBpZCkge1xyXG4gICAgICAgICAgICAgICAgc2V0RXZlbnRJZChpZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IGNvbnRyYWN0LmV2ZW50VVJJKGlkKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFyciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWxUb2tlbnMgPSBhd2FpdCBjb250cmFjdC5nZXR0b2tlblNlYXJjaEV2ZW50VG90YWwoaWQpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOdW1iZXIoMTApOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmogPSBhd2FpdCB0b3RhbFRva2Vuc1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0ID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHsgb2JqZWN0ID0gYXdhaXQgSlNPTi5wYXJzZShvYmopIH0gY2F0Y2ggeyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdC50aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJpY2VkZXMxID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHsgcHJpY2VkZXMxID0gZm9ybWF0dGVyLmZvcm1hdChOdW1iZXIob2JqZWN0LnByb3BlcnRpZXMucHJpY2UuZGVzY3JpcHRpb24gKiAzODE3LjA5KSkgfSBjYXRjaCAoZXgpIHsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBUb2tlbklkID0gTnVtYmVyKGF3YWl0IGNvbnRyYWN0LmdldHRva2VuSWRCeVVyaShvYmopKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coVG9rZW5JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIElkOiBUb2tlbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogb2JqZWN0LnByb3BlcnRpZXMubmFtZS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBvYmplY3QucHJvcGVydGllcy5kZXNjcmlwdGlvbi5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpZHByaWNlOiBwcmljZWRlczEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogTnVtYmVyKG9iamVjdC5wcm9wZXJ0aWVzLnByaWNlLmRlc2NyaXB0aW9uKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IG9iamVjdC5wcm9wZXJ0aWVzLnR5cGVpbWcuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZTogb2JqZWN0LnByb3BlcnRpZXMuaW1hZ2UuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0TGlzdChhcnIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKSlcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkxvYWRpbmdcIikuc3R5bGUgPSBcImRpc3BsYXk6bm9uZVwiO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBzZXRFdmVudHVyaSh2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0ID0gSlNPTi5wYXJzZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaXRsZShvYmplY3QucHJvcGVydGllcy5UaXRsZS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICBzZXRnb2FsdXNkKGZvcm1hdHRlci5mb3JtYXQoTnVtYmVyKG9iamVjdC5wcm9wZXJ0aWVzLkdvYWwuZGVzY3JpcHRpb24gKiAzODE3LjA5KSkpO1xyXG4gICAgICAgICAgICAgICAgc2V0Z29hbChOdW1iZXIob2JqZWN0LnByb3BlcnRpZXMuR29hbC5kZXNjcmlwdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgc2V0ZGF0ZWxlZnQoTGVmdERhdGUob2JqZWN0LnByb3BlcnRpZXMuRGF0ZS5kZXNjcmlwdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgc2V0ZGF0ZShvYmplY3QucHJvcGVydGllcy5EYXRlLmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgICAgIHNldGRhdGVsZWZ0QmlkKExlZnREYXRlQmlkKG9iamVjdC5wcm9wZXJ0aWVzLkRhdGUuZGVzY3JpcHRpb24pKTtcclxuICAgICAgICAgICAgICAgIHNldGxvZ28ob2JqZWN0LnByb3BlcnRpZXMubG9nby5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgICAgICAgICBzZXRUb2tlbk5hbWUoYXdhaXQgY29udHJhY3QubmFtZSgpKTtcclxuICAgICAgICAgICAgICAgIHNldFRva2VuU3ltYm9sKGF3YWl0IGNvbnRyYWN0LnN5bWJvbCgpKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoQ29udHJhY3REYXRhKCk7XHJcblxyXG4gICAgfSwgW3JvdXRlci5xdWVyeSwgY29udHJhY3RdKTtcclxuXHJcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2FsY3VsYXRlVGltZUxlZnQoKTtcclxuICAgIH0sIDEwMDApO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVUaW1lTGVmdCgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgYWxsRGF0ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcImRhdGVsZWZ0XCIpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERhdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IChhbGxEYXRlc1tpXSkuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKTtcclxuICAgICAgICAgICAgICAgIGFsbERhdGVzW2ldLmlubmVySFRNTCA9IExlZnREYXRlKGRhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBhbGxEYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZGF0ZVwiKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxEYXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGUgPSAoYWxsRGF0ZXNbaV0pLmdldEF0dHJpYnV0ZShcImRhdGVcIik7XHJcbiAgICAgICAgICAgICAgICBhbGxEYXRlc1tpXS5pbm5lckhUTUwgPSBMZWZ0RGF0ZUJpZChkYXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVWaWV3QmlkTW9kYWwoZSkge1xyXG4gICAgICAgIHNldHNlbGVjdGlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRva2VuaWRcIikpO1xyXG4gICAgICAgIHNldHNlbGVjdHRpdGxlKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRpdGxlXCIpKTtcclxuXHJcbiAgICAgICAgc2V0Vmlld01vZGFsU2hvdyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhY3RpdmF0ZUJpZE5GVE1vZGFsKGUpIHtcclxuICAgICAgICBzZXRzZWxlY3RpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0b2tlbmlkXCIpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XHJcbiAgICAgICAgc2V0c2VsZWN0YmlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImhpZ2hlc3RiaWRcIikpO1xyXG4gICAgICAgIHNldHNlbGVjdHR5cGUoXCJORlRcIik7XHJcbiAgICAgICAgc2V0TW9kYWxTaG93KHRydWUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVCaWRDcnlwdG9wdW5rVE1vZGFsKGUpIHtcclxuICAgICAgICBzZXRzZWxlY3RpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0b2tlbmlkXCIpKTtcclxuICAgICAgICBzZXRzZWxlY3R0eXBlKFwiQ3J5cHRvcHVua1wiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XHJcbiAgICAgICAgc2V0c2VsZWN0YmlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImhpZ2hlc3RiaWRcIikpO1xyXG4gICAgICAgIHNldE1vZGFsU2hvdyh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17dGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IEV2ZW50Q29udGFpbmVyXCIgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBcImRpc3BsYXlcIjogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2xvZ299IGNsYXNzTmFtZT1cIkF1Y3Rpb25JbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEZXRpYWxzQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND57dGl0bGV9PC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdUZXh0Q29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Hb2FsOiA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PiQge2dvYWx1c2R9ICh7Z29hbH0gRVRIKTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nVGV4dENvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgbmFtZT0nZGF0ZWxlZnQnIGRhdGU9e2RhdGV9PntkYXRlbGVmdH08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBpZD0nTG9hZGluZycgY2xhc3NOYW1lPVwiTG9hZGluZ0FyZWFcIj5cclxuICAgICAgICAgICAgICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtsaXN0Lm1hcCgobGlzdEl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsaXN0SXRlbS5JZH0gY2xhc3NOYW1lPVwicm93IEVsZW1lbnRzQ29udGFpbmVyIGJnV2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IFwiZGlzcGxheVwiOiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2xpc3RJdGVtLnR5cGUgPT0gXCJDcnlwdG9wdW5rXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bGlzdEl0ZW0uaW1hZ2V9IGNsYXNzTmFtZT1cIkF1Y3Rpb25CaWRJbWFnZSBwaXhlbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bGlzdEl0ZW0uaW1hZ2V9IGNsYXNzTmFtZT1cIkF1Y3Rpb25CaWRJbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRGV0aWFsc0NvbnRhaW5lclwiIHN0eWxlPXt7IHJvd0dhcDogXCI1cHhcIiB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PntsaXN0SXRlbS5uYW1lfTwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogXCJyZ2IoMTM5LCAxMzksIDEzOSlcIiB9fT5UeXBlOiB7bGlzdEl0ZW0udHlwZX08L2g1PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRleHRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcIiM4QjhCOEJcIiB9fT57bGlzdEl0ZW0uZGVzY3JpcHRpb259PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0VsZW1lbnRCb3R0b21Db250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTE2cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg3IGNsYXNzTmFtZT1cInNtYWxsZ3JleVwiPkN1cnJlbnQgYmlkPC9oNz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0nYmlkcHJpY2UnPiQge2xpc3RJdGVtLkJpZHByaWNlfSAoe2xpc3RJdGVtLnByaWNlfSBFVEgpPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg3IG5hbWU9XCJkYXRlXCIgZGF0ZT17ZGF0ZX0gY2xhc3NOYW1lPVwic21hbGxncmV5XCI+e2RhdGVsZWZ0QmlkfTwvaDc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0JpZEFsbGNvbnRhaW5lcicgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nQmlkc2J1dHRvbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB0aXRsZT17bGlzdEl0ZW0ubmFtZX0gb25DbGljaz17YWN0aXZhdGVWaWV3QmlkTW9kYWx9IGNsYXNzTmFtZT1cIkJpZGNvbnRhaW5lciBjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSB0aXRsZT17bGlzdEl0ZW0ubmFtZX0gY2xhc3NOYW1lPVwiY2FyZCBCaWRjb250YWluZXJDYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHRpdGxlPXtsaXN0SXRlbS5uYW1lfSBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYmlkYnV0dG9uVGV4dFwiPlZpZXc8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlzdEl0ZW0udHlwZSA9PSBcIkNyeXB0b3B1bmtcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gb25DbGljaz17YWN0aXZhdGVCaWRDcnlwdG9wdW5rVE1vZGFsfSBjbGFzc05hbWU9XCJCaWRjb250YWluZXIgY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSBjbGFzc05hbWU9XCJjYXJkIEJpZGNvbnRhaW5lckNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSBjbGFzc05hbWU9XCJjYXJkLWJvZHkgYmlkYnV0dG9uVGV4dFwiPkJpZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IG9uQ2xpY2s9e2FjdGl2YXRlQmlkTkZUTW9kYWx9IGNsYXNzTmFtZT1cIkJpZGNvbnRhaW5lciBjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGNsYXNzTmFtZT1cImNhcmQgQmlkY29udGFpbmVyQ2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGNsYXNzTmFtZT1cImNhcmQtYm9keSBiaWRidXR0b25UZXh0XCI+QmlkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcblxyXG5cclxuICAgICAgICAgICAgPEJpZE5GVE1vZGFsXHJcbiAgICAgICAgICAgICAgICBzaG93PXttb2RhbFNob3d9XHJcbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRNb2RhbFNob3coZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBwb29yIGltcGxlbWVudGF0aW9uLCBiZXR0ZXIgdG8gaW1wbGVtZW50IGFuIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hDb250cmFjdERhdGEoKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBjb250cmFjdD17Y29udHJhY3R9XHJcbiAgICAgICAgICAgICAgICBBbW91bnQ9e3NpZ25lckFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICB0b2tlbklkPXtzZWxlY3RpZH1cclxuICAgICAgICAgICAgICAgIHNlbmRlckFkZHJlc3M9e3NpZ25lckFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICB0eXBlPXtzZWxlY3R0eXBlfVxyXG4gICAgICAgICAgICAgICAgZXZlbnRJZD17ZXZlbnRJZH1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxWaWV3QmlkTkZUTW9kYWxcclxuICAgICAgICAgICAgICAgIHNob3c9e1ZpZXdtb2RhbFNob3d9XHJcbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRWaWV3TW9kYWxTaG93KGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgcG9vciBpbXBsZW1lbnRhdGlvbiwgYmV0dGVyIHRvIGltcGxlbWVudCBhbiBldmVudCBsaXN0ZW5lclxyXG4gICAgICAgICAgICAgICAgICAgIGZldGNoQ29udHJhY3REYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgaWQ9e3NlbGVjdGlkfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3NlbGVjdHRpdGxlfVxyXG4gICAgICAgICAgICAgICAgSGlnaGVzdGJpZD17c2VsZWN0YmlkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9