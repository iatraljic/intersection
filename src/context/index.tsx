import { createContext, useState, FC, PropsWithChildren } from 'react'

export interface IIntersectionContext {
  intersectionSize: number
  intersectionAlgorithmTime: number
}

const initialIntersectionContext: IIntersectionContext = {
  intersectionSize: 0,
  intersectionAlgorithmTime: 0,
}

export const IntersectionContext = createContext<IIntersectionContext>(
  initialIntersectionContext
)

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
