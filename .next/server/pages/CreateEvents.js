(function() {
var exports = {};
exports.id = 507;
exports.ids = [507];
exports.modules = {

/***/ 511:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ CreateEvents; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react-bootstrap/Row"
var Row_ = __webpack_require__(3406);
var Row_default = /*#__PURE__*/__webpack_require__.n(Row_);
// EXTERNAL MODULE: external "react-bootstrap/Col"
var Col_ = __webpack_require__(7707);
var Col_default = /*#__PURE__*/__webpack_require__.n(Col_);
// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__(5777);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: ./components/UseFormInput.jsx
var UseFormInput = __webpack_require__(2358);
// EXTERNAL MODULE: ./services/useContract.js + 2 modules
var useContract = __webpack_require__(1926);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: external "react-file-base64"
var external_react_file_base64_namespaceObject = require("react-file-base64");;
;// CONCATENATED MODULE: ./pages/CreateEvents.jsx












function CreateEvents() {
  const {
    contract,
    signerAddress
  } = (0,useContract/* default */.Z)('ERC721');
  let {
    state
  } = {};
  const [EventTitle, EventTitleInput] = (0,UseFormInput/* default */.Z)({
    defaultValue: "",
    type: 'text',
    placeholder: 'Event Title',
    id: ''
  });
  const [EventDescription, EventDescriptionInput] = (0,UseFormInput/* default */.Z)({
    defaultValue: "",
    type: 'text',
    placeholder: 'Event Description',
    id: ''
  });
  const [EventDate, EventDateInput] = (0,UseFormInput/* default */.Z)({
    defaultValue: "",
    type: 'datetime-local',
    placeholder: 'Event End Date ',
    id: 'enddate'
  });
  const [EventGoal, EventGoalInput] = (0,UseFormInput/* default */.Z)({
    defaultValue: "",
    type: 'text',
    placeholder: 'Event Goal in ETH',
    id: 'goal'
  });

  async function createEvent() {
    const createdObject = {
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
        logo: {
          type: 'string',
          description: EventLogo
        },
        typeimg: {
          type: 'string',
          description: "Event"
        }
      }
    };

    try {
      const result = await contract.createEvent(signerAddress, JSON.stringify(createdObject));
      console.log(result);
    } catch {
      router_default().push('/login');
    }

    router_default().push('/donation');
  }

  const [EventLogo, EventLogoInput] = (0,UseFormInput/* default */.Z)({
    defaultValue: "",
    type: 'text',
    placeholder: 'Event Logo Link',
    id: 'logo'
  });
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
        children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
          children: "Create Event"
        }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
          name: "description",
          content: "Create Event"
        }), /*#__PURE__*/jsx_runtime_.jsx("link", {
          rel: "icon",
          href: "/favicon.ico"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx((Row_default()), {
        children: /*#__PURE__*/jsx_runtime_.jsx((Col_default()), {
          style: {
            padding: "0 30%",
            "paddingTop": 0,
            width: "100%"
          },
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            style: {
              width: "500px",
              background: "transparent",
              padding: "19px",
              borderRadius: "4px",
              height: "100%",
              border: "white solid"
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              style: {
                margin: "0px 0px 30px 0px"
              },
              children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
                children: "Create Event"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              style: {
                margin: "18px 0"
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Event Title"
              }), EventTitleInput]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              style: {
                margin: "18px 0"
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Event End Date"
              }), EventDateInput]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              style: {
                margin: "18px 0"
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Event Goal"
              }), EventGoalInput]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              style: {
                margin: "18px 0"
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "Event Logo Link"
              }), EventLogoInput]
            }), /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
              style: {
                margin: "17px 0 0px 0px",
                width: "100%"
              },
              onClick: createEvent,
              children: "Create Event"
            })]
          })
        })
      })]
    })
  });
}

/***/ }),

/***/ 4879:
/***/ (function(module) {

"use strict";
module.exports = require("ethers");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5777:
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Button");;

/***/ }),

/***/ 7707:
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Col");;

/***/ }),

/***/ 7140:
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Form");;

/***/ }),

/***/ 3406:
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Row");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [972], function() { return __webpack_exec__(511); });
module.exports = __webpack_exports__;

})();