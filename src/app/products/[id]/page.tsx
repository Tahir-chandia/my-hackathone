import { client } from '@/sanity/lib/client'
import React from 'react'
import { Products } from '../../../../types/products'
import { FaAngleRight,  FaStar } from 'react-icons/fa'
import Image from 'next/image'
import Button3 from '@/components/Button3'
import Reviews from '@/components/Reviews'

const page  = async ({params:{id}}:{params:{id:string}}) => {

const query = `*[_type == "products" && _id == $id]
{
name,
price,
description,
image,
discountPercent,
new,
colors,
sizes
}[0]

`
const products:Products| null =await client.fetch(query,{id})



 // Adding key prop in star array
 const star = [
   <FaStar key={1} />,
   <FaStar key={2} />,
   <FaStar key={3} />,
   <FaStar key={4} />,
   <FaStar key={5} />,
 ];




if(!products){
  return (
    <div>
      <h1>Product not available</h1>
    </div>
  )
}
  return (
    
    <>
    <section className='max-w-screen-2xl  mx-auto   '>

    <div key={products._id}>
     <div className="mx-12 flex mt-3  md:my-6  h-[22px] text-sm md:text-base gap-1 font-Satoshi text-[16px] font-normal ">
      <p className=" flex text-black opacity-[60%] gap-1">Home<span className="text-[16px] mt-1 "><FaAngleRight /></span >
      </p>
       <p className=" flex text-black opacity-[60%] gap-1">Shop<span className="text-[16px] mt-1 "><FaAngleRight /></span >
       </p><p className=" flex text-black opacity-[60%] gap-1">Men<span className="text-[16px] mt-1 "><FaAngleRight /></span >
       </p>
      <p>
  
       <span className="text-black">T-shirts</span>
       </p>


   </div>
    <div className="flex gap-5 px-10 my-2 max-w-screen-2xl mx-auto"> 
      {/* left */}
               <div className=" flex  sm:flex-col gap-2  justify-between items-center w-full sm:w-[152px] order-2 sm:order-1">
                 {/* images */}
                  <Image src={"/image2.png"} alt="image" width={170} height={180} sizes="(min-width: 1300px) 152px, (min-width: 780px) 12.2vw, (min-width: 640px) 152px, (min-width: 560px) 170px, (min-width: 340px) calc(34vw - 14px), 90px"/> 
        <Image src={"/image5.png"} alt="image" width={152} height={167} sizes="(min-width: 1300px) 152px, (min-width: 780px) 12.2vw, (min-width: 560px) 152px, (min-width: 380px) calc(30vw - 10px), calc(11.67vw + 55px)"/> 
        <Image src={"/image6.png"} alt="image" width={152} height={167} sizes="(min-width: 1300px) 152px, (min-width: 780px) 12.2vw, (min-width: 560px) 152px, (min-width: 380px) calc(30vw - 10px), calc(11.67vw + 55px)"/>
               
               </div> 
               
                {/* mid div */}
                <div className=" sm:w-[444px] h-[260px] sm:h-[500px] mt-10   order-1 sm:order-2">
                <Image src={"/image1.png"} sizes="(min-width: 1280px) 444px, (min-width: 780px) calc(32.08vw + 40px), (min-width: 640px) 444px, calc(100vw - 40px)"
                 alt="productdetaile" className="w-full h-[95%] object-fit" width={444} height={507} ></Image>
                </div>
 {/* right div */}

                <div className=" w-full  sm:w-[600px] px-2 h-[500px] mt-3 space-y-2 order-3">
                    <h1 className="text-2xl md:text-3xl font-IntegralBold font-bold">{products.name}</h1>
                    <div className="flex text-yellow-400">
                                     {star.map((icon, index) => (
                                       <span key={index}>{icon}</span>
                                      ))}
                    </div>
                                                  

                    <p className="font-Satoshi font-bold md:px-0 ">{products.price} <span className="mx-[3px] line-through text-black
                      opacity-[60%]">{products.discountPercent}</span>
 
  {products.discountPercent ?(
    <>
                        
                       <span className="text-[#FF3333] bg-[#FF33331A]
                         fixed:w-[58px] h-[28px] ml-2 rounded-[62px] py-[2px]  px-[12px] font-Satoshi">
                          <span>    {products.discountPercent}</span> 
                      </span>
                          </>
                      ):(<>
                    
                      </>)
                      }               </p> 
                               <p className="opacity-60 max-w-[700px] font-Satoshi">{products.description}</p>
 
                                              
                         <div className="md:w-[535px]   w-[440px] md:mx-0  mt-4 md:mt-[30px] border-b-[1px] border-b-black  border-opacity-[10%]">
                    </div>           
                                 

                        {/* select color */}
                               <div className="mt-[10px]">
      <p className="font-Satoshi  font-normal 
     h-[11px] text-[16px] text-black  md:mx-0 opacity-[60%]">Select Colors</p>
       <div className="flex mt-[25px]  md:px-0 gap-3">

      <div className="w-[45px] h-[40px] rounded-lg  bg-slate-500   text-white text-sm text-center px-1  py-2">{products.colors[0]}</div>
      <div className="w-[45px] h-[40px] rounded-lg  bg-slate-500 text-white text-sm text-center px-1  py-2">{products.colors[1]}</div>
      <div className="w-[45px] h-[40px] rounded-lg  bg-slate-500 text-white text-sm text-center px-1  py-2">{products.colors[2]}</div>
      </div> 
       <div className="md:max-w-[535px] max-w-[440px] md:mx-0  mt-2  border-b-[1px] border-b-black  border-opacity-[10%]">
  </div>  

     </div>   
     <div className="py-2">
                                       {/* Choose Size */}
                     <p className="text-gray-500 font-Satoshi">Choose Size</p>
                     <div className="sm:flex grid grid-cols-2 sm:flex-row gap-4 md:gap-0 
                     md:space-x-3  mt-2 font-Satoshi max-w-96 ">  
                     <div className="w-[70px] md:w-[80px]  sm:text-sm md:text-base  h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">{products.sizes[0]}</div>
                       <div className="w-[85px] md:w-[90px] sm:text-sm md:text-base  h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">{products.sizes[3]}</div>
                       <div className="w-[75px] md:w-[80px] sm:text-sm md:text-base  h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">{products.sizes[1]}</div>
                       <div className="w-[70px] md:w-[90px] sm:text-sm md:text-base  h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">{products.sizes[2]}</div>
                    </div>
                    </div>
                     <div className="md:w-[535px] w-[440px] md:mx-0 mt-4 md:mt-[30px] border-b-[1px] border-b-black  border-opacity-[10%]">
                    </div>  
                                  {/* BTNS */}
  <div className="flex pt-[10px]">
   <div className="
    md:mx-0 py-3  px-3   
    md:py-4 md:px-5 rounded-[62px]  bg-[#F0F0F0] font-Satoshi
    font-normal md:text-[16px] text-xs sm:text-sm text-black   flex  gap-3">
     <Button3/> 


   </div> 
       <div className="fixed:w-[400px] fixed:h-[52px] 
       py-4 sm:py-2 px-8 sm:px-12 text-xs sm:text-sm
       md:py-4 md:px-[54px] rounded-[62px]  bg-black font-Satoshi
       font-medium text-[16px] text-white mx-4">Add to Cart</div>  

    
    </div>     
       </div>
       </div>
                       {/*Reviews  */}
                       <Reviews/> 
       </div>
  
    </section>
    </>
  )
}

export default page












{/* //         </div> */}
{/* //                </div> */}
