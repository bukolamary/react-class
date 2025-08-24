import React from 'react'

const Spinner = () => {
  return (
    <div className='flex items-center justify-center p-6 h-screen'>
      <div className='h-10 w-10 border-4 border-blue-500 border-dashed rounded-full animate-spin'></div>
    </div>
  )
}

export default Spinner
