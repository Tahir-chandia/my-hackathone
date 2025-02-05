import { FaInstagram } from "react-icons/fa";

import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa6";

import Image from "next/image";

export default function Footer(){
    return (
        <main className="bg-[#F0F0F0] w-[482px] md:w-full h-[900px] md:h-[499px]    max-w-screen-2xl mx-auto">
      
        {/* container */}
        <div  className="flex h-full md:h-[350px] flex-col md:px-[70px] md:flex-row
         md:justify-between items-start p-5 pt-[160px]  ">
          {/* top div */}
          <div className="md:flex flex-col md:justify-center   md:items-center w-[190px]"> 
            <ul>
                <h2 className="text-2xl font-IntegralBold  py-3 sm:text-3xl font-extrabold">SHOP.CO</h2>
                <p className="w-[357px] md:w-[248px] text-sm mt-1 py-3 font-Satoshi text-black opacity-60">
                   We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                   {/* icon */}
                   <div className="flex items-center space-x-3 py-3 mt-1">
                    <FaInstagram className="text-xl"/>
                     <FaFacebook className="text-xl"/>
                       <FaGithub className="text-xl"/>
                      <FaTwitter className="text-xl"/>
                   </div>
            </ul>
          </div>
          {/* mid div */}
          <div className="w-full md:w-[900px] grid grid-cols-2   
          font-Satoshi sm:grid-cols-4 mt-5 md:mt-0 ">
              {/* box 1 */}
                 <ul className="space-y-3 ">
                   <h5 className="text-base  font-medium">Company</h5>
                   <li  className="text-base text-black opacity-60">About</li>
                   <li  className="text-base text-black opacity-60">Features</li>
                   <li  className="text-base text-black opacity-60">Works</li>
                   <li  className="text-base text-black opacity-60">Career</li>
                   </ul>
                {/* box 2 */}
                <ul className="space-y-3 text-base">
                   <h2 className=" font-medium">Help</h2>
                   <li  className=" text-black opacity-60">Customer Support</li>
                   <li  className=" text-black opacity-60">Deleivery Details</li>
                   <li  className=" text-black opacity-60">Terms and Conditions</li>
                   <li  className=" text-black opacity-60">Privacy Policy</li>
                   </ul>
                {/* box 3*/}
                <ul className="space-y-3 text-base my-5 md:my-0">
                   <h2 className=" font-medium ">FAQ</h2>
                   <li  className=" text-black opacity-60">Account</li>
                   <li  className=" text-black opacity-60">Manage Deleiveries</li>
                   <li  className=" text-black opacity-60">Orders</li>
                   <li  className=" text-black opacity-60">Payments</li>
                   </ul>
                {/* box 4 */}
                <ul className="space-y-3 text-base my-5 md:my-0">
                   <h2 className=" text-base  font-medium ">Resources</h2>
                   <li className=" text-black opacity-60">Free ebooks</li>
                   <li className=" text-black opacity-60">Development Turtorials</li>
                   <li className=" text-black opacity-60">How to - Blog</li>
                   <li className=" text-black opacity-60">Youtube Playlist</li>
                   </ul>
                {/* complete boxes*/}

          </div>
        </div>
        <div className="relative md:bottom-0 bottom-[170px]  md:w-[1250px]
         md:mt-3 w-[450px] md:ml-10  mb-5 md:mx-[40px] border-b-[1px]
          border-b-black mx-5  border-opacity-[10%]">
        </div>
         {/* bottom div */}
         <div className="flex flex-col relative md:bottom-0 bottom-[170px] md:px-10  sm:flex-row md:justify-between font-Satoshi justify-center items-center">
                <p className="text-sm  text-black opacity-60 mb-4">Shop.co © 2000-2023, All Rights Reserved</p>
                <div className="flex items-center md:gap-3 gap-2">
                  <span className="w-[46.61px] h-[30.03px] bg-white px-2 py-2">

                    <Image src={"/visa.png"} className="w-[50px]" width={25} height={20} alt="pic"/>
                  </span>

                  <span className="w-[46.61px] h-[30.03px] bg-white px-2 py-2">

                    <Image src={"/mastercard.png"} className="w-[50px]" width={25.38} height={15.69} alt="pic"/>
                  </span>
                  <span className="w-[46.61px] h-[30.03px] bg-white px-2 py-2">

                    <Image src={"/paypal.png"} className="w-[50px]" width={34.55} height={9.21} alt="pic"/>
                  </span>
                  <span className="w-[46.61px] h-[30.03px] bg-white px-2 py-2">

                    <Image src={"/pay.png"} className="w-[50px]" width={26.41} height={11.21} alt="pic"/>
                  </span>
                  <span className="w-[46.61px] h-[30.03px] bg-white px-2 py-2">

                    <Image src={"/gpay.png"} className="w-[50px]" width={28.56} height={11.21} alt="pic"/>
                  </span>
                </div>
            </div>
        </main>
    )
}