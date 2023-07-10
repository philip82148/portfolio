import { Box, Divider, Link, Stack } from '@mui/material'
import type { MouseEventHandler } from 'react'
import { Fragment } from 'react'

import { TextAnimation } from './TextAnimation'

export const MainVisual: React.FC<{
  listItems: Array<{ display: string; onClick?: MouseEventHandler<HTMLDivElement>; href?: string }>
}> = ({ listItems }) => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: { xl: 864, lg: 675, md: 506 },
        height: '100vh',
        width: '100vw',
        background: 'url(images/bg.jpg)',
        backgroundSize: 'cover',
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{
          width: { xl: 1400, lg: 1100, md: 800, xs: '100%' },
          height: { xl: 788, lg: 619, md: 450, xs: '100%' },
          p: 2,
          background: 'none',
          backdropFilter: { md: 'blur(20px)', xs: 'none' },
          color: '#fff',
        }}
      >
        <Stack>
          <Box sx={{ height: 120, position: 'relative' }}>
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                fontSize: { lg: 80, sm: 60, xs: 40 },
                ml: { lg: '-6px', sm: '-4px', xs: '-2px' },
              }}
            >
              <TextAnimation>Ryota Sasaki</TextAnimation>
            </Box>
          </Box>
          <Box sx={{ fontSize: { lg: 26, md: 18, sm: 22 }, mb: '5px' }}>
            Keio University Student Software Engineer
          </Box>
          <Box sx={{ height: 120 }}>
            <Stack
              direction="row"
              sx={{
                height: { lg: 35, sm: 25, xs: 18 },
                ml: '1px',
                mt: { lg: '28px', md: '18px', xs: '14px' },
              }}
              spacing={{ lg: 5, sm: 3, xs: 1 }}
            >
              <Link href="https://github.com/philip82148">
                <img src="images/mark-github.svg" alt="GitHub" style={{ height: '100%' }} />
              </Link>
              <Link href="https://www.wantedly.com/id/ryouta_sasaki_ag">
                <img src="images/Wantedly_Mark_Wht.svg" alt="Wantedly" style={{ height: '100%' }} />
              </Link>
            </Stack>
          </Box>
        </Stack>
        <Stack
          justifyContent="space-evenly"
          divider={<Divider flexItem sx={{ borderBottom: '2px solid #fff' }} />}
          sx={{
            width: { lg: 300, md: 230 },
            height: { lg: 400, md: 306 },
            borderTop: '2px solid #fff',
            borderBottom: '2px solid #fff',
            display: { md: 'flex', xs: 'none' },
          }}
        >
          {listItems.map((listItem, i) => (
            <Fragment key={i}>
              {listItem.href ? (
                <Link
                  href={listItem.href}
                  sx={{ fontSize: { lg: 22, md: 18 }, color: '#fff', textDecoration: 'none' }}
                >
                  {listItem.display}
                </Link>
              ) : (
                <Box
                  onClick={listItem.onClick}
                  sx={{
                    fontSize: { lg: 22, md: 18 },
                    cursor: listItem.onClick ? 'pointer' : 'not-allowed',
                  }}
                >
                  {listItem.display}
                </Box>
              )}
            </Fragment>
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}
