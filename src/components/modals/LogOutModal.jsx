import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout, removeProductsAfterLogout } from '../../features/product/productSlice'
import ShowModal from './ShowModal'
import { persistor } from '../../app/store'

const LogOutModal = () => {
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate

  const handleLogOutModal = () => {
    setShowModal(true)
  }

  const CancelLogOut = () => {
    setShowModal(false)
  }

  const ContinueLogOut = () => {
    dispatch(logout())
    dispatch(removeProductsAfterLogout())
    persistor.purge().then(() => {
      navigate('/')
    })
  }

  return (
    <>
      <button onClick={handleLogOutModal} className='bg-[#4e1a69] px-5 py-2 rounded-md text-gray-100'>
        Logout
      </button>
      {showModal && <ShowModal ContinueLogOut={ContinueLogOut} CancelLogOut={CancelLogOut} />}
    </>
  )
}

export default LogOutModal
