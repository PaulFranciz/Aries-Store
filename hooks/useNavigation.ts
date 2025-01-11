import { useState, useCallback } from 'react'
import { NavigationState } from '@/types/navigation'

export const useNavigation = () => {
  const [state, setState] = useState<NavigationState>({
    isOpen: false,
    activeCategory: null,
  })

  const toggleMenu = useCallback(() => {
    setState(prev => ({ ...prev, isOpen: !prev.isOpen }))
  }, [])

  const setActiveCategory = useCallback((category: string | null) => {
    setState(prev => ({ ...prev, activeCategory: category }))
  }, [])

  const closeMenu = useCallback(() => {
    setState({ isOpen: false, activeCategory: null })
  }, [])

  return {
    state,
    toggleMenu,
    setActiveCategory,
    closeMenu,
  }
}

