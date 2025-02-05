import Image from 'next/image'
import React from 'react'

const Hero = () => {
  
  return (
    <>
<section className='max-w-screen-2xl  mx-auto '>


<div className='mt-10 h-[650px]  flex   bg-[#F2F0F1]  '>
    <Image src={"/rectangle2.png"} width={1457} alt='rectangle' height={267} className='absolute  object-cover'
    sizes="(min-width: 1540px) 1458px, calc(94.92vw + 15px)" />
    <div className='relative left-2 px-[80px]'>  
      
       <Image src={"/vector.png"} alt='vector' width={56} height={56} className='relative left-[620px] bottom-[-350px] '/> 
       <Image src={"/vector2.png"} alt='vector2' width={104} height={104} className='relative left-[1100px] trop-[350px] '/> 

         <h2 className='w-[577px] h-[173px] font-Integral font-extrabold leading-[55px]  -tracking-tighter text-6xl '>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
       <p className='w-[545px] font-Satoshi h-[33px] mt-[60px] leading-5 text-black opacity-[60%] h1 text-[16px]'>Browse through our diverse range 
        of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
     <button className='fixed:w-[210px] fixed:h-[52px] rounded-[62px] bg-black text-white
     py-[16px] px-[54px] gap-3 mt-[50px]'> <span className='w-[75px] h-[22px] font-Satoshi font-medium'>Shop Now</span></button>
    </div>

  
</div>
</section>
    </>
      
  )
}

export default Hero
