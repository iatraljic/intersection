import { createContext, useState, FC, PropsWithChildren } from 'react'

// types, interfaces, enums
export enum HashSet {
  hashSetA = 'hashSetA',
  hashSetB = 'hashSetB',
}

export interface ComputationArgs {
  collectionASize: string
  collectionBSize: string
  hashSet: HashSet
}

export interface IISContext {
  size: number
  algorithmTime: number
  computation: (computationArgs: ComputationArgs) => void
}

// initial
const initialISContext: IISContext = {
  size: 0,
  algorithmTime: 0,
  computation: (_: ComputationArgs) => {},
}

// createContext
export const ISContext = createContext<IISContext>(initialISContext)

// ISContextProvider
const ISContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [size, setSize] = useState<IISContext['size']>(initialISContext.size)
  const [algorithmTime, setAlgorithmTime] = useState<
    IISContext['algorithmTime']
  >(initialISContext.algorithmTime)

  function setArray(n: number) {
    return Array.from({ length: n }, () => Math.floor(Math.random() * n * 3))
  }

  const computation: IISContext['computation'] = ({
    collectionASize,
    collectionBSize,
    hashSet,
  }) => {
    const intersection: Set<number> = new Set()
    let iterated: number[]
    let hash: Set<number>
    let start: number
    let end: number

    iterated = setArray(
      hashSet === HashSet.hashSetA ? +collectionBSize : +collectionASize
    )
    hash = new Set(
      setArray(
        hashSet === HashSet.hashSetA ? +collectionASize : +collectionBSize
      )
    )

    start = performance.now()
    for (const el of iterated) {
      if (hash.has(el)) {
        intersection.add(el)
      }
    }
    end = performance.now()

    setSize(intersection.size)
    setAlgorithmTime(end - start)
  }

  return (
    <ISContext.Provider
      value={{
        size,
        algorithmTime,
        computation,
      }}
    >
      {children}
    </ISContext.Provider>
  )
}

export default ISContextProvider
