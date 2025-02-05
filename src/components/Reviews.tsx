import React from 'react'
import { ImEqualizer2 } from 'react-icons/im'
import { RiArrowDropDownLine } from 'react-icons/ri'
import Allreviews from './Allreviews'

const Reviews = () => {
  return (
    <div className= ' md:mx-[40px]   md:my-[40px] '>
      <div className='font-Satoshi font-medium  sm:text-base pl-2 md:pl-0 text-xs md:text-[20px]
      text-black opacity-[60%] flex mx-5   md:mx-0 justify-between
       border-b-black  border-b-[1px] border-opacity-[10%] max-w-full py-6 sm:py-4 md:py-[20px]' >
        <h4>Product Details</h4>
        <h4>Ratings & Reviews</h4>
        <h4 >FAQs</h4>
      </div>
      <div>
        <div className='flex justify-between m-5 my-[15px] md:ml-[12px] '>
          <div className='flex gap-0 md:gap-2 '> 

           <h3 className=' md:w-full font-Satoshi sm:text-md md:text-[24px] text-base font-bold text-black'>
             All Reviews
            </h3>
           <span className='font-Satoshi font-normal text-black opacity-[60%] md:text-base text-xs sm:text-sm  mt-[9px]'>(451)</span>
          </div>  
         <div className='md:w-[354px] h-[48px] flex md:gap-[10px] gap-1'>
             <div className='md:w-[48px]
                           
              w-[40px] h-[40px] 
             md:h-[48px] rounded-full text-xs py-2  sm:py-[13px]  px-2 sm:px-[12px] bg-[#F0F0F0] '>
            <ImEqualizer2 className='md:text-[24px] text-xs sm:text-base md:w-[24px] w-[20px]  h-[24px] '/>
            </div> 
            <div>
                
                 <div className="md:w-[354px]   h-[48px] 
                    flex justify-between md:gap-[10px] gap-1">
                  <div className="flex ">
                
                <button className="fixed:w-[120px] fixed:h-[48px] rounded-[62px]  font-Satoshi
                  font-normal text-base hidden  md:block    bg-[#F0F0F0] lg:flex  px-5 py-4 ">
                    <span className='flex'>

              Latest <RiArrowDropDownLine className='text-lg md:text-[25px]'/>
                    </span>
                </button>
   
                 <button className="md:w-[168px] h-[40px] md:h-[48px]  
                 rounded-[62px]  font-Satoshi font-normal  bg-black 
                 text-white flex justify-between md:px-6 md:py-4 py-3 
                  px-3  sm:py-3 sm:px-3 md:text-base text-xs sm:text-sm">
              Write a Review
                </button> 
                  </div>
                  </div>     
            </div>
        </div> 
      </div>
        </div>
       <div >
        <Allreviews/>
        </div> 
    </div>
  )
}

export default Reviews
