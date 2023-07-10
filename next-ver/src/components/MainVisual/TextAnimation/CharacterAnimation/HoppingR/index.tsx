import type { TransformType } from '..'

import { TranslateXR } from './TranslateXR'

export const HoppingR: TransformType = ({ children, durationS }) => {
  return <TranslateXR durationS={durationS}>{children}</TranslateXR>
}
