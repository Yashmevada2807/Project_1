import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { setUsers, setCurrentUser, setIsAuthenticated } from '../../features/product/productSlice'
import { useDispatch, useSelector } from 'react-redux'

const LoginPage = () => {

    const { users, currentuser, isAuthenticated } = useSelector(state => state.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required('Please Enter Name'),
            password: Yup.string()
                .required('Please Enter Password ')

        }),
        onSubmit: values => {
            const validateUser = users.find((user) => user.username === values.username && user.password === values.password)

            if (validateUser) {
                dispatch(setCurrentUser(validateUser))
                localStorage.setItem('currentuser', JSON.stringify(validateUser))
                dispatch(setIsAuthenticated(true))
                localStorage.setItem('isAuthenticated', true)
                navigate('/')
            }
        }
    })

    return (
        <div className='min-w-[440px] w-[700px] h-[500px] bg-gray-900 overflow-hidden rounded-2xl '>
            <div className="header bg-[#35074e] py-2 flex justify-center border-b border-gray-500 items-center  w-full ">
                <h1 className='text-gray-300 text-4xl text-center px-10 py-4'>LogInPage</h1>
            </div>
            <div className="innterdiv flex justify-center pt-18 pb-15 items-center  bg-gray-900 ">
                <div className="form  w-[350px] max-w-[400px] ">
                    <form onSubmit={formik.handleSubmit} className='flex flex-col '>

                        <label className='text-gray-400 font-semibold py-1' htmlFor="username">Username</label>
                        <input
                            id='username'
                            name='username'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.username}
                            className='border-[1px] border-gray-600 rounded-md text-gray-400 placeholder:text-gray-500 px-6 py-2 '
                            type="text"
                            placeholder='Enter Username'
                        />
                        {formik.touched.username && formik.errors.username ? <p className='py-1 text-[11px] text-purple-600'>{formik.errors.username}</p> : null}
                        <label className='text-gray-400 font-semibold py-1' htmlFor="password">Password</label>
                        <input
                            id='password'
                            name='password'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            className='border-[1px] border-gray-600 rounded-md text-gray-400 placeholder:text-gray-500 px-6 py-2 ' type="password"
                            placeholder='Enter Password'
                        />
                        {formik.touched.password && formik.errors.password ? <p className='py-1 text-[11px] text-purple-600'>{formik.errors.password}</p> : null}
                        <div className="button flex justify-center items-center  pt-8 ">
                            <button type='submit' className='flex text-center justify-center rounded-md items-center py-2 w-full text-gray-300 bg-[#460967]'>LogIn</button>
                        </div>
                        <div className="footer pt-2 flex justify-center items-center">
                            <p className='text-gray-400 text-[12px]'>Don't have an account?
                                <Link to='/signin' className='text-[#820bc3] underline ml-1'>
                                    SignIn
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
