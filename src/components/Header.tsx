import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { FaRegUserCircle } from 'react-icons/fa'
import { IoIosSearch } from 'react-icons/io'
import { SheetSide } from './NewSheet'
import { NavigationMenuDemo } from './Navmenu'

const TopHeader = () => {
      return (<>
  <section className='max-w-screen-2xl  mx-auto flex h-[38px] justify-center items-center  bg-black text-white   gap-64'>
        <div className='max-w-[1440px]  '>
       <p className='        font-Satoshi  h-[19px] font-normal text-xs
        md:text-sm '>
      Sign up and get 20% off to your first order. <span className='max-w-[64px] text-xs  h-[24px] font-Satoshi 
      font-medium md:text-sm text-white  md:p-[1px]   border-b-white border-b-[2px]'>Sign Up Now
 </span></p> 
        </div>
          </section>
          </>
  )
}





 export default TopHeader

export const Header =()=>{
    return(
      <> <section className='max-w-screen-2xl  mx-auto flex h-[38px]     '>
        <header className='flex  max-w-screen-2xl lg:mx-[30px] 
         mx-auto   md:px-[20px] justify-between       gap-10  '>
<div className=' max-w-[1240px]  '>

          <div className='  flex  mx-auto'>

           <Link href={"/"}>

           <div className="md:text-sm  md:mt-5 flex justify-center items-center ">
                           <SheetSide/>
                      
            <h2 className=' font-IntegralBold 
  font-bold text-base   mt-1 md:mt-0 md:ml-3  lg:text-[32px]  text-black  mb-4 md:mb-6 uppercase '>shop.co</h2>
                       <ul className="hidden md:block">
                <li className=" flex  items-center gap-4 justify-center">
                
                     
                    <Link href={""}> <NavigationMenuDemo/></Link>
                    <Link href={"/"} className='mb-4  lg:mx-2 md:text-sm  lg:text-base'>On Sale</Link>
                    <Link href={"/products"} className='mb-4  md:text-sm lg:text-base'>New Arrivals</Link>
                    <Link href={"/"} className='mb-4 md:text-sm lg:text-base'>Brands</Link>
                </li>
            </ul>
                       </div>
  
  </Link> 
              </div>
              </div>
             <div className='flex  md:mt-5'>
               <div className='md:block hidden   
              '>
              <button className='md:min-w-[492px] lg:min-w-[570px] flex h-[48px] rounded-[62px] py-3  gap-3
                 bg-[#F0F0F0] border-[#F5F5F5] pl-5 '> 
              <IoIosSearch className='text-xl   text-black opacity-[50%] text-center w-[24px] h-[24px]' />
             <input type="text" placeholder='Search for products...'
              className='font-normal font-Satoshi  bg-[#F0F0F0] h-[22px] md:text-base opacity-[50%]
              text-black' /></button>
              </div>
             <div className='flex text-center text-lg  h-[24] gap-2 md:gap-[14px] md:text-2xl  px-2 py-3'>
              <Link href={"/cart"}>
              
              <span ><AiOutlineShoppingCart /></span>
              </Link>  
                <span><FaRegUserCircle /></span>
            </div>  
            </div> 
            
        </header>
           </section>  
</>  
    )
}