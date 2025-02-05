import { Slider } from "@/components/ui/slider";
import { IoIosArrowUp } from "react-icons/io";

// Define props type
type PriceProps = {
  onChange: (value: number[]) => void;
};

const Price: React.FC<PriceProps> = ({ onChange }) => {
  return (
    <div>
      <h4 className="flex justify-between font-Satoshi font-bold text-[20px] py-[20px]">
        Price <span><IoIosArrowUp className="mt-2 font-bold"/></span>
      </h4>
      <Slider
        defaultValue={[33]} // Assuming default range values
        max={500}
        step={1}
        onValueChange={onChange} // Use the passed function
      />
      <div className="flex justify-between font-Satoshi mt-2 font-medium text-[14px] py-1">
        <h4>$50</h4>
        <h4>$1000</h4>
      </div>
    </div>
  );
};

export default Price;
