import { FaStar } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import Button2 from "./Button2";
import Alsolike from "./Alsolike";

interface IdReviews{
    id:number;
    name:string;
    feedback:string;
    verified:boolean;
    rating:number;
    date:string
  }
  const reviews:IdReviews[]=[{
    id:1,
    name:"Sarah M.",
    feedback:`"I'm blown away by the quality and style of the clothes I received from 
    Shop.co. From casual wear to elegant dresses, every piece I've bought has 
    exceeded my expectations.”`,
    verified:true,
    rating:5,
    date:"Posted on August 12 2023"
  
  },{
    id:2,
    name:"Alkex K.",
    feedback:`"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. 
    The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`,
    verified:true,
    rating:5,
    date:"Posted on August 15 2023"
  },{
    id:3,
    name:"James L.",
    feedback:`"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co.
     The selection of clothes is not only diverse but also on-point with the latest trends.”`,
    verified:true,
    rating:5,
    date:"Posted on August 17 2023"
  },{
    id:4,
    name:"Miller D.",
    feedback:`"I've been a loyal customer of Shop.co for years now, and I can confidently say that their products never disappoint.`,
    verified:true,
    rating:5,
    date:"Posted on August 19 2023"
  },{
    id:5,
    name:"John D.",
    feedback:`"The quality of the clothes I've purchased from Shop.co is unmatched. The fabrics are soft, the stitching is impeccable, and the designs are always on-trend.”`,
    verified:true,
    rating:5,
    date:"Posted on August 21 2023"
  },
  {
    id:6,
    name:"John D.",
    feedback:`"The quality of the clothes I've purchased from Shop.co is unmatched. The fabrics are soft, the stitching is impeccable, and the designs are always on-trend.”`,
    verified:true,
    rating:5,
    date:"Posted on August 21 2023"
  },]
  
const Allreviews = () => {
  return (
    <div >
      <div  className="grid md:grid-cols-2 mx-4 gap-6 sm:grid-cols-1  md:gap-4  ">
          { 
            reviews.map((review)=>{return(
              <div key={review.id} className=" h-[241px] px-8 py-7          border-black
      border-opacity-[10%] rounded-[20px] border-[1px] space-y-3 md:space-y-5
 " >
                                  <div className="flex">
                                      {Array.from({length:review.rating}).map((_,i)=>(
                                          <FaStar key={i} className="text-yellow-500" />
                                      ))
                                      }
                                  </div>                               
        <h2 className="flex font-Satoshi text-sm md:text-base font-bold">{review.name}
          {review.verified && (
                              <FaCircleCheck className="text-green-500 mt-1"/>
                            )}
        </h2>

              <p className="md:text-sm text-xs font-Satoshi font-normal  text-black opacity-[60%]">
                  {review.feedback}
                  </p>
              <p className="text-sm  font-Satoshi font-normal  text-black opacity-[60%]">
                  {review.date}
                  </p>
              </div>
            )})
          }  
           </div>
           <Button2 />
           <Alsolike/>
    </div>
  )
}

export default Allreviews
