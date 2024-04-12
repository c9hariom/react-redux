import './App.css'

function App () {
  return (
    <div className='App'>
      <div className='container'>
        <h1>Increment/Decrement Counter</h1>
        <h4>Using React Redux</h4>
        <div className='quantity'>
          <a className='quantity_minus'>
            <span>-</span>
          </a>
          <input
            type='text'
            name='quantity'
            className='quantity_input'
            value='0'
          />
          <a className='quantity_plus'>
            <span>+</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
