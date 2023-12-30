import type { TechType } from '../TechTag'

import { WorkCardPC } from './WorkCardPC'
import { WorkCardSP } from './WorkCardSP'

import { useIsPC } from '@/lib/useIsPC'

export type WorkCardProps = {
  type: WorkCardType
  title: string
  imageSrc: string
  url?: string
  demoUrl?: string
  caption: React.ReactNode
  techs?: TechType[]
  isClosed?: boolean
  rightAlign?: boolean
  onClick?: () => void
}
export type WorkCardType = 'programming' | 'electronics' | 'craft'
export const WorkCard: React.FC<WorkCardProps> = (props) => {
  const isPC = useIsPC()
  return <>{isPC ? <WorkCardPC {...props} /> : <WorkCardSP {...props} />}</>
}
