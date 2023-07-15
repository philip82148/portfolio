import type { TransformType } from '..'
import { TranslateXR } from '../TranslateXR'

export const HoppingR: TransformType = ({ children, durationS, state }) => {
  return (
    <TranslateXR durationS={durationS} state={state}>
      {children}
    </TranslateXR>
  )
}