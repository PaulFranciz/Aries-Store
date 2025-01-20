'use client'

import React from 'react'
import Image from 'next/image'
import { Menu, ChevronRight, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { MainCategory } from '@/types/navigation'
import Link from 'next/link'

interface MobileMenuProps {
  categories: MainCategory[]
}

export function MobileMenu({ categories }: MobileMenuProps) {
  return (
    <Sheet>
      <SheetTrigger className="p-2 md:hidden">
        <Menu className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent 
        side="left" 
        className="w-full h-full p-0 mt-0"
      >
        <div className="flex items-center justify-between bg-black text-white px-6 py-4">
          <Link href="/" className="text-xl font-light tracking-[0.2em] uppercase">
            ARIES
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-sm">Log In</Link>
            <span className="text-sm">|</span>
            <Link href="/account/create" className="text-sm">Create Account</Link>
            <SheetTrigger asChild>
              <button className="p-2">
                <X className="h-6 w-6" />
              </button>
            </SheetTrigger>
          </div>
        </div>

        <nav className="h-[calc(100%-60px)] bg-white">
          <div className="overflow-y-auto h-full pb-20">
            {categories.map((category) => (
              <Link
                key={category._id}
                href={`/categories/${category.slug}`}
                className="block border-b border-gray-100"
              >
                <div className="flex items-center px-6 py-4">
                  <div className="relative w-[60px] h-[60px] flex-shrink-0">
                    {category.featuredImage && (
                      <Image
                        src={category.featuredImage}
                        alt={category.title}
                        fill
                        className="object-cover"
                        sizes="60px"
                        priority
                      />
                    )}
                  </div>
                  <span className="flex-1 ml-6 text-base tracking-wider uppercase">
                    {category.title}
                  </span>
                  <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}