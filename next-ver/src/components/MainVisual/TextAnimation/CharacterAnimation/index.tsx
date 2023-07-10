import { useEffect, useState } from 'react'

import { HoppingL } from './HoppingL'
import { HoppingR } from './HoppingR'
import { NoTransform } from './NoTransform'
import { RotateX } from './RotateX'
import { RotateY } from './RotateY'
import { RotateZ } from './RotateZ'

export type TransformType = React.FC<React.PropsWithChildren<{ durationS: number }>>

export const CharacterAnimation: React.FC<{ children: string; durationS: number; state: any }> = ({
  children,
  durationS,
  state,
}) => {
  const [randomNo, setRandomNo] = useState(0)

  useEffect(() => {
    setRandomNo(Math.floor(Math.random() * 6))
  }, [state])

  switch (randomNo) {
    case 0:
      return <NoTransform durationS={durationS}>{children}</NoTransform>
    case 1:
      return <RotateX durationS={durationS}>{children}</RotateX>
    case 2:
      return <RotateY durationS={durationS}>{children}</RotateY>
    case 3:
      return <RotateZ durationS={durationS}>{children}</RotateZ>
    case 4:
      return <HoppingR durationS={durationS}>{children}</HoppingR>
    case 5:
      return <HoppingL durationS={durationS}>{children}</HoppingL>
  }
}
