import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { appendValue, resetValue, evaluateExpression } from './Features/todos/todoSlice';
import './App.css'
import Buttons from './Components/Buttons'
import Display from './Components/Display';

function App() {
  const expression = useSelector((state) => state.calculator.expression);
  const dispatch = useDispatch();

  const handleButtons = (val) => {
    if (val === 'C') {
      dispatch(resetValue());
    } else if (val === '=') {
      dispatch(evaluateExpression());
    } else {
      dispatch(appendValue(val));
    }
  };
  const buttonName = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];


  return (
    <>
      <div className='flex w-full h-screen items-center justify-center'>
        <div className='flex flex-col gap-3 bg-zinc-300 px-3 py-5 w-[350px] rounded-md shadow-md shadow-slate-800 border border-zinc-700'>
          <Display value={expression} />
          <div className='flex flex-wrap gap-2 text-white w-full overflow-hidden px-2 py-2 rounded'>
            
            {
              buttonName.map((val, idx) => (<Buttons key={idx} onClick={() => handleButtons(val)} value={val} />))
            }
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
