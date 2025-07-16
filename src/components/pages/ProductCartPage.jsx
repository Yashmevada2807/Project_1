import { useSelector } from 'react-redux'
import CartProductCard from '../cards/CartProductCard'

const ProductCartPage = () => {

  const { currentuser } = useSelector(state => state.users)
  const { CartProducts } = useSelector(state => state.cart)

  const userId = currentuser?.id
  const userCart = CartProducts[userId] || []

  const totalItems = userCart.reduce((acc, product) => acc + product.quantity, 0);

  const totalPrice = userCart.reduce((acc, product) => {
    const discounted = product.price - (product.price * (product.discount || 0) / 100);
    return acc + (discounted * product.quantity);
  }, 0).toFixed(2);

  return (
    <div className="w-full min-h-screen bg-[#240634] px-4 md:px-10 py-20 flex flex-col md:flex-row gap-6">


      <div className="w-full md:w-4/5 rounded-xl overflow-hidden shadow-lg bg-[#310848]">


        <div className="hidden md:flex bg-purple-900 text-white px-7 py-4">
          <div className="w-2/3 font-semibold">Products</div>
          <div className="w-1/3 flex justify-between">
            <div className="w-1/3 text-center font-semibold">Price</div>
            <div className="w-1/3 text-center font-semibold">Quantity</div>
            <div className="w-1/3 text-center font-semibold">Total</div>
            <div className="w-1/3 text-center font-semibold"></div>
          </div>
        </div>

        <div className="flex flex-col">
          {userCart.length === 0 ? (
            <div className="py-10 text-center text-white text-lg">
              Your cart is empty.
            </div>
          ) : (
            userCart.map(product => (
              <CartProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>


      <div className="w-full md:w-1/5 rounded-xl overflow-hidden shadow-lg bg-[#310848]">

        <div className="flex justify-center items-center bg-purple-900 text-white px-7 py-4">
          <h1 className="text-xl md:text-2xl text-center font-semibold">Subtotal</h1>
        </div>

        <div>
          <div className="w-full py-3 border-b px-4 border-purple-950 flex justify-between text-white text-sm md:text-base font-medium">
            <h1 className="w-1/2 truncate">Item</h1>
            <h1 className="w-1/6 text-center">Qty</h1>
            <h1 className="w-1/4 text-right">Price</h1>
          </div>

          <div className="flex flex-col">
            {userCart.length === 0 ? (
              <div className="py-10 text-center text-white text-lg">
                Your cart is empty.
              </div>
            ) : (
              userCart.map(product => {
                const discounted = product.price - (product.price * (product.discount || 0) / 100);
                const finalPrice = (product.quantity * discounted).toFixed(2)
                return (
                  <div key={product.id} className="w-full py-3 px-4 border-b border-purple-900 flex justify-between items-center text-white text-sm md:text-base">
                    <h1 className="w-1/2 truncate">{product.title}</h1>
                    <h1 className="w-1/6 text-center">{product.quantity}</h1>
                    <h1 className="w-1/4 text-right">${finalPrice}</h1>
                  </div>
                )
              })
            )}
          </div>

          <div className="mt-4 px-4 flex flex-col gap-2 text-white">
            <h1 className="flex justify-between text-lg md:text-xl">
              <span>Total Items:</span>
              <span>{totalItems}</span>
            </h1>
            <h1 className="flex justify-between text-lg md:text-xl">
              <span>Total Price:</span>
              <span>${totalPrice}</span>
            </h1>
          </div>

          <div className="flex justify-center mt-6 px-4 mb-4">
            {
              userCart.length === 0 ? null :
                <button className="w-full text-center text-lg md:text-xl px-6 py-2 rounded text-white bg-purple-700 hover:bg-purple-800 transition">
                  Buy Now
                </button>
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductCartPage
