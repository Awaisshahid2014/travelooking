exports.id = 57;
exports.ids = [57];
exports.modules = {

/***/ 1862:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3100, 23))

/***/ }),

/***/ 4734:
/***/ (() => {



/***/ }),

/***/ 2183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ customlayout_CustomLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var index_esm = __webpack_require__(6775);
;// CONCATENATED MODULE: ./app/customlayout/PrimaryHeader.js
/* __next_internal_client_entry_do_not_use__ default auto */ 


const PrimaryHeader = ({ padding, height, background })=>{
    const [pagename, setPagename] = (0,react_.useState)("stays");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "row",
        style: {
            padding: padding,
            height: height,
            background: background
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "d-flex alig-items-center justify-content-between py-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-white",
                            children: "Booking Trip"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "mx-1 px-2  border-0",
                                children: "Register"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "px-2 bg-default border-0",
                                children: "Login"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "d-flex alig-items-center justify-content-start py-2",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: pagename == "stays" ? "me-5 p-2 cursor-pointer border" : "me-5 p-2",
                        style: {
                            border: "none",
                            borderRadius: "20px"
                        },
                        onClick: ()=>setPagename("stays"),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaBed */.f0S, {
                                color: "#FFFFFF"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "px-2 text-white",
                                style: {
                                    cursor: "pointer"
                                },
                                children: "Stays"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: pagename == "flights" ? "me-5 p-2 cursor-pointer border" : "me-5 p-2",
                        style: {
                            border: "none",
                            borderRadius: "20px"
                        },
                        onClick: ()=>setPagename("flights"),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaPlane */.NqP, {
                                color: "#FFFFFF"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "px-2 text-white",
                                style: {
                                    cursor: "pointer"
                                },
                                children: "Flights"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: pagename == "car rentals" ? "me-5 p-2 cursor-pointer border" : "me-5 p-2",
                        style: {
                            border: "none",
                            borderRadius: "20px"
                        },
                        onClick: ()=>setPagename("car rentals"),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaCarAlt */.OI4, {
                                color: "#FFFFFF"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "px-2 text-white",
                                style: {
                                    cursor: "pointer"
                                },
                                children: "Car rentals"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: pagename == "attractions" ? "me-5 p-2 cursor-pointer border" : "me-5 p-2",
                        style: {
                            border: "none",
                            borderRadius: "20px"
                        },
                        onClick: ()=>setPagename("attractions"),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaBed */.f0S, {
                                color: "#FFFFFF"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "px-2 text-white",
                                style: {
                                    cursor: "pointer"
                                },
                                children: "Attractions"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: pagename == "airport taxis" ? "me-5 p-2 cursor-pointer border" : "me-5 p-2",
                        style: {
                            border: "none",
                            borderRadius: "20px"
                        },
                        onClick: ()=>setPagename("airport taxis"),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* FaCarAlt */.OI4, {
                                color: "#FFFFFF"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "px-2 text-white",
                                style: {
                                    cursor: "pointer"
                                },
                                children: "Airport taxis"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const customlayout_PrimaryHeader = (PrimaryHeader);

;// CONCATENATED MODULE: ./app/customlayout/PrimaryFooter.js


const PrimaryFooter = ({ padding, height, background })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "d-flex align-items-center",
        style: {
            padding: padding,
            height: height,
            background: background
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "col-md-12",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "d-flex justify-content-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                style: {
                                    listStyle: "none",
                                    lineHeight: "2em"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Countries"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Regions"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Cities"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Districts"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Airports"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Hotels"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Places of interest"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                style: {
                                    listStyle: "none",
                                    lineHeight: "2em"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Countries"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Regions"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Cities"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Districts"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Airports"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Hotels"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Places of interest"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                style: {
                                    listStyle: "none",
                                    lineHeight: "2em"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Countries"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Regions"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Cities"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Districts"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Airports"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Hotels"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Places of interest"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                style: {
                                    listStyle: "none",
                                    lineHeight: "2em"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Countries"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Regions"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Cities"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Districts"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Airports"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Hotels"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Places of interest"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                style: {
                                    listStyle: "none",
                                    lineHeight: "2em"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Countries"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Regions"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Cities"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Districts"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Airports"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Hotels"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: "Places of interest"
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "px-5",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Copyright \xa9 2023 Booking Trip. All rights reserved"
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const customlayout_PrimaryFooter = (PrimaryFooter);

// EXTERNAL MODULE: ./utils/Colors.js
var Colors = __webpack_require__(2860);
;// CONCATENATED MODULE: ./app/customlayout/CustomLayout.js





const CustomLayout = ({ children })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            height: "100vh"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(customlayout_PrimaryHeader, {
                padding: "10px 3rem",
                height: "",
                background: Colors/* default */.Z.main_primary
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    minHeight: "80%",
                    background: Colors/* default */.Z.main_white
                },
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(customlayout_PrimaryFooter, {
                padding: "2rem 3rem 0.5rem 3rem",
                height: "",
                background: "#FFFFFF"
            })
        ]
    });
};
/* harmony default export */ const customlayout_CustomLayout = (CustomLayout);


/***/ }),

/***/ 2860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Colors = {
    main_primary: "#111180",
    main_orange: "#FFA500",
    main_white: "#FFFFFF",
    main_primary_btn: "#205db8"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Colors);


/***/ }),

/***/ 2756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_app_layout_js_import_Mulish_arguments_subsets_latin_variableName_mulish___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(634);
/* harmony import */ var next_font_google_target_css_path_app_layout_js_import_Mulish_arguments_subsets_latin_variableName_mulish___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_app_layout_js_import_Mulish_arguments_subsets_latin_variableName_mulish___WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2817);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(802);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);




const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            className: (next_font_google_target_css_path_app_layout_js_import_Mulish_arguments_subsets_latin_variableName_mulish___WEBPACK_IMPORTED_MODULE_3___default().className),
            children: children
        })
    });
}


/***/ }),

/***/ 3174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 2817:
/***/ (() => {



/***/ })

};
;