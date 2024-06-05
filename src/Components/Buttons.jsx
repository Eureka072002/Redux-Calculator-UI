import React from 'react'

function Buttons({ onClick, value }) {
  return (
    <div className='flex items-center justify-center w-[6rem] rounded-xl h-[2.8rem] bg-zinc-400 shadow-lg shadow-stone-400 hover:bg-backdrop-blur-md border-transparent hover:ring-0 hover:ring-zinc-500'>
        <button onClick={onClick} className='w-full h-full font-semibold rounded-xl hover:bg-stone-500/50 focus border hover:border-lime-200'>{value}</button>
    </div>
  )
}

export default Buttons