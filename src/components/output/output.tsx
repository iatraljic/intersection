import { useContext } from 'react'
import { ISContext } from 'context'

function Output() {
  const { size, algorithmTime } = useContext(ISContext)
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <p>
            Size of the intersection: <strong>{size}</strong>
            <br />
            Time to run the intersection algorithm (ms):{' '}
            <strong>{algorithmTime}</strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Output
