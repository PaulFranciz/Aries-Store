export interface MainCategory {
  _id: string
  title: string
  slug: {
    current: string
  }
  mainCategoryType: string
  featuredImage: string | null
  subcategories: Subcategory[]
}

export interface Subcategory {
  isNew: any
  _id: string
  title: string
  slug: {
    current: string
  }
  subcategoryType: string
}

export interface NavigationState {
  isOpen: boolean
  activeCategory: string | null
}

