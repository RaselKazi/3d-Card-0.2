import Image from 'next/image';
import React from 'react'
import { CgRuler } from "react-icons/cg";
import { AiOutlineEdit } from "react-icons/ai";
import { GrUserManager } from "react-icons/gr";
import { BsArrowRight } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
export default function CardItem({ id, productItem, color, pace, handleSlider }) {
  return (
    <div className=" w-full lg:w-[38rem] pt-4 lg:pt-12 pb-6  lg:px-12">
      <div className=" flex justify-end mb-16">
        <AnimatePresence>
          <div
            style={{
              boxShadow: `0 0 7px 1px ${color}`,
              background: `${color}`,
            }}
            className=" w-10 h-10  rounded-full  flex justify-center items-center shadow-md"
          >
            <motion.div
              key={id}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
            >
              <Image alt="pace" src={pace} height={40} width={40} />
            </motion.div>
          </div>
        </AnimatePresence>
      </div>
      <h1 className=" text-3xl"> my store house</h1>
      <div className=" flex justify-between ">
        <AnimatePresence>
          <div className=" w-5/6">
            <p className="">Product</p>

            <motion.div
              key={id}
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -500, opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              {productItem.map((item, i) => (
                <div
                  key={i}
                  className=" flex justify-between my-2 h-12  items-center"
                >
                  <p className="">{item.name}</p>
                  <p className="">{item.price}</p>
                  <Image alt="pace" src={item.img} height={40} width={40} />
                </div>
              ))}
            </motion.div>
          </div>
        </AnimatePresence>
        <div>
          <p className="">No</p>
          <div>
            {[...Array(3)].map((v, i) => (
              <p
                key={i}
                className=" flex items-center justify-center my-2 h-12"
              >
                +
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className=" w-56 flex justify-between items-center rounded-full shadow-xl px-7 py-3  translate-x-16 lg:-translate-x-16 ">
        <div className=" cursor-pointer hover:text-orange-400 ">
          <CgRuler />
        </div>
        <div className=" cursor-pointer hover:text-orange-400 ">
          <AiOutlineEdit />
        </div>
        <div className=" border-r-2 border-slate-400 pr-3 cursor-pointer hover:text-orange-500 ">
          <GrUserManager />
        </div>
        <div
          onClick={handleSlider}
          className=" bg-slate-800 text-slate-50 p-3 rounded-xl  hover:bg-slate-600  cursor-pointer"
        >
          <BsArrowRight />
        </div>
      </div>
    </div>
  );
}
