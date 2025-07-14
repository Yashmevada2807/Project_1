import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { MdShoppingCart } from 'react-icons/md'
import LogOutModal from './modals/LogOutModal'


const HeaderSection = () => {

    const { currentuser } = useSelector(state => state.users)
    const { cartProducts } = useSelector( state => state.products)
    const totalCart = cartProducts.length

    
    // console.log(totalCart);
    
    
    return (
        <div className="header flex justify-between items-center border-b border-gray-600 px-8 w-full bg-[#180323]  py-4">
            <h1 className='text-gray-300 text-3xl '>Hello <span className='uppercase'>{currentuser.username}</span></h1>
            <div className="buttonFunctionalities flex justify-center items-center gap-0 px-6">
                <Link to={`/cart`} className='w-[45px] h-[35px] p-2 relative  cursor-pointer text-sm rounded-full text-gray-100'>
                    <div className='absolute  p-2 -translate-y-1/2 top-1/2 right-0'>
                        <span className=' absolute -translate-y-1/2 translate-x-5/2 top-0.5 text-[13px]  font-bold text-[#f415f4]'>{totalCart}</span>
                        <MdShoppingCart style={{ width: '45px', height: '22px' }} />
                    </div>
                </Link>
                <div className=' text-sm rounded-full text-gray-100'><LogOutModal /></div>
            </div>
        </div>
    )
}

export default HeaderSection
