import { useState } from 'react'
import SignInPage from './components/pages/SignInPage'
import LoginPage from './components/pages/LoginPage'
import Dashboard from './components/pages/Dashboard'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProductPage from './components/pages/ProductPage'
import ProductDetailPage from './components/pages/ProductDetailPage'

function App() {
  
  const { isAuthenticated } = useSelector(state => state.users)

  return (

    <div className='w-full min-h-screen flex justify-center items-center bg-gray-950'>
      <Routes>
        <Route path='/' element={isAuthenticated ? <Navigate to='/dashboard'/> : <LoginPage />} />
        <Route path='/signin' element={isAuthenticated ? <Dashboard/> : <SignInPage />} />
        <Route path='/dashboard' element={isAuthenticated ? <Dashboard /> : <Navigate to='/'/>} />
        <Route path={`/products/:id`}id element={<ProductDetailPage/>}/>
      </Routes>
    </div>

  )
}

export default App
