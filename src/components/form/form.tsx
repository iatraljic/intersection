import { ChangeEvent, MouseEvent, useContext, useState } from 'react'
import { ComputationArgs, HashSet, ISContext } from 'context'

const initialComputationArgs: ComputationArgs = {
  collectionASize: '',
  collectionBSize: '',
  hashSet: HashSet.hashSetA,
}

function Form() {
  const { computation } = useContext(ISContext)
  const [inputs, setInputs] = useState<ComputationArgs>(initialComputationArgs)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name
    const value = event.target.value

    setInputs((prev) => ({ ...prev, [name]: value }))
  }

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    computation(inputs)
  }

  return (
    <div className='container pt-5'>
      <form>
        <div className='row'>
          <div className='form-group col-sm-4'>
            <label htmlFor='inputCollectionA'>Size of collection A</label>
            <input
              className='form-control'
              id='inputCollectionA'
              name='collectionASize'
              value={inputs.collectionASize}
              onChange={handleChange}
            />
          </div>

          <div className='form-group col-sm-4'>
            <label htmlFor='inputCollectionB'>Size of collection B</label>
            <input
              className='form-control'
              id='inputCollectionB'
              name='collectionBSize'
              value={inputs.collectionBSize}
              onChange={handleChange}
            />
          </div>

          <div className='form-group col-sm-4'>
            <label>To hash-set</label>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='radio'
                name='hashSet'
                value={HashSet.hashSetA}
                checked={inputs.hashSet === HashSet.hashSetA}
                onChange={handleChange}
              />
              <label className='form-check-label' htmlFor='hashSetA'>
                Collection A
              </label>
            </div>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='radio'
                name='hashSet'
                value={HashSet.hashSetB}
                checked={inputs.hashSet === HashSet.hashSetB}
                onChange={handleChange}
              />
              <label className='form-check-label' htmlFor='hashSetB'>
                Collection B
              </label>
            </div>
          </div>
        </div>

        <div className='form-group row pt-2 pb-5'>
          <div className='col'>
            <button className='btn btn-primary w-100' onClick={handleClick}>
              Start
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form
