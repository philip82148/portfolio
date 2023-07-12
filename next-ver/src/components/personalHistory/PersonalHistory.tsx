import { Container, Divider, Stack, Typography } from '@mui/material'
import { useEffect, useRef, useState } from 'react'

export const PersonalHistory: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Container
      fixed
      sx={
        {
          /* background: '#e9e9e9' */
        }
      }
    >
      <Typography variant="h2">History</Typography>
      <Stack divider={<AutoHeightDivider />} sx={{ width: '100%' }}>
        {children}
      </Stack>
    </Container>
  )
}

const AutoHeightDivider: React.FC = () => {
  const [height, setHeight] = useState(80)

  const dividerRef = useRef<HTMLHRElement>(null)

  useEffect(() => {
    if (dividerRef.current) {
      const previousElement = dividerRef.current.previousElementSibling
      const nextElement = dividerRef.current.nextElementSibling

      const observer = new ResizeObserver(() => {
        const previousHeight = previousElement?.clientHeight ?? 0
        const nextHeight = nextElement?.clientHeight ?? 0

        if (previousHeight + nextHeight > 160) {
          setHeight(40)
        } else {
          setHeight(40)
        }
      })

      if (previousElement) observer.observe(previousElement)
      if (nextElement) observer.observe(nextElement)

      return () => {
        observer.disconnect()
      }
    }
  }, [])

  return (
    <Divider
      ref={dividerRef}
      orientation="vertical"
      flexItem
      sx={{ transition: 'all 1s', height, m: '0 auto', borderRight: 2 }}
    />
  )
}
