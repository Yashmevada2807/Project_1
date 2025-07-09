import React from 'react'

const Dashboard = () => {
  return (
    <div className='w-full min-h-screen bg-gray-950  '>
        <div className="header flex justify-between items-center border-b border-gray-600 px-6 w-full bg-[#180323]  py-6">
            <h1 className='text-gray-300 text-3xl'>Hello <span className='uppercase'>User</span></h1>
            <button className='bg-orange-500 px-5 py-2 rounded-md text-gray-100'>LogOut</button>
        </div>
        <div className="content flex justify-center items-center p-4">
            <p className='text-5xl flex justify-center py-10 items-center text-white'>Products Will Be Coming Soon...</p>
        </div>
    </div>
  )
}

export default Dashboard
