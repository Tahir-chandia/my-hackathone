import Image from 'next/image'
import React from 'react'

const image = [{
    id:1,
    img:"/group.png",
    w:166.48,
    h:33.16,
    alt:"logo1"
},{
    id:2,
    img:"/zara-logo-2.png",
    w:91,
    h:38,
    alt:"logo2"
},
{
    id:3,
    img:"/gucci-logo-3.png",
    w:156,
    h:36,
    alt:"logo3"
},{
    id:4,
    img:"/prada-logo-4.png",
    w:194,
    h:32,
    alt:"logo4"
},{
    id:5,
    img:"/group (1).png",
    w:206.79,
    h:33.35,
    alt:"logo5"
}
]

const Rectangle = () => {


  return (

    <>
    <section className='max-w-screen-2xl  mx-auto '>

    <div className=' absolute flex '>
          <div className='w-[1349px]  h-[122px]  bg-black relative  px-[80px] '>
               <div className=' flex gap-20 pt-10'> 
                {image.map((img)=>(
                    <div key={img.id} >

                    <Image src={img.img} alt={img.alt} width={img.w} height={img.h}/>
                    </div>
                ))}
            </div> 

            
     </div>   
    </div>
    </section>
    </>
  )
}

export default Rectangle
