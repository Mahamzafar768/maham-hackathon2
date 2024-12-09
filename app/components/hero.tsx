import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <>
      <div className="w-full bg-white px-6 py-12 md:px-12 lg:px-[150px] flex flex-wrap gap-6 justify-center">
        {/* Card 1 */}
        <div className="h-[360px] w-full sm:w-[570px] bg-[#54A6FF] text-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">
            The Best Platform <br /> to rent a Car <br /> Rental
            </h2>
            <p className="mb-2">
              Providing cheap car rental services and safe and  <br /> comfortable facilities.
            </p>
            <button className="px-8 py-2 bg-[#3563E9] shadow-md rounded text-white hover:bg-blue-500">
              Rent car
            </button>
          </div>
          <div className="flex justify-center">
            <Image
              src={'/images/3.png'}
              width={300}
              height={300}
              alt="car"
              className="mt-4 sm:mt-0 ml-auto sm:ml-[120px]"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="h-[360px] w-full sm:w-[570px] bg-[#3563E9] text-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">
              Easy way to rent <br /> a car at a low <br /> price
            </h2>
            <p className="mb-2">
            Providing cheap bike rental services and safe and <br /> comfortable facilities.
            </p>
            <button className="px-8 py-2 bg-[#54A6FF] shadow-md  rounded text-white hover:bg-blue-500">
              Rent Bike
            </button>
          </div>
          <div className="flex justify-center">
            <Image
              src={'/images/2.png'}
              width={300}
              height={300}
              alt="car"
              className="mt-4 sm:mt-0 ml-auto sm:ml-[120px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
