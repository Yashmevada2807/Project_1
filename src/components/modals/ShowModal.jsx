import React from 'react'

const ShowModal = ({ CancelLogOut, ContinueLogOut }) => {
    return (
        <>
            <div className="w-full fixed z-2 left-0 bottom-0 right-0 top-0 bg-gray-950 opacity-70">

            </div>
                <div className='w-[480px] max-w-[500px] border-[1px] border-[#491664] fixed z-16 top-[50%] left-[50%] -translate-1/2  bg-[#190524] rounded-2xl  px-12 py-20'>
                    <h1 className='text-white text-2xl flex justify-center items-center'>Are You Sure You Want To LogOut?</h1>
                    <div className='flex w-full justify-center pt-8 items-center gap-4'>
                        <button onClick={ContinueLogOut} className='px-8 py-2 text-white rounded-md flex justify-center items-center  bg-[#4e1a69] cursor-pointer'>Yes</button>
                        <button onClick={CancelLogOut} className='px-8 py-2 text-white rounded-md flex justify-center items-center bg-[#4e1a69] cursor-pointer'>No</button>
                    </div>
                </div>
        </>
    )
}

export default ShowModal
