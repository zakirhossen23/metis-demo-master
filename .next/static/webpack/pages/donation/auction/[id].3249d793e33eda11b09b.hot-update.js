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
    console.log(e.target.getAttribute("highestbid"));
    setselectbid(e.target.getAttribute("highestbid"));
    setViewModalShow(true);
  }

  function activateBidNFTModal(e) {
    setselectid(e.target.getAttribute("tokenid"));
    setselecttype("NFT");
    setModalShow(true);
  }

  function activateBidCryptopunkTModal(e) {
    setselectid(e.target.getAttribute("tokenid"));
    setselecttype("Cryptopunk");
    console.log(e.target.getAttribute("highestbid"));
    setselectbid(e.target.getAttribute("highestbid"));
    setModalShow(true);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("title", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("meta", {
        name: "description",
        content: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 170,
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
          lineNumber: 178,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "DetialsContainer",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
            children: title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "TextContainer",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
              children: "Goal: "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
              children: ["$ ", goalusd, " (", goal, " ETH)"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "TextContainer",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
              name: "dateleft",
              date: date,
              children: dateleft
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      id: "Loading",
      className: "LoadingArea",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 192,
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
            lineNumber: 199,
            columnNumber: 29
          }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            src: listItem.image,
            className: "AuctionBidImage"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
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
                lineNumber: 206,
                columnNumber: 33
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h5", {
                style: {
                  color: "rgb(139, 139, 139)"
                },
                children: ["Type: ", listItem.type]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 208,
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
                  lineNumber: 211,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 205,
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
                  lineNumber: 216,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h4", {
                  className: "bidprice",
                  children: ["$ ", listItem.Bidprice, " (", listItem.price, " ETH)"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 217,
                  columnNumber: 37
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h7", {
                  name: "date",
                  date: date,
                  className: "smallgrey",
                  children: dateleftBid
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 218,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 215,
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
                        lineNumber: 224,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 223,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 222,
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
                        lineNumber: 232,
                        columnNumber: 53
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 231,
                      columnNumber: 49
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 230,
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
                        lineNumber: 238,
                        columnNumber: 53
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 237,
                      columnNumber: 49
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 236,
                    columnNumber: 45
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 220,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 21
        }, _this)
      }, listItem.Id, false, {
        fileName: _jsxFileName,
        lineNumber: 196,
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
      lineNumber: 254,
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
      lineNumber: 269,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG9uYXRpb24vYXVjdGlvbi9baWRdLmpzeCJdLCJuYW1lcyI6WyJWaWV3TkZUIiwidXNlciIsInVzZUNvbnRyYWN0IiwiY29udHJhY3QiLCJzaWduZXJBZGRyZXNzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJldmVudElkIiwic2V0RXZlbnRJZCIsImxpc3QiLCJzZXRMaXN0IiwidG9rZW5OYW1lIiwic2V0VG9rZW5OYW1lIiwidG9rZW5TeW1ib2wiLCJzZXRUb2tlblN5bWJvbCIsInRpdGxlIiwic2V0VGl0bGUiLCJnb2FsdXNkIiwic2V0Z29hbHVzZCIsImdvYWwiLCJzZXRnb2FsIiwiZGF0ZWxlZnQiLCJzZXRkYXRlbGVmdCIsImRhdGUiLCJzZXRkYXRlIiwiZGF0ZWxlZnRCaWQiLCJzZXRkYXRlbGVmdEJpZCIsImxvZ28iLCJzZXRsb2dvIiwic2VsZWN0aWQiLCJzZXRzZWxlY3RpZCIsInNlbGVjdHRpdGxlIiwic2V0c2VsZWN0dGl0bGUiLCJzZWxlY3R0eXBlIiwic2V0c2VsZWN0dHlwZSIsInNlbGVjdGJpZCIsInNldHNlbGVjdGJpZCIsImV2ZW50dXJpIiwic2V0RXZlbnR1cmkiLCJtb2RhbFNob3ciLCJzZXRNb2RhbFNob3ciLCJWaWV3bW9kYWxTaG93Iiwic2V0Vmlld01vZGFsU2hvdyIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJMZWZ0RGF0ZSIsImRhdGV0ZXh0IiwiYyIsIkRhdGUiLCJnZXRUaW1lIiwibiIsImQiLCJkYSIsIk1hdGgiLCJmbG9vciIsImgiLCJtIiwicyIsInRvU3RyaW5nIiwiTGVmdERhdGVCaWQiLCJmZXRjaENvbnRyYWN0RGF0YSIsImlkIiwicXVlcnkiLCJldmVudFVSSSIsInZhbHVlIiwiYXJyIiwiZ2V0dG9rZW5TZWFyY2hFdmVudFRvdGFsIiwidG90YWxUb2tlbnMiLCJpIiwiTnVtYmVyIiwib2JqIiwib2JqZWN0IiwiSlNPTiIsInBhcnNlIiwicHJpY2VkZXMxIiwiZm9ybWF0IiwicHJvcGVydGllcyIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJleCIsImdldHRva2VuSWRCeVVyaSIsIlRva2VuSWQiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsIklkIiwibmFtZSIsIkJpZHByaWNlIiwidHlwZSIsInR5cGVpbWciLCJpbWFnZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsIlRpdGxlIiwiR29hbCIsInN5bWJvbCIsImVycm9yIiwidXNlRWZmZWN0Iiwic2V0SW50ZXJ2YWwiLCJjYWxjdWxhdGVUaW1lTGVmdCIsImFsbERhdGVzIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJsZW5ndGgiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJhY3RpdmF0ZVZpZXdCaWRNb2RhbCIsImUiLCJ0YXJnZXQiLCJhY3RpdmF0ZUJpZE5GVE1vZGFsIiwiYWN0aXZhdGVCaWRDcnlwdG9wdW5rVE1vZGFsIiwibWFwIiwibGlzdEl0ZW0iLCJ3aWR0aCIsInJvd0dhcCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLE9BQVQsQ0FBaUJDLElBQWpCLEVBQXVCO0FBQUE7O0FBQUE7O0FBQUEscUJBQ0VDLDhEQUFXLENBQUMsUUFBRCxDQURiO0FBQUEsTUFDMUJDLFFBRDBCLGdCQUMxQkEsUUFEMEI7QUFBQSxNQUNoQkMsYUFEZ0IsZ0JBQ2hCQSxhQURnQjs7QUFFbEMsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFGa0Msa0JBR0pDLCtDQUFRLENBQUMsQ0FBQyxDQUFGLENBSEo7QUFBQSxNQUczQkMsT0FIMkI7QUFBQSxNQUdsQkMsVUFIa0I7O0FBQUEsbUJB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REo7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFmUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosU0FBVW1DLFFBQVEsQ0FBQzNCLEVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETTtBQUFBLEtBQVQsQ0ExQkwsZUFxRkksOERBQUMsbUVBQUQ7QUFDSSxVQUFJLEVBQUVqRCxTQURWO0FBRUksWUFBTSxFQUFFLGtCQUFNO0FBQ1ZDLG9CQUFZLENBQUMsS0FBRCxDQUFaLENBRFUsQ0FFVjs7QUFDQXVCLHlCQUFpQjtBQUNwQixPQU5MO0FBT0ksY0FBUSxFQUFFN0QsUUFQZDtBQVFJLFlBQU0sRUFBRUMsYUFSWjtBQVNJLGFBQU8sRUFBRTBCLFFBVGI7QUFVSSxtQkFBYSxFQUFFMUIsYUFWbkI7QUFXSSxVQUFJLEVBQUU4QixVQVhWO0FBWUksYUFBTyxFQUFFMUI7QUFaYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBckZKLGVBb0dJLDhEQUFDLHVFQUFEO0FBQ0ksVUFBSSxFQUFFa0MsYUFEVjtBQUVJLFlBQU0sRUFBRSxrQkFBTTtBQUNWQyx3QkFBZ0IsQ0FBQyxLQUFELENBQWhCLENBRFUsQ0FFVjs7QUFDQXFCLHlCQUFpQjtBQUNwQixPQU5MO0FBT0ksUUFBRSxFQUFFbEMsUUFQUjtBQVFJLFdBQUssRUFBRUUsV0FSWDtBQVNJLGdCQUFVLEVBQUVJO0FBVGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwR0o7QUFBQSxrQkFESjtBQWtISDs7R0F6UXVCcEMsTztVQUNnQkUsMEQsRUFDckJJLGtEOzs7S0FGS04sTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kb25hdGlvbi9hdWN0aW9uL1tpZF0uMzI0OWQ3OTNlMzNlZGExMWIwOWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdyZWFjdC1ib290c3RyYXAvSW1hZ2UnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xyXG5cclxuaW1wb3J0IEJpZE5GVE1vZGFsIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbW9kYWxzL0JpZE5GVE1vZGFsJztcclxuaW1wb3J0IFZpZXdCaWRORlRNb2RhbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL21vZGFscy9WaWV3QmlkTkZUTW9kYWwnO1xyXG5cclxuaW1wb3J0IHVzZUNvbnRyYWN0IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3VzZUNvbnRyYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZpZXdORlQodXNlcikge1xyXG4gICAgY29uc3QgeyBjb250cmFjdCwgc2lnbmVyQWRkcmVzcyB9ID0gdXNlQ29udHJhY3QoJ0VSQzcyMScpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbZXZlbnRJZCwgc2V0RXZlbnRJZF0gPSB1c2VTdGF0ZSgtMSk7XHJcbiAgICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdG9rZW5OYW1lLCBzZXRUb2tlbk5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Rva2VuU3ltYm9sLCBzZXRUb2tlblN5bWJvbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtnb2FsdXNkLCBzZXRnb2FsdXNkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtnb2FsLCBzZXRnb2FsXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtkYXRlbGVmdCwgc2V0ZGF0ZWxlZnRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2RhdGUsIHNldGRhdGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2RhdGVsZWZ0QmlkLCBzZXRkYXRlbGVmdEJpZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbG9nbywgc2V0bG9nb10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbc2VsZWN0aWQsIHNldHNlbGVjdGlkXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtzZWxlY3R0aXRsZSwgc2V0c2VsZWN0dGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlbGVjdHR5cGUsIHNldHNlbGVjdHR5cGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3NlbGVjdGJpZCwgc2V0c2VsZWN0YmlkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBbZXZlbnR1cmksIHNldEV2ZW50dXJpXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFttb2RhbFNob3csIHNldE1vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbVmlld21vZGFsU2hvdywgc2V0Vmlld01vZGFsU2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIHtcclxuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gTGVmdERhdGUoZGF0ZXRleHQpIHtcclxuICAgICAgICB2YXIgYyA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgZCA9IGMgLSBuO1xyXG4gICAgICAgIHZhciBkYSA9IE1hdGguZmxvb3IoZCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XHJcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xyXG4gICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xyXG4gICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjApKSAvIDEwMDApO1xyXG4gICAgICAgIHJldHVybiAoZGEudG9TdHJpbmcoKSArIFwiIERheXMgXCIgKyBoLnRvU3RyaW5nKCkgKyBcIiBob3VycyBcIiArIG0udG9TdHJpbmcoKSArIFwiIG1pbnV0ZXMgXCIgKyBzLnRvU3RyaW5nKCkgKyBcIiBzZWNvbmRzXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gTGVmdERhdGVCaWQoZGF0ZXRleHQpIHtcclxuICAgICAgICB2YXIgYyA9IG5ldyBEYXRlKGRhdGV0ZXh0KS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdmFyIG4gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB2YXIgZCA9IGMgLSBuO1xyXG4gICAgICAgIHZhciBkYSA9IE1hdGguZmxvb3IoZCAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XHJcbiAgICAgICAgdmFyIGggPSBNYXRoLmZsb29yKChkICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCkpO1xyXG4gICAgICAgIHZhciBtID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCkpO1xyXG4gICAgICAgIHZhciBzID0gTWF0aC5mbG9vcigoZCAlICgxMDAwICogNjApKSAvIDEwMDApO1xyXG4gICAgICAgIHJldHVybiAoZGEudG9TdHJpbmcoKSArIFwiZCBcIiArIGgudG9TdHJpbmcoKSArIFwiaCBcIiArIG0udG9TdHJpbmcoKSArIFwibSBcIiArIHMudG9TdHJpbmcoKSArIFwic1wiKTtcclxuICAgIH1cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoQ29udHJhY3REYXRhKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICAgICAgICAgICAgaWYgKGNvbnRyYWN0ICYmIGlkKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRFdmVudElkKGlkKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gYXdhaXQgY29udHJhY3QuZXZlbnRVUkkoaWQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJyID0gW107XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbFRva2VucyA9IGF3YWl0IGNvbnRyYWN0LmdldHRva2VuU2VhcmNoRXZlbnRUb3RhbChpZCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE51bWJlcigxMCk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IGF3YWl0IHRvdGFsVG9rZW5zW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmplY3QgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICB0cnkgeyBvYmplY3QgPSBhd2FpdCBKU09OLnBhcnNlKG9iaikgfSBjYXRjaCB7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0LnRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcmljZWRlczEgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkgeyBwcmljZWRlczEgPSBmb3JtYXR0ZXIuZm9ybWF0KE51bWJlcihvYmplY3QucHJvcGVydGllcy5wcmljZS5kZXNjcmlwdGlvbiAqIDM4MTcuMDkpKSB9IGNhdGNoIChleCkgeyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IFRva2VuSWQgPSBOdW1iZXIoYXdhaXQgY29udHJhY3QuZ2V0dG9rZW5JZEJ5VXJpKG9iaikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhUb2tlbklkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgSWQ6IFRva2VuSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBvYmplY3QucHJvcGVydGllcy5uYW1lLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IG9iamVjdC5wcm9wZXJ0aWVzLmRlc2NyaXB0aW9uLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmlkcHJpY2U6IHByaWNlZGVzMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBOdW1iZXIob2JqZWN0LnByb3BlcnRpZXMucHJpY2UuZGVzY3JpcHRpb24pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogb2JqZWN0LnByb3BlcnRpZXMudHlwZWltZy5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBvYmplY3QucHJvcGVydGllcy5pbWFnZS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzZXRMaXN0KGFycik7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJMb2FkaW5nXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTG9hZGluZ1wiKS5zdHlsZSA9IFwiZGlzcGxheTpub25lXCI7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHNldEV2ZW50dXJpKHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvYmplY3QgPSBKU09OLnBhcnNlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHNldFRpdGxlKG9iamVjdC5wcm9wZXJ0aWVzLlRpdGxlLmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgICAgIHNldGdvYWx1c2QoZm9ybWF0dGVyLmZvcm1hdChOdW1iZXIob2JqZWN0LnByb3BlcnRpZXMuR29hbC5kZXNjcmlwdGlvbiAqIDM4MTcuMDkpKSk7XHJcbiAgICAgICAgICAgICAgICBzZXRnb2FsKE51bWJlcihvYmplY3QucHJvcGVydGllcy5Hb2FsLmRlc2NyaXB0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICBzZXRkYXRlbGVmdChMZWZ0RGF0ZShvYmplY3QucHJvcGVydGllcy5EYXRlLmRlc2NyaXB0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICBzZXRkYXRlKG9iamVjdC5wcm9wZXJ0aWVzLkRhdGUuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgICAgICAgICAgc2V0ZGF0ZWxlZnRCaWQoTGVmdERhdGVCaWQob2JqZWN0LnByb3BlcnRpZXMuRGF0ZS5kZXNjcmlwdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgc2V0bG9nbyhvYmplY3QucHJvcGVydGllcy5sb2dvLmRlc2NyaXB0aW9uKTtcclxuICAgICAgICAgICAgICAgIHNldFRva2VuTmFtZShhd2FpdCBjb250cmFjdC5uYW1lKCkpO1xyXG4gICAgICAgICAgICAgICAgc2V0VG9rZW5TeW1ib2woYXdhaXQgY29udHJhY3Quc3ltYm9sKCkpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hDb250cmFjdERhdGEoKTtcclxuXHJcbiAgICB9LCBbcm91dGVyLnF1ZXJ5LCBjb250cmFjdF0pO1xyXG5cclxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYWxjdWxhdGVUaW1lTGVmdCgpO1xyXG4gICAgfSwgMTAwMCk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZVRpbWVMZWZ0KCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciBhbGxEYXRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKFwiZGF0ZWxlZnRcIik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsRGF0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gKGFsbERhdGVzW2ldKS5nZXRBdHRyaWJ1dGUoXCJkYXRlXCIpO1xyXG4gICAgICAgICAgICAgICAgYWxsRGF0ZXNbaV0uaW5uZXJIVE1MID0gTGVmdERhdGUoZGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGFsbERhdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoXCJkYXRlXCIpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbERhdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0ZSA9IChhbGxEYXRlc1tpXSkuZ2V0QXR0cmlidXRlKFwiZGF0ZVwiKTtcclxuICAgICAgICAgICAgICAgIGFsbERhdGVzW2ldLmlubmVySFRNTCA9IExlZnREYXRlQmlkKGRhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhY3RpdmF0ZVZpZXdCaWRNb2RhbChlKSB7XHJcbiAgICAgICAgc2V0c2VsZWN0aWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidG9rZW5pZFwiKSk7XHJcbiAgICAgICAgc2V0c2VsZWN0dGl0bGUoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidGl0bGVcIikpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImhpZ2hlc3RiaWRcIikpO1xyXG4gICAgICAgIHNldHNlbGVjdGJpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJoaWdoZXN0YmlkXCIpKTtcclxuICAgICAgICBzZXRWaWV3TW9kYWxTaG93KHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFjdGl2YXRlQmlkTkZUTW9kYWwoZSkge1xyXG4gICAgICAgIHNldHNlbGVjdGlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInRva2VuaWRcIikpO1xyXG4gICAgICAgIHNldHNlbGVjdHR5cGUoXCJORlRcIik7XHJcbiAgICAgICAgc2V0TW9kYWxTaG93KHRydWUpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWN0aXZhdGVCaWRDcnlwdG9wdW5rVE1vZGFsKGUpIHtcclxuICAgICAgICBzZXRzZWxlY3RpZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ0b2tlbmlkXCIpKTtcclxuICAgICAgICBzZXRzZWxlY3R0eXBlKFwiQ3J5cHRvcHVua1wiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJoaWdoZXN0YmlkXCIpKTtcclxuICAgICAgICBzZXRzZWxlY3RiaWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaGlnaGVzdGJpZFwiKSk7XHJcbiAgICAgICAgc2V0TW9kYWxTaG93KHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXt0aXRsZX0gLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgRXZlbnRDb250YWluZXJcIiA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IFwiZGlzcGxheVwiOiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nb30gY2xhc3NOYW1lPVwiQXVjdGlvbkltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkRldGlhbHNDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0Pnt0aXRsZX08L2g0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J1RleHRDb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PkdvYWw6IDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+JCB7Z29hbHVzZH0gKHtnb2FsfSBFVEgpPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdUZXh0Q29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBuYW1lPSdkYXRlbGVmdCcgZGF0ZT17ZGF0ZX0+e2RhdGVsZWZ0fTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPSdMb2FkaW5nJyBjbGFzc05hbWU9XCJMb2FkaW5nQXJlYVwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPkxvYWRpbmcuLi48L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2xpc3QubWFwKChsaXN0SXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2xpc3RJdGVtLklkfSBjbGFzc05hbWU9XCJyb3cgRWxlbWVudHNDb250YWluZXIgYmdXaGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgXCJkaXNwbGF5XCI6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGlzdEl0ZW0udHlwZSA9PSBcIkNyeXB0b3B1bmtcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsaXN0SXRlbS5pbWFnZX0gY2xhc3NOYW1lPVwiQXVjdGlvbkJpZEltYWdlIHBpeGVsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsaXN0SXRlbS5pbWFnZX0gY2xhc3NOYW1lPVwiQXVjdGlvbkJpZEltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJEZXRpYWxzQ29udGFpbmVyXCIgc3R5bGU9e3sgcm93R2FwOiBcIjVweFwiIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e2xpc3RJdGVtLm5hbWV9PC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IHN0eWxlPXt7IGNvbG9yOiBcInJnYigxMzksIDEzOSwgMTM5KVwiIH19PlR5cGU6IHtsaXN0SXRlbS50eXBlfTwvaDU+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGV4dENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgY29sb3I6IFwiIzhCOEI4QlwiIH19PntsaXN0SXRlbS5kZXNjcmlwdGlvbn08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nRWxlbWVudEJvdHRvbUNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMTZweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDcgY2xhc3NOYW1lPVwic21hbGxncmV5XCI+Q3VycmVudCBiaWQ8L2g3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdiaWRwcmljZSc+JCB7bGlzdEl0ZW0uQmlkcHJpY2V9ICh7bGlzdEl0ZW0ucHJpY2V9IEVUSCk8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDcgbmFtZT1cImRhdGVcIiBkYXRlPXtkYXRlfSBjbGFzc05hbWU9XCJzbWFsbGdyZXlcIj57ZGF0ZWxlZnRCaWR9PC9oNz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nQmlkQWxsY29udGFpbmVyJyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdCaWRzYnV0dG9uJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHRpdGxlPXtsaXN0SXRlbS5uYW1lfSBvbkNsaWNrPXthY3RpdmF0ZVZpZXdCaWRNb2RhbH0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IHRpdGxlPXtsaXN0SXRlbS5uYW1lfSBjbGFzc05hbWU9XCJjYXJkIEJpZGNvbnRhaW5lckNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gdGl0bGU9e2xpc3RJdGVtLm5hbWV9IGNsYXNzTmFtZT1cImNhcmQtYm9keSBiaWRidXR0b25UZXh0XCI+VmlldzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsaXN0SXRlbS50eXBlID09IFwiQ3J5cHRvcHVua1wiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdG9rZW5pZD17bGlzdEl0ZW0uSWR9IGhpZ2hlc3RiaWQ9e2xpc3RJdGVtLnByaWNlfSBvbkNsaWNrPXthY3RpdmF0ZUJpZENyeXB0b3B1bmtUTW9kYWx9IGNsYXNzTmFtZT1cIkJpZGNvbnRhaW5lciBjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGNsYXNzTmFtZT1cImNhcmQgQmlkY29udGFpbmVyQ2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB0b2tlbmlkPXtsaXN0SXRlbS5JZH0gaGlnaGVzdGJpZD17bGlzdEl0ZW0ucHJpY2V9IGNsYXNzTmFtZT1cImNhcmQtYm9keSBiaWRidXR0b25UZXh0XCI+QmlkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gb25DbGljaz17YWN0aXZhdGVCaWRORlRNb2RhbH0gY2xhc3NOYW1lPVwiQmlkY29udGFpbmVyIGNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gY2xhc3NOYW1lPVwiY2FyZCBCaWRjb250YWluZXJDYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHRva2VuaWQ9e2xpc3RJdGVtLklkfSBoaWdoZXN0YmlkPXtsaXN0SXRlbS5wcmljZX0gY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGJpZGJ1dHRvblRleHRcIj5CaWQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuXHJcblxyXG4gICAgICAgICAgICA8QmlkTkZUTW9kYWxcclxuICAgICAgICAgICAgICAgIHNob3c9e21vZGFsU2hvd31cclxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1vZGFsU2hvdyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIHBvb3IgaW1wbGVtZW50YXRpb24sIGJldHRlciB0byBpbXBsZW1lbnQgYW4gZXZlbnQgbGlzdGVuZXJcclxuICAgICAgICAgICAgICAgICAgICBmZXRjaENvbnRyYWN0RGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNvbnRyYWN0PXtjb250cmFjdH1cclxuICAgICAgICAgICAgICAgIEFtb3VudD17c2lnbmVyQWRkcmVzc31cclxuICAgICAgICAgICAgICAgIHRva2VuSWQ9e3NlbGVjdGlkfVxyXG4gICAgICAgICAgICAgICAgc2VuZGVyQWRkcmVzcz17c2lnbmVyQWRkcmVzc31cclxuICAgICAgICAgICAgICAgIHR5cGU9e3NlbGVjdHR5cGV9XHJcbiAgICAgICAgICAgICAgICBldmVudElkPXtldmVudElkfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPFZpZXdCaWRORlRNb2RhbFxyXG4gICAgICAgICAgICAgICAgc2hvdz17Vmlld21vZGFsU2hvd31cclxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFZpZXdNb2RhbFNob3coZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBwb29yIGltcGxlbWVudGF0aW9uLCBiZXR0ZXIgdG8gaW1wbGVtZW50IGFuIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hDb250cmFjdERhdGEoKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBpZD17c2VsZWN0aWR9XHJcbiAgICAgICAgICAgICAgICB0aXRsZT17c2VsZWN0dGl0bGV9XHJcbiAgICAgICAgICAgICAgICBIaWdoZXN0YmlkPXtzZWxlY3RiaWR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=