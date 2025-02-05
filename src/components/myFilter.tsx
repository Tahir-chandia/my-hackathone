

import { useState } from "react";
import { ImEqualizer2 } from "react-icons/im";
import Price from "./Price";
import { Colors } from "./Colors";
import Sizes from "./Sizes";
import DressStyle from "./DressStyle";
import Collection from "./Collection";

type Filters = {
  price: number[];
  colors: string[];
  sizes: string[];
  dressStyle: string;
};


const sort_options =[
  {name:"None",value:"None"},
  {name:"Price: Low to High",value:"price-asc"},
  {name:"Price: High to Low",value:"price-desc"},
] as const



const MyFilter: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({
    price: [50, 100, 200,300,400,500],
    colors: [],
    sizes: [],
    dressStyle: "",
  });

  const handleFilterChange = (key: keyof Filters, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex justify-between gap-[24px] w-[1200px] px-10">
      <div className="fixed:w-[295px] fixed:h-[px] py-5 px-6 rounded-[20px] border-black border-[1px] border-opacity-[10%]">
        <h4 className="flex font-Satoshi font-bold text-[20px] justify-between gap-[20px]">
          Filters <span><ImEqualizer2 className="text-[25px] text-black opacity-[40%]" /></span>
        </h4>
        <div className="w-[252px] mt-[50px] border-b-[1px] border-b-black border-opacity-[10%]"></div>
        <Price onChange={(value: number[]) => handleFilterChange("price", value)} />
        <div className="w-[252px] mt-[10px] border-b-[1px] border-b-black border-opacity-[10%]"></div>
        <Colors onChange={(value: string[]) => handleFilterChange("colors", value)} />
        <div className="w-[252px] mt-[15px] border-b-[1px] border-b-black border-opacity-[10%]"></div>
        <Sizes onChange={(value: string[]) => handleFilterChange("sizes", value)} />
        <div className="w-[252px] mt-[35px] border-b-[1px] border-b-black border-opacity-[10%]"></div>
        <DressStyle onChange={(value: string) => handleFilterChange("dressStyle", value)} />
      </div>
      <div className="w-[925px]">
        <Collection    />
      </div>
    </div>
  );
};

export default MyFilter;
