import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const sizes = [
  "XX-Small", "X-Small", "Small", "Medium",
  "Large", "X-Large", "XX-Large", "3X-Large", "4X-Large"
];

// Define props type
type SizesProps = {
  onChange: (value: string[]) => void;
};

const Sizes: React.FC<SizesProps> = ({ onChange }) => {
  const [selectedSizes, setSelectedSizes] = React.useState<string[]>([]);

  const handleSizeChange = (size: string) => {
    const newSizes = selectedSizes.includes(size)
      ? selectedSizes.filter((s) => s !== size)
      : [...selectedSizes, size];
    setSelectedSizes(newSizes);
    onChange(newSizes);
  };

  return (
    <div>
      <p className="font-Satoshi mt-[10px] flex justify-between font-bold text-[20px] text-black">
        Sizes <span><IoIosArrowUp className="mt-2" /></span>
      </p>
      <div className="flex flex-wrap gap-3 mt-[35px] w-[247px] h-[227px]">
        {sizes.map((size) => (
          <div
            key={size}
            className={`w-[96px] h-[39px] px-4 py-2 rounded-[62px] bg-[#F0F0F0]
             font-Satoshi font-normal text-[14px] text-black opacity-[60%] 
             cursor-pointer ${selectedSizes.includes(size) ? "bg-gray-300" : ""}`}
            onClick={() => handleSizeChange(size)}
          >
            {size}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sizes;
