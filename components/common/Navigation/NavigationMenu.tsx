'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import { MainCategory, Subcategory } from '@/types/navigation'

interface NavigationMenuProps {
  categories: MainCategory[]
  isOpen: boolean
  activeCategory: string | null
  onClose: () => void
}

export function NavigationMenu({ categories, isOpen, activeCategory, onClose }: NavigationMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isOpen) {
        gsap.fromTo(
          menuRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
        )
      } else {
        gsap.to(menuRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.2,
          ease: 'power2.in',
        })
      }
    })

    return () => ctx.revert()
  }, [isOpen])

  const activeMenu = categories.find((cat) => cat._id === activeCategory)

  if (!activeMenu) return null

  const groupSubcategories = (subcategories: Subcategory[]) => {
    const byStyle = subcategories.filter(sub => sub.subcategoryType === 'bags')
    const byFamily = subcategories.filter(sub => sub.subcategoryType === 'collection')
    return { byStyle, byFamily }
  }

  const { byStyle, byFamily } = groupSubcategories(activeMenu.subcategories)

  return (
    <div
      ref={menuRef}
      className="absolute top-full left-0 right-0 bg-white shadow-lg"
      onMouseLeave={onClose}
    >
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-12 gap-8">
          {/* Subcategories Column */}
          <div className="col-span-8 grid grid-cols-4 gap-8">
            {activeMenu.subcategories.map((subcategory) => (
              <div key={subcategory._id}>
                <Link
                  href={`/categories/${activeMenu.slug}/${subcategory.slug}`}
                  className="text-sm font-medium hover:text-gray-600 transition-colors"
                >
                  {subcategory.title}
                </Link>
              </div>
            ))}
          </div>

          {/* Featured Image Column */}
          <div className="col-span-4">
            {activeMenu.featuredImage && (
              <div className="relative h-[500px] w-full">
                <Image
                  src={activeMenu.featuredImage}
                  alt={`${activeMenu.title} featured image`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

