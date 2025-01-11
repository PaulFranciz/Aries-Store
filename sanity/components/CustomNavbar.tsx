// sanity/components/CustomNavbar.tsx
import React from 'react'
import { NavbarProps } from 'sanity'

export function CustomNavbar(props: NavbarProps) {
  return (
    <div className="flex items-center justify-between p-4">
      {props.renderDefault(props)}
    </div>
  )
}