import { Box, Stack } from '@mui/material'
import { Crete_Round } from 'next/font/google'

const mainFont = Crete_Round({ weight: '400', preload: false })

export const MainVisual: React.FC = () => {
  return (
    <Stack
      justifyContent="end"
      alignItems="center"
      className={mainFont.className}
      sx={{
        height: '550px',
        width: '100%',
        background: 'url(images/bg.jpg)',
        backgroundSize: 'cover',
        overflow: 'hidden',
        mt: '60px',
        color: '#fff',
        pb: 12,
      }}
    >
      <Box
        sx={{
          fontSize: { lg: 100, sm: 60, xs: 40 },
          ml: { lg: '-6px', sm: '-4px', xs: '-2px' },
        }}
      >
        Ryota Sasaki
      </Box>
      <Box sx={{ fontSize: { lg: 26, md: 18, sm: 22 } }}>
        Keio University Student Software Engineer
      </Box>
    </Stack>
  )
}
