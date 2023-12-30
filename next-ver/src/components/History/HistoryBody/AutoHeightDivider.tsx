import { Divider } from '@mui/material'
import { useEffect, useRef, useState } from 'react'

export const AutoHeightDivider: React.FC = () => {
  const [isPreviousClosed, setIsPreviousClosed] = useState(false)
  const [isNextClosed, setIsNextClosed] = useState(false)

  const dividerRef = useRef<HTMLHRElement>(null)

  useEffect(() => {
    if (!dividerRef.current) return

    const previousElement = dividerRef.current.previousElementSibling
    const nextElement = dividerRef.current.nextElementSibling

    if (previousElement) setIsPreviousClosed(previousElement.classList.contains('closed'))
    if (nextElement) setIsNextClosed(nextElement.classList.contains('closed'))

    if (!previousElement || !nextElement) return

    const observer = new MutationObserver(() => {
      setIsPreviousClosed(previousElement.classList.contains('closed'))
      setIsNextClosed(nextElement.classList.contains('closed'))
    })

    observer.observe(previousElement, { attributes: true, attributeFilter: ['class'] })
    observer.observe(nextElement, { attributes: true, attributeFilter: ['class'] })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <Divider
      ref={dividerRef}
      orientation="vertical"
      flexItem
      sx={[
        {
          transition: 'all 1s',
          height: 40,
          m: '0 auto',
          borderRight: 2,
          borderColor: '#e0e0e0',
        },
        isPreviousClosed && { mt: 1 },
        isNextClosed && { mb: 1 },
        isPreviousClosed && isNextClosed && { height: 0, mt: 0.5, mb: 0.5 },
      ]}
    />
  )
}
