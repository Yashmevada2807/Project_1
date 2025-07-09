import { useState } from 'react'
import SignInPage from './components/pages/SignInPage'
import LoginPage from './components/pages/LoginPage'
import Dashboard from './components/pages/Dashboard'



function App() {

  return (
    <>
     <div className='w-full min-h-screen flex justify-center items-center bg-gray-950'>
      {/* <SignInPage/> */}
      {/* <LoginPage/> */}
      <Dashboard/>
     </div>
    </>
  )
}

export default App
