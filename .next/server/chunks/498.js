exports.id = 498;
exports.ids = [498];
exports.modules = {

/***/ 69354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pagination_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80765);
/* harmony import */ var _pagination_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pagination_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const Pagination = ({ page, hasPrev, hasNext })=>{
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_pagination_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: (_pagination_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),
                disabled: !hasPrev,
                onClick: ()=>router.push(`?page=${page - 1}`),
                children: "Previous"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: (_pagination_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),
                disabled: !hasNext,
                onClick: ()=>router.push(`?page=${page + 1}`),
                children: "Next"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);


/***/ }),

/***/ 85215:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "card_container__jV8rV",
	"imageContainer": "card_imageContainer__kovEV",
	"textContainer": "card_textContainer__EpxTs",
	"date": "card_date__87sj6",
	"category": "card_category__bKBa8",
	"desc": "card_desc__cfhrY",
	"link": "card_link__DJ1Br",
	"image": "card_image___2VKx",
	"imgContainer": "card_imgContainer__94lZg"
};


/***/ }),

/***/ 53346:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "cardList_container__Io3BA",
	"title": "cardList_title__keLvA"
};


/***/ }),

/***/ 80765:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "pagination_container__otCNx",
	"button": "pagination_button__uxftp"
};


/***/ }),

/***/ 83859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ cardList_CardList)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(62947);
// EXTERNAL MODULE: ./src/app/components/cardList/cardList.module.css
var cardList_module = __webpack_require__(53346);
var cardList_module_default = /*#__PURE__*/__webpack_require__.n(cardList_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/app/components/pagination/Pagination.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/jacob/Desktop/blog-app/src/app/components/pagination/Pagination.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Pagination = (__default__);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(14178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/app/components/card/card.module.css
var card_module = __webpack_require__(85215);
var card_module_default = /*#__PURE__*/__webpack_require__.n(card_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(25124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/app/components/card/Card.jsx





const Card = ({ key, item })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (card_module_default()).container,
        children: [
            item.img && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (card_module_default()).imageContainer,
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: item.img,
                    alt: "",
                    fill: true,
                    className: (card_module_default()).image
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (card_module_default()).textContainer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (card_module_default()).detail,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: (card_module_default()).date,
                                children: [
                                    item.createdAt.substring(0, 10),
                                    " - "
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: (card_module_default()).category,
                                children: item.catSlug
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/posts/${item.slug}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            className: (card_module_default()).title,
                            children: item.title
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (card_module_default()).desc,
                        dangerouslySetInnerHTML: {
                            __html: item?.desc.substring(0, 60)
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/posts/${item.slug}`,
                        className: (card_module_default()).link,
                        children: "Read more"
                    })
                ]
            })
        ]
    }, key);
};
/* harmony default export */ const card_Card = (Card);

;// CONCATENATED MODULE: ./src/app/components/cardList/CardList.jsx






const getData = async (page, cat)=>{
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
        cache: "no-store"
    });
    if (!res.ok) {
        throw new Error("Failed");
    }
    return res.json();
};
const CardList = async ({ page, cat })=>{
    const { posts, count } = await getData(page, cat);
    const POST_PER_PAGE = 2;
    const hasPrev = POST_PER_PAGE * (page - 1) > 0;
    const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (cardList_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (cardList_module_default()).title,
                children: "Recent Post"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (cardList_module_default()).post,
                children: posts?.map((post)=>/*#__PURE__*/ jsx_runtime_.jsx(card_Card, {
                        item: post
                    }, post._id))
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Pagination, {
                page: page,
                hasPrev: hasPrev,
                hasNext: hasNext
            })
        ]
    });
};
/* harmony default export */ const cardList_CardList = (CardList);


/***/ }),

/***/ 57114:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(90696)


/***/ })

};
;