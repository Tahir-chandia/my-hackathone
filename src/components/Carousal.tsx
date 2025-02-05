
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { FaStar } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";


interface IdTestmonial{
  id:number;
  name:string;
  feedback:string;
  verified:boolean;
  rating:number;
}
const testmonials:IdTestmonial[]=[{
  id:1,
  name:"Sarah M.",
  feedback:`"I'm blown away by the quality and style of the clothes I received from 
  Shop.co. From casual wear to elegant dresses, every piece I've bought has 
  exceeded my expectations.”`,
  verified:true,
  rating:5

},{
  id:2,
  name:"Alkex K.",
  feedback:`"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. 
  The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`,
  verified:true,
  rating:5

},{
  id:3,
  name:"James L.",
  feedback:`"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co.
   The selection of clothes is not only diverse but also on-point with the latest trends.”`,
  verified:true,
  rating:5

},{
  id:4,
  name:"Miller D.",
  feedback:`"I've been a loyal customer of Shop.co for years now, and I can confidently say that their products never disappoint.`,
  verified:true,
  rating:5

},{
  id:5,
  name:"John D.",
  feedback:`"The quality of the clothes I've purchased from Shop.co is unmatched. The fabrics are soft, the stitching is impeccable, and the designs are always on-trend.”`,
  verified:true,
  rating:5
},]


export function CarouselSize() {
  return (

    <>
    <section className='max-w-screen-2xl  mx-auto   '>



<div className="w-[1200px] mx-20">
<div className="my-[30px]">
  <h2 className="w-[654px] h-[58px] font-IntegralBold font-bold text-[48px]">OUR HAPPY CUSTOMERS</h2>
</div>


    <Carousel
      opts={{
        align: "start",
      }}
      
    >
      <CarouselContent>
        {testmonials.map((testmonials, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="border-none">
                <CardContent className="fixed:w-[40px] fixed:h-[240px] flex gap-[342px] rounded-[20px] border-[1px] px-[32px] py-[28px] border-black border-opacity-[10%]">
                 <div className=" w-[336px] h-[161.58px] space-y-2">

                  <div className="flex">
                      {Array.from({length:testmonials.rating}).map((_,i)=>(
                          <FaStar key={i} className="text-yellow-500" />
                      ))
                      }
                  </div>
                  
                  
                  <h2 className="flex font-Satoshi font-bold">{testmonials.name}
                  {testmonials.verified && (
                    <FaCircleCheck className="text-green-500 mt-1"/>
                  )}
                  </h2>
                   <p className="text-sm  font-Satoshi font-normal  text-black opacity-[60%]">
                  {testmonials.feedback}
                  </p> 
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-[-45px] left-[1120px]" />
      <CarouselNext className="absolute top-[-45px] right-[10px]"/>
    </Carousel>
</div>
    </section>
    </>
  )
}
