import './App.css'
import { useState } from 'react'
function App() {
  const [result, setResult] = useState('')
  const handleChanege = (e) => {
    setResult(result.concat(e.target.name));
  }
  const handleBackSpace = () => {
    setResult(result.slice(0, - 1))
  }
  const handleClear = () => {
    setResult("")
  }

  const handleCalculate = ()=>{
    try{
      setResult(eval(result));
    }catch(err){
      setResult("ERROR");
    }
  }
  return (
    <>
      <div className="container mt-5">
        <form>
          <input type="text" value={result} />
        </form>
        <div className="keyboard">
          <button className='highlight' onClick={handleClear} id='clear'>Clear</button>
          <button className='highlight' onClick={handleBackSpace} id='backPpace'>C</button>
          <button className='highlight' name='/' onClick={handleChanege}>&#247;</button>
          <button name='7' onClick={handleChanege}>7</button>
          <button name='8' onClick={handleChanege}>8</button>
          <button name='9' onClick={handleChanege}>9</button>
          <button className='highlight' name='*' onClick={handleChanege}>&times;</button>
          <button name='4' onClick={handleChanege}>4</button>
          <button name='5' onClick={handleChanege}>5</button>
          <button name='6' onClick={handleChanege}>6</button>
          <button className='highlight' name='-' onClick={handleChanege}>&ndash;</button>
          <button name='1' onClick={handleChanege}>1</button>
          <button name='2' onClick={handleChanege}>2</button>
          <button name='3' onClick={handleChanege}>3</button>
          <button className='highlight' name='+' onClick={handleChanege}>+</button>
          <button name='0' onClick={handleChanege}>0</button>
          <button name='.' onClick={handleChanege}>.</button>
          <button className='highlight' onClick={handleCalculate} id='result'> = </button>
        </div>
      </div>

    </>
  )
}

export default App
