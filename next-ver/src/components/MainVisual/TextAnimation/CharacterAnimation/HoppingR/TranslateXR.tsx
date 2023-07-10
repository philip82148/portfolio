import type { CSSProperties } from 'react'
import { useEffect, useState } from 'react'

import type { TransformType } from '..'

export const TranslateXR: TransformType = ({ children, durationS }) => {
  const [phase, setPhase] = useState(0)

  let style: CSSProperties
  let phaseDurationS: number

  switch (phase) {
    case 0:
      phaseDurationS = 0
      style = { transform: `translate(0, 0)` }
      break
    case 1:
      phaseDurationS = durationS * 0.5
      style = {
        transition: `all ${phaseDurationS}s linear`,
        transform: `translate(100vw, 0)`,
      }
      break
    case 2:
      phaseDurationS = 0.1
      style = {
        transform: `translate(-100vw, 0)`,
      }
      break
    default:
      phaseDurationS = durationS * 0.5
      style = {
        transition: `all ${phaseDurationS}s linear`,
        transform: `translate(0, 0)`,
      }
      break
  }

  useEffect(() => {
    if (phase < 4)
      setTimeout(() => {
        setPhase((phase) => phase + 1)
      }, phaseDurationS * 1000)
  }, [phase, phaseDurationS])

  return <span style={{ display: 'inline-block', whiteSpace: 'pre', ...style }}>{children}</span>
}
