'use client'

import React, { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { Search, User, Heart, ShoppingBag, X } from 'lucide-react'
import { MainCategory } from '@/types/navigation'
import { useNavigation } from '@/hooks/useNavigation'
import { NavigationMenu } from './NavigationMenu'
import { Banner } from '../Banner'
import { MobileMenu } from './MobileMenu'
import { useBreakpoint } from '@/hooks/useBreakpoint'

interface NavigationBarProps {
  categories: MainCategory[]
  bannerMessage: string
  bannerLink?: {
    text: string
    url: string
  }
}

export function NavigationBar({ categories, bannerMessage, bannerLink }: NavigationBarProps) {
  const headerRef = useRef<HTMLElement>(null)
  const { state, setActiveCategory, closeMenu } = useNavigation()
  const [showBanner, setShowBanner] = useState(true)
  const { isMobile } = useBreakpoint()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        yPercent: -100,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      })
    })

    return () => ctx.revert()
  }, [])

  const handleCategoryHover = (category: MainCategory) => {
    if (!isMobile) {
      setActiveCategory(category._id)
    }
  }

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <MobileMenu categories={categories} />
          <button className="p-2">
            <Search className="w-5 h-5" />
          </button>
        </div>
        
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-xl font-light tracking-[0.2em] uppercase">
            ARIES
          </h1>
        </Link>

        <div className="flex items-center space-x-4">
          <button className="p-2">
            <Heart className="w-5 h-5" />
          </button>
          <button className="p-2">
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      {!isMobile && (
        <nav className="hidden md:flex items-center justify-center space-x-8 py-4 border-b border-gray-200">
          {categories.map((category) => (
            <button
              key={category._id}
              className="text-sm uppercase tracking-wider hover:text-gray-600 transition-colors"
              onMouseEnter={() => handleCategoryHover(category)}
              onFocus={() => handleCategoryHover(category)}
            >
              {category.title}
            </button>
          ))}
        </nav>
      )}

      {/* Desktop Mega Menu */}
      {!isMobile && (
        <NavigationMenu
          categories={categories}
          isOpen={state.isOpen}
          activeCategory={state.activeCategory}
          onClose={closeMenu}
        />
      )}
    </header>
  )
}