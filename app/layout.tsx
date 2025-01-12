import React from 'react'
import { Lato } from 'next/font/google'
import { client } from '@/sanity/lib/client'
import { getNavigationQuery } from '@/lib/queries/navigation'
import { NavigationBar } from '@/components/common/Navigation/NavigationBar'
import type { MainCategory } from '@/types/navigation'
import './globals.css'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
})

async function getCategories(): Promise<MainCategory[]> {
  try {
    return await client.fetch(getNavigationQuery)
  } catch (error) {
    console.error('Failed to fetch categories:', error)
    return []
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const categories = await getCategories()

  return (
    <html lang="en" className={`${lato.variable} font-sans`}>
      <body>
        <NavigationBar
          categories={categories}
          bannerMessage="New Lines Added | Enjoy up to 30% off"
          bannerLink={{
            text: "Shop Now🇺🇸",
            url: "/sale"
          }}
        />
        <main className="pt-[calc(6rem+16rem)]"> {/* Adjusted to account for header height + image height */}
          {children}
        </main>
      </body>
    </html>
  )
}

