import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeProductFromCart } from '../features/product/productSlice'
import { MdShoppingCart } from 'react-icons/md'
import LogOutModal from './modals/LogOutModal'
import '../style.css'

const HeaderSection = () => {
    const dispatch = useDispatch()
    const { currentuser } = useSelector(state => state.users)
    const { CartProducts } = useSelector(state => state.cart)

    const userId = currentuser?.id
    const userCart = CartProducts[userId] || []
    // console.log(CartProducts.price);

    const totalCart = userCart.length

    const removeItemFromCart = (productId) => {
        dispatch(removeProductFromCart({ userId, productId }))
    }

    return (
        <div className="header flex justify-between items-center border-b border-gray-600 px-8 w-full bg-[#180323] py-4 relative">
            <Link to="/">
                <h1 className="text-gray-300 text-3xl">
                    Hello <span className="uppercase">{currentuser.username}</span>
                </h1>
            </Link>

            <div className="buttonFunctionalities flex justify-center items-center gap-6  relative ">
                <div className="relative group">
                    <div className="w-[45px] h-[35px] p-2 relative cursor-pointer text-sm rounded-full text-gray-100">
                        <div className="absolute top-0 right-0 flex items-center justify-center bg-[#f415f4] text-white text-[11px] font-bold rounded-full w-5 h-5 translate-x-1/2 -translate-y-1/2">
                            {totalCart}
                        </div>
                        <MdShoppingCart style={{ width: '45px', height: '22px' }} />
                    </div>



                    <div className="absolute -right-30 top-full mt-2 w-[320px] bg-[#240634] rounded-lg shadow-lg border border-[#4e1a69] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div className="p-4 max-h-[400px] overflow-y-auto custom-scrollbar">
                            {userCart.length === 0 ? (
                                <div className="text-center text-white py-10">
                                    Your cart is empty.
                                </div>
                            ) : (
                                userCart.map((product) => (
                                    <div
                                        key={product.id}
                                        className="flex items-center justify-between border-b border-[#4e1a69]  py-2 last:border-b-0"
                                    >
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={product.image[0]}
                                                alt={product.title}
                                                className="w-12 h-12 bg-white object-cover rounded-md border"
                                            />
                                            <div>
                                                <h4 className="text-sm font-medium text-white">
                                                    {product.title}
                                                </h4>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => removeItemFromCart(product.id)}
                                            className="text-xs text-red-500 hover:text-red-700"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>

                        {userCart.length > 0 && (
                            <div className="px-4 py-3 border-t flex justify-center">
                                <Link
                                    to="/cart"
                                    className="w-full text-center bg-purple-700 hover:bg-purple-800 text-white py-2 rounded-md text-sm"
                                >
                                    View Cart
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                <div className="text-sm rounded-full text-gray-100">
                    <LogOutModal />
                </div>
            </div>
        </div>
    )
}

export default HeaderSection
