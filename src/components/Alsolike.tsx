import Image from "next/image"
import Link from "next/link"


interface ProductsId{
    id:number,
title:string,
price:string,
img:string,
alt:string,
width:number,
height:number,
deletePrice?:string|null,
discount?:string|null,
ratingimg:string,
ratingWidth:number,
ratingHeight:number,
ratingAlt:string

}



const products:ProductsId[] = [
    {
    id:1,
title:"Polo with Contrast Trims",
price:"$212",
img:"/cloth7.png",
alt:"T-shirt",
width:300,
height:444,
deletePrice:"$242",
discount:"-20",
ratingimg:"/frame35.png",
ratingWidth:150,
ratingHeight:19,
ratingAlt:"Ratings"

},

{
id:2,
title:"Gradient Graphic T-shirt",
price:"$145",
img:"/cloth8.png",
alt:"image2",
width:368,
height:402, 
deletePrice:null,
discount:null,
ratingimg:"/frame35.png",
ratingWidth:150,
ratingHeight:19,
ratingAlt:"Ratings"
},
{
    id:3,
        title:"Polo with Tipping Details",
    price:"$180",
    img:"/cloth9.png",
    alt:"image3",
    width:296,
    height:444,
    ratingimg:"/frame35.png",
    discount:null,
    deletePrice:null,
ratingWidth:150,
ratingHeight:19,
ratingAlt:"Ratings"
    },
    {
        id:4,
        title:"Black Striped T-shirt",
        price:"$120",
        img:"/cloth10.png",
        alt:"image4",
        width:296,
        height:444,
        deletePrice:"$150",
        discount:"-30%",
        ratingimg:"/frame35.png",
        ratingWidth:150,
        ratingHeight:19,
        ratingAlt:"Ratings"
                
        },
]



const Alsolike = () => {
  return (
    <div className='mx-1 md:px-[80px]'>
      <div >
        <h2 className='font-IntegralBold text-lg sm:text-xl md:leading-10 md:text-[48px] text-black text-center '>You might also like</h2>
      </div>
       <div className=" md:flex grid grid-cols-2 md:gap-0 gap-3 md:grid-rows-1 space-x-4 mt-[50px]">
    
        {products.map((pro)=>(
            <div className="space-y-2" key={pro.id}> 
<Link href={`${pro.id}`}>
            <Image sizes="(min-width: 1560px) 295px, (min-width: 1240px) 19vw, 222px"
             src={pro.img} alt={pro.alt} width={pro.width} height={pro.height} className="w-[295px] rounded-[20px] h-[298px]"/>
            <p className="md:w-[225px] h-[27] text-xs sm:text:sm md:text-base  font-Satoshi font-bold">{pro.title}</p>
            <Image src={pro.ratingimg} alt={pro.ratingAlt} width={pro.ratingWidth} height={pro.ratingHeight}/>
   <div>

            <p className="md:w-[53px] h-[32px] font-Satoshi font-bold text-black flex gap-3 
            text-center text-xs sm:text-sm md:text-base">{pro.price}
            <span className="opacity-[40%]">
                    <del className="font-Satoshi font-bold">{pro.deletePrice}</del></span>

                    {pro.discount ?(
                      <>
                        
                     <span className="text-[#FF3333] bg-[#FF33331A] 
                     h-[28px] text-xs sm:text-sm md:text-base rounded-[62px] py-[2px]  px-[12px] font-Satoshi"><span>    {pro.discount}</span> 
                    </span>
                        </>
                    ):(<>
                    
                    </>)
                    }

            </p>
                    </div>
                    </Link>
            </div>
            
        ))}



    
      </div>

    </div>

  )
}

export default Alsolike
