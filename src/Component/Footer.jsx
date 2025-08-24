import React from 'react'
import playstoreImg from '../assets/pg.png'
import globe from '../assets/globe.png'
import quality from '../assets/quality.png'
import tag from '../assets/tag-free.png'
import lock from '../assets/lock-free.png'

const Footer = () => {
  return (
   <footer>
    <section className='bg-pink-50'>
      <div className='flex gap-8 p-20 items-center'>
        <div>
          <img src={globe} alt="img-1" />
          <h1>Worldwide Shipping</h1>
          <p>It elit tellus, luctus nec ullamcorper <br /> mattis, pulvinar dapibus leo.</p>
        </div>

         <div>
          <img src={quality} alt="img-2" />
          <h1>Best Quality</h1>
          <p>It elit tellus, luctus nec ullamcorper <br /> mattis, pulvinar dapibus leo.</p>
        </div>

         <div>
          <img src={tag} alt="img-3" />
          <h1>Best Offers</h1>
          <p>It elit tellus, luctus nec ullamcorper <br /> mattis, pulvinar dapibus leo.</p>
        </div>

         <div>
          <img src={lock} alt="img-4" />
          <h1>Secure Payments</h1>
          <p>It elit tellus, luctus nec ullamcorper <br /> mattis, pulvinar dapibus leo.</p>
        </div> 
      </div>
      
      <div className='flex gap-40 px-24 py-10 pb-10'>
        <div className='space-y-4'>
          <h2 className='font-semibold'>Quick link</h2>
          <ul className='space-y-2'>
            <li>Home</li>
            <li>About</li>
            <li>My account</li>
            <li>Cart</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='space-y-4'>
          <h2 className='font-semibold'>For her</h2>
          <ul  className='space-y-2'>
            <li>Women jean</li>
            <li>Top And Shirt</li>
            <li>Women Jacket</li>
            <li>Heels and Flat</li>
            <li>Women Accessories </li>
          </ul>
        </div>
        <div className='space-y-4'>
          <h2 className='font-semibold'>For him</h2>
          <ul  className='space-y-2'>
            <li>Men Jeans</li>
            <li>Men Shirts</li>
            <li>Men Shoes</li>
            <li>Men Accessories</li>
            <li>Men Jacket</li>
          </ul>
        </div>
        <div className='space-y-12'>
          <h2 className='font-semibold'>For him</h2>
          <img className='w-40' src={playstoreImg} alt="pgImage" />
        </div>
      </div>
      <hr />
      <div className='flex gap-[800px] pl-32 pr-28 pt-16 pb-16'>
        <p>Copyright © 2025 Brandstore</p>
        <p>Powered by Brandstore</p>
      </div>
    </section>
    </footer> 
  )
}

export default Footer
