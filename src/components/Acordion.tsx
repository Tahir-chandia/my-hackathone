import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { FaAngleRight } from "react-icons/fa"
  
const Acordion = () => {
  return (
    <div className="w-[247px] h-[160px] px-[5px] 
 font-Satoshi font-normal text-[16px] opacity-60 text-black ">
    <Accordion type="single" collapsible className="pt-2">
  <AccordionItem value="item-1">
    <AccordionTrigger>T-Shirt</AccordionTrigger>
    <AccordionContent className="flex justify-between">
       <span><FaAngleRight /></span>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-1">
    <AccordionTrigger>Shorts</AccordionTrigger>
    <AccordionContent className="flex justify-between">
       <span><FaAngleRight /></span>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-1">
    <AccordionTrigger>Shirts</AccordionTrigger>
    <AccordionContent className="flex justify-between">
       <span><FaAngleRight /></span>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-1">
    <AccordionTrigger>Hoodie</AccordionTrigger>
    <AccordionContent className="flex justify-between">
       <span><FaAngleRight /></span>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-1">
    <AccordionTrigger>Jeans</AccordionTrigger>
    <AccordionContent className="flex justify-between">
       <span><FaAngleRight /></span>
    </AccordionContent>
  </AccordionItem>

</Accordion>

    </div>
  )
}

export default Acordion
