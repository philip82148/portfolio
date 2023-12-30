import { Box, Container, Stack, Typography, styled } from '@mui/material'

import { useIsPC } from '@/lib/useIsPC'

const NameTypography = styled(Typography)(({ theme }) => ({
  fontSize: '2.8rem',
  fontWeight: 600,
  marginBottom: theme.spacing(0.5),
}))

const ItemTypography = styled(Typography)(({ theme }) => ({
  marginTop: 10,
  color: theme.palette.text.secondary,
  fontSize: '1.2rem',
}))

const ContentTypography = styled(Typography)(() => ({
  fontSize: '1.2rem',
}))

export const About: React.FC = () => {
  const isPC = useIsPC()

  return (
    <Container fixed={isPC} sx={{ pt: 10, pb: 15 }} disableGutters={!isPC} id="about">
      <Stack sx={{ width: '100%' }} alignItems="center">
        <Typography variant="h2">ABOUT</Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: '100%', maxWidth: 950 }}
        >
          <Box sx={{ width: 400, borderRadius: 200, overflow: 'hidden', display: 'flex' }}>
            <img
              src="https://avatars.githubusercontent.com/u/92205270?v=4"
              alt=""
              style={{ width: '100%' }}
            />
          </Box>
          <Stack sx={{ width: 400 }}>
            <NameTypography>Ryota Sasaki</NameTypography>
            <ItemTypography>所属</ItemTypography>
            <ContentTypography>慶應義塾大学 理工学部 電気情報工学科 4年</ContentTypography>
            <ItemTypography>趣味</ItemTypography>
            <ContentTypography>電子工作/カラオケ/アニメ/ピアノ</ContentTypography>
            <ItemTypography>特技</ItemTypography>
            <ContentTypography>円周率100桁言える</ContentTypography>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}
