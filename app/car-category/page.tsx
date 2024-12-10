'use client'
import React from 'react';
import { IoSwapHorizontalSharp } from "react-icons/io5";
import { FaGasPump, FaCogs, FaUsers } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const CarDetail = () => {
  const router = useRouter();
  const handleNavigation = () => {
    router.push('/detail'); // Navigates to the "/detail-category" page
  };
  return (
    <div className="w-full h-auto flex md:flex-row flex-col gap-6 md:px-12 lg:px-[150px]">
      {/* Left Section */}
      <div className="w-full md:w-[20%] h-auto bg-white rounded-lg shadow-md p-6">
        <div className="space-y-6">
          {/* TYPES Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">TYPES</h3>
            <div className="space-y-2">
              {["Sport", "MPV", "SUV", "Couple", "Sedan", "Hatchback"].map((type) => (
                <div key={type} className="flex items-center">
                  <input
                    type="checkbox"
                    id={type}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor={type} className="ml-2 text-gray-700">
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* CAPACITY Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">CAPACITY</h3>
            <div className="space-y-2">
              {["2 Persons", "4 Persons", "6 Persons", "8 or More Persons"].map((capacity) => (
                <div key={capacity} className="flex items-center">
                  <input
                    type="checkbox"
                    id={capacity}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor={capacity} className="ml-2 text-gray-700">
                    {capacity}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* PRICE Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">PRICE</h3>
            <div className="flex items-center">
              <input
                type="range"
                min="0"
                max="100"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="ml-3 text-gray-700">MAX: $0.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[80%] h-auto bg-white rounded-lg shadow-md p-6">
        <div className="w-full flex flex-wrap md:flex-nowrap items-center gap-6">
          {/* Pick-Up Section */}
          <div className="w-full md:w-[70%] bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Pick-Up</h2>
            <form>
              <div className="flex flex-wrap md:flex-nowrap gap-4 items-center">
                {/* Location Field */}
                <div className="w-full">
                  <label className="block font-medium mb-2" htmlFor="pickup-location">
                    Location
                  </label>
                  <input type="text" placeholder='Enter location' id='pickup-location' className="w-full border-b border-black outline-none  px-3 py-2  "/>
                </div>

                {/* Date Field */}
                <div className="w-full">
                  <label className="block  font-medium mb-2" htmlFor="pickup-date">
                    Date
                  </label>
                  <input
                    type="date"
                    id="pickup-date"
                   className="w-full border-b border-black  px-3 py-2 outline-none "
                  />
                </div>

                {/* Time Field */}
                <div className="w-full">
                  <label className="block  font-medium mb-2" htmlFor="pickup-time">
                    Time
                  </label>
                  <input
                    type="time"
                    id="pickup-time"
                    className="w-full border-b border-black  px-3 py-2 outline-none "
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Swap Icon */}
          <div className="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-full shadow-md">
            <IoSwapHorizontalSharp size={30} className="text-white" />
          </div>

          {/* Drop-Off Section */}
          <div className="w-full md:w-[50%] bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Drop-Off</h2>
            <form>
              <div className="flex flex-wrap md:flex-nowrap gap-4 items-center">
                {/* Location Field */}
                <div className="w-full">
                  <label className="block font-medium mb-2" htmlFor="dropoff-location">
                    Location
                  </label>
                  <input type="text" placeholder='Enter location' id='dropoff-location' className="w-full border-b border-black  px-3 py-2  outline-none"/>
                </div>

                {/* Date Field */}
                <div className="w-full">
                  <label className="block  font-medium mb-2" htmlFor="dropoff-date">
                    Date
                  </label>
                  <input
                    type="date"
                    id="dropoff-date"
                    className="w-full  border-b border-black  px-3 py-2 outline-none "
                  />
                </div>

                {/* Time Field */}
                <div className="w-full">
                  <label className="block  font-medium mb-2" htmlFor="dropoff-time">
                    Time
                  </label>
                  <input
                    type="time"
                    id="dropoff-time"
                    className="w-full border-b border-black  px-3 py-2 outline-none"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
   <section >
  
  <div className="w-full bg-white px-6 md:px-4  flex flex-wrap  gap-4 justify-center bg-[#F6F7F9]">
    {/* First Car */}
    <div className="w-[30%]  mt-10 bg-white shadow-md rounded-lg overflow-hidden border">
      <div className="p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Koenigsegg</h3>
          <button className="text-red-500">
            <AiOutlineHeart size={24} />
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-4">Sport</p>
        {/* Image */}
        <div className="flex justify-center mb-4">
          <Image
            src="/images/1.png"
            width={300}
            height={300}
            alt="Koenigsegg"
            className="h-24"
          />
        </div>
        {/* Details */}
        <div className="flex justify-between text-[#90A3BF] text-sm mb-4">
          <div className="flex items-center">
            <FaGasPump className="mr-1 text-[#90A3BF]" size={20} />
            <span>90L</span>
          </div>
          <div className="flex items-center">
            <FaCogs className="mr-1 text-[#90A3BF]" size={20} />
            <span>Manual</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-1 text-[#90A3BF]" size={20} />
            <span>4 persons</span>
          </div>
        </div>
        {/* Price and Button */}
        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg font-bold text-gray-900">$200</span>
            <span className="text-sm text-gray-500">/day</span>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Rent Now
          </button>
        </div>
      </div>
    </div>
    <div className="w-[30%]  mt-10 bg-white shadow-md rounded-lg overflow-hidden border">
      <div className="p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Koenigsegg</h3>
          <button className="text-red-500">
            <AiOutlineHeart size={24} />
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-4">Sport</p>
        {/* Image */}
        <div className="flex justify-center mb-4">
          <Image
            src="/images/2.png"
            width={300}
            height={300}
            alt="Koenigsegg"
            className="h-24"
          />
        </div>
        {/* Details */}
        <div className="flex justify-between text-[#90A3BF] text-sm mb-4">
          <div className="flex items-center">
            <FaGasPump className="mr-1 text-[#90A3BF]" size={20} />
            <span>90L</span>
          </div>
          <div className="flex items-center">
            <FaCogs className="mr-1 text-[#90A3BF]" size={20} />
            <span>Manual</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-1 text-[#90A3BF]" size={20} />
            <span>4 persons</span>
          </div>
        </div>
        {/* Price and Button */}
        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg font-bold text-gray-900">$200</span>
            <span className="text-sm text-gray-500">/day</span>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={handleNavigation}>
            Rent Now
          </button>
        </div>
      </div>
    </div>
    <div className="w-[30%]  mt-10 bg-white shadow-md rounded-lg overflow-hidden border">
      <div className="p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Koenigsegg</h3>
          <button className="text-red-500">
            <AiOutlineHeart size={24} />
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-4">Sport</p>
        {/* Image */}
        <div className="flex justify-center mb-4">
          <Image
            src="/images/3.png"
            width={300}
            height={300}
            alt="Koenigsegg"
            className="h-24"
          />
        </div>
        {/* Details */}
        <div className="flex justify-between text-[#90A3BF] text-sm mb-4">
          <div className="flex items-center">
            <FaGasPump className="mr-1 text-[#90A3BF]" size={20} />
            <span>90L</span>
          </div>
          <div className="flex items-center">
            <FaCogs className="mr-1 text-[#90A3BF]" size={20} />
            <span>Manual</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-1 text-[#90A3BF]" size={20} />
            <span>4 persons</span>
          </div>
        </div>
        {/* Price and Button */}
        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg font-bold text-gray-900">$200</span>
            <span className="text-sm text-gray-500">/day</span>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Rent Now
          </button>
        </div>
      </div>
    </div>
    <div className="w-[30%]  mt-10 bg-white shadow-md rounded-lg overflow-hidden border">
      <div className="p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Koenigsegg</h3>
          <button className="text-red-500">
            <AiOutlineHeart size={24} />
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-4">Sport</p>
        {/* Image */}
        <div className="flex justify-center mb-4">
          <Image
            src="/images/4.png"
            width={300}
            height={300}
            alt="Koenigsegg"
            className="h-24"
          />
        </div>
        {/* Details */}
        <div className="flex justify-between text-[#90A3BF] text-sm mb-4">
          <div className="flex items-center">
            <FaGasPump className="mr-1 text-[#90A3BF]" size={20} />
            <span>90L</span>
          </div>
          <div className="flex items-center">
            <FaCogs className="mr-1 text-[#90A3BF]" size={20} />
            <span>Manual</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-1 text-[#90A3BF]" size={20} />
            <span>4 persons</span>
          </div>
        </div>
        {/* Price and Button */}
        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg font-bold text-gray-900">$200</span>
            <span className="text-sm text-gray-500">/day</span>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Rent Now
          </button>
        </div>
      </div>
    </div>
    <div className="w-[30%]  mt-10 bg-white shadow-md rounded-lg overflow-hidden border">
      <div className="p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Koenigsegg</h3>
          <button className="text-red-500">
            <AiOutlineHeart size={24} />
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-4">Sport</p>
        {/* Image */}
        <div className="flex justify-center mb-4">
          <Image
            src="/images/5.png"
            width={300}
            height={300}
            alt="Koenigsegg"
            className="h-24"
          />
        </div>
        {/* Details */}
        <div className="flex justify-between text-[#90A3BF] text-sm mb-4">
          <div className="flex items-center">
            <FaGasPump className="mr-1 text-[#90A3BF]" size={20} />
            <span>90L</span>
          </div>
          <div className="flex items-center">
            <FaCogs className="mr-1 text-[#90A3BF]" size={20} />
            <span>Manual</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-1 text-[#90A3BF]" size={20} />
            <span>4 persons</span>
          </div>
        </div>
        {/* Price and Button */}
        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg font-bold text-gray-900">$200</span>
            <span className="text-sm text-gray-500">/day</span>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Rent Now
          </button>
        </div>
      </div>
    </div>

    <div className="w-[30%]  mt-10 bg-white shadow-md rounded-lg overflow-hidden border">
      <div className="p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Koenigsegg</h3>
          <button className="text-red-500">
            <AiOutlineHeart size={24} />
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-4">Sport</p>
        {/* Image */}
        <div className="flex justify-center mb-4">
          <Image
            src="/images/7.png"
            width={300}
            height={300}
            alt="Koenigsegg"
            className="h-24"
          />
        </div>
        {/* Details */}
        <div className="flex justify-between text-[#90A3BF] text-sm mb-4">
          <div className="flex items-center">
            <FaGasPump className="mr-1 text-[#90A3BF]" size={20} />
            <span>90L</span>
          </div>
          <div className="flex items-center">
            <FaCogs className="mr-1 text-[#90A3BF]" size={20} />
            <span>Manual</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-1 text-[#90A3BF]" size={20} />
            <span>4 persons</span>
          </div>
        </div>
        {/* Price and Button */}
        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg font-bold text-gray-900">$200</span>
            <span className="text-sm text-gray-500">/day</span>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Rent Now
          </button>
        </div>
      </div>
    </div>
    <div className="w-[30%]  mt-10 bg-white shadow-md rounded-lg overflow-hidden border">
      <div className="p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Koenigsegg</h3>
          <button className="text-red-500">
            <AiOutlineHeart size={24} />
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-4">Sport</p>
        {/* Image */}
        <div className="flex justify-center mb-4">
          <Image
            src="/images/6.png"
            width={300}
            height={300}
            alt="Koenigsegg"
            className="h-24"
          />
        </div>
        {/* Details */}
        <div className="flex justify-between text-[#90A3BF] text-sm mb-4">
          <div className="flex items-center">
            <FaGasPump className="mr-1 text-[#90A3BF]" size={20} />
            <span>90L</span>
          </div>
          <div className="flex items-center">
            <FaCogs className="mr-1 text-[#90A3BF]" size={20} />
            <span>Manual</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-1 text-[#90A3BF]" size={20} />
            <span>4 persons</span>
          </div>
        </div>
        {/* Price and Button */}
        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg font-bold text-gray-900">$200</span>
            <span className="text-sm text-gray-500">/day</span>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Rent Now
          </button>
        </div>
      </div>
    </div>

    <div className="w-[30%]  mt-10 bg-white shadow-md rounded-lg overflow-hidden border">
      <div className="p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Koenigsegg</h3>
          <button className="text-red-500">
            <AiOutlineHeart size={24} />
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-4">Sport</p>
        {/* Image */}
        <div className="flex justify-center mb-4">
          <Image
            src="/images/8.png"
            width={300}
            height={300}
            alt="Koenigsegg"
            className="h-24"
          />
        </div>
        {/* Details */}
        <div className="flex justify-between text-[#90A3BF] text-sm mb-4">
          <div className="flex items-center">
            <FaGasPump className="mr-1 text-[#90A3BF]" size={20} />
            <span>90L</span>
          </div>
          <div className="flex items-center">
            <FaCogs className="mr-1 text-[#90A3BF]" size={20} />
            <span>Manual</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-1 text-[#90A3BF]" size={20} />
            <span>4 persons</span>
          </div>
        </div>
        {/* Price and Button */}
        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg font-bold text-gray-900">$200</span>
            <span className="text-sm text-gray-500">/day</span>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Rent Now
          </button>
        </div>
      </div>
    </div>

    <div className="w-[30%]  mt-10 bg-white shadow-md rounded-lg overflow-hidden border">
      <div className="p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Koenigsegg</h3>
          <button className="text-red-500">
            <AiOutlineHeart size={24} />
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-4">Sport</p>
        {/* Image */}
        <div className="flex justify-center mb-4">
          <Image
            src="/images/9.png"
            width={300}
            height={300}
            alt="Koenigsegg"
            className="h-24"
          />
        </div>
        {/* Details */}
        <div className="flex justify-between text-[#90A3BF] text-sm mb-4">
          <div className="flex items-center">
            <FaGasPump className="mr-1 text-[#90A3BF]" size={20} />
            <span>90L</span>
          </div>
          <div className="flex items-center">
            <FaCogs className="mr-1 text-[#90A3BF]" size={20} />
            <span>Manual</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-1 text-[#90A3BF]" size={20} />
            <span>4 persons</span>
          </div>
        </div>
        {/* Price and Button */}
        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg font-bold text-gray-900">$200</span>
            <span className="text-sm text-gray-500">/day</span>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Rent Now
          </button>
        </div>
      </div>
    </div>

    <div className="w-[30%]  mt-10 bg-white shadow-md rounded-lg overflow-hidden border">
      <div className="p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Koenigsegg</h3>
          <button className="text-red-500">
            <AiOutlineHeart size={24} />
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-4">Sport</p>
        {/* Image */}
        <div className="flex justify-center mb-4">
          <Image
            src="/images/10.png"
            width={300}
            height={300}
            alt="Koenigsegg"
            className="h-24"
          />
        </div>
        {/* Details */}
        <div className="flex justify-between text-[#90A3BF] text-sm mb-4">
          <div className="flex items-center">
            <FaGasPump className="mr-1 text-[#90A3BF]" size={20} />
            <span>90L</span>
          </div>
          <div className="flex items-center">
            <FaCogs className="mr-1 text-[#90A3BF]" size={20} />
            <span>Manual</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-1 text-[#90A3BF]" size={20} />
            <span>4 persons</span>
          </div>
        </div>
        {/* Price and Button */}
        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg font-bold text-gray-900">$200</span>
            <span className="text-sm text-gray-500">/day</span>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Rent Now
          </button>
        </div>
      </div>
    </div>

    <div className="w-[30%]  mt-10 bg-white shadow-md rounded-lg overflow-hidden border">
      <div className="p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Koenigsegg</h3>
          <button className="text-red-500">
            <AiOutlineHeart size={24} />
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-4">Sport</p>
        {/* Image */}
        <div className="flex justify-center mb-4">
          <Image
            src="/images/11.png"
            width={300}
            height={300}
            alt="Koenigsegg"
            className="h-24"
          />
        </div>
        {/* Details */}
        <div className="flex justify-between text-[#90A3BF] text-sm mb-4">
          <div className="flex items-center">
            <FaGasPump className="mr-1 text-[#90A3BF]" size={20} />
            <span>90L</span>
          </div>
          <div className="flex items-center">
            <FaCogs className="mr-1 text-[#90A3BF]" size={20} />
            <span>Manual</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-1 text-[#90A3BF]" size={20} />
            <span>4 persons</span>
          </div>
        </div>
        {/* Price and Button */}
        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg font-bold text-gray-900">$200</span>
            <span className="text-sm text-gray-500">/day</span>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Rent Now
          </button>
        </div>
      </div>
    </div>

    <div className="w-[30%]  mt-10 bg-white shadow-md rounded-lg overflow-hidden border">
      <div className="p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Koenigsegg</h3>
          <button className="text-red-500">
            <AiOutlineHeart size={24} />
          </button>
        </div>
        <p className="text-sm text-gray-500 mb-4">Sport</p>
        {/* Image */}
        <div className="flex justify-center mb-4">
          <Image
            src="/images/12.png"
            width={300}
            height={300}
            alt="Koenigsegg"
            className="h-24"
          />
        </div>
        {/* Details */}
        <div className="flex justify-between text-[#90A3BF] text-sm mb-4">
          <div className="flex items-center">
            <FaGasPump className="mr-1 text-[#90A3BF]" size={20} />
            <span>90L</span>
          </div>
          <div className="flex items-center">
            <FaCogs className="mr-1 text-[#90A3BF]" size={20} />
            <span>Manual</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-1 text-[#90A3BF]" size={20} />
            <span>4 persons</span>
          </div>
        </div>
        {/* Price and Button */}
        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg font-bold text-gray-900">$200</span>
            <span className="text-sm text-gray-500">/day</span>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Rent Now
          </button>
        </div>
      </div>
    </div>

    

    {/* Second Car */}
    

    {/* Third Car */}
    

    {/* Fourth Car */}
    

    

  
    
  </div>
</section>




      </div>
    </div>
  );
};

export default CarDetail;
