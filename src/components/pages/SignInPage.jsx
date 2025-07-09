import React from 'react'

const SignInPage = () => {
    return (
        <div className='min-w-[440px] w-[700px] bg-gray-900 overflow-hidden rounded-2xl '>
            <div className="header bg-[#35074e] py-2 flex justify-center border-b border-gray-500 items-center  w-full ">
                <h1 className='text-gray-300 text-4xl text-center px-10 py-4'>SignInPage</h1>
            </div>
            <div className="innterdiv flex justify-center pt-10 pb-15 items-center  bg-gray-900 ">
                <div className="form  w-[350px] max-w-[400px] ">
                    <form action="submit" className='flex flex-col '>
                        <label className='text-gray-400 font-semibold py-1' htmlFor="name">Name</label>
                        <input className='border-[1px] border-gray-600 rounded-md text-gray-400 placeholder:text-gray-500 px-6 py-2 ' type="text" placeholder='Enter Your Name' />
                        <label className='text-gray-400 font-semibold py-1' htmlFor="email">Email</label>
                        <input className='border-[1px] border-gray-600 rounded-md text-gray-400 placeholder:text-gray-500 px-6 py-2 ' type="email" placeholder='Enter Your Email' />
                        <label className='text-gray-400 font-semibold py-1' htmlFor="phone">PhoneNo</label>
                        <input className='border-[1px] border-gray-600 rounded-md text-gray-400 placeholder:text-gray-500 px-6 py-2 ' type="tel" placeholder='Enter Your Phone No.' />
                        <label className='text-gray-400 font-semibold py-1' htmlFor="username">Username</label>
                        <input className='border-[1px] border-gray-600 rounded-md text-gray-400 placeholder:text-gray-500 px-6 py-2 ' type="text" placeholder='Enter Username' />
                        <label className='text-gray-400 font-semibold py-1' htmlFor="password">Password</label>
                        <input className='border-[1px] border-gray-600 rounded-md text-gray-400 placeholder:text-gray-500 px-6 py-2 ' type="password" placeholder='Enter Password' />
                        <div className="button flex justify-center items-center  pt-8 ">
                            <button className='flex text-center justify-center rounded-md items-center py-2 w-full text-gray-300 bg-[#460967]'>SignIn</button>
                        </div>
                        <div className="footer pt-2 flex justify-center items-center">
                            <p className='text-gray-400 text-[12px]'>Already have an account? <span className='text-[#820bc3] underline'>Login</span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignInPage

