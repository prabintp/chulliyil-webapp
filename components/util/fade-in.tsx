import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { useSpring, animated, config } from 'react-spring'
import { useIntersectionObserver } from 'usehooks-ts'

interface ScrollTriggerProps {
  children: React.ReactNode
  cascadeDelay?: number
  zIndexValue?: number
}

export const FadeIn = forwardRef(
  ({ children, cascadeDelay, zIndexValue }: ScrollTriggerProps, ref) => {
    const [hasAnimated, setHasAnimated] = useState(false)

    const animationRef = useRef<HTMLDivElement | null>(null)
    const entry = useIntersectionObserver()
    const isVisible = !!entry?.isIntersecting

    useImperativeHandle(ref, () => ({
      isAnimating: () => {
        return !hasAnimated
      }
    }))

    const animation = useSpring({
      opacity: hasAnimated ? 1 : 0,
      ...(zIndexValue !== undefined && { zIndex: zIndexValue }),
      transform: hasAnimated ? 'translateY(0) translateZ(0)' : 'translateY(150px) translateZ(0)',
      config: config.molasses,
      delay: cascadeDelay || 150
    })

    if (isVisible && !hasAnimated) {
      setHasAnimated(true)
    }

    return (
      <animated.div ref={entry.ref} style={animation} className="">
        {children}
      </animated.div>
    )
  }
)

FadeIn.displayName = 'FadeIn'
