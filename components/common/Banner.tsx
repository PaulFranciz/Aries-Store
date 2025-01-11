'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { X } from 'lucide-react'

interface BannerProps {
  message: string
  link?: {
    text: string
    url: string
  }
  onClose?: () => void
}

export const Banner: React.FC<BannerProps> = ({ message, link, onClose }) => {
  const router = useRouter()

  return (
    <div className="bg-black text-white py-2 px-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <p className="text-sm">{message}</p>
        {link && (
          <button
            className="text-sm underline"
            onClick={() => router.push(link.url)}
          >
            {link.text}
          </button>
        )}
      </div>
      {onClose && (
        <button onClick={onClose} className="text-white hover:text-gray-300">
          <X size={16} />
        </button>
      )}
    </div>
  )
}

