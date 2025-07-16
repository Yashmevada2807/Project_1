import React, { useState, useEffect } from 'react';
import { removeProductFromCart, updateCartQuantity } from '../../features/product/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from "react-icons/md";
import { MdRemove } from "react-icons/md";
import { MdAdd } from 'react-icons/md';
import ShowRemoveModal from '../modals/ShowRemoveModal';

const CartProductCard = ({ product }) => {
    const [removeModal, setRemoveModal] = useState(false)
    const dispatch = useDispatch()
    const { currentuser } = useSelector(state => state.users)
    const discountedPrice = product.price * (product.discount / 100);
    const finalPrice = product.price - discountedPrice;




    const IncrementQuantity = () => {
        const Quantity = product.quantity + 1
        dispatch(updateCartQuantity({ userId: currentuser.id, productId: product.id, quantity: Quantity }))
    };

    const DecrementQuantity = () => {

        const Quantity = product.quantity - 1
        if (product.quantity > 1) {
            dispatch(updateCartQuantity({ userId: currentuser.id, productId: product.id, quantity: Quantity }))
        } else {
            setRemoveModal(true)
            // dispatch(removeProductFromCart({ userId: currentuser.id, productId: product.id }))
        }
    };

    const userId = currentuser?.id

    const handleRemoveBtn = () => {
        setRemoveModal(true);
    };

    const cancelRemoveBtn = () => {
        setRemoveModal(false)
    }

    const acceptRemoveBtn = () => {
        dispatch(removeProductFromCart({ userId, productId: product.id }))
        setRemoveModal(false)
    }

    const totalQuantityPrice = (finalPrice * product.quantity).toFixed(2);

    return (
        <div className="flex flex-col md:flex-row bg-[#2b0a3d] px-4 py-6 md:px-6 md:py-8 border-b border-[#4b226f]">
            <div className="flex flex-col md:flex-row md:items-center md:flex-1 gap-4">
                <div className="w-full md:w-32 md:h-32 flex-shrink-0 bg-white border border-gray-300 rounded-md overflow-hidden">
                    <img
                        src={product.image[0]}
                        alt={product.title}
                        className="w-full h-full object-cover p-2"
                    />
                </div>

                <div className="flex-1">
                    <h2 className="text-lg font-bold text-white">{product.title}</h2>

                    {/* <p className="text-xs text-gray-400 mt-1">Dimensions: 10x20x30 cm</p> */}
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6 w-full md:w-auto">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4">
                    <div className="text-center flex-1">
                        <span className="text-white font-semibold">${finalPrice.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-center items-center gap-2 flex-1">
                        <button
                            onClick={DecrementQuantity}
                            className="text-white font-bold text-xl"
                        >
                            {product.quantity === 1 ? <span><MdDelete className="text-white" /></span> : <span><MdRemove className="text-white" /></span>}
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

                    <div className="text-center flex-1">
                        <span className="text-white font-semibold">${totalQuantityPrice}</span>
                    </div>
                </div>

                <div className="flex justify-center md:justify-end w-full md:w-auto">
                    <button onClick = { handleRemoveBtn } className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded shadow">
                        Remove
                    </button>
                    {removeModal && (<ShowRemoveModal acceptRemoveBtn={acceptRemoveBtn} cancelRemoveBtn={cancelRemoveBtn} />)}
                </div>
            </div>
        </div>
    );
};

export default CartProductCard;
