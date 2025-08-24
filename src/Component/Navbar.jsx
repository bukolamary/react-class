import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { IoBagHandle, IoMenuSharp } from 'react-icons/io5'
import { LiaTimesSolid } from 'react-icons/lia'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [mobilnav, setMobilNav] = useState(false)

  const toggleMobilnav = () => {
    setMobilNav(!mobilnav)
  }
 

  












  return (
    <>
    <nav className='bg-black text-white flex justify-between p-6'>
        <div className='flex items-center gap-6'>
            <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo1-free-img-140x47.png" alt="logo" />
            <ul className='lg:flex  hidden gap-4'>
                <li>EVERYTHING</li>
                <li>WOMEN</li>
                <li>MEN</li>
                <li>ACCESSORIES</li>
            </ul>
              </div>
            <div className='flex items-center gap-6'>
                <ul className='lg:flex hidden gap-4'>
                  <Link to='/'>
                  <li>HOME</li>
                  </Link>
                    
                    <Link to= '/about'>  
                    <li>ABOUT</li>
                    </Link>
                  
                    <li>CONTACT US</li>
                    <Link to= '/login'>
                    <li>lOGIN</li>
                    </Link>
                    
                </ul>
                <span>$0.00</span>
                <div className='relative'>
                  <IoBagHandle />
                  <div className='absolute top-[-15px] right[-18px] rounded-full px-2 bg-white text-black text-center'>0</div>
                </div>
                
                <FaUser className='lg:flex hidden' />
                <div>
                  { mobilnav ?
                  (<LiaTimesSolid  onClick={toggleMobilnav}  />)
                  :
                  (<IoMenuSharp onClick={toggleMobilnav} className='lg:hidden flex' />)
                  }
                  
                
                </div>
            </div>
           
    </nav>
    {mobilnav && (
      <aside className='lg:hidden flex-col ' >
      <FaUser className='text-4xl ml-3' />
      <ul className='flex flex-col divide-black divide-y-[1px]'>
        <li className='p-3'>EVERYTHING</li>
        <li className='p-3'>WOMEN</li>
        <li className='p-3'>MEN</li>
        <li className='p-3'>ACCESSORIES</li>
        <li className='p-3'>HOME</li>
        <li className='p-3'>ABOUT US</li>
      </ul>
    </aside>
    )}

   
    </>
  )
}

export default Navbar
