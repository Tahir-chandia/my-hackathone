"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Products } from '../../types/products'
import { client } from '@/sanity/lib/client'
import { four2 } from '@/sanity/lib/queries'

const Grid = () => {
   const [,setProduct]=  useState<Products[]>([])
  useEffect(()=>{
    async function fetchProduct() {
     const fetchData:Products[] = await client.fetch(four2)
     setProduct(fetchData)
    }
    fetchProduct()
  },[])
  return (

    <>
    <section className='max-w-screen-2xl  mx-auto   '>


    <div className='w-[1200px] h-[886px] bg-[#F0F0F0] rounded-[40px] mx-auto   mt-[50px]'>

      
      
      
      
      <div>
      <div >
        <h2 className='heading text text-black text-center pt-[50px]'>BROWSE BY dress STYLE</h2>
      </div>
<div className="flex justify-center items-center  gap-6 py-[10px] mt-[20px]">
<Link href={"/casual"}>
  <div className="relative bg-white rounded-[20px] overflow-hidden">
    <div className="absolute top-[25px] left-[36px] font-Satoshi  font-bold text-[36px] text-black">Casual</div>
    <Image src={"/image11.png"} alt="Casual" className="object-cover" width={407} height={289} />
  </div>
</Link>

  
  <div className="relative bg-white rounded-[20px] overflow-hidden">
    <div className="absolute top-[25px] left-[36px] font-Satoshi font-bold text-[36px] text-black">Formal</div>
    <Image src={"/image13.png"} alt="Formal" className="object-cover" width={689} height={289}/>
  </div>
</div>
  <div className='flex justify-center items-center  gap-6'>
  <div className="relative bg-white rounded-[20px] overflow-hidden">
    <div className="absolute top-[25px] left-[36px] font-Satoshi font-bold text-[36px] text-black">Party</div>
    <Image src={"/image12.png"} alt="Party" className=" object-cover" width={689} height={289}/>
  </div>

  
  <div className="relative bg-white rounded-[20px] overflow-hidden">
    <div className="absolute top-[25px] left-[36px] font-Satoshi font-bold text-[36px] text-black">Gym</div>
    <Image src={"/image14.png"} alt="Gym" className=" object-cover" width={407} height={289} />
  </div>
</div>

      </div>
    </div>
    </section>
    </>
  )
}

export default Grid
