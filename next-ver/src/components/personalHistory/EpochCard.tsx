import { Stack, Typography } from '@mui/material'

import type { TechType } from './TechTag'
import { TechTag } from './TechTag'

export const EpochCard: React.FC<{ title: string; caption?: string; newTechs?: TechType[] }> = ({
  title,
  caption,
  newTechs,
}) => {
  return (
    <Stack alignItems="center" sx={{ width: 600, maxWidth: '100%', m: '0 auto' }}>
      <Typography
        sx={{
          fontSize: '2rem',
          fontWeight: 700,
          borderBottom: '2px solid #333',
          p: 2,
          pb: 1,
        }}
      >
        {title}
      </Typography>
      <Typography>{caption}</Typography>
      <Typography sx={{}}>新しく覚えた言語/フレームワーク</Typography>
      <Stack direction="row" flexWrap={'wrap'} justifyContent="center" spacing={1}>
        {newTechs?.map((tech, i) => <TechTag key={i} techType={tech} />)}
      </Stack>
    </Stack>
  )
}
