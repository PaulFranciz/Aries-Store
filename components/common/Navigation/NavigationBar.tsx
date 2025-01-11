'use client'

import React, { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'
import { Search, User, Heart, ShoppingBag } from 'lucide-react'
import { MainCategory } from '@/types/navigation'
import { useNavigation } from '@/hooks/useNavigation'
import { NavigationMenu } from './NavigationMenu'
import { Banner } from '../Banner'

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
  const imageRef = useRef<HTMLDivElement>(null)
  const { state, toggleMenu, setActiveCategory, closeMenu } = useNavigation()
  const [showBanner, setShowBanner] = useState(true)
  const [activeImage, setActiveImage] = useState<string | null>(null)

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

  useEffect(() => {
    if (activeImage) {
      gsap.to(imageRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      })
    } else {
      gsap.to(imageRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
      })
    }
  }, [activeImage])

  const handleCategoryHover = (category: MainCategory) => {
    setActiveCategory(category._id)
    setActiveImage(category.featuredImage || null)
  }

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 bg-white font-lato">
      {showBanner && (
        <Banner
          message={bannerMessage}
          link={bannerLink}
          onClose={() => setShowBanner(false)}
        />
      )}

      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          {/* Top bar with logo and icons */}
          <div className="h-24 flex items-center justify-between">
            <div className="w-1/3">
              {/* Placeholder for potential left-aligned content */}
            </div>
            <Link href="/" className="w-1/3 flex justify-center">
              <h1 className="text-3xl font-light tracking-[0.2em] uppercase">ARIES</h1>
            </Link>
            <div className="w-1/3 flex justify-end items-center space-x-4">
              {[Search, User, Heart, ShoppingBag].map((Icon, index) => (
                <button key={index} className="p-2 hover:bg-gray-100 rounded-full">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Navigation categories */}
          <nav className="flex items-center justify-center space-x-8 py-4">
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
        </div>
      </div>

      {/* Featured Image */}
      <div 
        ref={imageRef} 
        className="absolute left-0 right-0 top-full h-64 bg-gray-100 overflow-hidden opacity-0"
      >
        {activeImage && (
          <Image
            src={activeImage}
            alt="Featured category image"
            layout="fill"
            objectFit="cover"
          />
        )}
      </div>

      <NavigationMenu
        categories={categories}
        isOpen={state.isOpen}
        activeCategory={state.activeCategory}
        onClose={closeMenu}
      />
    </header>
  )
}

