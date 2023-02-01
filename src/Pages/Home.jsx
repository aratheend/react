import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/Product/ProductCard'

function Home() {
  const [products, setProducts]=useState([])

  const getProducts=async ()=>{
    await fetch('https://fakestroreapi.com/products').then(res=>res.json()).then(data => setProducts(data))
  }

  useEffect(()=>{
    getProducts()
  },[])
  return (
    <div>
      {
        products.map(products,index)=>(
      <ProductCard category_name={'Geyim'} product_name={"T-shirt"}/>
          
    )
      }
    </div>
  )
}

export default Home