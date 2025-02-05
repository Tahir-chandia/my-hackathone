"use client"
import MyFilter from "@/components/myFilter"
import { FaAngleRight } from "react-icons/fa"


const Page = () => {
 
  return (
    
    <>
    <section className='max-w-screen-2xl  mx-auto   '>


    <div className="max-w-7xl mx-auto ml-[5px]">
      
<div className="w-[1250px] mt-[40px]  mx-[50px] border-b-[1px] border-b-black  border-opacity-[10%]">
</div>
<div className="mx-12 flex my-6 w-[123px] h-[22px] gap-1 font-Satoshi text-[16px] font-normal ">
    <p className=" flex text-black opacity-[60%] gap-1">Home<span className="text-[16px] mt-1 "><FaAngleRight /></span >
    </p>
    <p>

    <span className="text-black">Casual</span>
    </p>
</div>

 
<MyFilter />



    </div>
    </section>
    </>
  )
}

export default Page
