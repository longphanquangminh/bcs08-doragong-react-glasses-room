import { useState } from "react";
import { GLASSES_DATA } from "../../assets/glassesImage/GlassesData";

type GLASSES_DATA_TYPE = {
  id: number;
  price: number;
  name: string;
  url: string;
  desc: string;
};

function GlassesContent() {
  const [hasClickedImage, setHasClickedImage] = useState(false);
  const [chosenImage, setChosenImage] = useState({ name: "", desc: "", url: "" });
  return (
    <>
      <div className='grid gap-12 mt-3'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='flex justify-center items-center'>
            <div className='relative mb-5'>
              <img className='w-64 mx-auto' src='../../../src/assets/glassesImage/model.jpg' />
              <img className='absolute top-20 left-14 w-[140px] opacity-70' src={chosenImage.url} />
              {hasClickedImage && (
                <div className='absolute bottom-0 left-0 w-full h-[120px] p-2 bg-[#fac664]/[0.5]'>
                  <div className='text-[#8e38c3] font-bold mb-2'>{chosenImage.name}</div>
                  <div className='text-justify'>{chosenImage.desc}</div>
                </div>
              )}
            </div>
          </div>
          <div className='flex justify-center items-center mb-5'>
            <img className='w-64 mx-auto' src='../../../src/assets/glassesImage/model.jpg' />
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='flex justify-center items-center bg-[#fff] rounded-lg p-3'>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6'>
              {GLASSES_DATA.map((item: GLASSES_DATA_TYPE, index: number) => (
                <img
                  className='w-48 h-24 object-contain border-black border-2 p-3 mx-auto rounded-lg cursor-pointer'
                  src={item.url}
                  alt={item.name}
                  key={index}
                  onClick={() => {
                    setChosenImage(item);
                    setHasClickedImage(true);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GlassesContent;
