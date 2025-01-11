import { generateSKU } from '@/sanity/utils/skuGenerator'

// ... other imports and code

export async function POST(req: Request) {
  const productData = await req.json()
  
  // Generate SKU if not provided
  if (!productData.sku) {
    productData.sku = generateSKU(productData)
  }
  
  // Generate SKUs for variants if not provided
  if (productData.variants) {
    productData.variants = productData.variants.map((variant: any) => ({
      ...variant,
      sku: variant.sku || generateSKU(productData, variant)
    }))
  }

  // ... rest of the product creation logic
}

// ... other route handlers

