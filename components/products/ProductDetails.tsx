import React from 'react';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import { Product } from '@/types/products';

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const {
    title,
    sku,
    price,
    compareAtPrice,
    description,
    images,
    inventory,
    variants,
    features,
  } = product;

  return (
    <div className="product-details max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="product-images">
          {images && images.length > 0 && (
            <img
              src={urlFor(images[0].asset).url()}
              alt={images[0].alt || title}
              className="w-full rounded-lg shadow-lg"
            />
          )}
        </div>

        <div className="product-info">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="text-gray-600 mb-2">SKU: {sku}</p>
          
          <div className="pricing mb-4">
            <span className="text-2xl font-bold">
              ${price.toFixed(2)}
            </span>
            {compareAtPrice && compareAtPrice > price && (
              <span className="ml-2 text-gray-500 line-through">
                ${compareAtPrice.toFixed(2)}
              </span>
            )}
          </div>

          <div className="inventory-status mb-4">
            {inventory.inStock ? (
              <span className="text-green-600">In Stock</span>
            ) : (
              <span className="text-red-600">Out of Stock</span>
            )}
          </div>

          {description && (
            <div className="description mb-6">
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <div className="prose">
                <PortableText value={description} />
              </div>
            </div>
          )}

          {variants && variants.length > 0 && (
            <div className="variants mb-6">
              <h2 className="text-xl font-semibold mb-2">Variants</h2>
              <div className="grid grid-cols-1 gap-2">
                {variants.map((variant) => (
                  <div
                    key={variant.sku}
                    className="p-3 border rounded-lg"
                  >
                    <p className="font-medium">{variant.name}</p>
                    <p className="text-sm text-gray-600">
                      SKU: {variant.sku}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {features && features.length > 0 && (
            <div className="features">
              <h2 className="text-xl font-semibold mb-2">Features</h2>
              <ul className="list-disc list-inside">
                {features.map((feature, index) => (
                  <li key={index} className="text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

