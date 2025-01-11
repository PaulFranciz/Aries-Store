module.exports = {

"[project]/sanity/schemaTypes/product.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "product": (()=>product)
});
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
            components: {},
            validation: (Rule)=>Rule.required()
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
                            components: {},
                            validation: (Rule)=>Rule.required()
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
    ]
};
}}),
"[project]/sanity/schemaTypes/category.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
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
}}),
"[project]/sanity/schemaTypes/brand.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
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
}}),
"[project]/sanity/schemaTypes/index.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// sanity/schemaTypes/index.ts
__turbopack_esm__({
    "schema": (()=>schema),
    "schemaTypes": (()=>schemaTypes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/schemaTypes/product.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$category$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/schemaTypes/category.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$brand$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/schemaTypes/brand.ts [app-rsc] (ecmascript)");
;
;
;
const schemaTypes = [
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["product"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$category$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["category"],
    __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$brand$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["brand"]
];
const schema = {
    types: schemaTypes
};
}}),
"[project]/sanity/structure.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "structure": (()=>structure)
});
const structure = (S)=>S.list().title('Content').items(S.documentTypeListItems());
}}),
"[project]/sanity/env.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "apiVersion": (()=>apiVersion),
    "dataset": (()=>dataset),
    "projectId": (()=>projectId)
});
const apiVersion = ("TURBOPACK compile-time value", "2024-12-31") || '2024-12-31';
const dataset = assertValue(("TURBOPACK compile-time value", "production"), 'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET');
const projectId = assertValue(("TURBOPACK compile-time value", "qu6710uv"), 'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID');
function assertValue(v, errorMessage) {
    if (v === undefined) {
        throw new Error(errorMessage);
    }
    return v;
}
}}),
"[project]/sanity/components/CustomLogo.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// sanity/components/CustomLogo.tsx
__turbopack_esm__({
    "CustomLogo": (()=>CustomLogo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function CustomLogo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-xl font-bold text-primary",
        children: "Aries"
    }, void 0, false, {
        fileName: "[project]/sanity/components/CustomLogo.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}}),
"[project]/sanity/components/CustomNavbar.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// sanity/components/CustomNavbar.tsx
__turbopack_esm__({
    "CustomNavbar": (()=>CustomNavbar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function CustomNavbar(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between p-4",
        children: props.renderDefault(props)
    }, void 0, false, {
        fileName: "[project]/sanity/components/CustomNavbar.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/async_hooks [external] (async_hooks, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("async_hooks", () => require("async_hooks"));

module.exports = mod;
}}),
"[project]/sanity/plugins/customDocumentActions.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// sanity/plugins/customDocumentActions.ts
__turbopack_esm__({
    "customDocumentActions": (()=>customDocumentActions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/sanity/lib/index.mjs [app-rsc] (ecmascript) <locals>");
;
const customDocumentActions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["definePlugin"])(()=>{
    return {
        name: 'custom-document-actions',
        document: {
            actions: (prev, context)=>{
                if (context.schemaType === 'product') {
                    const productActions = [];
                    return [
                        ...prev,
                        ...productActions
                    ];
                }
                return prev;
            }
        }
    };
});
}}),
"[project]/sanity.config.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/schemaTypes/index.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$structure$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/structure.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/env.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$components$2f$CustomLogo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/components/CustomLogo.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$components$2f$CustomNavbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/components/CustomNavbar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$plugins$2f$customDocumentActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity/plugins/customDocumentActions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/sanity/lib/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/sanity/lib/_chunks-es/pane.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$_chunks$2d$es$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@sanity/vision/lib/_chunks-es/index.mjs [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defineConfig"])({
    name: 'aries',
    title: 'Aries',
    basePath: '/cms',
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projectId"],
    dataset: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dataset"],
    plugins: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["structureTool"])({
            structure: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$structure$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["structure"]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$_chunks$2d$es$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["visionTool"])({
            defaultApiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["apiVersion"]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$plugins$2f$customDocumentActions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["customDocumentActions"])()
    ],
    schema: {
        types: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["schemaTypes"]
    },
    document: {
        actions: (prev, { schemaType })=>{
            if (schemaType === 'product') {
                return prev;
            }
            return prev;
        }
    },
    studio: {
        components: {
            logo: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$components$2f$CustomLogo$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CustomLogo"],
            navbar: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$components$2f$CustomNavbar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CustomNavbar"]
        }
    }
});
const __TURBOPACK__default__export__ = config;
}}),
"[project]/app/cms/[[...tool]]/page.tsx [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */ __turbopack_esm__({
    "default": (()=>StudioPage),
    "dynamic": (()=>dynamic)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$dist$2f$studio$2f$client$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-sanity/dist/studio/client-component.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity.config.ts [app-rsc] (ecmascript)");
;
;
;
const dynamic = 'force-static';
;
function StudioPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$dist$2f$studio$2f$client$2d$component$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextStudio"], {
        config: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
    }, void 0, false, {
        fileName: "[project]/app/cms/[[...tool]]/page.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
}}),
"[project]/app/cms/[[...tool]]/page.tsx [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2e$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/sanity.config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f5b5b2e2e2e$tool$5d5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/cms/[[...tool]]/page.tsx [app-rsc] (ecmascript) <locals>");
}}),
"[project]/app/cms/[[...tool]]/page.tsx [app-rsc] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f5b5b2e2e2e$tool$5d5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]),
    "dynamic": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f5b5b2e2e2e$tool$5d5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["dynamic"]),
    "metadata": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$dist$2f$studio$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["metadata"]),
    "viewport": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$dist$2f$studio$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["viewport"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$sanity$2f$dist$2f$studio$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/next-sanity/dist/studio.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f5b5b2e2e2e$tool$5d5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/app/cms/[[...tool]]/page.tsx [app-rsc] (ecmascript) <locals>");
}}),
"[project]/app/cms/[[...tool]]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f5b5b2e2e2e$tool$5d5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["default"]),
    "dynamic": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f5b5b2e2e2e$tool$5d5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["dynamic"]),
    "metadata": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f5b5b2e2e2e$tool$5d5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["metadata"]),
    "viewport": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f5b5b2e2e2e$tool$5d5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["viewport"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f5b5b2e2e2e$tool$5d5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/cms/[[...tool]]/page.tsx [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$cms$2f5b5b2e2e2e$tool$5d5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__("[project]/app/cms/[[...tool]]/page.tsx [app-rsc] (ecmascript) <exports>");
}}),
"[project]/app/cms/[[...tool]]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_namespace__(__turbopack_import__("[project]/app/cms/[[...tool]]/page.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/.next-internal/server/app/cms/[[...tool]]/page/actions.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__d3c90e._.js.map