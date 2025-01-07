'use client';
import React from 'react';
import { FaGasPump, FaCogs, FaUsers } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const carsData = [
  {
    id: 1,
    name: "Koenigsegg",
    category: "Sport",
    imgSrc: "/images/3.png",
    fuelCapacity: "90L",
    transmission: "Manual",
    seating: "4 persons",
    price: "$200",
    imgAlt: "Car Image 1",
  },
  {
    id: 2,
    name: "Koenigsegg",
    category: "Sport",
    imgSrc: "/images/4.png",
    fuelCapacity: "90L",
    transmission: "Manual",
    seating: "4 persons",
    price: "$200",
    imgAlt: "Car Image 2",
  },
  {
    id: 3,
    name: "Koenigsegg",
    category: "Sport",
    imgSrc: "/images/2.png",
    fuelCapacity: "90L",
    transmission: "Manual",
    seating: "4 persons",
    price: "$200",
    imgAlt: "Car Image 3",
  },
  {
    id: 4,
    name: "Koenigsegg",
    category: "Sport",
    imgSrc: "/images/1.png",
    fuelCapacity: "90L",
    transmission: "Manual",
    seating: "4 persons",
    price: "$200",
    imgAlt: "Car Image 4",
  },
];

const recomndedCars = [
  {
    id: 1,
    name: "Koenigsegg",
    category: "Sport",
    imgSrc: "/images/1.png",
    fuelCapacity: "90L",
    transmission: "Manual",
    seating: "4 persons",
    price: "$200",
    imgAlt: "Car Image 1",
  },
  {
    id: 2,
    name: "Koenigsegg",
    category: "Sport",
    imgSrc: "/images/2.png",
    fuelCapacity: "90L",
    transmission: "Manual",
    seating: "4 persons",
    price: "$200",
    imgAlt: "Car Image 2",
  },
  {
    id: 3,
    name: "Koenigsegg",
    category: "Sport",
    imgSrc: "/images/3.png",
    fuelCapacity: "90L",
    transmission: "Manual",
    seating: "4 persons",
    price: "$200",
    imgAlt: "Car Image 3",
  },
  {
    id: 4,
    name: "Koenigsegg",
    category: "Sport",
    imgSrc: "/images/4.png",
    fuelCapacity: "90L",
    transmission: "Manual",
    seating: "4 persons",
    price: "$200",
    imgAlt: "Car Image 4",
  },
  {
    id: 5,
    name: "Koenigsegg",
    category: "Sport",
    imgSrc: "/images/5.png",
    fuelCapacity: "90L",
    transmission: "Manual",
    seating: "4 persons",
    price: "$200",
    imgAlt: "Car Image 4",
  },
  {
    id: 6,
    name: "Koenigsegg",
    category: "Sport",
    imgSrc: "/images/6.png",
    fuelCapacity: "90L",
    transmission: "Manual",
    seating: "4 persons",
    price: "$200",
    imgAlt: "Car Image 4",
  },
  {
    id: 7,
    name: "Koenigsegg",
    category: "Sport",
    imgSrc: "/images/7.png",
    fuelCapacity: "90L",
    transmission: "Manual",
    seating: "4 persons",
    price: "$200",
    imgAlt: "Car Image 4",
  },
  {
    id: 8,
    name: "Koenigsegg",
    category: "Sport",
    imgSrc: "/images/8.png",
    fuelCapacity: "90L",
    transmission: "Manual",
    seating: "4 persons",
    price: "$200",
    imgAlt: "Car Image 4",
  },
];

const Selling = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/car-category'); // Navigates to the "/car-category" page
  };

  const handleNavigationCars = () => {
    router.push('/detail'); // Navigates to the "/detail-category" page
  };

  return (
    <>
      {/* Most Sellings Section */}
      <section className='bg-white'>
        <h1 className="px-6 md:px-12 lg:px-[150px] text-[#90A3BF] text-xl font-semibold">
          Most Sellings
        </h1>
        <div className="w-full px-6 md:px-12 lg:px-[150px] flex flex-wrap md:flex-nowrap gap-10 justify-center">
          {carsData.map((car) => (
            <div key={car.id} className="w-full sm:w-[440px] mx-auto mt-10 shadow-md rounded-lg overflow-hidden border">
              <div className="p-4">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">{car.name}</h3>
                  <button className="text-red-500">
                    <AiOutlineHeart size={24} />
                  </button>
                </div>
                <p className="text-sm text-gray-500 mb-4">{car.category}</p>
                {/* Image */}
                <div className="flex justify-center mb-4">
                  <Image
                    src={car.imgSrc}
                    width={300}
                    height={300}
                    alt={car.imgAlt}
                    className="h-24"
                  />
                </div>
                {/* Details */}
                <div className="flex justify-between text-[#90A3BF] text-sm mb-4">
                  <div className="flex items-center">
                    <FaGasPump className="mr-1 text-[#90A3BF]" size={30} />
                    <span>{car.fuelCapacity}</span>
                  </div>
                  <div className="flex items-center">
                    <FaCogs className="mr-1 text-[#90A3BF]" size={30} />
                    <span>{car.transmission}</span>
                  </div>
                  <div className="flex items-center">
                    <FaUsers className="mr-1 text-[#90A3BF]" size={30} />
                    <span>{car.seating}</span>
                  </div>
                </div>
                {/* Price and Button */}
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-lg font-bold text-gray-900">{car.price}</span>
                    <span className="text-sm text-gray-500">/day</span>
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={handleNavigationCars}>
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Cars Section */}
      <section className='bg-white'>
        <h1 className="px-6 md:px-12 lg:px-[150px] text-[#90A3BF] text-xl font-semibold my-10">
          Recommended Cars
        </h1>
        <div className="w-full px-6 md:px-12 lg:px-[150px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {recomndedCars.map((car) => (
            <div key={car.id} className="w-full shadow-md rounded-lg overflow-hidden border">
              <div className="p-4">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">{car.name}</h3>
                  <button className="text-red-500">
                    <AiOutlineHeart size={24} />
                  </button>
                </div>
                <p className="text-sm text-gray-500 mb-4">{car.category}</p>
                {/* Image */}
                <div className="flex justify-center mb-4">
                  <Image
                    src={car.imgSrc}
                    width={300}
                    height={300}
                    alt={car.imgAlt}
                    className="h-24"
                  />
                </div>
                {/* Details */}
                <div className="flex justify-between text-[#90A3BF] text-sm mb-4">
                  <div className="flex items-center">
                    <FaGasPump className="mr-1 text-[#90A3BF]" size={30} />
                    <span>{car.fuelCapacity}</span>
                  </div>
                  <div className="flex items-center">
                    <FaCogs className="mr-1 text-[#90A3BF]" size={30} />
                    <span>{car.transmission}</span>
                  </div>
                  <div className="flex items-center">
                    <FaUsers className="mr-1 text-[#90A3BF]" size={30} />
                    <span>{car.seating}</span>
                  </div>
                </div>
                {/* Price and Button */}
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-lg font-bold text-gray-900">{car.price}</span>
                    <span className="text-sm text-gray-500">/day</span>
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={handleNavigationCars}>
                    Rent Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center my-10">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={handleNavigation}>Show More Cars</button>
        </div>
      </section>
    </>
  );
};

export default Selling;
