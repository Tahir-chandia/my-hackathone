import React from 'react'
import { IoIosAdd } from 'react-icons/io'
import { RiSubtractFill } from 'react-icons/ri'

const Button3 = () => {
  return (
    <div>
      <div className="flex justify-between gap-3">

<button className="w-[24px] h-[24px] font-Satoshi font-bold ">
<RiSubtractFill  />
</button>
<span className=" font-Satoshi font-medium">1</span>
<button className="w-[24px] h-[24px] font-Satoshi font-medium ">
<IoIosAdd className="text-[24px]"/></button>
  </div>
    </div>
  )
}

export default Button3
