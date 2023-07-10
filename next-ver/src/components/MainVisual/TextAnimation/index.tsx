import { useEffect, useState } from 'react'

import { CharacterAnimation } from './CharacterAnimation'

export const TextAnimation: React.FC<{ children: string }> = ({ children }) => {
  const [durationSs, setDurationSs] = useState<number[]>([])

  const randomInt = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1)) + min

  useEffect(() => {
    const setAllDurationSs = (): void => {
      setDurationSs([...Array(children.length)].map(() => randomInt(5, 10)))
    }

    setAllDurationSs()
    const intervalId = setInterval(setAllDurationSs, 20000)

    return () => {
      clearInterval(intervalId)
    }
  }, [children.length])

  return (
    <>
      {children.split('').map((character, i) => (
        <CharacterAnimation durationS={durationSs[i] ?? 5} key={i} state={durationSs}>
          {character}
        </CharacterAnimation>
      ))}
    </>
  )
}
