import React, { useState } from 'react'

const Count = () => {
const [login, setLogin] = useState()

const logining = () => {
    setLogin('welcome, bukola ilori')
} 

const off = () => {
    setLogin('you are not loged in')
}

  return (
    <div className='flex gap-4 p-[150px] bg-black text-yellow-400 font-semibold items-center '>
      <button onClick={logining}>login</button>
      <h1>{login}</h1>
      <button onClick={off}>logout</button>
    </div>
  )
}

export default Count
