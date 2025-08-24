import React from 'react'

const Herosection = () => {
  return (
    <section className="bg-[url('./assets/bg1.jpg')] bg-cover bg-center h-[100vh] flex items-center px-8 bg-blue-600 text-white" >
    <div className='space-y-6'>
      <h1 className='text-6xl font-semibold'>Raining Offers For <br /> Hot Summer!</h1>
      <h3 className='2xl'>25% Off On All Products</h3>
      <div className='space-x-3'>
      <button className='bg-white text-black px-5 py-2 hover:bg-black hover:text-white'>shop now</button>
      <button className='text-white px-5 py-2 border-white border-[1px] hover:bg-white hover:text-black'>find me</button>
      </div>
    </div>
    </section>
  )
}

export default Herosection
