import React from "react";

const Rentcar = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col gap-6 md:flex-row md:px-8 lg:px-24 py-6">
        {/* Left content */}
        <div className="md:w-1/2 w-full h-auto border border-black bg-white rounded-md p-6">
          <div>
            <h1 className="text-2xl font-bold mb-2">Billing Info</h1>
          </div>
          <div className="flex justify-between items-center mb-6">
            <p className="text-[#90ABD5]">Please enter your billing info</p>
            <p className="text-[#90ABD5]">Step 1 of 4</p>
          </div>

          <div className="my-4">
            <form action="">
              {/* First Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xl font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="bg-[#F6F7F9] p-4 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xl font-bold mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="bg-[#F6F7F9] p-4 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="address"
                    className="block text-xl font-bold mb-2"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="Address"
                    className="bg-[#F6F7F9] p-4 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-xl font-bold mb-2"
                  >
                    Town/City
                  </label>
                  <input
                    type="text"
                    placeholder="Town or City"
                    className="bg-[#F6F7F9] p-4 w-full rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Right content */}
        <div className="md:w-1/2 w-full h-auto bg-gray-100 rounded-md p-6">
          <h2 className="text-xl font-bold">Additional Details</h2>
          {/* Add any right-side content here */}
          <p className="text-gray-600 mt-4">
            You can add more features or summaries here.
          </p>
        </div>
      </div>
    </>
  );
};

export default Rentcar;
