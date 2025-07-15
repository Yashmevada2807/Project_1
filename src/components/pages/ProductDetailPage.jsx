import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AddToCartFunctionality } from '../../features/product/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Bounce, toast } from 'react-toastify'

const ProductDetailPage = () => {

    const { CartProducts } = useSelector(state => state.cart)
    const { currentuser } = useSelector(state => state.users)
    const dispatch = useDispatch()
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchProductDetailById = async () => {
            const res = await axios.get(`https://dummyjson.com/products/${id}`)
            setProduct(res.data)
            setIsLoading(false)
        }
        fetchProductDetailById()
    }, [id])
    useEffect(() => {

    })

    const HandleAddToCart = () => {
        const ProductData = {
            id: product.id,
            title: product.title,
            image: product.images,
            description: product.description,
            price: product.price,
            discount: product.discountPercentage
        }
        const userId = currentuser.id
        const userCart = CartProducts[userId] || []

        const checkExistenceOfProduct = userCart.find(item => item.id === ProductData.id)

        if(!checkExistenceOfProduct){

            dispatch(AddToCartFunctionality({
                userId: currentuser.id,
                product: ProductData,
            }))
            toast.success('Added to Cart Successfully', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme:'colored',
                transition: Bounce,
            });
        }else {
            toast.warn('Product is Already in Cart ', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme:'colored',
                transition: Bounce,
            });
        }

    }


    if (isLoading) return <p className='text-6xl text-white flex justify-center items-center'>Loading product...</p>;

    if (!product) return <p className='text-6xl text-white flex justify-center items-center'>No product found.</p>;


    const discountedPrice = product.price * [product.discountPercentage / 100]
    const finalPrice = product.price - discountedPrice
    return (
        <div className='w-full bg-[#250e32]'>

            <div className=" max-w-full mx-4 my-4 p-4 md:mx-2 md:my-10 md:p-2 lg:mx-35 lg:my-15 lg:p-10  shadow-2xl rounded-lg grid  md:grid-cols-1 lg:grid-cols-2 bg-[#2c113b] gap-8 ">
                <div className=''>
                    <img
                        src={product.images[0]}
                        alt={product.title}
                        className=" md:w-fit lg:w-full lg:h-full p-10 rounded-lg object-cover bg-[#060616]"
                    />
                </div>

                <div className="flex flex-col">
                    <h2 className="text-2xl text-gray-300 font-semibold">{product.title}</h2>

                    <div className="flex items-center mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                                key={star}
                                className={`w-5 h-5 ${product.rating >= star ? "text-yellow-400" : "text-gray-500"
                                    }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.538 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.783.57-1.838-.197-1.539-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.074 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.955z" />
                            </svg>
                        ))}
                    </div>
                    <p className="mt-4 text-gray-500">{product.description}</p>

                    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="border-[1px] border-[#842093] p-4 rounded-md">
                            <h4 className="text-sm font-semibold text-gray-300">Brand</h4>
                            <p className="mt-1 text-sm text-gray-400">{product.brand}</p>
                        </div>
                        <div className="border-[1px] border-[#842093] p-4 rounded-md">
                            <h4 className="text-sm font-semibold text-gray-300">Category</h4>
                            <p className="mt-1 text-sm text-gray-400 capitalize">{product.category}</p>
                        </div>
                        <div className="border-[1px] border-[#842093] p-4 rounded-md">
                            <h4 className="text-sm font-semibold text-gray-300">In Stock</h4>
                            <p className="mt-1 text-sm text-gray-400">{product.stock} units</p>
                        </div>
                        <div className="border-[1px] border-[#842093] p-4 rounded-md">
                            <h4 className="text-sm font-semibold text-gray-300">Discount</h4>
                            <p className="mt-1 text-sm text-green-500">{product.discountPercentage}% Off</p>
                        </div>
                    </div>
                    <p className="text-3xl text-gray-400 font-semibold mt-4 ">$<span className='line-through'>{product.price}</span> <span className='text-[15px]  text-green-400 font-light'>- {product.discountPercentage}% Off</span></p>
                    <p className="text-2xl px-1 font-bold pt-2  text-blue-500 "> ${finalPrice.toFixed(2)}<span className='text-sm  text-gray-400 font-light'> Including tax</span></p>
                    <div className='w-full pt-12 flex'>
                        <button className="mt-6 w-1/2 bg-[#842093] hover:bg-[#6e3f75] hover:text-gray-100 text-white px-6 py-3">
                            Buy Now
                        </button>
                        <button onClick={HandleAddToCart} className="mt-6 w-1/2 bg-gray-700 text-white px-6 py-3  hover:bg-[#383c56]">
                            Add to bag
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductDetailPage
