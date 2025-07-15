import React, { useState, useEffect } from 'react';
import { removeProductFromCart, updateCartQuantity } from '../../features/product/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from "react-icons/md";
import { MdRemove } from "react-icons/md";
import { MdAdd } from 'react-icons/md';

const CartProductCard = ({ product }) => {
    const dispatch = useDispatch()
    const { currentuser } = useSelector(state => state.users)
    const discountedPrice = product.price * (product.discount / 100);
    const finalPrice = product.price - discountedPrice;


    const IncrementQuantity = () => {
        const Quantity =  product.quantity  + 1
        dispatch(updateCartQuantity({ userId: currentuser.id, productId: product.id, quantity: Quantity }))
    };

    const DecrementQuantity = () => {

        const Quantity =  product.quantity  - 1
        if ( product.quantity  > 1) {
            dispatch(updateCartQuantity({userId: currentuser.id, productId:product.id, quantity:Quantity}))
        }else {
            dispatch(removeProductFromCart({userId: currentuser.id, productId: product.id}))
        }
    };

    const userId = currentuser?.id

    const removeProductFromMainCart = (productId) => {
        dispatch(removeProductFromCart({userId, productId}))
    }

    const totalQuantityPrice = (finalPrice * product.quantity).toFixed(2);

    return (
        <div className="flex flex-col md:flex-row bg-[#2b0a3d] px-4 py-6 md:px-6 md:py-8 border-b border-[#4b226f]">
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
                    
                    {/* <p className="text-xs text-gray-400 mt-1">Dimensions: 10x20x30 cm</p> */}
                </div>
            </div>

            <div className="w-full md:w-1/3 flex flex-col md:flex-row md:items-center md:justify-between mt-4 md:mt-0">
                <div className="w-full flex justify-between md:justify-between md:w-full">
                    <div className="w-1/3 text-center">
                        <span className="text-white font-semibold">${finalPrice.toFixed(2)}</span>
                    </div>

                    <div className="w-1/3 flex justify-center items-center gap-2">
                        <button
                            onClick={DecrementQuantity}
                            className="text-white font-bold text-xl"
                        >
                            {product.quantity === 1 ? <span><MdDelete className="text-white" /></span>: <span><MdRemove className="text-white" /></span>}
                        </button>
                        <span className="text-black px-3 py-0 rounded bg-gray-200 font-bold">
                            {product.quantity}
                        </span>
                        <button
                            onClick={IncrementQuantity}
                            className="text-white  font-bold text-xl"
                        >
                           <span><MdAdd className="text-white" /></span>
                        </button>
                    </div>

                    <div className="w-1/3 text-center">
                        <span className="text-white font-semibold">${totalQuantityPrice}</span>
                    </div>
                </div>

                <div className="mt-4 md:mt-0 md:ml-4 flex justify-center md:justify-end">
                    <button onClick={() => removeProductFromMainCart(product.id)} className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded shadow">
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartProductCard;
