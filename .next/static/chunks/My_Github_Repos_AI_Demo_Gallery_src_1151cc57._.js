(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/My_Github_Repos/AI_Demo_Gallery/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/My_Github_Repos/AI_Demo_Gallery/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (param, ref)=>{
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/ui/button.tsx",
        lineNumber: 47,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaCard",
    ()=>MediaCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/lucide-react/dist/esm/icons/file-image.js [app-client] (ecmascript) <export default as FileImage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function MediaCard(param) {
    let { item, viewMode, onClick, onDelete } = param;
    _s();
    const [imageLoaded, setImageLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [imageError, setImageError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const formatDate = (date)=>{
        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric"
        }).format(date);
    };
    if (viewMode === "list") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-violet-300 dark:hover:border-violet-600 transition-all duration-300 group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-700",
                    children: item.type === "image" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            !imageLoaded && !imageError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-6 h-6 border-2 border-violet-600 border-t-transparent rounded-full animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                                    lineNumber: 37,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                                lineNumber: 36,
                                columnNumber: 17
                            }, this),
                            !imageError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: item.src,
                                alt: item.title,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full h-full object-cover transition-opacity duration-300", imageLoaded ? "opacity-100" : "opacity-0"),
                                onLoad: ()=>setImageLoaded(true),
                                onError: ()=>setImageError(true)
                            }, void 0, false, {
                                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                                lineNumber: 41,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__["FileImage"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                                    lineNumber: 53,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                                lineNumber: 52,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full h-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                className: "w-6 h-6 text-slate-500 dark:text-slate-400"
                            }, void 0, false, {
                                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-6 h-6 rounded-full bg-black/50 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                        className: "w-3 h-3 text-white ml-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                                        lineNumber: 62,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                                    lineNumber: 61,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                        lineNumber: 58,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 min-w-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold text-slate-900 dark:text-slate-100 truncate",
                            children: item.title
                        }, void 0, false, {
                            fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-slate-500 dark:text-slate-400 truncate",
                            children: item.description
                        }, void 0, false, {
                            fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                    className: "w-3 h-3 text-slate-400 dark:text-slate-500"
                                }, void 0, false, {
                                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-slate-400 dark:text-slate-500",
                                    children: formatDate(item.createdAt)
                                }, void 0, false, {
                                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            size: "sm",
                            variant: "outline",
                            onClick: onClick,
                            children: "View"
                        }, void 0, false, {
                            fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            size: "sm",
                            variant: "outline",
                            onClick: (e)=>{
                                e.stopPropagation();
                                onDelete();
                            },
                            className: "text-red-600 hover:text-red-700 hover:border-red-300",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-violet-300 dark:hover:border-violet-600 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10 hover:-translate-y-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-video bg-slate-100 dark:bg-slate-700 overflow-hidden",
                children: [
                    item.type === "image" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            !imageLoaded && !imageError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 border-3 border-violet-600 border-t-transparent rounded-full animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                                    lineNumber: 114,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                                lineNumber: 113,
                                columnNumber: 15
                            }, this),
                            !imageError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: item.src,
                                alt: item.title,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full h-full object-cover transition-all duration-300 cursor-pointer group-hover:scale-105", imageLoaded ? "opacity-100" : "opacity-0"),
                                onClick: onClick,
                                onLoad: ()=>setImageLoaded(true),
                                onError: ()=>setImageError(true)
                            }, void 0, false, {
                                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                                lineNumber: 118,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full flex items-center justify-center text-slate-400 dark:text-slate-500 cursor-pointer",
                                onClick: onClick,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__["FileImage"], {
                                    className: "w-12 h-12"
                                }, void 0, false, {
                                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                                    lineNumber: 131,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                                lineNumber: 130,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full h-full bg-slate-200 dark:bg-slate-600 flex items-center justify-center cursor-pointer group-hover:bg-slate-300 dark:group-hover:bg-slate-500 transition-colors duration-300",
                        onClick: onClick,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                className: "w-12 h-12 text-slate-500 dark:text-slate-400"
                            }, void 0, false, {
                                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 rounded-full bg-black/50 flex items-center justify-center group-hover:bg-black/70 transition-colors duration-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                        className: "w-8 h-8 text-white ml-1"
                                    }, void 0, false, {
                                        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                                        lineNumber: 143,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        size: "sm",
                        variant: "destructive",
                        className: "absolute top-2 right-2 w-8 h-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg",
                        onClick: (e)=>{
                            e.stopPropagation();
                            onDelete();
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-2 left-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1 px-2 py-1 rounded-full bg-black/50 text-white text-xs font-medium",
                            children: [
                                item.type === "image" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__["FileImage"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                    className: "w-3 h-3"
                                }, void 0, false, {
                                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, this),
                                item.type
                            ]
                        }, void 0, true, {
                            fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-slate-900 dark:text-slate-100 mb-1 truncate",
                        children: item.title
                    }, void 0, false, {
                        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-slate-500 dark:text-slate-400 mb-3 line-clamp-2",
                        children: item.description
                    }, void 0, false, {
                        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, this),
                                    formatDate(item.createdAt)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                onClick: onClick,
                                className: "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700",
                                children: "View"
                            }, void 0, false, {
                                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_s(MediaCard, "+xC0VhkjkKdKpElgCoBFbVEZSxs=");
_c = MediaCard;
var _c;
__turbopack_context__.k.register(_c, "MediaCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaGrid",
    ()=>MediaGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$MediaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaCard.tsx [app-client] (ecmascript)");
"use client";
;
;
function MediaGrid(param) {
    let { media, viewMode, onItemClick, onItemDelete } = param;
    if (media.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-12 h-12 text-slate-400 dark:text-slate-500",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 1.5,
                            d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        }, void 0, false, {
                            fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaGrid.tsx",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaGrid.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaGrid.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2",
                    children: "No media yet"
                }, void 0, false, {
                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaGrid.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-500 dark:text-slate-400",
                    children: "Upload some images or videos to get started"
                }, void 0, false, {
                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaGrid.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaGrid.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-4",
        children: media.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-in fade-in-0 slide-in-from-bottom-4 duration-500",
                style: {
                    animationDelay: "".concat(index * 100, "ms")
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$MediaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaCard"], {
                    item: item,
                    viewMode: viewMode,
                    onClick: ()=>onItemClick(item),
                    onDelete: ()=>onItemDelete(item.id)
                }, void 0, false, {
                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaGrid.tsx",
                    lineNumber: 56,
                    columnNumber: 11
                }, this)
            }, item.id, false, {
                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaGrid.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaGrid.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c = MediaGrid;
var _c;
__turbopack_context__.k.register(_c, "MediaGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/My_Github_Repos/AI_Demo_Gallery/src/components/UploadArea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UploadArea",
    ()=>UploadArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/lucide-react/dist/esm/icons/file-image.js [app-client] (ecmascript) <export default as FileImage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/lucide-react/dist/esm/icons/file.js [app-client] (ecmascript) <export default as File>");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function UploadArea(param) {
    let { onUpload, onCancel } = param;
    _s();
    const [isDragOver, setIsDragOver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedFiles, setSelectedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const handleDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UploadArea.useCallback[handleDrop]": (e)=>{
            e.preventDefault();
            setIsDragOver(false);
            const files = Array.from(e.dataTransfer.files).filter({
                "UploadArea.useCallback[handleDrop].files": (file)=>file.type.startsWith("image/") || file.type.startsWith("video/")
            }["UploadArea.useCallback[handleDrop].files"]);
            setSelectedFiles(files);
        }
    }["UploadArea.useCallback[handleDrop]"], []);
    const handleDragOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UploadArea.useCallback[handleDragOver]": (e)=>{
            e.preventDefault();
            setIsDragOver(true);
        }
    }["UploadArea.useCallback[handleDragOver]"], []);
    const handleDragLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UploadArea.useCallback[handleDragLeave]": (e)=>{
            e.preventDefault();
            setIsDragOver(false);
        }
    }["UploadArea.useCallback[handleDragLeave]"], []);
    const handleFileSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UploadArea.useCallback[handleFileSelect]": (e)=>{
            if (e.target.files) {
                const files = Array.from(e.target.files).filter({
                    "UploadArea.useCallback[handleFileSelect].files": (file)=>file.type.startsWith("image/") || file.type.startsWith("video/")
                }["UploadArea.useCallback[handleFileSelect].files"]);
                setSelectedFiles(files);
            }
        }
    }["UploadArea.useCallback[handleFileSelect]"], []);
    const handleUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UploadArea.useCallback[handleUpload]": ()=>{
            if (selectedFiles.length > 0) {
                onUpload(selectedFiles);
                setSelectedFiles([]);
            }
        }
    }["UploadArea.useCallback[handleUpload]"], [
        selectedFiles,
        onUpload
    ]);
    const removeFile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UploadArea.useCallback[removeFile]": (index)=>{
            setSelectedFiles({
                "UploadArea.useCallback[removeFile]": (prev)=>prev.filter({
                        "UploadArea.useCallback[removeFile]": (_, i)=>i !== index
                    }["UploadArea.useCallback[removeFile]"])
            }["UploadArea.useCallback[removeFile]"]);
        }
    }["UploadArea.useCallback[removeFile]"], []);
    const formatFileSize = (bytes)=>{
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const sizes = [
            "Bytes",
            "KB",
            "MB",
            "GB"
        ];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };
    const getFileIcon = (file)=>{
        if (file.type.startsWith("image/")) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__["FileImage"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/UploadArea.tsx",
            lineNumber: 67,
            columnNumber: 48
        }, this);
        if (file.type.startsWith("video/")) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/UploadArea.tsx",
            lineNumber: 68,
            columnNumber: 48
        }, this);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/UploadArea.tsx",
            lineNumber: 69,
            columnNumber: 12
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-slate-800 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-600 p-8 shadow-lg dark:shadow-slate-900/20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative rounded-lg border-2 border-dashed p-12 text-center transition-all duration-300", isDragOver ? "border-violet-400 bg-violet-50 dark:bg-violet-950/20" : "border-slate-300 dark:border-slate-600 hover:border-violet-300 dark:hover:border-violet-600"),
                onDrop: handleDrop,
                onDragOver: handleDragOver,
                onDragLeave: handleDragLeave,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-violet-100 to-indigo-100 dark:from-violet-900/50 dark:to-indigo-900/50 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                            className: "w-8 h-8 text-violet-600 dark:text-violet-400"
                        }, void 0, false, {
                            fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/UploadArea.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/UploadArea.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-slate-700 dark:text-slate-300 mb-2",
                        children: "Drop files here"
                    }, void 0, false, {
                        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/UploadArea.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-500 dark:text-slate-400 mb-4",
                        children: "Or click to select images and videos"
                    }, void 0, false, {
                        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/UploadArea.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        multiple: true,
                        accept: "image/*,video/*",
                        className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer",
                        onChange: handleFileSelect
                    }, void 0, false, {
                        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/UploadArea.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        className: "pointer-events-none",
                        children: "Choose Files"
                    }, void 0, false, {
                        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/UploadArea.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/UploadArea.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            selectedFiles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-medium text-slate-700 dark:text-slate-300",
                        children: [
                            "Selected Files (",
                            selectedFiles.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/UploadArea.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 max-h-48 overflow-y-auto",
                        children: selectedFiles.map((file, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-slate-500 dark:text-slate-400",
                                        children: getFileIcon(file)
                                    }, void 0, false, {
                                        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/UploadArea.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-medium text-slate-700 dark:text-slate-300 truncate",
                                                children: file.name
                                            }, void 0, false, {
                                                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/UploadArea.tsx",
                                                lineNumber: 126,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-slate-500 dark:text-slate-400",
                                                children: formatFileSize(file.size)
                                            }, void 0, false, {
                                                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/UploadArea.tsx",
                                                lineNumber: 129,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/UploadArea.tsx",
                                        lineNumber: 125,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        variant: "ghost",
                                        onClick: ()=>removeFile(index),
                                        className: "text-slate-400 hover:text-red-600",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/UploadArea.tsx",
                                            lineNumber: 139,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/UploadArea.tsx",
                                        lineNumber: 133,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/UploadArea.tsx",
                                lineNumber: 118,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/UploadArea.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/UploadArea.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-end gap-3 mt-6 pt-6 border-t border-slate-200 dark:border-slate-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        onClick: onCancel,
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/UploadArea.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: handleUpload,
                        disabled: selectedFiles.length === 0,
                        className: "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700",
                        children: [
                            "Upload ",
                            selectedFiles.length > 0 && "(".concat(selectedFiles.length, ")")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/UploadArea.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/UploadArea.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/UploadArea.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(UploadArea, "V60eKXLudRypTfjKK2an4InG1jc=");
_c = UploadArea;
var _c;
__turbopack_context__.k.register(_c, "UploadArea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Lightbox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Lightbox",
    ()=>Lightbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/lucide-react/dist/esm/icons/file-image.js [app-client] (ecmascript) <export default as FileImage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Lightbox(param) {
    let { item, onClose, onNext, onPrev } = param;
    _s();
    const handleKeyPress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Lightbox.useCallback[handleKeyPress]": (e)=>{
            switch(e.key){
                case "Escape":
                    onClose();
                    break;
                case "ArrowLeft":
                    onPrev();
                    break;
                case "ArrowRight":
                    onNext();
                    break;
            }
        }
    }["Lightbox.useCallback[handleKeyPress]"], [
        onClose,
        onNext,
        onPrev
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Lightbox.useEffect": ()=>{
            document.addEventListener("keydown", handleKeyPress);
            document.body.style.overflow = "hidden";
            return ({
                "Lightbox.useEffect": ()=>{
                    document.removeEventListener("keydown", handleKeyPress);
                    document.body.style.overflow = "unset";
                }
            })["Lightbox.useEffect"];
        }
    }["Lightbox.useEffect"], [
        handleKeyPress
    ]);
    const handleDownload = ()=>{
        const link = document.createElement("a");
        link.href = item.src;
        link.download = item.title;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const formatDate = (date)=>{
        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        }).format(date);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 bg-black/90 dark:bg-black/95 backdrop-blur-sm animate-in fade-in-0 duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Lightbox.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                size: "lg",
                variant: "ghost",
                className: "absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white border-none",
                onClick: onPrev,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Lightbox.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Lightbox.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                size: "lg",
                variant: "ghost",
                className: "absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white border-none",
                onClick: onNext,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Lightbox.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Lightbox.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                size: "lg",
                variant: "ghost",
                className: "absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 text-white border-none",
                onClick: onClose,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    className: "w-6 h-6"
                }, void 0, false, {
                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Lightbox.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Lightbox.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex items-center justify-center min-h-screen p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative max-w-7xl w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex items-center justify-center mb-6",
                            children: item.type === "image" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: item.src,
                                alt: item.title,
                                className: "max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
                            }, void 0, false, {
                                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Lightbox.tsx",
                                lineNumber: 103,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                src: item.src,
                                controls: true,
                                autoPlay: true,
                                className: "max-w-full max-h-[80vh] rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
                            }, void 0, false, {
                                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Lightbox.tsx",
                                lineNumber: 109,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Lightbox.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-black/50 backdrop-blur-sm rounded-lg p-6 mx-auto max-w-2xl text-white animate-in slide-in-from-bottom-4 duration-300 delay-150",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start justify-between gap-4 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mb-2",
                                                    children: [
                                                        item.type === "image" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileImage$3e$__["FileImage"], {
                                                            className: "w-5 h-5 text-blue-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Lightbox.tsx",
                                                            lineNumber: 124,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                                            className: "w-5 h-5 text-purple-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Lightbox.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium text-slate-300 uppercase tracking-wide",
                                                            children: item.type
                                                        }, void 0, false, {
                                                            fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Lightbox.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Lightbox.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-bold mb-2",
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Lightbox.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 17
                                                }, this),
                                                item.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-slate-300 leading-relaxed",
                                                    children: item.description
                                                }, void 0, false, {
                                                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Lightbox.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Lightbox.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            variant: "ghost",
                                            onClick: handleDownload,
                                            className: "bg-white/10 hover:bg-white/20 text-white border-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                    className: "w-4 h-4 mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Lightbox.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 17
                                                }, this),
                                                "Download"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Lightbox.tsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Lightbox.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between pt-4 border-t border-white/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-sm text-slate-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Lightbox.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 17
                                                }, this),
                                                formatDate(item.createdAt)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Lightbox.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-slate-400",
                                            children: [
                                                "Press ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                    className: "px-2 py-1 bg-white/10 rounded text-xs",
                                                    children: "ESC"
                                                }, void 0, false, {
                                                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Lightbox.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 23
                                                }, this),
                                                " to close"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Lightbox.tsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Lightbox.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Lightbox.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Lightbox.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Lightbox.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Lightbox.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(Lightbox, "1e59yZrpyYyXJCGE3uS7i+yBtNw=");
