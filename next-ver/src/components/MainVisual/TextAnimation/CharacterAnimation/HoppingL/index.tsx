import type { TransformType } from '..'

import { TranslateXL } from './TranslateXL'

export const HoppingL: TransformType = ({ children, durationS }) => {
  return <TranslateXL durationS={durationS}>{children}</TranslateXL>
}
