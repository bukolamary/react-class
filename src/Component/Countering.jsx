import React, { useState } from 'react'

const Countering = () => {
    const [login, setlogin] = useState(false)
    const [hasNotification, setHasnotification] = useState(true)


    const init = () => {
      setlogin(true)
    } 
// const nonotify = () => {
//   setHasnotification(false)
// }




  return (
    <section>
     <nav className=" text-white items-center flex justify-between bg-gray-700 px-10 py-4">
      <div>
        <ul className='flex gap-3'>
          <li>Home</li>
          <li>About</li>
          <li>contact</li>
        </ul>
      </div>
      <div className="flex items-center gap-3">
        {login ? (
          <p className="font-semibold">Hello Bukola</p>
        ) : (
          <button onClick={init} className="bg-blue-800 text-white px-4 py-2">Login</button>
        )}
      </div>
    </nav>

    {hasNotification && (<div className="h-screen relative">
        <article className="px-10 py-5 shadow-md w-fit absolute right-4 top-2">
          <p>You have 8 notification(s)</p>
        </article>
      </div>
      )}
    </section>
  )
}

export default Countering
