import { Chip } from '@mui/material'

export type TechType =
  | 'java'
  | 'PICのアセンブリ言語'
  | 'c'
  | 'javascript'
  | 'python'
  | 'html'
  | 'css'
  | 'jquery'
  | 'php'
  | 'mysql'
  | 'wordpress'
  | 'flutter'
  | 'kotlin'
  | 'typescript'
  | 'react'
  | 'next'
  | 'nest'
export const TechTag: React.FC<{ techType: TechType }> = ({ techType }) => {
  return <Chip label={techType} sx={{}} />
}
