module.exports = [
"[project]/components/Aboutsection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhyDebtMukti
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const reasons = [
    {
        title: "Real Solutions, Not Empty Promises",
        description: "We negotiate directly with creditors to reduce what you owe — no fake guarantees, no pressure tactics, just results that actually move the needle.",
        image: "/aboutus-1.png"
    },
    {
        title: "Built Around You, Not Your Credit Score",
        description: "Every plan is tailored to your situation. One size fits no one, and we don't treat people like numbers on a spreadsheet.",
        image: "/aboutus-2.png"
    },
    {
        title: "Transparent, Ethical, and Straight-Up",
        description: "No hidden fees. No fine-print tricks. You'll always know what's happening, why it's happening, and what comes next.",
        image: "/aboutus-3.png"
    }
];
const SCROLL_PER_STEP_VH = 60;
function WhyDebtMukti() {
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [fillHeight, setFillHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const railRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Separate card refs for mobile and desktop so they never conflict
    const desktopCardRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const mobileCardRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const outerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Active card refs depending on current mode
    const cardRefs = isMobile ? mobileCardRefs : desktopCardRefs;
    // ── Mobile detection ───────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const check = ()=>setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return ()=>window.removeEventListener("resize", check);
    }, []);
    // ── Progress rail fill ─────────────────────────────────────────
    const updateFill = (index)=>{
        const refs = isMobile ? mobileCardRefs : desktopCardRefs;
        if (!railRef.current || !refs.current[index]) return;
        const railRect = railRef.current.getBoundingClientRect();
        const cardRect = refs.current[index].getBoundingClientRect();
        setFillHeight(cardRect.bottom - railRect.top);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const raf = requestAnimationFrame(()=>updateFill(activeIndex));
        return ()=>cancelAnimationFrame(raf);
    }, [
        activeIndex,
        isMobile
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onResize = ()=>updateFill(activeIndex);
        window.addEventListener("resize", onResize);
        return ()=>window.removeEventListener("resize", onResize);
    }, [
        activeIndex,
        isMobile
    ]);
    // ── Desktop: pinned scroll tracking ───────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isMobile) return;
        const handleScroll = ()=>{
            if (!outerRef.current) return;
            const outerTop = outerRef.current.offsetTop;
            const scrollPerStep = SCROLL_PER_STEP_VH / 100 * window.innerHeight;
            const scrolledIn = window.scrollY - outerTop;
            if (scrolledIn < 0) {
                setActiveIndex(0);
                return;
            }
            const newIndex = Math.min(reasons.length - 1, Math.floor(scrolledIn / scrollPerStep));
            setActiveIndex(newIndex);
        };
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        handleScroll();
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, [
        isMobile
    ]);
    // ── Mobile: normal scroll tracking via getBoundingClientRect ──
    // We check each card's position relative to the viewport center on every scroll.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isMobile) return;
        const handleScroll = ()=>{
            const viewportMid = window.innerHeight / 2;
            let closestIndex = 0;
            let closestDist = Infinity;
            mobileCardRefs.current.forEach((card, i)=>{
                if (!card) return;
                const rect = card.getBoundingClientRect();
                const cardMid = rect.top + rect.height / 2;
                const dist = Math.abs(cardMid - viewportMid);
                if (dist < closestDist) {
                    closestDist = dist;
                    closestIndex = i;
                }
            });
            setActiveIndex(closestIndex);
        };
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        // Run once immediately after a short delay so refs are guaranteed attached
        const t = setTimeout(handleScroll, 100);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(t);
        };
    }, [
        isMobile
    ]);
    // ── Card click ─────────────────────────────────────────────────
    const handleClick = (index)=>{
        if (isMobile) {
            mobileCardRefs.current[index]?.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
            return;
        }
        if (!outerRef.current) return;
        const scrollPerStep = SCROLL_PER_STEP_VH / 100 * window.innerHeight;
        const targetScrollY = outerRef.current.offsetTop + index * scrollPerStep + scrollPerStep * 0.1;
        window.scrollTo({
            top: targetScrollY,
            behavior: "smooth"
        });
    };
    const outerHeight = `calc(100vh + ${SCROLL_PER_STEP_VH * reasons.length}vh)`;
    // ── Mobile layout ──────────────────────────────────────────────
    if (isMobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-white mt-[100px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex flex-col items-center gap-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[14px] font-medium tracking-[0.14em] uppercase text-[#031B1D] border border-[#f1eded] px-[16px] py-[6px] rounded-full w-fit",
                                    children: "About Us"
                                }, void 0, false, {
                                    fileName: "[project]/components/Aboutsection.tsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Aboutsection.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[32px] mt-5 mb-10 text-center font-medium text-[#111] leading-[1.1]",
                                children: "Why Debt Mukti?"
                            }, void 0, false, {
                                fileName: "[project]/components/Aboutsection.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sticky top-4 z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#F5F5F5] rounded-[22px] p-5 shadow-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative rounded-xl overflow-hidden aspect-[1/1.06] w-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/aboutus-1.png",
                                            alt: "About Us",
                                            fill: true,
                                            className: "object-cover rounded-[10px] transition-opacity duration-500 opacity-100"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Aboutsection.tsx",
                                            lineNumber: 157,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Aboutsection.tsx",
                                        lineNumber: 155,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Aboutsection.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Aboutsection.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Aboutsection.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex flex-col gap-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-0 mt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: railRef,
                                    className: "shrink-0 w-[11px] bg-[#D9D9D9] rounded-full mr-3.5 relative self-stretch",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-0 left-0 w-full bg-[#204E8C] rounded-full transition-[height] duration-500 ease-in-out",
                                        style: {
                                            height: `${fillHeight}px`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/Aboutsection.tsx",
                                        lineNumber: 177,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Aboutsection.tsx",
                                    lineNumber: 173,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 flex flex-col gap-4",
                                    children: reasons.map((reason, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: (el)=>{
                                                mobileCardRefs.current[i] = el;
                                            },
                                            onClick: ()=>handleClick(i),
                                            className: `rounded-[20px] border px-[24px] py-[20px] cursor-pointer transition-all duration-200 ${activeIndex === i ? "bg-primary-light-blue border-primary-light-blue" : "bg-[#E5E5E5] border-[#e5e7eb] hover:border-[#c5d0ea]"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[20px] font-bold text-[#111] mb-[5px]",
                                                    children: reason.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Aboutsection.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[16px] text-[#000000] leading-relaxed",
                                                    children: reason.description
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Aboutsection.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/components/Aboutsection.tsx",
                                            lineNumber: 184,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/Aboutsection.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Aboutsection.tsx",
                            lineNumber: 172,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Aboutsection.tsx",
                        lineNumber: 171,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Aboutsection.tsx",
                lineNumber: 141,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Aboutsection.tsx",
            lineNumber: 140,
            columnNumber: 7
        }, this);
    }
    // ── Desktop layout ─────────────────────────────────────────────
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: outerRef,
        style: {
            height: outerHeight
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky top-0 bg-white",
            style: {
                height: "100vh",
                display: "flex",
                alignItems: "center"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full md:w-[40%] shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#F5F5F5] rounded-[22px] p-5 md:p-[50px] shadow-sm",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative rounded-xl overflow-hidden aspect-[1/1.06] w-full",
                                    children: reasons.map((reason, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: reason.image,
                                            alt: reason.title,
                                            fill: true,
                                            className: `object-cover rounded-[10px] transition-opacity duration-500 w-full h-full max-w-[450px] max-h-[450px] ${activeIndex === i ? "opacity-100" : "opacity-0"}`
                                        }, i, false, {
                                            fileName: "[project]/components/Aboutsection.tsx",
                                            lineNumber: 225,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/Aboutsection.tsx",
                                    lineNumber: 223,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Aboutsection.tsx",
                                lineNumber: 222,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Aboutsection.tsx",
                            lineNumber: 221,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full md:flex-1 flex flex-col gap-4 mt-0 md:-mt-[70px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "md:inline-block hidden text-[14px] font-medium tracking-[0.14em] uppercase text-[#031B1D] border border-[#f1eded] px-[16px] py-[6px] rounded-full w-fit",
                                    children: "About Us"
                                }, void 0, false, {
                                    fileName: "[project]/components/Aboutsection.tsx",
                                    lineNumber: 240,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-[48px] md:block hidden font-medium text-[#111] leading-[1.1]",
                                    children: "Why Debt Mukti?"
                                }, void 0, false, {
                                    fileName: "[project]/components/Aboutsection.tsx",
                                    lineNumber: 243,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-0 mt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: railRef,
                                            className: "shrink-0 w-[11px] bg-[#D9D9D9] rounded-full mr-3.5 relative self-stretch",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 left-0 w-full bg-[#204E8C] rounded-full transition-[height] duration-500 ease-in-out",
                                                style: {
                                                    height: `${fillHeight}px`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/Aboutsection.tsx",
                                                lineNumber: 252,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Aboutsection.tsx",
                                            lineNumber: 248,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 flex flex-col gap-4",
                                            children: reasons.map((reason, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    ref: (el)=>{
                                                        desktopCardRefs.current[i] = el;
                                                    },
                                                    onClick: ()=>handleClick(i),
                                                    className: `rounded-[20px] border px-[24px] py-[20px] cursor-pointer transition-all duration-200 ${activeIndex === i ? "bg-primary-light-blue border-primary-light-blue" : "bg-[#E5E5E5] border-[#e5e7eb] hover:border-[#c5d0ea]"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[20px] font-bold text-[#111] mb-[5px]",
                                                            children: reason.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Aboutsection.tsx",
                                                            lineNumber: 269,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[16px] text-[#000000] leading-relaxed",
                                                            children: reason.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Aboutsection.tsx",
                                                            lineNumber: 272,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/components/Aboutsection.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Aboutsection.tsx",
                                            lineNumber: 257,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Aboutsection.tsx",
                                    lineNumber: 247,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Aboutsection.tsx",
                            lineNumber: 239,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Aboutsection.tsx",
                    lineNumber: 219,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Aboutsection.tsx",
                lineNumber: 218,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Aboutsection.tsx",
            lineNumber: 214,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Aboutsection.tsx",
        lineNumber: 213,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Services.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
const services = [
    {
        title: "Personal Loan Debt Settlement",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "46",
            height: "46",
            viewBox: "0 0 46 46",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    width: "46",
                    height: "46",
                    rx: "10",
                    fill: "#0F2A47"
                }, void 0, false, {
                    fileName: "[project]/components/Services.tsx",
                    lineNumber: 11,
                    columnNumber: 1
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M23.0001 34.6157C22.6113 34.619 22.2292 34.5146 21.8961 34.314L17.7338 31.8797C16.1756 31.0083 14.8751 29.7409 13.9636 28.2058C13.0522 26.6706 12.5621 24.9221 12.543 23.1368V16.4854C12.5432 16.0372 12.6806 15.5998 12.9368 15.232C13.193 14.8642 13.5557 14.5837 13.9761 14.4283L22.2458 11.3906C22.7329 11.2123 23.2673 11.2123 23.7544 11.3906L32.0241 14.4283C32.4445 14.5837 32.8072 14.8642 33.0634 15.232C33.3196 15.5998 33.4571 16.0372 33.4573 16.4854V23.1368C33.4381 24.9221 32.9481 26.6706 32.0366 28.2058C31.1252 29.7409 29.8246 31.0083 28.2664 31.8797L24.1041 34.314C23.771 34.5146 23.3889 34.619 23.0001 34.6157ZM23.0001 12.9746C22.9457 12.9646 22.89 12.9646 22.8355 12.9746L14.5658 16.026C14.4727 16.0605 14.3927 16.1234 14.3374 16.2059C14.282 16.2883 14.254 16.3861 14.2573 16.4854V23.1368C14.2771 24.6223 14.689 26.0761 15.4512 27.3513C16.2134 28.6264 17.2989 29.6776 18.5978 30.3986L22.7601 32.8397C22.8337 32.8799 22.9162 32.901 23.0001 32.901C23.084 32.901 23.1665 32.8799 23.2401 32.8397L27.4024 30.3986C28.7013 29.6776 29.7868 28.6264 30.549 27.3513C31.3112 26.0761 31.7231 24.6223 31.743 23.1368V16.4854C31.7434 16.3885 31.714 16.2937 31.6588 16.214C31.6037 16.1343 31.5253 16.0734 31.4344 16.0397L23.1647 13.002C23.112 12.9829 23.0562 12.9736 23.0001 12.9746Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/components/Services.tsx",
                    lineNumber: 12,
                    columnNumber: 1
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M22.2456 26.3255C22.0433 26.3242 21.8474 26.254 21.6902 26.1266L18.7622 23.6581C18.5876 23.5117 18.4783 23.3019 18.4584 23.0749C18.4384 22.848 18.5095 22.6224 18.6559 22.4478C18.8023 22.2732 19.012 22.1639 19.239 22.144C19.466 22.124 19.6916 22.1951 19.8662 22.3415L22.1633 24.2752L26.0856 19.9552C26.2384 19.7861 26.4521 19.6846 26.6797 19.673C26.9073 19.6614 27.1302 19.7407 27.2993 19.8935C27.4685 20.0463 27.57 20.26 27.5815 20.4876C27.5931 20.7152 27.5138 20.9381 27.361 21.1072L22.9176 26.0444C22.8325 26.137 22.7284 26.21 22.6124 26.2586C22.4964 26.3071 22.3713 26.3299 22.2456 26.3255Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/components/Services.tsx",
                    lineNumber: 13,
                    columnNumber: 1
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Services.tsx",
            lineNumber: 10,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Legal Support & Anti-Harassment Assistance",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "46",
            height: "46",
            viewBox: "0 0 46 46",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    width: "46",
                    height: "46",
                    rx: "10",
                    fill: "#0F2A47"
                }, void 0, false, {
                    fileName: "[project]/components/Services.tsx",
                    lineNumber: 22,
                    columnNumber: 1
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M31.727 17.5454V28.4545C31.727 32.8181 30.6361 33.909 26.2725 33.909H19.727C15.3634 33.909 14.2725 32.8181 14.2725 28.4545V17.5454C14.2725 13.1817 15.3634 12.0908 19.727 12.0908H26.2725C30.6361 12.0908 31.727 13.1817 31.727 17.5454Z",
                    stroke: "white",
                    strokeWidth: "1.63636",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/Services.tsx",
                    lineNumber: 23,
                    columnNumber: 1
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M25.182 15.9092H20.8184",
                    stroke: "white",
                    strokeWidth: "1.63636",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/Services.tsx",
                    lineNumber: 24,
                    columnNumber: 1
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M22.9995 30.7451C23.9334 30.7451 24.6905 29.988 24.6905 29.0542C24.6905 28.1204 23.9334 27.3633 22.9995 27.3633C22.0656 27.3633 21.3086 28.1204 21.3086 29.0542C21.3086 29.988 22.0656 30.7451 22.9995 30.7451Z",
                    stroke: "white",
                    strokeWidth: "1.63636",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/Services.tsx",
                    lineNumber: 25,
                    columnNumber: 1
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Services.tsx",
            lineNumber: 21,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Loan Debt Consolidation Services",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "46",
            height: "46",
            viewBox: "0 0 46 46",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    width: "46",
                    height: "46",
                    rx: "10",
                    fill: "#0F2A47"
                }, void 0, false, {
                    fileName: "[project]/components/Services.tsx",
                    lineNumber: 34,
                    columnNumber: 1
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    clipPath: "url(#clip0_37_425)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12.097 22.3143C12.0511 22.3145 12.0053 22.311 11.9599 22.3041C11.7354 22.2685 11.5341 22.1452 11.4004 21.9614C11.2667 21.7775 11.2114 21.5481 11.2468 21.3235C11.6455 18.776 12.8645 16.4282 14.7188 14.6364C16.573 12.8446 18.9612 11.7066 21.5208 11.3953C24.0805 11.0839 26.6718 11.6162 28.9015 12.9112C31.1312 14.2063 32.8775 16.1934 33.8753 18.571C33.9268 18.6758 33.9564 18.79 33.9622 18.9066C33.9679 19.0232 33.9498 19.1398 33.909 19.2491C33.8681 19.3585 33.8053 19.4584 33.7245 19.5426C33.6436 19.6268 33.5464 19.6937 33.4389 19.739C33.3313 19.7843 33.2155 19.8072 33.0988 19.8062C32.9821 19.8052 32.8667 19.7804 32.7599 19.7332C32.6531 19.6861 32.5571 19.6176 32.4777 19.532C32.3983 19.4464 32.3372 19.3455 32.2982 19.2355C31.4452 17.2013 29.9518 15.501 28.0446 14.3927C26.1374 13.2845 23.9207 12.8289 21.731 13.095C19.5413 13.3612 17.4983 14.3346 15.9121 15.8674C14.326 17.4003 13.2833 19.4089 12.9425 21.5882C12.9113 21.7901 12.8089 21.9743 12.6539 22.1074C12.4989 22.2406 12.3014 22.314 12.097 22.3143Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 36,
                            columnNumber: 1
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M33.9207 20.209H33.9138L27.1828 20.1576C26.9555 20.1567 26.7378 20.0655 26.5777 19.9041C26.4176 19.7427 26.3282 19.5244 26.3291 19.297C26.33 19.0697 26.4212 18.852 26.5826 18.6919C26.744 18.5318 26.9624 18.4424 27.1897 18.4433H27.1965L33.0717 18.4879L33.1163 12.6127C33.1179 12.3868 33.2087 12.1707 33.3688 12.0113C33.5289 11.852 33.7455 11.7623 33.9714 11.7617H33.9776C34.205 11.7635 34.4223 11.8556 34.5819 12.0176C34.7415 12.1796 34.8302 12.3983 34.8285 12.6257L34.7778 19.3581C34.776 19.5843 34.6849 19.8006 34.5244 19.96C34.3638 20.1193 34.1469 20.2089 33.9207 20.209Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 37,
                            columnNumber: 1
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M23.0477 34.6965C20.7148 34.6926 18.4346 34.0016 16.492 32.7096C14.5495 31.4177 13.0306 29.5821 12.125 27.432C12.0735 27.3272 12.0439 27.213 12.0382 27.0964C12.0324 26.9798 12.0505 26.8633 12.0913 26.7539C12.1322 26.6445 12.195 26.5447 12.2758 26.4604C12.3567 26.3762 12.4539 26.3094 12.5615 26.264C12.6691 26.2187 12.7848 26.1958 12.9015 26.1968C13.0183 26.1978 13.1336 26.2226 13.2404 26.2698C13.3472 26.3169 13.4432 26.3854 13.5226 26.471C13.602 26.5566 13.6631 26.6575 13.7021 26.7675C14.5562 28.8002 16.0499 30.4989 17.9568 31.6058C19.8636 32.7127 22.0794 33.1675 24.2681 32.9011C26.4568 32.6347 28.4989 31.6617 30.0845 30.1297C31.6702 28.5977 32.7128 26.5903 33.0544 24.4121C33.0719 24.3009 33.1112 24.1942 33.17 24.0982C33.2288 24.0022 33.3059 23.9187 33.3969 23.8525C33.5808 23.7187 33.8103 23.6635 34.0349 23.699C34.1461 23.7165 34.2528 23.7558 34.3488 23.8146C34.4449 23.8734 34.5284 23.9505 34.5946 24.0416C34.6608 24.1326 34.7084 24.2358 34.7348 24.3453C34.7611 24.4548 34.7656 24.5683 34.7481 24.6795C34.3069 27.4675 32.8869 30.0071 30.7427 31.8428C28.5985 33.6785 25.8704 34.6902 23.0477 34.6965Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 38,
                            columnNumber: 1
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12.029 34.2383H12.0229C11.9103 34.2375 11.7989 34.2145 11.6952 34.1707C11.5914 34.1268 11.4974 34.0629 11.4183 33.9827C11.3393 33.9025 11.2769 33.8074 11.2346 33.703C11.1923 33.5987 11.171 33.487 11.1719 33.3743L11.2233 26.642C11.2251 26.4147 11.3171 26.1975 11.4789 26.0379C11.6408 25.8784 11.8594 25.7896 12.0866 25.791L18.8197 25.8431C19.047 25.8441 19.2647 25.9352 19.4248 26.0966C19.5849 26.258 19.6743 26.4764 19.6734 26.7037C19.6725 26.931 19.5813 27.1487 19.4199 27.3088C19.2585 27.4689 19.0401 27.5583 18.8128 27.5574H18.806L12.9308 27.5122L12.8862 33.3874C12.8844 33.6136 12.7933 33.8299 12.6328 33.9893C12.4722 34.1487 12.2553 34.2382 12.029 34.2383Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 39,
                            columnNumber: 1
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Services.tsx",
                    lineNumber: 35,
                    columnNumber: 1
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                        id: "clip0_37_425",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            width: "24",
                            height: "24",
                            fill: "white",
                            transform: "translate(11 11)"
                        }, void 0, false, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 43,
                            columnNumber: 1
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Services.tsx",
                        lineNumber: 42,
                        columnNumber: 1
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/Services.tsx",
                    lineNumber: 41,
                    columnNumber: 1
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Services.tsx",
            lineNumber: 33,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        title: "Debt Closure & Settlement Completion",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "46",
            height: "46",
            viewBox: "0 0 46 46",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    width: "46",
                    height: "46",
                    rx: "10",
                    fill: "#0F2A47"
                }, void 0, false, {
                    fileName: "[project]/components/Services.tsx",
                    lineNumber: 54,
                    columnNumber: 1
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    clipPath: "url(#clip0_37_433)",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M20.75 31.001C20.7494 30.3961 20.9483 29.8078 21.316 29.3274C21.6836 28.8471 22.1995 28.5013 22.7835 28.3439C23.3676 28.1865 23.9873 28.2261 24.5466 28.4566C25.1059 28.6871 25.5735 29.0957 25.877 29.619C27.967 28.697 28.75 27.25 28.75 24.5V21.5C28.75 17.508 26.499 14.75 23 14.75C19.501 14.75 17.25 17.509 17.25 21.5V25C17.2497 25.1988 17.1706 25.3894 17.03 25.53C16.8894 25.6706 16.6988 25.7497 16.5 25.75H15.5C14.7711 25.7492 14.0722 25.4594 13.5567 24.944C13.0412 24.4287 12.7511 23.7299 12.75 23.001V22.001C12.7508 21.2718 13.0407 20.5727 13.5563 20.057C14.0718 19.5413 14.7708 19.2511 15.5 19.25H15.978C16.735 15.679 19.326 13.25 23 13.25C26.674 13.25 29.264 15.679 30.021 19.25H30.499C31.228 19.2511 31.9269 19.5411 32.4424 20.0566C32.9579 20.5721 33.2479 21.271 33.249 22V23C33.2482 23.7291 32.9582 24.4281 32.4427 24.9437C31.9271 25.4592 31.2281 25.7492 30.499 25.75H30.19C30.1514 26.9344 29.754 28.0792 29.0505 29.0327C28.3469 29.9863 27.3703 30.7037 26.25 31.09C26.2382 31.8193 25.9371 32.5141 25.4131 33.0215C24.889 33.5289 24.1848 33.8073 23.4555 33.7955C22.7262 33.7837 22.0314 33.4826 21.524 32.9586C21.0166 32.4345 20.7382 31.7303 20.75 31.001ZM22.25 31.001C22.25 31.2482 22.3233 31.4899 22.4607 31.6955C22.598 31.901 22.7932 32.0612 23.0216 32.1558C23.2501 32.2505 23.5014 32.2752 23.7439 32.227C23.9863 32.1788 24.2091 32.0597 24.3839 31.8849C24.5587 31.7101 24.6778 31.4873 24.726 31.2449C24.7742 31.0024 24.7495 30.7511 24.6548 30.5226C24.5602 30.2942 24.4 30.099 24.1945 29.9617C23.9889 29.8243 23.7472 29.751 23.5 29.751C23.1686 29.7513 22.8508 29.883 22.6164 30.1174C22.382 30.3518 22.2503 30.6696 22.25 31.001ZM30.25 24.251H30.499C30.8306 24.251 31.1487 24.1193 31.3832 23.8849C31.6178 23.6506 31.7497 23.3326 31.75 23.001V22.001C31.75 21.6694 31.6183 21.3513 31.3839 21.1168C31.1496 20.8822 30.8316 20.7503 30.5 20.75H30.25V24.251ZM14.25 22.001V23.001C14.2505 23.3323 14.3824 23.6498 14.6168 23.8839C14.8511 24.1181 15.1687 24.2497 15.5 24.25H15.75V20.75H15.5C15.1684 20.7503 14.8504 20.8822 14.6161 21.1168C14.3817 21.3513 14.25 21.6694 14.25 22.001Z",
                        fill: "white"
                    }, void 0, false, {
                        fileName: "[project]/components/Services.tsx",
                        lineNumber: 56,
                        columnNumber: 1
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/Services.tsx",
                    lineNumber: 55,
                    columnNumber: 1
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                        id: "clip0_37_433",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            width: "24",
                            height: "24",
                            fill: "white",
                            transform: "translate(11 11)"
                        }, void 0, false, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 60,
                            columnNumber: 1
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Services.tsx",
                        lineNumber: 59,
                        columnNumber: 1
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/Services.tsx",
                    lineNumber: 58,
                    columnNumber: 1
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Services.tsx",
            lineNumber: 53,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }
];
function Services() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: " mx-auto flex flex-col-reverse md:flex-row items-center gap-0 md:gap-30",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full md:flex-1 flex flex-col gap-4 mt-0 md:-mt-[70px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "   md:hidden flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "md:inline-block hidden  text-[14px] font-medium tracking-[0.14em] uppercase text-[#031B1D] border border-[#f1eded] px-[16px] py-[6px] rounded-full w-fit",
                                children: "Services"
                            }, void 0, false, {
                                fileName: "[project]/components/Services.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-[48px] md:block hidden font-medium text-[#111] leading-[1.1] text-center md:text-left",
                            children: "Our Services"
                        }, void 0, false, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-[16px] hidden md:block  font-medium text-[#6B6969] leading-[25px]  max-w-[350px] text-center md:text-left",
                            children: "No hidden fees. No fine-print tricks. You’ll always know what’s happening, why it’s happening, and what comes next."
                        }, void 0, false, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4 mt-7 mb-10",
                            children: services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 rounded-[16px] py-4 px-[14px] border border-[#f1eded]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: service.icon
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services.tsx",
                                            lineNumber: 101,
                                            columnNumber: 7
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: service.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services.tsx",
                                            lineNumber: 102,
                                            columnNumber: 7
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/components/Services.tsx",
                                    lineNumber: 97,
                                    columnNumber: 5
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "bg-primary-light-blue text-black px-4 py-[16px] flex justify-center gap-3  rounded-full text-[16px]  hover:bg-opacity-90 transition-all w-full md:w-[45%]",
                            children: [
                                "Get Free Consultation ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M4 11.7261C4 11.3464 4.28215 11.0326 4.64823 10.9829L4.75 10.9761H19.75C20.1642 10.9761 20.5 11.3119 20.5 11.7261C20.5 12.1058 20.2178 12.4196 19.8518 12.4692L19.75 12.4761L4.75 12.4761C4.33579 12.4761 4 12.1403 4 11.7261Z",
                                            fill: "#111111"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services.tsx",
                                            lineNumber: 108,
                                            columnNumber: 1
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M13.171 6.23296C12.8775 5.9407 12.8765 5.46582 13.1687 5.1723C13.4344 4.90546 13.851 4.88036 14.1451 5.09758L14.2294 5.17002L20.2794 11.194C20.547 11.4605 20.5714 11.8786 20.3524 12.1727L20.2794 12.2569L14.2294 18.2819C13.9359 18.5742 13.4611 18.5732 13.1688 18.2797C12.9031 18.0129 12.8797 17.5962 13.0982 17.303L13.171 17.2191L18.687 11.7252L13.171 6.23296Z",
                                            fill: "#111111"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services.tsx",
                                            lineNumber: 109,
                                            columnNumber: 1
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Services.tsx",
                                    lineNumber: 107,
                                    columnNumber: 23
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 106,
                            columnNumber: 1
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Services.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full md:w-[40%] shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "   md:hidden flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[14px] font-medium tracking-[0.14em] uppercase text-[#031B1D] border border-[#f1eded] px-[16px] py-[6px] rounded-full w-fit",
                                children: "Services"
                            }, void 0, false, {
                                fileName: "[project]/components/Services.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-[32px] mt-5 mb-10 text-center md:hidden font-medium text-[#111] leading-[1.1]",
                            children: "Our Services"
                        }, void 0, false, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-[16px] block md:hidden  font-medium text-[#6B6969] leading-[25px] mb-5 px-5 text-center md:text-left",
                            children: "No hidden fees. No fine-print tricks. You’ll always know what’s happening, why it’s happening, and what comes next."
                        }, void 0, false, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#F5F5F5] rounded-[22px] p-5 md:p-[50px] shadow-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative rounded-xl overflow-hidden aspect-[1/1.06] w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/aboutus-2.png",
                                    alt: "Personal Loan Debt Settlement",
                                    fill: true,
                                    className: "object-cover rounded-[10px] transition-opacity duration-500 w-full h-full max-w-[450px] max-h-[450px]"
                                }, void 0, false, {
                                    fileName: "[project]/components/Services.tsx",
                                    lineNumber: 135,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Services.tsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Services.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Services.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Services.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Testimonials.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "testimonials",
    ()=>testimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/autoplay.mjs [app-ssr] (ecmascript) <export default as Autoplay>");
'use client';
;
;
;
;
;
;
;
const testimonials = [
    {
        name: "Natalie Summers",
        description: "Internet banking made my life easier—effortless transactions, robust security. A game-changer for financial management!",
        image: "/aboutus-1.png",
        rating: 5
    },
    {
        name: "Owen Evans",
        description: "Seamless and secure, Internet banking streamlines my transactions, providing convenience and peace of mind. Highly recommended!",
        image: "/aboutus-1.png",
        rating: 4
    },
    {
        name: "Natalie Summers",
        description: "Internet banking made my life easier—effortless transactions, robust security. A game-changer for financial management!",
        image: "/aboutus-1.png",
        rating: 3
    },
    {
        name: "Natalie Summers",
        description: "Internet banking made my life easier—effortless transactions, robust security. A game-changer for financial management!",
        image: "/aboutus-1.png",
        rating: 2
    },
    {
        name: "Natalie Summers",
        description: "Internet banking made my life easier—effortless transactions, robust security. A game-changer for financial management!",
        image: "/aboutus-1.png",
        rating: 1
    },
    {
        name: "Natalie Summers",
        description: "Internet banking made my life easier—effortless transactions, robust security. A game-changer for financial management!",
        image: "/aboutus-1.png",
        rating: 0
    }
];
const Testimonials = ()=>{
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white  flex flex-col gap-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "  text-[14px] font-medium tracking-[0.14em] uppercase text-[#031B1D] border border-[#f1eded] px-[16px] py-[6px] rounded-full w-fit",
                            children: "Testimonals"
                        }, void 0, false, {
                            fileName: "[project]/components/Testimonials.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/Testimonials.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-[48px]  font-medium text-[#111]  text-center ",
                        children: "What they say about us"
                    }, void 0, false, {
                        fileName: "[project]/components/Testimonials.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[16px]   font-medium text-[#6B6969] leading-[25px]  text-center ",
                        children: "Real Stories. Real Relief. Real Results."
                    }, void 0, false, {
                        fileName: "[project]/components/Testimonials.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/Testimonials.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    loop: true,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false
                    },
                    pagination: {
                        clickable: true
                    },
                    onSlideChange: (swiper)=>setActiveIndex(swiper.realIndex),
                    modules: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"]
                    ],
                    breakpoints: {
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        }
                    },
                    className: "mySwiper",
                    children: testimonials.map((testimonial, index)=>{
                        const isActive = index === activeIndex;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                            className: "h-auto!",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `border rounded-[24px] min-h-[475px] px-10 py-[32px] transition-colors duration-300 h-auto! flex flex-col justify-center ${isActive ? "bg-[#0F2A47] border-[#0F2A47] text-white" : "border-[#0F2A47] bg-white text-[#111]"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: testimonial.image,
                                        alt: testimonial.name,
                                        width: 172,
                                        height: 172,
                                        className: "rounded-full mb-8 mx-auto"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Testimonials.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-[28px] font-medium ${isActive ? "text-white" : "text-[#111]"}`,
                                        children: testimonial.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/Testimonials.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-[16px] font-medium mt-3 mb-5 ${isActive ? "text-white/80" : "text-[#111]"}`,
                                        children: testimonial.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/Testimonials.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-1 justify-end",
                                        children: Array.from({
                                            length: testimonial.rating
                                        }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "32",
                                                height: "32",
                                                viewBox: "0 0 32 32",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M8.1 28.3333L10.2667 18.9667L3 12.6667L12.6 11.8333L16.3333 3L20.0667 11.8333L29.6667 12.6667L22.4 18.9667L24.5667 28.3333L16.3333 23.3667L8.1 28.3333Z",
                                                    fill: "#FAD445"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Testimonials.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 7
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, i, false, {
                                                fileName: "[project]/components/Testimonials.tsx",
                                                lineNumber: 130,
                                                columnNumber: 5
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Testimonials.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Testimonials.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, index, false, {
                            fileName: "[project]/components/Testimonials.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/components/Testimonials.tsx",
                    lineNumber: 71,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/Testimonials.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Testimonials.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Testimonials;
}),
];

//# sourceMappingURL=components_2c72fd5d._.js.map