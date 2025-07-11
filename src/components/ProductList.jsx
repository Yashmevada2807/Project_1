import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchedProducts } from '../features/product/productSlice'
import ProductCard from './cards/ProductCard'
import { throttle } from 'lodash'

const ProductList = () => {

    const { products, productPerPage, status, isLoading, hasMore, currentPage, isAuthenticated } = useSelector(state => state.products)
    const dispatch = useDispatch()

    useEffect(() => {

        if (products.length === 0) {
            dispatch(fetchedProducts({ page: currentPage, limit: productPerPage }));
        }


    }, [dispatch, currentPage, productPerPage, products.length])

    useEffect(() => {
        const infiniteScroll = throttle(() => {
            const scrollY = window.scrollY
            const innerHeight = window.innerHeight
            const totalHeight = document.documentElement.scrollHeight

            if (innerHeight + scrollY >= totalHeight - 400) {
                if (!isLoading && hasMore) {
                    dispatch(fetchedProducts({ page: currentPage, limit: productPerPage }))
                }
            }
        }, 1000)

        window.addEventListener('scroll', infiniteScroll)
        return () => window.removeEventListener('scroll', infiniteScroll)
    }, [dispatch, isLoading, hasMore, currentPage, productPerPage])




    return (
        <div className='flex flex-col  justify-center items-center'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-10  px-2">
                {products.map((product) => {
                    return <ProductCard key={product.id} product={product} />
                })}
            </div>
            <div className=' text-3xl text-gray-400'>
                <div >{isLoading ? <p>Loading More Products...</p> : null}</div>
                <div>{!hasMore ? <p>No More Products Available.</p> : null}</div>
            </div>
        </div>
    )
}

export default ProductList
