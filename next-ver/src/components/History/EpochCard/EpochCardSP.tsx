import { Paper, Stack, Typography } from '@mui/material'

import { TechTag } from '../TechTag'

import type { EpochCardProps } from '.'

export const EpochCardSP: React.FC<EpochCardProps> = ({ title, caption, newTechs }) => {
  return (
    <>
      {caption ? (
        <Stack sx={{ p: 2, borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd' }}>
          <Typography sx={{ fontSize: '1.6rem', fontWeight: 700, textAlign: 'left' }}>
            {title}
          </Typography>
          <Typography sx={{ mt: 1 }}>{caption}</Typography>
          {newTechs && (
            <>
              <Typography
                sx={{ fontSize: '1.2rem', fontWeight: 700, mt: 3, mb: 1, textAlign: 'left' }}
              >
                新しく覚えた言語/フレームワーク
              </Typography>
              <Stack direction="row" justifyContent="start" flexWrap="wrap" useFlexGap spacing={1}>
                {newTechs?.map((tech, i) => <TechTag key={i} techType={tech} />)}
              </Stack>
            </>
          )}
        </Stack>
      ) : (
        <Paper
          elevation={2}
          sx={{
            borderRadius: 5,
            m: 'auto',
            p: { md: '20px 40px', xs: 4 },
          }}
        >
          <Stack>
            <Typography sx={{ fontSize: '1.6rem', fontWeight: 700, textAlign: 'left' }}>
              {title}
            </Typography>
          </Stack>
        </Paper>
      )}
    </>
  )
}
