import { useSelector } from 'react-redux'
import CartProductCard from '../cards/CartProductCard'

const ProductCartPage = () => {

    const { cartProducts } = useSelector(state => state.products)

    return (
        <>
            <div className="w-full min-h-screen bg-[#240634] px-4 md:px-15 py-20">
                <div className="w-full rounded-xl overflow-hidden shadow-lg">
                    
                    <div className="hidden  md:flex bg-purple-900 text-white px-7 py-4">
                        <div className="w-2/3  font-semibold">Product's</div>
                        <div className="w-1/3  flex justify-start items-start ">
                            <div className="w-1/3 text-center font-semibold">Price</div>
                            <div className="w-1/3 text-center font-semibold">Quantity</div>
                            <div className="w-1/3 text-center font-semibold">Total</div>
                            <div className="w-1/3 text-center font-semibold"></div>
                        </div>
                    </div>

                    <div className="flex flex-col divide-y divide-gray-700">
                        {cartProducts.length === 0 ? (
                            <div className="py-10 text-center text-white text-lg">
                                Your cart is empty.
                            </div>
                        ) : (
                            cartProducts.map((product) => (
                                <CartProductCard key={product.id} product={product} />
                            ))
                        )}
                    </div>
                </div>
            </div>


        </>
    )
}

export default ProductCartPage
