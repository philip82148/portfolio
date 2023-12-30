import { Box, Container, Stack, Typography } from '@mui/material'

import { useIsPC } from '@/lib/useIsPC'

export const Skills: React.FC = () => {
  const isPC = useIsPC()

  return (
    <Stack sx={{ bgcolor: 'primary.main', pt: 10, pb: 10 }} alignItems="center" id="skills">
      {/* <Typography variant="h2" color="#fff" borderColor="#fff">
        SKILLS
      </Typography> */}
      <Container fixed={isPC} disableGutters={!isPC}>
        <Stack
          sx={{ width: '100%', bgcolor: 'background.default', pt: 8, pb: 16 }}
          alignItems="center"
        >
          {/* <Typography variant="h3">LANGUAGES</Typography> */}
          <Typography variant="h2">SKILLS</Typography>
          {/* <Box sx={{ width: 500 }}>
            <img
              src="https://skillicons.dev/icons?i=ts,js,cpp,c,java,py,php,html,css,mysql&perline=5"
              alt=""
              style={{ width: '100%' }}
            />
          </Box>
        </Stack>
        <Stack sx={{ width: '100%', bgcolor: 'background.default' }} alignItems="center">
          <Typography variant="h3">FRAMEWORKS</Typography> */}
          <Box sx={{ width: 800 }}>
            <img
              src="https://skillicons.dev/icons?i=ts,js,nextjs,react,nestjs,prisma,nodejs,docker,cpp,c,java,py,php,jquery,html,css,flutter,kotlin,graphql,mysql,wordpress,gcp,firebase,raspberrypi&perline=6"
              alt=""
              style={{ width: '100%' }}
            />
          </Box>
        </Stack>
      </Container>
    </Stack>
  )
}
