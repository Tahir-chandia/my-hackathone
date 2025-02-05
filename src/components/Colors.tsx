"use client";

import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { IoIosArrowUp } from "react-icons/io";

const checkboxColors = [
  "bg-green-500",
  "bg-red-500",
  "bg-yellow-500",
  "bg-orange-500",
  "bg-cyan-500",
  "bg-blue-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-white",
  "bg-black",
];

// Define props type
type ColorsProps = {
  onChange: (value: string[]) => void;
};

export function Colors({ onChange }: ColorsProps) {
  const [selectedColors, setSelectedColors] = React.useState<string[]>([]);

  const handleCheckboxChange = (color: string) => {
    const newColors = selectedColors.includes(color)
      ? selectedColors.filter((c) => c !== color)
      : [...selectedColors, color];
    setSelectedColors(newColors);
    onChange(newColors); // Pass updated colors to parent
  };

  return (
    <div>
      <h4 className="flex justify-between font-Satoshi font-bold text-[20px] mt-[15px]">
        Colors <span><IoIosArrowUp className="mt-2 font-bold"/></span>
      </h4>
      <div className="flex flex-wrap gap-[15px] mt-[15px]">
        {checkboxColors.map((color, index) => (
          <div key={index} className="flex">
            <Checkbox
              id={`checkbox-${index}`}
              className={`h-[37px] w-[37px] rounded-full border-[1px] border-black border-opacity-15 ${color}`}
              onCheckedChange={() => handleCheckboxChange(color)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
