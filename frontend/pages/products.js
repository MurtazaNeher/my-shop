import React from 'react'
import Link from 'next/link'

const products = (props) => {
  return (
    <div className='container mx-auto px-4'>
  <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">My Shop-Products</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    <div className="flex flex-wrap -m-4">

      {
        props.products.data.map((item)=>{
          return(
            <div className="xl:w-1/4 md:w-1/2 p-4" key={item.attributes.slug}>
            <div className="bg-gray-100 p-6 rounded-lg">
              <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content"/>
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.attributes.category.toUpperCase()}</h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.attributes.title}</h2>
              <p className="leading-relaxed ">Rs. {item.attributes.price}</p>
              <p className="leading-relaxed text-base">{item.attributes.description}</p>
              <Link href={`/product/${item.attributes.slug}`}><button className="text-white bg-indigo-500 border-0 my-2 md:py-2 py-1 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Buy Now</button></Link>
            </div>
          </div>
         
          )
        })
      }
    
    </div> 
  </div>
</section>
    </div>
  )
}

export async function getServerSideProps(context) {
  let head = {
    Authorization:"Bearer 38e624ec184ce57709b87d83a36ba46ef52badfc356f3a475fcaf9758ab4f047e43bc900e7eaacd4552f9bb29514728d7c06758428db6b87696d9328338c5d8706a6675c946ca470a66943bc46cbc9741305e59296aa77db07a4a0335ddc1ecac4ea1658423fca65b9d1591f25fc8342cd6ae7cdba2beb0066c3a0c3f5bf4c0c"
  }
  let response = await fetch("http://localhost:1337/api/products?populate=*",{headers:head})
let products = await response.json()
  return {
    props: {products: products}, 
  }
}

export default products
