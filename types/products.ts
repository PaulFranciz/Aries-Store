// types/products.ts
export interface ProductVariant {
    name: string;
    sku: string;
    price?: number;
    inStock: boolean;
    attributes: {
      size?: string;
      color?: string;
      material?: string;
    };
  }
  
  export interface Product {
    _id: string;
    title: string;
    slug: { current: string };
    sku: string;
    price: number;
    compareAtPrice?: number;
    description?: any[]; // Sanity block content
    images: Array<{
      _key: string;
      asset: {
        _ref: string;
      };
      alt?: string;
    }>;
    brand: {
      _ref: string;
      _type: 'reference';
    };
    mainCategories: Array<{
      _ref: string;
      _type: 'reference';
    }>;
    subcategories: Array<{
      _ref: string;
      _type: 'reference';
    }>;
    inventory: {
      inStock: boolean;
      quantity: number;
    };
    variants?: ProductVariant[];
    features?: string[];
    status: 'active' | 'draft' | 'archived';
  }