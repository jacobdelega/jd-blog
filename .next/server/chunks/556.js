exports.id = 556;
exports.ids = [556];
exports.modules = {

/***/ 25857:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "menu_container__OOv4_",
	"subtitle": "menu_subtitle__slHAn",
	"title": "menu_title__74U37"
};


/***/ }),

/***/ 49139:
/***/ ((module) => {

// Exports
module.exports = {
	"categoryList": "menuCategories_categoryList__pIVZ_",
	"categoryItem": "menuCategories_categoryItem__tMp8t",
	"style": "menuCategories_style__h6eFh",
	"fashion": "menuCategories_fashion__8HmWe",
	"food": "menuCategories_food__rrqaU",
	"travel": "menuCategories_travel__qOlS9",
	"culture": "menuCategories_culture__YhgSV",
	"coding": "menuCategories_coding__U2Fi7"
};


/***/ }),

/***/ 73017:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "menuPost_container__hyEBx",
	"subtitle": "menuPost_subtitle__SMphb",
	"title": "menuPost_title__Z3xMi",
	"item": "menuPost_item__1TRT6",
	"items": "menuPost_items__rn1IU",
	"imgContainer": "menuPost_imgContainer__uBTN8",
	"postTitle": "menuPost_postTitle__k4I_V",
	"image": "menuPost_image__dkKwC",
	"textContainer": "menuPost_textContainer__x26vz",
	"detail": "menuPost_detail__mopNz",
	"date": "menuPost_date__nYzL5",
	"category": "menuPost_category__UBS9y",
	"travel": "menuPost_travel__43NHy",
	"culture": "menuPost_culture__n6373",
	"food": "menuPost_food___h3x8",
	"fashion": "menuPost_fashion__YXkKg",
	"coding": "menuPost_coding__0e6dz",
	"style": "menuPost_style__K3Xlv"
};


/***/ }),

