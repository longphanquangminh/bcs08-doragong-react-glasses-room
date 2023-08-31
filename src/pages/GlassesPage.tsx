import { useEffect, useState } from "react";

import GlassesHeader from "../components/Glasses/GlassesHeader";
import GlassesContent from "../components/Glasses/GlassesContent";

function GlassesPage() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {isLoading && (
        <div id='spinner' className='text-white fixed left-0 top-0 w-screen h-screen bg-[#fff] flex justify-center items-center z-[100]'>
          <img src='https://bcs08-capstone-js-team9.vercel.app/assets/img/loading.gif' alt='' />
        </div>
      )}
      <div className="box-border bg-cover bg-no-repeat w-screen h-auto lg:h-screen bg-[url('../../src/assets/glassesImage/my_image_bg_2.jpg')] relative z-50">
        <div className='-z-10 absolute top-0 left-0 w-full h-full bg-[#000]/[0.5]'></div>
        <div>
          <GlassesHeader />
          <GlassesContent />
        </div>
      </div>
    </>
  );
}

export default GlassesPage;
