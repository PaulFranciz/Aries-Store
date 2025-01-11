// sanity/utils/skuGenerator.ts
export const generateSKU = (prefix: string = 'PRD', category?: string) => {
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  const categoryPrefix = category ? category.slice(0, 3).toUpperCase() : '';
  
  return `${prefix}-${categoryPrefix}${timestamp}${random}`;
};