/***/ 16556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ menu_Menu)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(62947);
// EXTERNAL MODULE: ./src/app/components/menu/menu.module.css
var menu_module = __webpack_require__(25857);
var menu_module_default = /*#__PURE__*/__webpack_require__.n(menu_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(25124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(14178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/app/components/menuPost/menuPost.module.css
var menuPost_module = __webpack_require__(73017);
var menuPost_module_default = /*#__PURE__*/__webpack_require__.n(menuPost_module);
;// CONCATENATED MODULE: ./src/app/components/menuPost/MenuPost.jsx





const MenuPost = ({ withImage })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (menuPost_module_default()).items,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: "/",
                className: (menuPost_module_default()).item,
                children: [
                    withImage && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (menuPost_module_default()).imgContainer,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/p1.jpeg",
                            alt: "",
                            fill: true,
                            className: (menuPost_module_default()).image
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (menuPost_module_default()).textContainer,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: ` ${(menuPost_module_default()).category} ${(menuPost_module_default()).travel} `,
                                children: "Travel"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: (menuPost_module_default()).postTitle,
                                children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (menuPost_module_default()).detail,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (menuPost_module_default()).name,
                                        children: " John Doe"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (menuPost_module_default()).date,
                                        children: " - 10.02.2023"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: "/",
                className: (menuPost_module_default()).item,
                children: [
                    withImage && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (menuPost_module_default()).imgContainer,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/p1.jpeg",
                            alt: "",
                            fill: true,
                            className: (menuPost_module_default()).image
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (menuPost_module_default()).textContainer,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: ` ${(menuPost_module_default()).category} ${(menuPost_module_default()).culture} `,
                                children: "Culture"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: (menuPost_module_default()).postTitle,
                                children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (menuPost_module_default()).detail,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (menuPost_module_default()).name,
                                        children: " John Doe"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (menuPost_module_default()).date,
                                        children: " - 10.02.2023"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: "/",
                className: (menuPost_module_default()).item,
                children: [
                    withImage && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (menuPost_module_default()).imgContainer,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/p1.jpeg",
                            alt: "",
                            fill: true,
                            className: (menuPost_module_default()).image
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (menuPost_module_default()).textContainer,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: ` ${(menuPost_module_default()).category} ${(menuPost_module_default()).food} `,
                                children: "Food"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: (menuPost_module_default()).postTitle,
                                children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (menuPost_module_default()).detail,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (menuPost_module_default()).name,
                                        children: " John Doe"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (menuPost_module_default()).date,
                                        children: " - 10.02.2023"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: "/",
                className: (menuPost_module_default()).item,
                children: [
                    withImage && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (menuPost_module_default()).imgContainer,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/p1.jpeg",
                            alt: "",
                            fill: true,
                            className: (menuPost_module_default()).image
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (menuPost_module_default()).textContainer,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: ` ${(menuPost_module_default()).category} ${(menuPost_module_default()).fashion} `,
                                children: "Fashion"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: (menuPost_module_default()).postTitle,
                                children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (menuPost_module_default()).detail,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (menuPost_module_default()).name,
                                        children: " John Doe"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (menuPost_module_default()).date,
                                        children: " - 10.02.2023"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: "/",
                className: (menuPost_module_default()).item,
                children: [
                    withImage && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (menuPost_module_default()).imgContainer,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/p1.jpeg",
                            alt: "",
                            fill: true,
                            className: (menuPost_module_default()).image
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (menuPost_module_default()).textContainer,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: ` ${(menuPost_module_default()).category} ${(menuPost_module_default()).coding} `,
                                children: "Coding"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: (menuPost_module_default()).postTitle,
                                children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (menuPost_module_default()).detail,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (menuPost_module_default()).name,
                                        children: " John Doe"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (menuPost_module_default()).date,
                                        children: " - 10.02.2023"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: "/",
                className: (menuPost_module_default()).item,
                children: [
                    withImage && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (menuPost_module_default()).imgContainer,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/p1.jpeg",
                            alt: "",
                            fill: true,
                            className: (menuPost_module_default()).image
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (menuPost_module_default()).textContainer,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: ` ${(menuPost_module_default()).category} ${(menuPost_module_default()).style} `,
                                children: "Style"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: (menuPost_module_default()).postTitle,
                                children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (menuPost_module_default()).detail,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (menuPost_module_default()).name,
                                        children: " John Doe"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (menuPost_module_default()).date,
                                        children: " - 10.02.2023"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const menuPost_MenuPost = (MenuPost);

// EXTERNAL MODULE: ./src/app/components/menuCategories/menuCategories.module.css
var menuCategories_module = __webpack_require__(49139);
var menuCategories_module_default = /*#__PURE__*/__webpack_require__.n(menuCategories_module);
;// CONCATENATED MODULE: ./src/app/components/menuCategories/MenuCategories.jsx




const MenuCategories = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (menuCategories_module_default()).categoryList,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/blog?cat=style",
                className: `${(menuCategories_module_default()).categoryItem} ${(menuCategories_module_default()).style}`,
                children: "Style"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/blog",
                className: `${(menuCategories_module_default()).categoryItem} ${(menuCategories_module_default()).fashion}`,
                children: "Fashion"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/blog",
                className: `${(menuCategories_module_default()).categoryItem} ${(menuCategories_module_default()).food}`,
                children: "Food"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/blog",
                className: `${(menuCategories_module_default()).categoryItem} ${(menuCategories_module_default()).travel}`,
                children: "Travel"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/blog",
                className: `${(menuCategories_module_default()).categoryItem} ${(menuCategories_module_default()).culture}`,
                children: "Culture"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/blog",
                className: `${(menuCategories_module_default()).categoryItem} ${(menuCategories_module_default()).coding}`,
                children: "Coding"
            })
        ]
    });
};
/* harmony default export */ const menuCategories_MenuCategories = (MenuCategories);

;// CONCATENATED MODULE: ./src/app/components/menu/Menu.jsx







const Menu = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (menu_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: (menu_module_default()).subtitle,
                children: "What's hot"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (menu_module_default()).title,
                children: "Most popular"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(menuPost_MenuPost, {
                withImage: false
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: (menu_module_default()).subtitle,
                children: "Discover by topic"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (menu_module_default()).title,
                children: "Categories"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(menuCategories_MenuCategories, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: (menu_module_default()).subtitle,
                children: "Chosen by the author"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (menu_module_default()).title,
                children: "Editors pick"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(menuPost_MenuPost, {
                withImage: true
            })
        ]
    });
};
/* harmony default export */ const menu_Menu = (Menu);


/***/ })

};
;