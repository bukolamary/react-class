import { Suspense } from "react"
import React from "react"
import Footer from "../Component/Footer"
import Herosection from "../Component/Herosection"
import Navbar from "../Component/Navbar"
import Spinner from "../Component/Spinner"
// import ProductSection from "../Component/productSection"

// const ProductSection = React.lazy(() => import('../Component/productSection') );
const ProductSection = React.lazy(() =>{
    return new Promise((resolve) => {
        setTimeout(() => {
         resolve(import('../Component/productSection')); 
    }, 3000)
});
});

const Homepage = () => {
    return(
        <div>
            {/* <Navbar/>  
            <Herosection /> */}
            <Suspense fallback={<Spinner/>}>
                <ProductSection />
            </Suspense>
                
        
            
            <Footer />
        
        </div>
    )
}
export default Homepage