import React from 'react'

const SignInPage = () => {
  return (
    <div className='max-w-[700px]  bg-gray-800 p-1'>
        <div className="innterdiv bg-gray-700 ">
            <div className="header px-7 py-2 flex justify-center items-center border w-full ">
                <h1>SignInPage</h1>
            </div>
            <div className="form px-4 py-4 border">
                <form action="submit" className='flex flex-col'>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Enter Your Name' />
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Enter Your Email' />
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignInPage

