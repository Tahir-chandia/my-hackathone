import React from 'react'
import { Products } from './types/products'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

const Product = ({product}:{product:Products}) => {
  return (
    <div>
      
      
      <div   className="mt-[20px]"> 
<Link href={``}>
        {product.image &&(<Image src={urlFor(product.image).url() } alt='image' width={294} height={250} className="w-[295px] rounded-[20px] h-[298px]"/>)}
        
          <p className="w-[225px] h-[27] font-Satoshi font-bold">{product.name}</p>
          {/* <Image src={product.rat} alt={pro.ratingAlt} width={pro.ratingWidth} height={pro.ratingHeight}/> */}
 <div>

          <p className="w-[53px] h-[32px] font-Satoshi font-bold text-black flex gap-3 text-center">{product.price}
          <span className="opacity-[40%]">
                  <del className="font-Satoshi font-bold">{product.discountPercent}</del></span>

                  {product.discountPercent ?(
                    <>
                      
                   <span className="text-[#FF3333] bg-[#FF33331A] 
                  fixed:w-[58px] h-[28px] rounded-[62px] py-[2px]  px-[12px] font-Satoshi"><span>    {}</span> 
                  </span>
                      </>
                  ):(<>
                  
                  </>)
                  }

          </p>
                  </div>
                  </Link>
          </div>
    </div>
  )
}

export default Product
