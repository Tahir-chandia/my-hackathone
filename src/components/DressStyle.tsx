import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { IoIosArrowUp } from "react-icons/io";

type DressStyleProps = {
  onChange: (value: string) => void;
};

const DressStyle: React.FC<DressStyleProps> = ({ onChange }) => {
  return (
    <div>
      <h4 className="flex font-Satoshi font-bold text-[20px] justify-between mt-[20px]">
        Dress Style <span><IoIosArrowUp /></span>
      </h4>
      {["Casual", "Gym", "Formal", "Party"].map((style) => (
        <Accordion key={style} type="single" collapsible className="pt-2 text-black opacity-60 font-Satoshi font-normal">
          <AccordionItem value={style}>
            <AccordionTrigger onClick={() => onChange(style)}>{style}</AccordionTrigger>
            <AccordionContent className="flex justify-between">
              <span>→</span>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default DressStyle;
