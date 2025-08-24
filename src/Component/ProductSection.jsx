import axios from 'axios'
import React, { useEffect, useState } from 'react'
import fakeimage from '../assets/react.svg'





    

const ProductSection = () => {
  const [products, setProduct] =useState([])

const fetchProducts = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products')
    setProduct(response.data);
    console.log(response.data)

  } catch (error) {
    console.log('Error', error)
  }
}

useEffect(() => {
  fetchProducts()
}, [] )

  return (
    
    <section className='grid grid-cols-5 gap-3'>
      {products.map((p, index) => (
        <div key={index} className='p-6 space-y-6'>
       <div>
        <img  className='w-[200px] h-[160px]' src={p.image} alt="image"/>
        
      </div>
      <div>
        <h1  className='font-semibold'>{p.name}</h1>
        <span className='text-gray-500'>{p.category}</span>
        <p>{p.price}</p>
        <span>☆☆☆☆☆☆☆</span>
      </div>
      </div>
      )) }
    </section>
  )

}
export default ProductSection