_c = Lightbox;
var _c;
__turbopack_context__.k.register(_c, "Lightbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Gallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Gallery",
    ()=>Gallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$MediaGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/src/components/MediaGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$UploadArea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/src/components/UploadArea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$Lightbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Lightbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/lucide-react/dist/esm/icons/grid-3x3.js [app-client] (ecmascript) <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/lucide-react/dist/esm/icons/list.js [app-client] (ecmascript) <export default as List>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
// Demo data
const initialMedia = [
    {
        id: "1",
        type: "image",
        src: "/demo-1.png",
        title: "Dashboard Analytics",
        description: "Modern dashboard with analytics and data visualization",
        createdAt: new Date("2024-01-15")
    },
    {
        id: "2",
        type: "image",
        src: "/demo-2.png",
        title: "Mobile E-commerce App",
        description: "Clean mobile shopping interface design",
        createdAt: new Date("2024-01-16")
    },
    {
        id: "3",
        type: "image",
        src: "/demo-3.png",
        title: "Creative Agency Website",
        description: "Bold and vibrant landing page design",
        createdAt: new Date("2024-01-17")
    },
    {
        id: "4",
        type: "video",
        src: "/demo-video.mp4",
        title: "App Demo Video",
        description: "Interactive demonstration of web application features",
        createdAt: new Date("2024-01-18")
    }
];
function Gallery() {
    _s();
    const [media, setMedia] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialMedia);
    const [selectedItem, setSelectedItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("grid");
    const [showUpload, setShowUpload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Gallery.useCallback[handleUpload]": (files)=>{
            const newItems = files.map({
                "Gallery.useCallback[handleUpload].newItems": (file)=>({
                        id: Math.random().toString(36).substr(2, 9),
                        type: file.type.startsWith("image") ? "image" : "video",
                        src: URL.createObjectURL(file),
                        title: file.name,
                        description: "Uploaded ".concat(file.type.startsWith("image") ? "image" : "video"),
                        createdAt: new Date()
                    })
            }["Gallery.useCallback[handleUpload].newItems"]);
            setMedia({
                "Gallery.useCallback[handleUpload]": (prev)=>[
                        ...newItems,
                        ...prev
                    ]
            }["Gallery.useCallback[handleUpload]"]);
            setShowUpload(false);
        }
    }["Gallery.useCallback[handleUpload]"], []);
    const handleDelete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Gallery.useCallback[handleDelete]": (id)=>{
            setMedia({
                "Gallery.useCallback[handleDelete]": (prev)=>prev.filter({
                        "Gallery.useCallback[handleDelete]": (item)=>item.id !== id
                    }["Gallery.useCallback[handleDelete]"])
            }["Gallery.useCallback[handleDelete]"]);
            if ((selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.id) === id) {
                setSelectedItem(null);
            }
        }
    }["Gallery.useCallback[handleDelete]"], [
        selectedItem
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row gap-4 items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: viewMode === "grid" ? "default" : "outline",
                                size: "sm",
                                onClick: ()=>setViewMode("grid"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                        className: "w-4 h-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Gallery.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    "Grid"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Gallery.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: viewMode === "list" ? "default" : "outline",
                                size: "sm",
                                onClick: ()=>setViewMode("list"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                        className: "w-4 h-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Gallery.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    "List"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Gallery.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Gallery.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>setShowUpload(!showUpload),
                        className: "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                className: "w-4 h-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Gallery.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            "Upload Media"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Gallery.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Gallery.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            showUpload && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-in slide-in-from-top-2 duration-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$UploadArea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UploadArea"], {
                    onUpload: handleUpload,
                    onCancel: ()=>setShowUpload(false)
                }, void 0, false, {
                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Gallery.tsx",
                    lineNumber: 118,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Gallery.tsx",
                lineNumber: 117,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$MediaGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaGrid"], {
                media: media,
                viewMode: viewMode,
                onItemClick: setSelectedItem,
                onItemDelete: handleDelete
            }, void 0, false, {
                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Gallery.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            selectedItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$Lightbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lightbox"], {
                item: selectedItem,
                onClose: ()=>setSelectedItem(null),
                onNext: ()=>{
                    const currentIndex = media.findIndex((item)=>item.id === selectedItem.id);
                    const nextIndex = (currentIndex + 1) % media.length;
                    setSelectedItem(media[nextIndex]);
                },
                onPrev: ()=>{
                    const currentIndex = media.findIndex((item)=>item.id === selectedItem.id);
                    const prevIndex = currentIndex === 0 ? media.length - 1 : currentIndex - 1;
                    setSelectedItem(media[prevIndex]);
                }
            }, void 0, false, {
                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Gallery.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center text-sm text-slate-500 dark:text-slate-400 bg-white/50 dark:bg-slate-800/50 rounded-full px-6 py-2 backdrop-blur-sm border border-slate-200 dark:border-slate-700 inline-block",
                children: [
                    media.length,
                    " items in gallery • ",
                    media.filter((m)=>m.type === "image").length,
                    " images • ",
                    media.filter((m)=>m.type === "video").length,
                    " videos"
                ]
            }, void 0, true, {
                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Gallery.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Gallery.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_s(Gallery, "AThJqyjwhyzYS3vq4euaI/xV4TA=");
_c = Gallery;
var _c;
__turbopack_context__.k.register(_c, "Gallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/My_Github_Repos/AI_Demo_Gallery/src/components/ThemeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/src/contexts/ThemeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ThemeToggle() {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            setMounted(true);
        }
    }["ThemeToggle.useEffect"], []);
    // Safe theme hook usage
    let theme = "light";
    let toggleTheme = ()=>{};
    try {
        const themeContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
        theme = themeContext.theme;
        toggleTheme = themeContext.toggleTheme;
    } catch (error) {
        // Handle the case where component is rendered outside provider
        console.warn("ThemeToggle used outside ThemeProvider");
    }
    // Don't render during SSR to prevent hydration mismatch
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "outline",
            size: "sm",
            className: "relative w-10 h-10 rounded-full p-0 border-2 border-slate-300 bg-slate-50",
            disabled: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                className: "w-4 h-4 text-slate-400"
            }, void 0, false, {
                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/ThemeToggle.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/ThemeToggle.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        onClick: toggleTheme,
        variant: "outline",
        size: "sm",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative w-10 h-10 rounded-full p-0 border-2 transition-all duration-300", theme === "light" ? "border-orange-300 bg-gradient-to-br from-orange-50 to-yellow-50 hover:from-orange-100 hover:to-yellow-100" : "border-blue-400 bg-gradient-to-br from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800"),
        "aria-label": "Switch to ".concat(theme === "light" ? "dark" : "light", " mode"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-full flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute w-4 h-4 text-orange-600 transition-all duration-300 transform", theme === "light" ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0")
                    }, void 0, false, {
                        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/ThemeToggle.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute w-4 h-4 text-blue-400 transition-all duration-300 transform", theme === "dark" ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0")
                    }, void 0, false, {
                        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/ThemeToggle.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/ThemeToggle.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 rounded-full transition-all duration-300", theme === "light" ? "bg-gradient-to-br from-orange-200/20 to-yellow-200/20 shadow-orange-300/50" : "bg-gradient-to-br from-blue-500/20 to-indigo-500/20 shadow-blue-400/50", "shadow-lg")
            }, void 0, false, {
                fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/ThemeToggle.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/ThemeToggle.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/My_Github_Repos/AI_Demo_Gallery/src/components/HomeContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomeContent",
    ()=>HomeContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$Gallery$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/src/components/Gallery.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/My_Github_Repos/AI_Demo_Gallery/src/components/ThemeToggle.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function HomeContent() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 transition-colors duration-300",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/HomeContent.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/HomeContent.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-5xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-4",
                            children: "Demo Gallery"
                        }, void 0, false, {
                            fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/HomeContent.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto",
                            children: "Showcase your screenshots, videos, and demo content in a beautiful, responsive gallery."
                        }, void 0, false, {
                            fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/HomeContent.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/HomeContent.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$My_Github_Repos$2f$AI_Demo_Gallery$2f$src$2f$components$2f$Gallery$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gallery"], {}, void 0, false, {
                    fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/HomeContent.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/HomeContent.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/My_Github_Repos/AI_Demo_Gallery/src/components/HomeContent.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = HomeContent;
var _c;
__turbopack_context__.k.register(_c, "HomeContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=My_Github_Repos_AI_Demo_Gallery_src_1151cc57._.js.map