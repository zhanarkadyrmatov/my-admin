import React from 'react'

export default function Radio({value, name}) {
  return (
    <div
      className="bg-[#F0F0F0] py-[0px] px-[20px] rounded-[8px] flex justify-between items-center"
    >
      <p className="text-base font-normal leading-6 tracking-tight text-left">
        {}
      </p>
      <input
        name="myRadio"
        type="radio"
        className="w-[18px] h-[18px]"
      />
    </div>
  )
}
