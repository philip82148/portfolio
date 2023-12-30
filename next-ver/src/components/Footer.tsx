import { Box, Button, Container, Stack } from '@mui/material'

export const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#343434' }}>
      <Container>
        <Stack direction="row" justifyContent="flex-end">
          <Button>あ</Button>
          <Button>あ</Button>
          <Button>あ</Button>
          <Button>あ</Button>
        </Stack>
      </Container>
    </Box>
  )
}
