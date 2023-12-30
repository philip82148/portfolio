import type { SxProps, Theme } from '@mui/material'
import { Chip } from '@mui/material'

export type TechType =
  | 'Java'
  | 'PICアセンブラ'
  | 'C'
  | 'C++'
  | 'JavaScript'
  | 'Python'
  | 'HTML'
  | 'CSS'
  | 'jQuery'
  | 'PHP'
  | 'MySQL'
  | 'WordPress'
  | 'Flutter'
  | 'Kotlin'
  | 'TypeScript'
  | 'React'
  | 'Next.js'
  | 'NestJS'
  | 'Shell'
export const TechTag: React.FC<{ techType: TechType; sx?: SxProps<Theme> }> = ({
  techType,
  sx,
}) => {
  return <Chip label={techType} variant="outlined" sx={{ fontSize: '1rem', p: '0 4px', ...sx }} />
}
