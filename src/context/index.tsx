import { createContext, useState, FC, PropsWithChildren } from 'react'

// types, interfaces, enums
export interface IIntersectionContext {
  intersectionSize: number
  intersectionAlgorithmTime: number
}

export enum HashSet {
  hashSetA = 'hashSetA',
  hashSetB = 'hashSetB',
}
export interface ComputationArgs {
  collectionASize: string
  collectionBSize: string
  hashSet: HashSet
}

// initial
const initialIntersectionContext: IIntersectionContext = {
  intersectionSize: 0,
  intersectionAlgorithmTime: 0,
}

// createContext
export const IntersectionContext = createContext<IIntersectionContext>(
  initialIntersectionContext
)

// IntersectionContextProvider
const IntersectionContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [intersectionSize, setIntersectionSize] = useState<number>(
    initialIntersectionContext.intersectionSize
  )
  const [intersectionAlgorithmTime, setIntersectionAlgorithmTime] =
    useState<number>(initialIntersectionContext.intersectionAlgorithmTime)

  return (
    <IntersectionContext.Provider
      value={{
        intersectionSize,
        intersectionAlgorithmTime,
      }}
    >
      {children}
    </IntersectionContext.Provider>
  )
}

export default IntersectionContextProvider
