import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUsers, setCurrentUser, setIsAuthenticated } from '../../features/product/productSlice'
import { Link } from 'react-router-dom'


const SignInPage = () => {

    const { users, currentuser, isAuthenticated } = useSelector(state => state.users)
    const dispatch = useDispatch()

    const validate = values => {

        const errors = {}

        if (!values.name) {
            errors.name = 'Please Enter Name'
        }

        if (!values.email) {
            errors.email = 'Please Enter Email'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Enter Valid Email'
        }

        if (!values.phone) {
            errors.phone = 'Please Enter Phone No.'
        } else if (!/^[0-9]{10}$/.test(values.phone)) {
            errors.phone = 'Phone number must be exactly 10 digits'
        }

        if (!values.username) {
            errors.username = 'Please Enter Username'
        }

        if (!values.password) {
            errors.password = 'Please Enter Password'
        } else {
            if (values.password.length < 6) {
                errors.password = 'Password must be at least 6 characters';
            } else if (!/[A-Z]/.test(values.password)) {
                errors.password = 'Password must contain at least one uppercase letter';
            } else if (!/[a-z]/.test(values.password)) {
                errors.password = 'Password must contain at least one lowercase letter';
            } else if (!/[0-9]/.test(values.password)) {
                errors.password = 'Password must contain at least one number';
            } else if (!/[@$!%*?&#^()_+\-=[\]{};':"\\|,.<>/?]/.test(values.password)) {
                errors.password = 'Password must contain at least one special character';
            }
        }

        return errors
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            username: '',
            password: ''
        },
        validate,
        onSubmit: values => {
            const newUser = {
                id: Date.now(),
                name: values.name,
                email: values.email,
                phone: values.phone,
                username: values.username,
                password: values.password
            }
            dispatch(setUsers(newUser))
            localStorage.setItem('users', JSON.stringify([...users, newUser]))
            dispatch(setCurrentUser(newUser))
            localStorage.setItem('currentuser', JSON.stringify(newUser))
            dispatch(setIsAuthenticated(true))
            localStorage.setItem('isAuthenticated', true)
            // console.log(users);

            values.name = ''
            values.email = ''
            values.phone = ''
            values.email = ''
            values.username = ''
            values.password = ''
        }
    })


    return (
        <div className='min-w-[440px] w-[700px] bg-gray-900 overflow-hidden rounded-2xl '>
            <div className="header bg-[#35074e] py-2 flex justify-center border-b border-gray-500 items-center  w-full ">
                <h1 className='text-gray-300 text-4xl text-center px-10 py-4'>SignInPage</h1>
            </div>
            <div className="innterdiv flex justify-center pt-10 pb-15 items-center  bg-gray-900 ">
                <div className="form  w-[350px] max-w-[400px] ">
                    <form onSubmit={formik.handleSubmit} className='flex flex-col '>
                        <label className='text-gray-400 font-semibold py-1' htmlFor="name">Name</label>
                        <input
                            id='name'
                            name='name'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            className='border-[1px] border-gray-600 rounded-md text-gray-400 placeholder:text-gray-500 px-6 py-2 '
                            type="text"
                            placeholder='Enter Your Name'
                        />
                        {formik.touched.name && formik.errors.name ? <p className='py-1 text-[11px] text-purple-600'>{formik.errors.name}</p> : null}
                        <label className='text-gray-400 font-semibold py-1' htmlFor="email">Email</label>
                        <input
                            id='email'
                            name='email'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className='border-[1px] border-gray-600 rounded-md text-gray-400 placeholder:text-gray-500 px-6 py-2 '
                            type="email"
                            placeholder='Enter Your Email' />
                        {formik.touched.email && formik.errors.email ? <p className='py-1 text-[11px] text-purple-600'>{formik.errors.email}</p> : null}
                        <label className='text-gray-400 font-semibold py-1' htmlFor="phone">PhoneNo</label>
                        <input
                            id='phone'
                            name='phone'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
                            className='border-[1px] border-gray-600 rounded-md text-gray-400 placeholder:text-gray-500 px-6 py-2 '
                            type="tel"
                            placeholder='Enter Your Phone No.' />
                        {formik.touched.phone && formik.errors.phone ? <p className='py-1 text-[11px] text-purple-600'>{formik.errors.phone}</p> : null}
                        <label className='text-gray-400 font-semibold py-1' htmlFor="username">Username</label>
                        <input
                            id='username'
                            name='username'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.username}
                            className='border-[1px] border-gray-600 rounded-md text-gray-400 placeholder:text-gray-500 px-6 py-2 '
                            type="text"
                            placeholder='Enter Username' />
                        {formik.touched.username && formik.errors.username ? <p className='py-1 text-[11px] text-purple-600'>{formik.errors.username}</p> : null}
                        <label className='text-gray-400 font-semibold py-1' htmlFor="password">Password</label>
                        <input
                            id='password'
                            name='password'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            className='border-[1px] border-gray-600 rounded-md text-gray-400 placeholder:text-gray-500 px-6 py-2 '
                            type="password"
                            placeholder='Enter Password' />
                        {formik.touched.password && formik.errors.password ? <p className='py-1 text-[11px] text-purple-600'>{formik.errors.password}</p> : null}
                        <div className="button flex justify-center items-center  pt-8 ">
                            <button type='submit' className='flex text-center justify-center rounded-md items-center py-2 w-full text-gray-300 bg-[#460967]'>SignIn</button>
                        </div>
                        <div className="footer pt-2 flex justify-center items-center">
                            <p className='text-gray-400 text-[12px] '>Already have an account?
                                <Link to='/' className='text-[#820bc3] underline ml-1'>
                                    Login
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignInPage

