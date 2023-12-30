import { useMediaQuery, useTheme } from '@mui/material'

export const useIsPC = (): boolean => {
  const theme = useTheme()
  const isPC = useMediaQuery(theme.breakpoints.up('md'))

  return isPC
}
