import { Box, Button, Container, Stack, styled } from '@mui/material'
import { Dosis } from 'next/font/google'
import { useEffect, useState } from 'react'

const h2Font = Dosis({ preload: false })
// const mainFont = Crete_Round({ weight: '400', preload: false })

const HpButton = styled(Button)({
  height: 60,
  borderRadius: 0,
  textTransform: 'none',
  fontWeight: 600,
  padding: '0 12px',
})

const SnsButton = styled(Button)({
  height: 60,
  borderRadius: 0,
  minWidth: 0,
  padding: '15px 12px',
})

const HeaderButton = styled(Button)({
  height: 60,
  borderRadius: 0,
  fontFamily: h2Font.style.fontFamily,
  fontWeight: 700,
  fontSize: '1rem',
  width: 80,
})

export const Header: React.FC = () => {
  const [pr, setPr] = useState('0')

  // MuiModalによってHeaderがずれないようにする
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setPr(document.body.style.paddingRight)
    })

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['style'],
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 100,
        width: '100%',
        pr,
        bgcolor: 'background.default',
      }}
    >
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack direction="row" alignItems="center">
            <HpButton href="/" color="inherit">
              <Stack direction="row" alignItems="center">
                <Box sx={{ width: 48, height: 48, borderRadius: 24, overflow: 'hidden', mr: 2 }}>
                  <img
                    src="https://avatars.githubusercontent.com/u/92205270?s=48&v=4"
                    alt=""
                    style={{ width: '100%' }}
                  />
                </Box>
                Ryota Sasaki
              </Stack>
            </HpButton>
            <Stack direction="row">
              <SnsButton href="https://github.com/philip82148" color="inherit">
                <img
                  src="images/logos/github.svg"
                  alt=""
                  style={{ height: '100%', width: 'auto' }}
                />
              </SnsButton>
              <SnsButton href="https://zenn.dev/sassan" color="inherit">
                <img src="images/logos/zenn.svg" alt="" style={{ height: '100%', width: 'auto' }} />
              </SnsButton>
              <SnsButton href="https://qiita.com/philip82148" color="inherit">
                <img
                  src="images/logos/qiita.png"
                  alt=""
                  style={{ height: '100%', width: 'auto' }}
                />
              </SnsButton>
              <SnsButton href="https://twitter.com/philip82148" color="inherit">
                <img src="images/logos/x.png" alt="" style={{ height: '100%', width: 'auto' }} />
              </SnsButton>
              <SnsButton href="https://dev.to/philip82148" color="inherit">
                <img src="images/logos/dev.svg" alt="" style={{ height: '100%', width: 'auto' }} />
              </SnsButton>
              <SnsButton href="https://www.wantedly.com/id/ryouta_sasaki_ag" color="inherit">
                <img
                  src="images/logos/wantedly.svg"
                  alt=""
                  style={{ height: '100%', width: 'auto' }}
                />
              </SnsButton>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center">
            <HeaderButton
              color="inherit"
              onClick={() =>
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              ABOUT
            </HeaderButton>
            <HeaderButton
              color="inherit"
              onClick={() =>
                document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              SKILLS
            </HeaderButton>
            <HeaderButton
              color="inherit"
              onClick={() =>
                document.getElementById('history')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              HISTORY
            </HeaderButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
