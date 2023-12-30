import { Stack } from '@mui/material'
import React, { cloneElement, useState } from 'react'

import { AutoHeightDivider } from './AutoHeightDivider'

import { useIsPC } from '@/lib/useIsPC'

type PersonalHistoryProps = {
  children: React.ReactElement[]
  closedOnMounts: boolean[]
}
export const HistoryBody: React.FC<PersonalHistoryProps> = ({ children, closedOnMounts }) => {
  const [isCloseds, setIsCloseds] = useState<boolean[]>(closedOnMounts)

  let rightAlign = true
  const nextRightAlign = (update: boolean = false): boolean => {
    const nextRightAlign = !rightAlign

    if (update) rightAlign = nextRightAlign
    return nextRightAlign
  }

  const isPC = useIsPC()

  return (
    <Stack divider={isPC && <AutoHeightDivider />} sx={{ width: '100%' }}>
      {children.map((child, i, children) =>
        cloneElement(child, {
          onClick: () => {
            setIsCloseds((isCloseds) =>
              children.map((_child, j) => (j === i ? !isCloseds[j] : !!isCloseds[j])),
            )
          },
          isClosed: isCloseds[i],
          rightAlign: isCloseds[i] ? nextRightAlign() : nextRightAlign(true),
          key: i,
        }),
      )}
    </Stack>
  )
}
