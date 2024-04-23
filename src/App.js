import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { incNumber, decNumber } from './actions'
function App () {
  const myState = useSelector(state => {
    return state.changeNumber
  })

  const dispatch = useDispatch()

  return (
    <div className='App'>
      <div className='container'>
        <h1>Increment/Decrement Counter</h1>
        <h4>Using React Redux</h4>
        <div className='quantity'>
          <a
            className='quantity_minus'
            onClick={() => {
              dispatch(decNumber())
            }}
          >
            <span>-</span>
          </a>
          <input
            type='text'
            name='quantity'
            className='quantity_input'
            value={myState}
          />
          <a
            className='quantity_plus'
            onClick={() => {
              dispatch(incNumber())
            }}
          >
            <span>+</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
