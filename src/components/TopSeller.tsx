"use client"
import Image from "next/image"
import Button from "./Button"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Products } from "../../types/products"
import { client } from "@/sanity/lib/client"
import {  four2 } from "@/sanity/lib/queries"
import { urlFor } from "@/sanity/lib/image"
import { FaStar } from "react-icons/fa"


const star = [
  <FaStar key={1} />,
  <FaStar key={2} />,
  <FaStar key={3} />,
  <FaStar key={4} />,
  <FaStar key={5} />,
];



const TopSeller = () => {
  const [product,setProduct]=  useState<Products[]>([])
useEffect(()=>{
  async function fetchProduct() {
   const fetchData:Products[] = await client.fetch(four2)
   setProduct(fetchData)
  }
  fetchProduct()
  
},[])
  return (
<>
<section className="max-w-screen-2xl  mx-auto  ">


    <div className='max-w-screen-2xl mx-auto px-[80px] mt-[20px]'>
    <div >
      <h2 className='heading text text-black text-center '>TOP SELLING</h2>
    </div>
    <div className=" flex space-x-6   mt-[50px]">
    
    {product.map((pro)=>(
        <div className="" key={pro._id}> 
<Link href={`/products/${pro._id}`}>
{pro.image &&(<Image src={urlFor(pro.image).url() } alt='image' width={294} height={250} className="w-[295px] rounded-[20px] h-[298px]"/>)}

        <p className=" h-[27] mb-1 font-Satoshi font-bold">{pro.name}</p>
<div>

  
          <div className="flex mb-1 ">
                                      {star.map((icon, index) => (
                                          <span key={index} className="text-yellow-400">{icon}</span>
                                      ))}<span className="px-2 mb-1 text-sm opacity-60" >
                                                  
                                      5/5
                                      </span>
                                  </div>
        <p className="w-[53px] h-[32px]
         font-Satoshi font-bold text-black flex gap-3 text-center">${pro.price}

                {pro.discountPercent ?(
                  <>
        <span className="opacity-[40%]">
                  <del className="font-Satoshi font-bold">${pro.discountPercent}</del></span>
                    
                 <span className="text-[#FF3333] bg-[#FF33331A] 
                fixed:w-[58px] h-[28px] rounded-[62px] my-[2px]  px-[12px] font-Satoshi"><span> -{20}% </span> 
                </span>
                    </>
                ):(<>
                
                </>)
                }

        </p>
                </div>
                </Link>
        </div>
        
    ))}




  </div>


    <div className="mt-[50px] text-center ">
          <button >
              <Button/>
          </button>
      </div>


  </div>
</section>
</>
  )
}

export default TopSeller