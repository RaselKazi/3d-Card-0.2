import Head from 'next/head'
import { useState, useEffect } from "react";
import { data } from "../Data/CardData";
import CardSlider from '../components/CardSlider';
import CardItem from '../components/CardItem';
import CardButton from '../components/CardButton';

export default function Home() {
  const [rotateDeg, setRotateDeg] = useState(0);
  const [sliderId, setSliderId] = useState(0);

  const handleSlider =()=>{
    setRotateDeg((ro) =>  ro+72);
    setSliderId((sl) => sl>=data.length-1?0: sl + 1);
  }

  useEffect(() => {
    let SliderInterval;

    SliderInterval= setInterval(() => {
      setRotateDeg((ro) => ro + 72);
      setSliderId((sl) => sl >= data.length - 1 ? 0 : sl + 1);}, 4000);
  
    return () => {
      clearInterval(SliderInterval);
    }
  }, [])
  

  return (
    <div className=" bg-slate-100 w-screen min-h-screen  flex justify-center items-center px-3 ">
      <Head>
        <title>3d Card</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white    h-5/6 rounded-3xl  overflow-hidden  ">
        <div className="flex px-4">
          <CardSlider
            id={data[sliderId]?.id}
            ShadowColor={data[sliderId]?.ShadowColor}
            minImg={data[sliderId]?.minImg}
            bigImg={data[sliderId]?.bigImg}
            twoImg={data[sliderId]?.twoImg}
            title={data[sliderId].title}
            color={data[sliderId].color}
            rotateDeg={rotateDeg}
          />

          <CardItem
            id={data[sliderId]?.id}
            productItem={data[sliderId].productItem}
            color={data[sliderId].color}
            pace={data[sliderId].pace}
            handleSlider={handleSlider}
          />
        </div>

        <CardButton/>
      </main>
    </div>
  );
}