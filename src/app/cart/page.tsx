import Button3 from '@/components/Button3'
import Image from 'next/image'
import React from 'react'
import {  FaAngleRight, FaArrowRight } from 'react-icons/fa'
import { RiDeleteBin5Fill } from 'react-icons/ri'


interface Icart {
  imgurl:string,
  title:string,
  id:number
  size:string,
  color:string,
  price:string,
}
const cartItems:Icart[]=[{
  id:1,
  imgurl:"/myimage8.png",
  title:"Gradient Graphic T-shirt",
  price:"$145",
  size:"Large",
  color:"White"
},
{
  id:2,
  imgurl:"/myimage.png",
  title:"Checkered Shirt",
  price:"$180",
  size:"Medium",
  color:"Red"
},{
  id:3,
  imgurl:"/myimage9.png",
  title:"Skinny Fit Jeans",
  price:"$240",
  size:"Large",
  color:"Blue"
},
]

const page = () => {
  return (
    <>
    <div className='max-w-screen-2xl mx-auto '>

    <div className="md:mx-20 mx-4 flex justify-between md:w-[123px] w-[89px] h-[19px] md:h-[22px] 
    gap-1 font-Satoshi text-[16px] font-normal my-3 ">
        <p className="flex text-black opacity-[60%] gap-1">Home<span className="text-[16px] mt-1 "><FaAngleRight /></span >
        </p>
        <p>
    
        <span className="text-black">Cart</span>
        </p>
    </div>
    <h2 className='font-IntegralBold font-bold md:mx-20 mx-4 my-4 md:my-0 text-[32px] md:text-[40px]'>Your Cart</h2>        
    <div className="flex  flex-col md:flex-row  justify-center items-start gap-3 md:mt-6 px-2 md:px-0">
    {/* left div */}
       <div className="w-full h-[389px] md:w-[715px] md:h-[480px]  border rounded-[20px] font-Satoshi ">
        
             {
              cartItems.map((item)=>{
                  return(
                      <div className="flex justify-between  border-t p-4 " key={item.id}>
                        
                         <div className="flex gap-3 w-[99px] h-[99px] md:w-[124px] md:h-[124px] ">
                         <Image src={item.imgurl} alt={item.title} className="rounded-[16px]" width={125} height={187}></Image>
                            <div >   
                              <div>
                                
                                <h3 className="font-bold md:w-[227px] w-[181px] text-[16px] md:text-[20px]">{item.title}</h3>
                                <p className="md:text-[14px] text-[12px] ">Size:   <span className='text-black opacity-60'>
                                  
                                  {item.size}
                                  </span>
                                  </p>
                                <p className="md:text:[14px] text-[12px]">Color:
                                  <span className='text-black opacity-60'>
                                  {item.color}  
                                    </span>
                                  </p>
                                <p className="font-bold mt-3 text-[20px] md:text-[24px]">{item.price}</p>
                                </div> 
                               
                            </div>
                         </div>
                                    {/* right side */}
                                    <div>
                                    <RiDeleteBin5Fill className='relative text-red-500 left-20 text-[18px]' />
                                   <div className="md:w-[126px] w-[105px] h-[31px] md:h-[44px]
                                    md:py-3 md:px-5 rounded-[62px]  py-1 px-4 
                                   bg-[#F0F0F0] font-Satoshi
                                   font-normal md:text-[16px] text-[12px] text-black  relative md:top-16 top-12">
                                   <Button3 />
                                     </div>
   </div>
                                   </div>
                      
                  )
              })
             }
       </div>
    {/* right div */}

     <div className="w-full md:fixed:w-[505px] mt-3
      h-[350px] md:w-[505px] md:h-[356px] border rounded-[20px]  flex flex-col justify-start items-center p-4">
         <div className="font-Satoshi space-y-2">
         <h4 className="text-[20px] md:text-[24px] font-bold">Order Summary</h4>
         <div className='flex justify-between'>
          
          <p className="flex justify-between text-black md:text-xl text-base opacity-60 font">Subtotal </p>
          <p className=' text-base  md:text-[20px] text-black font-bold'>$565</p> 
         </div>
         <div className='flex justify-between'>
          <p className="flex justify-between text-black opacity-60 md:text-xl text-base">Discount-20 </p>
          <p className='text-red-500 md:text-xl text-base font-bold'>$-113</p> 
         </div><div className='flex justify-between border-b'>
          <p className="flex justify-between text-black opacity-60 md:text-xl text-base">Deleivery Fee </p>
          <p className=' md:text-xl text-base  font-bold'>$15</p> 
         </div>
          <p className="flex justify-between pt-3 text-base md:text-xl">Total <span className='font-bold text-xl md:text-2xl'>$467</span> </p>
    

<div className=''>

<div>
<div className='flex justify-between  md:w-[457px] w-[358px] h-[48px]  gap-3'>

<button className='w-[426px] flex
             h-[48px] rounded-[62px] py-3 px-[16px] gap-3   bg-[#F0F0F0] border-[#F5F5F5] '>
             <input type="text" placeholder='Add promo code'
          className='font-normal w-full font-Satoshi  bg-[#F0F0F0] h-[22px] text-sm opacity-[50%]
          
          
          text-black' /></button>
                           <div className='fixed:w-[119px] fill:h-[48px] rounded-[62px] border-[1px]
     py-[12px] px-[16px] bg-black text-white  font-Satoshi font-medium text-[16px]'>
      Apply
      
    </div>
       </div>
    

    <button className=' w-[358px] md:w-[457px] flex gap-2 justify-center items-center my-2 md:mt-3 md:my-0  md:h-[60px] rounded-[62px] py-4 px-[54px] bg-black text-white'>
            Go to Checkout 
          <span><FaArrowRight/> </span>
            </button>
    </div>

</div>

          <div >
            
               </div>
     

    
      

    </div> 
                   </div>
        
         </div>


          </div>
    
    </>
  )
}

export default page
