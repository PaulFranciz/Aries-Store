export const getNavigationQuery = `
  *[_type == "category" && isMainCategory == true] {
    _id,
    title,
    "slug": slug.current,
    mainCategoryType,
    "featuredImage": featuredImage.asset->url,
    "subcategories": *[_type == "category" && references(^._id)] {
      _id,
      title,
      "slug": slug.current,
      subcategoryType
    }
  }
`

