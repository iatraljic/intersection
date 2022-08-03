import { useContext } from 'react'
import { ComputationArgs, HashSet, ISContext } from 'context'
import useForm from 'hooks/useform'

const initialComputationArgs: ComputationArgs = {
  collectionASize: '',
  collectionBSize: '',
  hashSet: HashSet.hashSetA,
}

function Form() {
  const { computation } = useContext(ISContext)
  const { inputs, handleChange, handleSubmit } = useForm<ComputationArgs>(
    initialComputationArgs,
    (inputs) => computation(inputs)
  )

  return (
    <div className='container pt-5'>
      <form onSubmit={handleSubmit}>
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
            <button className='btn btn-primary w-100' type='submit'>
              Start
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form
