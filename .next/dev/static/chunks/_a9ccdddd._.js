(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "navLinks",
    ()=>navLinks,
    "navLinksFooter",
    ()=>navLinksFooter,
    "resourceLinks",
    ()=>resourceLinks,
    "serviceLinks",
    ()=>serviceLinks,
    "siteData",
    ()=>siteData,
    "siteLogo",
    ()=>siteLogo
]);
const siteData = {
    tagline: "Tagline Here",
    phone: "(629) 555-0129",
    email: "felicia.reid@example.com",
    facebook: "https://www.facebook.com/your-page",
    instagram: "https://www.instagram.com/your-page",
    twitter: "https://www.twitter.com/your-page",
    linkedin: "https://www.linkedin.com/your-page",
    address: "123 Financial Street",
    city: "Your City",
    state: "State",
    zip: "12345"
};
const navLinks = [
    {
        href: '/about',
        label: 'About'
    },
    {
        href: '/services',
        label: 'Services'
    },
    {
        href: '/contract',
        label: 'Contract'
    },
    {
        href: '/blogs',
        label: 'Blogs'
    },
    {
        href: '/payments',
        label: 'Payments'
    }
];
const siteLogo = {
    logoHeader: '/logoheader.png',
    logoFooter: '/logofooter.png'
};
const navLinksFooter = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'About',
        href: '/about'
    }
];
const serviceLinks = [
    {
        label: 'Services',
        href: '/services'
    },
    {
        label: 'Report',
        href: '/report'
    }
];
const resourceLinks = [
    {
        label: 'Blog',
        href: '/blog'
    },
    {
        label: 'Contact',
        href: '/contact'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Header = ()=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleMenu = ()=>setIsOpen(!isOpen);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "bg-primary-blue ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container px-5  py-4 flex justify-center md:justify-between items-center max-w-[1280px] mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white text-[10px] font-bold hidden md:block",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteData"].tagline
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 border-r border-white pr-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "12",
                                        height: "12",
                                        viewBox: "0 0 12 12",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M8.725 11.375C8.16 11.375 7.565 11.24 6.95 10.98C6.35 10.725 5.745 10.375 5.155 9.95C4.57 9.52 4.005 9.04 3.47 8.515C2.94 7.98 2.46 7.415 2.035 6.835C1.605 6.235 1.26 5.635 1.015 5.055C0.755 4.435 0.625 3.835 0.625 3.27C0.625 2.88 0.695 2.51 0.83 2.165C0.97 1.81 1.195 1.48 1.5 1.195C1.885 0.815 2.325 0.625 2.795 0.625C2.99 0.625 3.19 0.67 3.36 0.75C3.555 0.84 3.72 0.975 3.84 1.155L5 2.79C5.105 2.935 5.185 3.075 5.24 3.215C5.305 3.365 5.34 3.515 5.34 3.66C5.34 3.85 5.285 4.035 5.18 4.21C5.105 4.345 4.99 4.49 4.845 4.635L4.505 4.99C4.51 5.005 4.515 5.015 4.52 5.025C4.58 5.13 4.7 5.31 4.93 5.58C5.175 5.86 5.405 6.115 5.635 6.35C5.93 6.64 6.175 6.87 6.405 7.06C6.69 7.3 6.875 7.42 6.985 7.475L6.975 7.5L7.34 7.14C7.495 6.985 7.645 6.87 7.79 6.795C8.065 6.625 8.415 6.595 8.765 6.74C8.895 6.795 9.035 6.87 9.185 6.975L10.845 8.155C11.03 8.28 11.165 8.44 11.245 8.63C11.32 8.82 11.355 8.995 11.355 9.17C11.355 9.41 11.3 9.65 11.195 9.875C11.09 10.1 10.96 10.295 10.795 10.475C10.51 10.79 10.2 11.015 9.84 11.16C9.495 11.3 9.12 11.375 8.725 11.375ZM2.795 1.375C2.52 1.375 2.265 1.495 2.02 1.735C1.79 1.95 1.63 2.185 1.53 2.44C1.425 2.7 1.375 2.975 1.375 3.27C1.375 3.735 1.485 4.24 1.705 4.76C1.93 5.29 2.245 5.84 2.645 6.39C3.045 6.94 3.5 7.475 4 7.98C4.5 8.475 5.04 8.935 5.595 9.34C6.135 9.735 6.69 10.055 7.24 10.285C8.095 10.65 8.895 10.735 9.555 10.46C9.81 10.355 10.035 10.195 10.24 9.965C10.355 9.84 10.445 9.705 10.52 9.545C10.58 9.42 10.61 9.29 10.61 9.16C10.61 9.08 10.595 9 10.555 8.91C10.54 8.88 10.51 8.825 10.415 8.76L8.755 7.58C8.655 7.51 8.565 7.46 8.48 7.425C8.37 7.38 8.325 7.335 8.155 7.44C8.055 7.49 7.965 7.565 7.865 7.665L7.485 8.04C7.29 8.23 6.99 8.275 6.76 8.19L6.625 8.13C6.42 8.02 6.18 7.85 5.915 7.625C5.675 7.42 5.415 7.18 5.1 6.87C4.855 6.62 4.61 6.355 4.355 6.06C4.12 5.785 3.95 5.55 3.845 5.355L3.785 5.205C3.755 5.09 3.745 5.025 3.745 4.955C3.745 4.775 3.81 4.615 3.935 4.49L4.31 4.1C4.41 4 4.485 3.905 4.535 3.82C4.575 3.755 4.59 3.7 4.59 3.65C4.59 3.61 4.575 3.55 4.55 3.49C4.515 3.41 4.46 3.32 4.39 3.225L3.23 1.585C3.18 1.515 3.12 1.465 3.045 1.43C2.965 1.395 2.88 1.375 2.795 1.375ZM6.975 7.505L6.895 7.845L7.03 7.495C7.005 7.49 6.985 7.495 6.975 7.505Z",
                                            fill: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 26,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 19,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteData"].phone}`,
                                        className: "text-white text-[10px]",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteData"].phone
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 pl-4 ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "12",
                                        height: "12",
                                        viewBox: "0 0 12 12",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "0.4",
                                                y: "1.9",
                                                width: "11.2",
                                                height: "7.67059",
                                                rx: "1.6",
                                                stroke: "white",
                                                strokeWidth: "0.8"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 46,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M1.21094 1.90039H10.7891C11.2368 1.90059 11.5994 2.26316 11.5996 2.71094C11.5996 3.07082 11.3628 3.38768 11.0176 3.48926L7.58008 4.50098C6.54859 4.80433 5.45141 4.80433 4.41992 4.50098L0.982422 3.48926C0.637181 3.38768 0.400391 3.07082 0.400391 2.71094C0.400589 2.26316 0.763157 1.90059 1.21094 1.90039Z",
                                                stroke: "white",
                                                strokeWidth: "0.8"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 55,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteData"].email}`,
                                        className: "text-white text-[10px]",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteData"].email
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " items-center gap-4 hidden md:flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteData"].instagram,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 8 8",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M5.25751 0.649414H2.53617C1.3541 0.649414 0.649414 1.3541 0.649414 2.53617V5.25426C0.649414 6.43957 1.3541 7.14426 2.53617 7.14426H5.25426C6.43632 7.14426 7.14101 6.43957 7.14101 5.25751V2.53617C7.14426 1.3541 6.43957 0.649414 5.25751 0.649414ZM3.89684 5.15684C3.20189 5.15684 2.63684 4.59179 2.63684 3.89684C2.63684 3.20189 3.20189 2.63684 3.89684 2.63684C4.59179 2.63684 5.15684 3.20189 5.15684 3.89684C5.15684 4.59179 4.59179 5.15684 3.89684 5.15684ZM5.81931 2.23416C5.80307 2.27313 5.78034 2.30885 5.75111 2.34132C5.71864 2.37055 5.68292 2.39328 5.64395 2.40952C5.60498 2.42575 5.56276 2.4355 5.52055 2.4355C5.43287 2.4355 5.35168 2.40302 5.28998 2.34132C5.26075 2.30885 5.23802 2.27313 5.22179 2.23416C5.20555 2.19519 5.19581 2.15297 5.19581 2.11075C5.19581 2.06854 5.20555 2.02632 5.22179 1.98735C5.23802 1.94514 5.26075 1.91266 5.28998 1.88019C5.36467 1.8055 5.47833 1.76977 5.58225 1.79251C5.60498 1.79575 5.62446 1.80225 5.64395 1.81199C5.66343 1.81849 5.68292 1.82823 5.7024 1.84122C5.71864 1.85096 5.73488 1.8672 5.75111 1.88019C5.78034 1.91266 5.80307 1.94514 5.81931 1.98735C5.83555 2.02632 5.84529 2.06854 5.84529 2.11075C5.84529 2.15297 5.83555 2.19519 5.81931 2.23416Z",
                                        fill: "white"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteData"].facebook,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 8 8",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            clipPath: "url(#clip0_42_1054)",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M5.8456 0.649414H4.87138C4.44074 0.649414 4.02774 0.820483 3.72324 1.12499C3.41873 1.42949 3.24766 1.84249 3.24766 2.27313V3.24735H2.27344V4.54632H3.24766V7.14426H4.54663V4.54632H5.52086L5.8456 3.24735H4.54663V2.27313C4.54663 2.187 4.58085 2.1044 4.64175 2.0435C4.70265 1.9826 4.78525 1.94838 4.87138 1.94838H5.8456V0.649414Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 95,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 94,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                                id: "clip0_42_1054",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    width: "7.79381",
                                                    height: "7.79381",
                                                    fill: "white"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 101,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 100,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 87,
                                    columnNumber: 10
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 86,
                                columnNumber: 10
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteData"].twitter,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 8 8",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            clipPath: "url(#clip0_42_1056)",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M7.46953 0.973969C7.15855 1.19332 6.81423 1.3611 6.44983 1.47082C6.25426 1.24594 5.99433 1.08655 5.70521 1.01421C5.41609 0.941871 5.11173 0.960068 4.83329 1.06634C4.55485 1.17262 4.31577 1.36184 4.14838 1.60842C3.98099 1.855 3.89337 2.14705 3.89736 2.44505V2.76979C3.32667 2.78459 2.76118 2.65802 2.25124 2.40136C1.74131 2.14469 1.30277 1.7659 0.97468 1.29871C0.97468 1.29871 -0.324289 4.22139 2.59839 5.52036C1.92959 5.97434 1.13288 6.20197 0.325195 6.16985C3.24788 7.79356 6.82004 6.16985 6.82004 2.43531C6.81974 2.34485 6.81104 2.25462 6.79406 2.16577C7.12549 1.83892 7.35938 1.42624 7.46953 0.973969Z",
                                                fill: "white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 117,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 116,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                                id: "clip0_42_1056",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    width: "7.79381",
                                                    height: "7.79381",
                                                    fill: "white"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 123,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 122,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 109,
                                    columnNumber: 10
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 108,
                                columnNumber: 10
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteData"].linkedin,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "14",
                                    height: "14",
                                    viewBox: "0 0 8 8",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            clipPath: "url(#clip0_42_1058)",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M5.19552 2.59766C5.71229 2.59766 6.20788 2.80294 6.57329 3.16835C6.9387 3.53375 7.14398 4.02935 7.14398 4.54611V6.81931H5.84501V4.54611C5.84501 4.37386 5.77658 4.20866 5.65478 4.08686C5.53298 3.96505 5.36778 3.89663 5.19552 3.89663C5.02327 3.89663 4.85807 3.96505 4.73627 4.08686C4.61447 4.20866 4.54604 4.37386 4.54604 4.54611V6.81931H3.24707V4.54611C3.24707 4.02935 3.45235 3.53375 3.81776 3.16835C4.18317 2.80294 4.67876 2.59766 5.19552 2.59766V2.59766Z",
                                                    fill: "white"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M1.94838 2.92285H0.649414V6.81976H1.94838V2.92285Z",
                                                    fill: "white"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M1.2989 1.94838C1.6576 1.94838 1.94838 1.6576 1.94838 1.2989C1.94838 0.940198 1.6576 0.649414 1.2989 0.649414C0.940198 0.649414 0.649414 0.940198 0.649414 1.2989C0.649414 1.6576 0.940198 1.94838 1.2989 1.94838Z",
                                                    fill: "white"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 137,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                                id: "clip0_42_1058",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    width: "7.79381",
                                                    height: "7.79381",
                                                    fill: "white"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 152,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 151,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 130,
                                    columnNumber: 10
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 129,
                                columnNumber: 10
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white py-10 px-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between max-w-[1280px] mx-auto px-5 ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteLogo"].logoHeader,
                                    alt: "logo",
                                    width: 35,
                                    height: 35
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 164,
                                    columnNumber: 5
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 163,
                                columnNumber: 5
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "hidden md:flex items-center gap-[50px]",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navLinks"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: "text-[14px] font-bold text-[#111111] hover:text-primary-blue transition-colors",
                                            href: link.href,
                                            children: link.label
                                        }, link.href + link.label, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 170,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        className: "bg-primary-blue text-white px-5 py-[6px] rounded-full text-[14px] font-bold hover:bg-opacity-90 transition-all",
                                        children: "Contact Us"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 178,
                                        columnNumber: 7
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 168,
                                columnNumber: 5
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleMenu,
                                className: "md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors z-50 relative",
                                "aria-label": "Toggle menu",
                                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M18 6L6 18M6 6L18 18",
                                        stroke: "#0F2A47",
                                        strokeWidth: "2.5",
                                        strokeLinecap: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 194,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 193,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "36",
                                    height: "24",
                                    viewBox: "0 0 36 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M2.00001 24C1.43334 24 0.958673 23.808 0.576007 23.424C0.19334 23.04 0.00134023 22.5653 6.89654e-06 22C-0.00132644 21.4346 0.190674 20.96 0.576007 20.576C0.96134 20.192 1.43601 20 2.00001 20H34C34.5667 20 35.042 20.192 35.426 20.576C35.81 20.96 36.0013 21.4346 36 22C35.9987 22.5653 35.8067 23.0406 35.424 23.426C35.0413 23.8113 34.5667 24.0026 34 24H2.00001ZM2.00001 14C1.43334 14 0.958673 13.808 0.576007 13.424C0.19334 13.04 0.00134023 12.5653 6.89654e-06 12C-0.00132644 11.4347 0.190674 10.96 0.576007 10.576C0.96134 10.192 1.43601 9.99999 2.00001 9.99999H34C34.5667 9.99999 35.042 10.192 35.426 10.576C35.81 10.96 36.0013 11.4347 36 12C35.9987 12.5653 35.8067 13.0407 35.424 13.426C35.0413 13.8113 34.5667 14.0027 34 14H2.00001ZM2.00001 4C1.43334 4 0.958673 3.808 0.576007 3.424C0.19334 3.04 0.00134023 2.56533 6.89654e-06 2C-0.00132644 1.43467 0.190674 0.959999 0.576007 0.576C0.96134 0.192 1.43601 0 2.00001 0H34C34.5667 0 35.042 0.192 35.426 0.576C35.81 0.959999 36.0013 1.43467 36 2C35.9987 2.56533 35.8067 3.04066 35.424 3.426C35.0413 3.81133 34.5667 4.00266 34 4H2.00001Z",
                                        fill: "#0F2A47"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 198,
                                        columnNumber: 11
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 197,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 187,
                                columnNumber: 5
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 162,
                        columnNumber: 3
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>setIsOpen(false),
                        className: `md:hidden fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`
                    }, void 0, false, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 205,
                        columnNumber: 3
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: `md:hidden fixed top-0 right-0 h-full w-[75%] max-w-[320px] bg-white z-50 shadow-2xl flex flex-col pt-24 px-6 gap-2 transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`,
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navLinks"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "text-[15px] font-bold text-[#111111] hover:text-primary-blue transition-colors py-3 border-b border-gray-100",
                                    href: link.href,
                                    onClick: ()=>setIsOpen(false),
                                    children: link.label
                                }, link.href + link.label, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 219,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0))),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "mt-4 bg-primary-blue text-white px-5 py-3 rounded-full text-[14px] font-bold hover:bg-opacity-90 transition-all text-center",
                                onClick: ()=>setIsOpen(false),
                                children: "Contact Us"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 228,
                                columnNumber: 5
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Header.tsx",
                        lineNumber: 213,
                        columnNumber: 3
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Header, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_a9ccdddd._.js.map