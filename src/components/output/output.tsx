import { useContext } from 'react'
import { IntersectionContext } from 'context'

function Output() {
  const { intersectionSize, intersectionAlgorithmTime } =
    useContext(IntersectionContext)
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <p>
            Size of the intersection {intersectionSize}
            <br />
            Time to run the intersection algorithm {intersectionAlgorithmTime}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Output
