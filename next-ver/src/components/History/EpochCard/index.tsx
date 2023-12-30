import type { TechType } from '../TechTag'

import { EpochCardPC } from './EpochCardPC'
import { EpochCardSP } from './EpochCardSP'

import { useIsPC } from '@/lib/useIsPC'

export type EpochCardProps = {
  title: string
  caption?: string
  newTechs?: TechType[]
  rightAlign?: boolean
}
export const EpochCard: React.FC<EpochCardProps> = (props) => {
  const isPC = useIsPC()
  return <>{isPC ? <EpochCardPC {...props} /> : <EpochCardSP {...props} />}</>
}
