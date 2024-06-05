import { useCallback, useEffect, useState } from 'react'

export const useHeaderState = (
  shouldCloseOnScroll: boolean,
  alwaysSticky: boolean,
  menuIsOpen: boolean
) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isAtTop, setIsAtTop] = useState(true)
  const [isVisible, setIsVisible] = useState(isAtTop)
  const [shouldStick, setShouldStick] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const initialIsAtTop = window.scrollY === 0
      setIsAtTop(initialIsAtTop)
      if (!initialIsAtTop) {
        setIsVisible(false)
      }
    }
  }, [])

  useEffect(() => {
    if (menuIsOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.removeProperty('overflow')
    }
  }, [shouldCloseOnScroll, menuIsOpen])

  const handleScroll = useCallback(() => {
    const latestScrollY = window.scrollY
    const latestIsAtTop = latestScrollY === 0
    const isScrollingDown = latestScrollY > scrollPosition

    setIsVisible(!isScrollingDown || latestIsAtTop || menuIsOpen)

    if (!alwaysSticky) {
      if (latestIsAtTop) {
        setIsAtTop(true)
        setShouldStick(false)
      } else if (!isScrollingDown) {
        setShouldStick(true)
      }
    }

    setScrollPosition(latestScrollY)
  }, [alwaysSticky, menuIsOpen, scrollPosition])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return { isVisible, isAtTop, shouldStick }
}
