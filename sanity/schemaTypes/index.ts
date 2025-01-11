// sanity/schemaTypes/index.ts
import { product } from './product'
import { category } from './category'
import { brand } from './brand'

export const schemaTypes = [product, category, brand]

// Add this export for the schema
export const schema = {
  types: schemaTypes,
}


