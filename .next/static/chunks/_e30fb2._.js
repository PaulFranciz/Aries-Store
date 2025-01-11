(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_e30fb2._.js", {

"[project]/sanity/env.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "apiVersion": (()=>apiVersion),
    "dataset": (()=>dataset),
    "projectId": (()=>projectId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const apiVersion = ("TURBOPACK compile-time value", "2024-12-31") || '2024-12-31';
const dataset = assertValue(("TURBOPACK compile-time value", "production"), 'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET');
const projectId = assertValue(("TURBOPACK compile-time value", "qu6710uv"), 'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID');
function assertValue(v, errorMessage) {
    if (v === undefined) {
        throw new Error(errorMessage);
    }
    return v;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/utils/skuGenerator.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// sanity/utils/skuGenerator.ts
__turbopack_esm__({
    "generateSKU": (()=>generateSKU)
});
const generateSKU = (prefix = 'PRD', category)=>{
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    const categoryPrefix = category ? category.slice(0, 3).toUpperCase() : '';
    return `${prefix}-${categoryPrefix}${timestamp}${random}`;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/components/SKUInput.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// sanity/components/SKUInput.tsx
__turbopack_esm__({
    "SKUInput": (()=>SKUInput)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$utils$2f$skuGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/utils/skuGenerator.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/sanity/lib/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@sanity/ui/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
const SKUInput = (props)=>{
    _s();
    const { type, value, onChange, readOnly } = props;
    const [sku, setSku] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SKUInput.useEffect": ()=>{
            // Generate SKU on component mount if not already set
            if (!value) {
                const newSKU = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$utils$2f$skuGenerator$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateSKU"])();
                setSku(newSKU);
                onChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["set"])(newSKU));
            }
        }
    }["SKUInput.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
        space: 2,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                size: 1,
                children: "SKU"
            }, void 0, false, {
                fileName: "[project]/sanity/components/SKUInput.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                value: sku,
                readOnly: true,
                disabled: readOnly
            }, void 0, false, {
                fileName: "[project]/sanity/components/SKUInput.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sanity/components/SKUInput.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
};
_s(SKUInput, "iQYcAfrb4N8QdoXy1mtvza9E6WA=");
_c = SKUInput;
var _c;
__turbopack_refresh__.register(_c, "SKUInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/schemaTypes/product.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "product": (()=>product)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$components$2f$SKUInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/components/SKUInput.tsx [app-client] (ecmascript)");
;
const product = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule)=>Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: (Rule)=>Rule.required()
        },
        {
            name: 'brand',
            title: 'Brand',
            type: 'reference',
            to: [
                {
                    type: 'brand'
                }
            ],
            validation: (Rule)=>Rule.required()
        },
        {
            name: 'mainCategories',
            title: 'Main Categories',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'category'
                        }
                    ]
                }
            ],
            validation: (Rule)=>Rule.required().custom((mainCategories)=>{
                    if (!mainCategories || mainCategories.length === 0) {
                        return 'At least one main category is required';
                    }
                    return true;
                })
        },
        {
            name: 'subcategories',
            title: 'Subcategories',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'category'
                        }
                    ]
                }
            ],
            validation: (Rule)=>Rule.required()
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [
                {
                    type: 'block'
                }
            ]
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true
                    },
                    fields: [
                        {
                            name: 'alt',
                            title: 'Alternative Text',
                            type: 'string'
                        }
                    ]
                }
            ],
            validation: (Rule)=>Rule.min(1).required()
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: (Rule)=>Rule.required().positive()
        },
        {
            name: 'compareAtPrice',
            title: 'Compare At Price',
            type: 'number'
        },
        {
            name: 'sku',
            title: 'SKU',
            type: 'string',
            components: {
                input: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$components$2f$SKUInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SKUInput"]
            },
            validation: (Rule)=>Rule.required(),
            readOnly: true
        },
        {
            name: 'inventory',
            title: 'Inventory',
            type: 'object',
            fields: [
                {
                    name: 'inStock',
                    title: 'In Stock',
                    type: 'boolean',
                    initialValue: true
                },
                {
                    name: 'quantity',
                    title: 'Quantity',
                    type: 'number',
                    validation: (Rule)=>Rule.min(0)
                }
            ]
        },
        {
            name: 'variants',
            title: 'Variants',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            title: 'Variant Name',
                            type: 'string'
                        },
                        {
                            name: 'sku',
                            title: 'Variant SKU',
                            type: 'string',
                            components: {
                                input: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$components$2f$SKUInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SKUInput"]
                            },
                            validation: (Rule)=>Rule.required(),
                            readOnly: true
                        },
                        {
                            name: 'price',
                            title: 'Price',
                            type: 'number'
                        },
                        {
                            name: 'inStock',
                            title: 'In Stock',
                            type: 'boolean'
                        },
                        {
                            name: 'attributes',
                            title: 'Attributes',
                            type: 'object',
                            fields: [
                                {
                                    name: 'size',
                                    title: 'Size',
                                    type: 'string'
                                },
                                {
                                    name: 'color',
                                    title: 'Color',
                                    type: 'string'
                                },
                                {
                                    name: 'material',
                                    title: 'Material',
                                    type: 'string'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [
                {
                    type: 'string'
                }
            ]
        },
        {
            name: 'status',
            title: 'Product Status',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Active',
                        value: 'active'
                    },
                    {
                        title: 'Draft',
                        value: 'draft'
                    },
                    {
                        title: 'Archived',
                        value: 'archived'
                    }
                ]
            },
            initialValue: 'draft'
        }
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'sku',
            media: 'images.0'
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/schemaTypes/category.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "category": (()=>category)
});
const category = {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule)=>Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: (Rule)=>Rule.required()
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'featuredImage',
            title: 'Featured Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'parents',
            title: 'Parent Categories',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'category'
                        }
                    ]
                }
            ],
            validation: (Rule)=>Rule.custom((parents, context)=>{
                    if (context.document.isMainCategory && parents && parents.length > 0) {
                        return 'Main categories cannot have parent categories';
                    }
                    return true;
                })
        },
        {
            name: 'isMainCategory',
            title: 'Is Main Category',
            type: 'boolean',
            initialValue: false
        },
        {
            name: 'mainCategoryType',
            title: 'Main Category Type',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Men',
                        value: 'men'
                    },
                    {
                        title: 'Women',
                        value: 'women'
                    },
                    {
                        title: 'Accessories',
                        value: 'accessories'
                    },
                    {
                        title: 'Gadgets',
                        value: 'gadgets'
                    },
                    {
                        title: 'Home Interiors',
                        value: 'homeInteriors'
                    }
                ]
            },
            hidden: ({ document })=>!document?.isMainCategory,
            validation: (Rule)=>Rule.custom((mainCategoryType, context)=>{
                    if (context.document.isMainCategory && !mainCategoryType) {
                        return 'Main category type is required for main categories';
                    }
                    return true;
                })
        },
        {
            name: 'subcategoryType',
            title: 'Subcategory Type',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Clothing',
                        value: 'clothing'
                    },
                    {
                        title: 'Bags',
                        value: 'bags'
                    },
                    {
                        title: 'Shoes',
                        value: 'shoes'
                    },
                    {
                        title: 'Jewelry',
                        value: 'jewelry'
                    },
                    {
                        title: 'Luxury Brands',
                        value: 'luxuryBrands'
                    }
                ]
            },
            hidden: ({ document })=>document?.isMainCategory,
            validation: (Rule)=>Rule.custom((subcategoryType, context)=>{
                    if (!context.document.isMainCategory && !subcategoryType) {
                        return 'Subcategory type is required for subcategories';
                    }
                    return true;
                })
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number',
            description: 'Order in which to display this category'
        }
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'isMainCategory',
            media: 'image'
        },
        prepare ({ title, subtitle, media }) {
            return {
                title,
                subtitle: subtitle ? 'Main Category' : 'Subcategory',
                media
            };
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/schemaTypes/brand.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "brand": (()=>brand)
});
const brand = {
    name: 'brand',
    title: 'Brand',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Brand Name',
            type: 'string',
            validation: (Rule)=>Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            }
        },
        {
            name: 'logo',
            title: 'Brand Logo',
            type: 'image'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [
                        {
                            type: 'category'
                        }
                    ]
                }
            ],
            description: 'Categories this brand belongs to'
        },
        {
            name: 'isLuxury',
            title: 'Is Luxury Brand',
            type: 'boolean',
            initialValue: false
        },
        {
            name: 'featured',
            title: 'Featured Brand',
            type: 'boolean',
            initialValue: false
        },
        {
            name: 'countryOfOrigin',
            title: 'Country of Origin',
            type: 'string'
        },
        {
            name: 'websiteUrl',
            title: 'Official Website',
            type: 'url'
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/schemaTypes/index.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// sanity/schemaTypes/index.ts
__turbopack_esm__({
    "schema": (()=>schema),
    "schemaTypes": (()=>schemaTypes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/schemaTypes/product.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$category$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/schemaTypes/category.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$brand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/schemaTypes/brand.ts [app-client] (ecmascript)");
;
;
;
const schemaTypes = [
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$product$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["product"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$category$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["category"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$brand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["brand"]
];
const schema = {
    types: schemaTypes
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/structure.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "structure": (()=>structure)
});
const structure = (S)=>S.list().title('Content').items(S.documentTypeListItems());
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity.config.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/env.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/schemaTypes/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$structure$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/structure.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/sanity/lib/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/sanity/lib/_chunks-es/pane.mjs [app-client] (ecmascript)");
/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/cms/[[...tool]]/page.tsx` route
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$_chunks$2d$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@sanity/vision/lib/_chunks-es/index.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defineConfig"])({
    basePath: '/cms',
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectId"],
    dataset: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataset"],
    // Add and edit the content schema in the './sanity/schemaTypes' folder
    schema: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"],
    plugins: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structureTool"])({
            structure: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$structure$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structure"]
        }),
        // Vision is for querying with GROQ from inside the Studio
        // https://www.sanity.io/docs/the-vision-plugin
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$_chunks$2d$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visionTool"])({
            defaultApiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiVersion"]
        })
    ]
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/cms/[[...tool]]/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_e30fb2._.js.map