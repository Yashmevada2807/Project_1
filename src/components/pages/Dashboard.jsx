import React from 'react'
import { setUsers, setCurrentUser, setIsAuthenticated , logout } from '../../features/product/productSlice'
import { removeProductsAfterLogout } from '../../features/product/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ProductPage from './ProductPage'
import { persistor } from '../../app/store'
import HeaderSection from '../HeaderSection'
const Dashboard = () => {

  


  
  return (
    <div className='w-full min-h-screen bg-gray-950  '>
        
        <div className="content flex justify-center items-center px-2 ">
            <ProductPage/>
        </div>
    </div>
  )
}

export default Dashboard
