import React, { useState } from 'react'

const CartProductCard = ({ product }) => {
    const [quantityCount, setQuantityCount] = useState(1)
    const images = product.image
    console.log(images);
    const DiscountedPrice = product.price * [product.discount / 100]
    const finalPrice = product.price - DiscountedPrice
    console.log(finalPrice);

    const IncrementQuantity = () => {
        setQuantityCount(quantityCount + 1)
        finalPrice * quantityCount
    }

    const DecrementQuantity = () => {
        setQuantityCount(quantityCount - 1)
         quantityCount
    }
    
    
    return (
        <div className="flex flex-col md:flex-row bg-[#2b0a3d] px-4 py-6 md:px-6 md:py-8">
            
            <div className="w-full md:w-2/3 flex flex-col md:flex-row items-center">
                
                <div className="w-full md:w-32 md:h-32 flex-shrink-0 bg-white border border-gray-300 rounded-md overflow-hidden">
                    <img
                        src={product.image[0]}
                        alt={product.title}
                        className="w-full h-full object-cover p-2"
                    />
                </div>
                
                <div className="mt-4 md:mt-0 md:ml-6 w-full">
                    <h2 className="text-lg font-bold text-white">{product.title}</h2>
                    <p className="text-sm text-gray-300 mt-1">
                        {product.description || "No description available."}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">Dimensions: 10x20x30 cm</p>
                </div>
            </div>

            
            <div className="w-full md:w-1/3 flex flex-col md:flex-row md:items-center md:justify-between mt-4 md:mt-0">
                
                <div className="w-full flex justify-between md:justify-between md:w-full">
                    <div className="w-1/3 text-center md:text-center">
                        <span className="text-white font-semibold">${finalPrice.toFixed(2)}</span>
                    </div>
                    <div className="w-1/3 flex pl-4 text-center md:text-center">
                        <button onClick={DecrementQuantity} className="text-white px-2 flex justify-center items-center font-semibold">-</button>
                        <span className="text-black px-3 py-0 flex justify-center rounded-sm items-center bg-gray-400 font-semibold">{quantityCount}</span>
                        <button onClick={IncrementQuantity} className="text-white px-2  flex justify-center items-center font-semibold">+</button>
                    </div>
                    <div className="w-1/3 text-center md:text-center">
                        <span className="text-white font-semibold">${finalPrice.toFixed(2)}</span>
                    </div>
                </div>

                
                <div className="mt-4 md:mt-0 md:ml-4">
                    <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded shadow">
                        Remove
                    </button>
                </div>
            </div>
        </div>




    )
}

export default CartProductCard
