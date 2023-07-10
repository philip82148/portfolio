import type { TransformType } from '.'

export const NoTransform: TransformType = ({ children }) => {
  return <span style={{ display: 'inline-block', whiteSpace: 'pre' }}>{children}</span>
}
