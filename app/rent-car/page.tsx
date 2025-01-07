import React from 'react'


const Rentcar = () => {
  return (
    <>
    <div  className="w-full h-auto flex md:flex-row flex-col gap-6 md:px-12 lg:px-[150px] py-6">
        <div className='w-[50%] h-auto border border-black bg-white rounded-md p-4'>
                <div>
                    <h1 className='text-2xl font-bold'>Billing Info</h1>
                </div>
                <div className='flex justify-between items-center'>
                <p className='text-[#90ABD5]'>Please enter your billing info</p>
                 <p className=' text-[#90ABD5]'>Step 1 of 4</p>
                </div>

                <div className='my-8'>
                    <form action="">
                        <div className='flex gap-24 w-full my-8'>
                        <div>
                            <label htmlFor="name" className='block text-xl font-bold'>Name</label>
                            <input type="text" placeholder='Your name' className='bg-[#F6F7F9] p-4 w-[125%] rounded-md'/>
                        </div>
                        <div>
                            <label htmlFor="name" className='block text-xl font-bold '>Phone Number</label>
                            <input type="text" placeholder='Phone number' className='bg-[#F6F7F9] p-4 w-[125%] rounded-md'/>
                        </div>

                        </div>
                        <div className='flex gap-24 w-full'>
                        <div>
                            <label htmlFor="name" className='block text-xl font-bold'>Address</label>
                            <input type="text" placeholder='Address' className='bg-[#F6F7F9] p-4 w-[125%] rounded-md'/>
                        </div>
                        <div>
                            <label htmlFor="name" className='block text-xl font-bold '>Town/City</label>
                            <input type="text" placeholder='Town or City' className='bg-[#F6F7F9] p-4 w-[125%] rounded-md'/>
                        </div>

                        </div>
                    </form>


                </div>     
        </div>

        {/* right content */}
        <div></div>
    </div>
    </>
  )
}

export default Rentcar