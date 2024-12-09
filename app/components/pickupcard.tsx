import React from 'react';
import { IoSwapHorizontalSharp } from "react-icons/io5";

const PickupCard = () => {
  return (
    <>
      <div className="w-full bg-white px-6 py-12 md:px-12 lg:px-[150px] flex flex-wrap md:flex-nowrap items-center gap-12">
        {/* Pick-Up Section */}
        <div className="h-auto w-full md:w-[570px] bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Pick-Up</h2>
          <form>
            <div className="flex flex-wrap md:flex-nowrap gap-4">
              {/* Location Field */}
              <div className="w-full md:w-1/3">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="location">
                  Location
                </label>
                <select
                  id="location"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
                >
                  <option>Select your city</option>
                  <option>City 1</option>
                  <option>City 2</option>
                  <option>City 3</option>
                </select>
              </div>

              {/* Date Field */}
              <div className="w-full md:w-1/3">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="date">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>

              {/* Time Field */}
              <div className="w-full md:w-1/3">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="time">
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Swap Icon */}
        <div className="flex justify-center items-center w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-md shadow-md md:mx-0 mx-auto">
          <IoSwapHorizontalSharp size={30} className="text-white md:text-[40px]" />
        </div>

        {/* Drop-Off Section */}
        <div className="h-auto w-full md:w-[570px] bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Drop-Off</h2>
          <form>
            <div className="flex flex-wrap md:flex-nowrap gap-4">
              {/* Location Field */}
              <div className="w-full md:w-1/3">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="location">
                  Location
                </label>
                <select
                  id="location"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
                >
                  <option>Select your city</option>
                  <option>City 1</option>
                  <option>City 2</option>
                  <option>City 3</option>
                </select>
              </div>

              {/* Date Field */}
              <div className="w-full md:w-1/3">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="date">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>

              {/* Time Field */}
              <div className="w-full md:w-1/3">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="time">
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PickupCard;
