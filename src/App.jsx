import { useState } from 'react'
import SignInPage from './components/pages/SignInPage'
import LoginPage from './components/pages/LoginPage'
import Dashboard from './components/pages/Dashboard'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProductPage from './components/pages/ProductPage'
import ProductDetailPage from './components/pages/ProductDetailPage'
import HeaderSection from './components/HeaderSection'
import LogOutModal from './components/modals/LogOutModal'
import ProductCartPage from './components/pages/ProductCartPage'

function App() {

  const { isAuthenticated } = useSelector(state => state.users)

  return (

    <div className='w-full min-h-screen flex flex-col bg-gray-950'>
      <div className="header w-full fixed z-12  top-0 ">
        {isAuthenticated ? <HeaderSection/> : null}
      </div>
      <Routes>
        <Route path='/' element={isAuthenticated ? <Navigate to='/dashboard' /> : <LoginPage />} />
        <Route path='/signin' element={isAuthenticated ? <Dashboard /> : <SignInPage />} />
        <Route path='/dashboard' element={isAuthenticated ? <Dashboard /> : <Navigate to='/' />} />
        <Route path={`/products/:id`} element={isAuthenticated ? <ProductDetailPage /> : <Navigate to='/' />} />
        <Route path={`/cart`} element={isAuthenticated ? <ProductCartPage/> : <Navigate to='/'/>} />
      </Routes>
      
    </div>

  )
}

export default App
