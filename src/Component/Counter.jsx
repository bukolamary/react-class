import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const add = () => {
        if (count < 10){
            setCount(count + 1)
        }
        
    }
    const remove = () => {
        if (count >= 1)
        setCount(count - 1)
    }

       const reset = () => {
        setCount(0)
    }

  return (
    <div className='p-[150px] flex gap-4 items-center'>
          <button onClick={remove} className='bg-blue-600 w-32 h-12 text-white'>remove</button>
      <div className='text-7xl'>{count}</div>
      <button onClick={add} className='bg-blue-600 w-32 h-12 text-white'>add</button>
      <button onClick={reset} className='bg-blue-600 w-32 h-12 text-white'>reset</button>
    </div>
  )
}

export default Counter
