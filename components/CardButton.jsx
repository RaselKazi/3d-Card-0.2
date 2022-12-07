import React from 'react'
import { TbSofa, TbWebhook } from "react-icons/tb";
import { TfiGift } from "react-icons/tfi";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineMinus } from "react-icons/ai";
export default function CardButton() {
  return (
    <div className="flex px-12 pb-8  text-3xl text-slate-500">
      <div className=" w-1/2 flex items-center gap-3">
        <div className=" cursor-pointer  hover:bg-slate-500 hover:text-slate-50 p-3 rounded-xl transition duration-500">
          <TbSofa />
        </div>
        <div>
          <AiOutlineMinus />
        </div>

        <div className=" cursor-pointer  hover:bg-slate-500 hover:text-slate-50 p-3 rounded-xl transition duration-500">
          <TbWebhook />
        </div>
        <div>
          <AiOutlineMinus />
        </div>
        <div className=" cursor-pointer  hover:bg-slate-500 hover:text-slate-50 p-3 rounded-xl transition duration-500">
          <TfiGift />
        </div>
      </div>
      <div className=" w-1/2 flex justify-end items-center">
        <div className=" cursor-pointer  hover:bg-slate-500 hover:text-slate-50 p-3 rounded-xl transition duration-500">
          <CgWebsite />
        </div>
      </div>
    </div>
  );
}
