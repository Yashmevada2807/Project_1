import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { setUsers, setCurrentUser, setIsAuthenticated } from '../../features/product/productSlice'
import { useDispatch, useSelector } from 'react-redux'

const LoginPage = () => {

    const { users, currentuser, isAuthenticated } = useSelector(state => state.users)
    const [showPassword, setShowPassword] = useState(true)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const validate = values => {
        const errors = {}

        if (!values.username) {
            errors.username = 'Please Enter Username'
        } else {
            const userExists = users.find(user => user.username === values.username)
            if (!userExists) {
                errors.username = 'Username not found'

            }
        }

        if (!values.password) {
            errors.password = 'Please Enter Password'
        } else {
            const userExists = users.find(user => user.username === values.username)
            if (userExists && userExists.password !== values.password) {
                errors.password = 'Incorrect password'

            }
        }

        return errors
    }



    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: values => {
            const validateUser = users.find((user) => user.username === values.username && user.password === values.password)

            if (validateUser) {
                dispatch(setCurrentUser(validateUser))
                // localStorage.setItem('currentuser', JSON.stringify(validateUser))
                dispatch(setIsAuthenticated(true))
                // localStorage.setItem('isAuthenticated', true)
                navigate('/')
            }
        }
    })

    return (
        <div className="w-full max-w-[700px] min-w-[320px] mx-auto h-auto md:h-[440px] bg-gray-900 overflow-hidden rounded-2xl">
            <div className="header bg-[#35074e] py-2 flex justify-center border-b border-gray-500 items-center w-full">
                <h1 className="text-gray-300 text-4xl text-center px-6 py-4">Login</h1>
            </div>
            <div className="innterdiv flex justify-center items-center py-8 bg-gray-900">
                <div className="form w-full max-w-[400px] px-4">
                    <form onSubmit={formik.handleSubmit} className="flex flex-col">
                        <label className="text-gray-400 font-semibold py-1" htmlFor="username">Username</label>
                        <input
                            id="username"
                            name="username"
                            onChange={formik.handleChange}
                            value={formik.values.username}
                            className="border border-gray-600 rounded-md text-gray-400 placeholder:text-gray-500 px-4 py-2"
                            type="text"
                            placeholder="Enter Username"
                        />
                        {formik.touched.username && formik.errors.username && (
                            <p className="py-1 text-[11px] text-red-700">{formik.errors.username}</p>
                        )}

                        <label className="text-gray-400 font-semibold py-1" htmlFor="password">Password</label>
                        <div className="relative ">
                            <input
                                id="password"
                                name="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                className="border border-gray-600 w-full rounded-md text-gray-400 placeholder:text-gray-500 px-4 py-2"
                                type={showPassword ? "password" : "text"}
                                placeholder="Enter Password"
                            />
                            <button
                                type='button'
                                onClick={() => setShowPassword(!showPassword)}
                                className='absolute right-1 text-white p-1 -top-1 '>
                                {showPassword ? <svg width="45px" height="45px" viewBox="-18.72 -18.72 61.44 61.44" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.83 9.17999C14.2706 8.61995 13.5576 8.23846 12.7813 8.08386C12.0049 7.92926 11.2002 8.00851 10.4689 8.31152C9.73758 8.61453 9.11264 9.12769 8.67316 9.78607C8.23367 10.4444 7.99938 11.2184 8 12.01C7.99916 13.0663 8.41619 14.08 9.16004 14.83" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 16.01C13.0609 16.01 14.0783 15.5886 14.8284 14.8384C15.5786 14.0883 16 13.0709 16 12.01" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17.61 6.39004L6.38 17.62C4.6208 15.9966 3.14099 14.0944 2 11.99C6.71 3.76002 12.44 1.89004 17.61 6.39004Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20.9994 3L17.6094 6.39" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6.38 17.62L3 21" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M19.5695 8.42999C20.4801 9.55186 21.2931 10.7496 21.9995 12.01C17.9995 19.01 13.2695 21.4 8.76953 19.23" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>: <svg width="45px" height="45px" viewBox="-15.84 -15.84 55.68 55.68" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 16.01C14.2091 16.01 16 14.2191 16 12.01C16 9.80087 14.2091 8.01001 12 8.01001C9.79086 8.01001 8 9.80087 8 12.01C8 14.2191 9.79086 16.01 12 16.01Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M2 11.98C8.09 1.31996 15.91 1.32996 22 11.98" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22 12.01C15.91 22.67 8.09 22.66 2 12.01" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> }

                                 
                            </button>
                        </div>
                        {formik.touched.password && formik.errors.password && (
                            <p className="py-1 text-[11px] text-red-700">{formik.errors.password}</p>
                        )}

                        <div className="button flex justify-center items-center pt-8">
                            <button type="submit" className="w-full py-2 rounded-md text-gray-300 bg-[#460967]">LogIn</button>
                        </div>

                        <div className="footer pt-4 flex justify-center items-center">
                            <p className="text-gray-400 text-sm">
                                Don't have an account?
                                <Link to="/signin" className="text-[#820bc3] underline ml-1">SignIn</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default LoginPage
