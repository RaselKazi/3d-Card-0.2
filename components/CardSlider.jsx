import Image from 'next/image';
import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
export default function CardSlider({
  id,
  ShadowColor,
  minImg,
  bigImg,
  twoImg,
  title,
  color,
  rotateDeg,
}) {
  const container = {
    initial: {
      opacity: 0,
      rotate: -85,
    },
    animate: {
      opacity: 1,
      rotate: 15,
      transition: {
        ease: "easeOut",
        duration: 2,
      },
    },
    exit: {
      opacity: 0,
      rotate: 100,
      transition: {
        ease: "easeInOut",
        duration: 0.4,
      },
    },
  };

  return (
    <div className=" hidden lg:block w-[38rem] relative">
      <div className=" absolute z-[5000] top-2 left-[40%] l ">
        <Image alt="round" src="/img/round.png" height={45} width={45} />
      </div>
      <div className=" absolute z-[5000]  bottom-[5rem] left-[2rem] l ">
        <Image alt="shop" src="/img/shop.png" height={90} width={90} />
      </div>
      <AnimatePresence>
        <motion.div
          key={id}
          variants={container}
          initial="initial"
          animate="animate"
          exit="exit"
          className=" absolute bg-transparent  w-5/6 h-[140%] -top-40  -left-44 rounded-full z-50 "
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: -20 }}
            transition={{ delay: 0.5, duration: 3.5 }}
            className=" absolute top-32 right-12 "
          >
            <Image alt="minImg" src={minImg} height={90} width={90} />
          </motion.div>
          <div
            style={{
              boxShadow: `0 0 130px 70px ${ShadowColor}`,
            }}
            className="  rounded-full absolute top-[62%] -right-12"
          ></div>
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: -20 }}
            transition={{ delay: 0.5, duration: 3.5 }}
            className=" absolute top-[35%] -right-24"
          >
            <Image
              alt="bigImg"
              src={bigImg}
              height={50}
              width={190}
              priority
              layout="fixed"
            />
          </motion.div>
          <motion.div
            initial={{ rotate: -30 }}
            animate={{ rotate: 0 }}
            transition={{ delay: 0.5, duration: 3.5 }}
            className=" absolute bottom-24 right-20"
          >
            <Image
              alt="twoImg"
              src={twoImg}
              layout="fixed"
              height={60}
              width={60}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className=" relative">
        <AnimatePresence>
          <motion.h1
            key={id}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className=" absolute top-28 left-6 text-slate-50 font-bold  text-6xl w-28 z-50"
          >
            {title}
          </motion.h1>
        </AnimatePresence>

        <svg
          style={{
            transformOrigin: "center",
            fill: `${color}`,
            transform: `rotate(${rotateDeg}deg)`,
          }}
          className=" absolute h-[32rem] w-[32rem]  -top-14 -left-44 transition-all duration-700 "
          width="503"
          height="491"
          viewBox="0 0 503 491"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M392.438 19.2015C414.563 20.9088 433.167 36.4685 438.759 57.9433L501.013 297.009C506.759 319.076 497.459 342.311 478.075 354.319L271.314 482.401C252.253 494.209 227.769 492.468 210.569 478.083L19.261 318.078C2.06128 303.692 -3.98033 279.902 4.27151 259.053L93.7798 32.9041C102.171 11.7023 123.397 -1.55918 146.131 0.195135L392.438 19.2015Z" />
        </svg>
      </div>
    </div>
  );
}
