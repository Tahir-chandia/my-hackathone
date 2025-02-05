
import { TfiEmail } from 'react-icons/tfi'
import Footer from './Footer'

const TopFooter = () => {
  return (
    <div className='max-w-screen-2xl  mx-auto flex   '>
    <div className='md:w-[1440px]  md:h-[589px]  '>
<div className='md:pl-[60px] pl-[50px]  '>
  <div className='w-[358px] h-[293px] md:w-[1240px] 
   rounded-[20px] md:py-[36px]  relative  bottom-[-80px] md:bottom-[-100px] md:px-[64px] px-[32px] py-[18px]  bg-black md:h-[180px]'>
    <div className=' flex flex-col md:flex-row justify-between md:space-y-0 space-y-10 '>         
         <h2 className='font-Integral tracking-wide
          text-[32px] md:text-4xl leading-9  font-bold text-white md:mt-[10px]
           w-[297px] h-[105px] md:w-[551px] md:h-[94px]'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>



         <div className=' w-[300px] sm:w-[349px] h-[42px] md:h-[108px] gap-3 space-y-2 '>
            <button className= 'flex items-center gap-4 bg-white w-[311px] md:w-[349px] h-[42px] md:h-[48px] rounded-[62px] px-3 py-4 font-Satoshi'>
            <TfiEmail  className='text-black opacity-[40%] w-[24px] h-[24px] ' />  <input type="text" name="" id="" 
            placeholder='Enter your email address' className='md:w-[173px] h-[19px] 
            md:h-[22px] font-Satoshi text-[14px]  md:text-base' />
            </button>
             <button className=' bg-white w-full sm:w-[311px] h-[42px] md:w-[349px] md:h-[48px] rounded-[62px] px-3 py-4  font-Satoshi font-medium flex items-center justify-center'>
              Subscribe to Newsletter
            </button> 
        </div> 
            </div>
  </div>
            </div>
            <Footer/>
    </div>
      </div>
  )
}

export default TopFooter
