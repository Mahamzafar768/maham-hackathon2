'use client'
import React from 'react'
import { FaGasPump, FaCogs, FaUsers } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Selling = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/car-category'); // Navigates to the "/car-category" page
  };
    return (
        <>
    <section >
  <h1 className="px-6 md:px-12 lg:px-[150px] text-[#90A3BF] text-xl font-semibold">
    Most Sellings
  </h1>
  <div className="w-full bg-white px-6 md:px-12 lg:px-[150px] flex flex-wrap md:flex-nowrap gap-10 justify-center bg-[#F6F7F9]> ">
    {/* First Car */}
    <div className="w-full sm:w-[440px] mx-auto mt-10 bg-white shadow-md rounded-lg overflow-hidden border">
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
            <FaGasPump className="mr-1 text-[#90A3BF]" size={30} />
            <span>90L</span>
          </div>
          <div className="flex items-center">
            <FaCogs className="mr-1 text-[#90A3BF]" size={30} />
            <span>Manual</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-1 text-[#90A3BF]" size={30} />
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
    <div className="w-full sm:w-[440px] mx-auto mt-10 bg-white shadow-md rounded-lg overflow-hidden border">
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
            <FaGasPump className="mr-1 text-[#90A3BF]" size={30} />
            <span>90L</span>
          </div>
          <div className="flex items-center">
            <FaCogs className="mr-1 text-[#90A3BF]" size={30} />
            <span>Manual</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-1 text-[#90A3BF]" size={30} />
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

    {/* Third Car */}
    <div className="w-full sm:w-[440px] mx-auto mt-10 bg-white shadow-md rounded-lg overflow-hidden border">
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
            <FaGasPump className="mr-1 text-[#90A3BF]" size={30} />
            <span>90L</span>
          </div>
          <div className="flex items-center">
            <FaCogs className="mr-1 text-[#90A3BF]" size={30} />
            <span>Manual</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-1 text-[#90A3BF]" size={30} />
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

    {/* Fourth Car */}
    <div className="w-full sm:w-[440px] mx-auto mt-10 bg-white shadow-md rounded-lg overflow-hidden border">
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
            <FaGasPump className="mr-1 text-[#90A3BF]" size={30} />
            <span>90L</span>
          </div>
          <div className="flex items-center">
            <FaCogs className="mr-1 text-[#90A3BF]" size={30} />
            <span>Manual</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-1 text-[#90A3BF]" size={30} />
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
  </div>
</section>


<section >
  <h1 className="px-6 md:px-12 lg:px-[150px] text-[#90A3BF] text-xl font-semibold mt-6">
    Most Sellings
  </h1>
  <div className="w-full bg-white px-6 md:px-12 lg:px-[150px] flex flex-wrap md:flex-nowrap gap-10 justify-center">
    {/* First Car */}
    <div className="w-full sm:w-[440px] mx-auto mt-10 bg-white shadow-md rounded-lg overflow-hidden border">
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
            <FaGasPump className="mr-1 text-[#90A3BF]" size={30} />
            <span>90L</span>
          </div>
          <div className="flex items-center">
            <FaCogs className="mr-1 text-[#90A3BF]" size={30} />
            <span>Manual</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-1 text-[#90A3BF]" size={30} />
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
    <div className="w-full sm:w-[440px] mx-auto mt-10 bg-white shadow-md rounded-lg overflow-hidden border">
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
            <FaGasPump className="mr-1 text-[#90A3BF]" size={30} />
            <span>90L</span>
          </div>
          <div className="flex items-center">
            <FaCogs className="mr-1 text-[#90A3BF]" size={30} />
            <span>Manual</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-1 text-[#90A3BF]" size={30} />
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

    {/* Third Car */}
    <div className="w-full sm:w-[440px] mx-auto mt-10 bg-white shadow-md rounded-lg overflow-hidden border">
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
            <FaGasPump className="mr-1 text-[#90A3BF]" size={30} />
            <span>90L</span>
          </div>
          <div className="flex items-center">
            <FaCogs className="mr-1 text-[#90A3BF]" size={30} />
            <span>Manual</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-1 text-[#90A3BF]" size={30} />
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

    {/* Fourth Car */}
    <div className="w-full sm:w-[440px] mx-auto mt-10 bg-white shadow-md rounded-lg overflow-hidden border">
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
            <FaGasPump className="mr-1 text-[#90A3BF]" size={30} />
            <span>90L</span>
          </div>
          <div className="flex items-center">
            <FaCogs className="mr-1 text-[#90A3BF]" size={30} />
            <span>Manual</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-1 text-[#90A3BF]" size={30} />
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

    
  </div>
</section>

<section >
  
  <div className="w-full bg-white px-6 md:px-12 lg:px-[150px] flex flex-wrap md:flex-nowrap gap-10 justify-center">
    {/* First Car */}
    <div className="w-full sm:w-[440px] mx-auto mt-10 bg-white shadow-md rounded-lg overflow-hidden border">
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
            <FaGasPump className="mr-1 text-[#90A3BF]" size={30} />
            <span>90L</span>
          </div>
          <div className="flex items-center">
            <FaCogs className="mr-1 text-[#90A3BF]" size={30} />
            <span>Manual</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-1 text-[#90A3BF]" size={30} />
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
    <div className="w-full sm:w-[440px] mx-auto mt-10 bg-white shadow-md rounded-lg overflow-hidden border">
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
            <FaGasPump className="mr-1 text-[#90A3BF]" size={30} />
            <span>90L</span>
          </div>
          <div className="flex items-center">
            <FaCogs className="mr-1 text-[#90A3BF]" size={30} />
            <span>Manual</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-1 text-[#90A3BF]" size={30} />
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

    {/* Third Car */}
    <div className="w-full sm:w-[440px] mx-auto mt-10 bg-white shadow-md rounded-lg overflow-hidden border">
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
            <FaGasPump className="mr-1 text-[#90A3BF]" size={30} />
            <span>90L</span>
          </div>
          <div className="flex items-center">
            <FaCogs className="mr-1 text-[#90A3BF]" size={30} />
            <span>Manual</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-1 text-[#90A3BF]" size={30} />
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

    {/* Fourth Car */}
    <div className="w-full sm:w-[440px] mx-auto mt-10 bg-white shadow-md rounded-lg overflow-hidden border">
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
            <FaGasPump className="mr-1 text-[#90A3BF]" size={30} />
            <span>90L</span>
          </div>
          <div className="flex items-center">
            <FaCogs className="mr-1 text-[#90A3BF]" size={30} />
            <span>Manual</span>
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-1 text-[#90A3BF]" size={30} />
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

   
  </div>
  <div className='w-full h-auto  rounded-lg shadow-md flex flex-col items-center justify-center p-8'>
    <button className="mx-auto bg-blue-500 text-white text-xl px-4 py-2  hover:bg-blue-600 mt-8" onClick={handleNavigation}>
            Show more cars
          </button>
        
    </div>
</section>

        </>
    )
}

export default Selling