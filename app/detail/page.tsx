'use client'
import React from 'react';

import { FaHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaGasPump, FaCogs, FaUsers } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';


const CarDetails = () => {
    const [mainImage, setMainImage] = useState('/images/4.png');

    // Array of car images
    const carImages = ['/images/4.png', '/images/10.png', '/images/7.png'];
    return (
        <div className="w-full h-auto flex md:flex-row flex-col gap-6 md:px-12 lg:px-[150px]">
            {/* Left Section */}
            <div className="w-full md:w-[20%] h-auto bg-white  p-6">
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
            <div className="w-full md:w-[80%]  bg-[#F6F7F9]  p-6">
                <div className='flex md:flex-]row flex-col gap-4'>
                    {/* left div */}
                    <div className="w-full md:w-[47%] h-[50vh] shadow-sm shadow-gray  p-8">
                        {/* Main Image */}
                        <div className="px-6 py-8 shadow-lg shadow-gray  rounded-lg">
                            <Image src={mainImage} width={800} height={800} alt="Main Car" className="w-[100%]" />
                        </div>

                        {/* Thumbnails */}
                        <div className="mt-10 flex gap-2 items-center">
                            {carImages.map((image, index) => (
                                <div
                                    key={index}
                                    className={`w-[33%] px-2 py-8 rounded-md shadow-lg shadow-gray cursor-pointer ${mainImage === image ? 'border-2 border-blue-500' : ''
                                        }`}
                                    onClick={() => setMainImage(image)} // Update main image on click
                                >
                                    <Image src={image} width={800} height={800} alt={`Car Thumbnail ${index}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* right div */}
                    <div className="w-full md:w-[73%] h-auto shadow-sm bg-white shadow-gray p-8">
                        <div className='flex justify-between items-center'>
                            <h1 className='text-4xl font-bold'>Nissan GT - R</h1>
                            <div><FaHeart className='text-red-400' size={24} /></div>
                        </div>

                        <div className='flex gap-10 items-center mt-5'>
                            <div className='flex items-center gap-2'>
                                <FaStar className='text-yellow-400' />
                                <FaStar className='text-yellow-400' />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <p>440+ Reviewer</p>
                        </div>

                        <div className='mt-10'>
                            <h2 className='text-xl'>NISMO has become the embodiment of Nissan&rsquo;s outstanding performance, inspired by the most unforgiving proving ground, the &rdquo;Trace track&rdquo;.</h2>
                        </div>

                        <div className='mt-10 flex gap-[180px] items-center'>
                            <div>
                                <div>
                                    <h1 className='text-[#90ABD5] text-xl'>Gasoline</h1>
                                    <p className='text-2xl font-bold'>70L</p>
                                </div>
                                <div className='mt-5'>
                                    <h1 className='text-[#90ABD5] text-xl'>Steering</h1>
                                    <p className='text-2xl font-bold'>Manual</p>
                                </div>
                            </div>


                            <div>
                                <div>
                                    <h1 className='text-[#90ABD5] text-xl'>Type Car</h1>
                                    <p className='text-2xl font-bold'>Sport</p>
                                </div>
                                <div className='mt-5'>
                                    <h1 className='text-[#90ABD5] text-xl'>Capacity</h1>
                                    <p className='text-2xl font-bold'>2 Person</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-10'>
                            <div>
                                <h2 className='text-2xl font-bold'>$80.00/ <span className='text-[#90ABD5] text-lg'>days</span></h2>
                                <p className='text-[#90ABD5] text-lg'>$100.00</p>
                            </div>

                            <div>
                                <button className='bg-[#3563E9] text-white px-8 py-4 '>Rent Now</button>
                            </div>
                        </div>


                    </div>
                </div>

                <div className='mt-10 bg-white w-full h-auto  rounded-lg p-4'>
                    <div className='flex items-center gap-4'>
                        <h1 className='text-2xl font-bold'>Reviews</h1>
                        <p className='px-4 py-2 bg-[#3563E9] text-white  inline-block font-bold'>13</p>
                    </div>

                    <div className='mt-10 flex justify-between items-center'>
                        <div className='flex items-center gap-4'>
                            <Image src={'/images/profile.png'} width={80} height={80} alt='profile' className='rounded-full ' />
                            <div>
                                <h1 className='text-xl font-bold'>Alex Stanton</h1>
                                <p className='text-[#90ABD5]'>CEO at Bankok</p>
                            </div>

                        </div>
                        <div>
                            <p className='text-right'>21 July 2022</p>
                            <div className='flex  gap-2'>
                                <FaStar className='text-yellow-400' />
                                <FaStar className='text-yellow-400' />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                    </div>
                    <h1 className='ml-[100px] mt-4 '>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</h1>
                    <div className='mt-10 flex justify-between items-center'>
                        <div className='flex items-center gap-4'>
                            <Image src={'/images/profile.png'} width={80} height={80} alt='profile' className='rounded-full ' />
                            <div>
                                <h1 className='text-xl font-bold'>Alex Stanton</h1>
                                <p className='text-[#90ABD5]'>CEO at Bankok</p>
                            </div>

                        </div>
                        <div>
                            <p className='text-right'>21 July 2022</p>
                            <div className='flex  gap-2'>
                                <FaStar className='text-yellow-400' />
                                <FaStar className='text-yellow-400' />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                    </div>
                    
                    <h1 className='ml-[100px] mt-4 '>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</h1>
                    <div className='flex justify-center items-center my-8'>
                        <button>See all</button>
                    </div>

                    <div className='flex justify-between items-center md:px-8 px'>
                        <h1 className='text-[#90ABD5] text-xl font-bold'>Similar cars</h1>
                        <Link href={'#'} className='text-[#3563E9]'>View All</Link>
                    </div>
                    <div className="w-full bg-white  flex flex-wrap  gap-6 justify-center bg-[#F6F7F9]">
                    <div className="w-full sm:w-[100%] md:w-[45%] lg:w-[30%]   mt-10 bg-white shadow-md rounded-lg overflow-hidden border">
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
                    <div className="w-full sm:w-[100%] md:w-[45%] lg:w-[30%]   mt-10 bg-white shadow-md rounded-lg overflow-hidden border">
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
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                                    Rent Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-[100%] md:w-[45%] lg:w-[30%]   mt-10 bg-white shadow-md rounded-lg overflow-hidden border">
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
                    

                    </div>
                    
                </div>


            </div>


        </div>
    );
};

export default CarDetails;
