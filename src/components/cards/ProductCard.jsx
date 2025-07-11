import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const images = product.images
  // console.log(images);



  const prev = () => {
    setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1)
  }

  const next = () => {
    setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1)
    }, 4000);

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="flex relative  flex-col bg-[#250e32]  rounded-md shadow overflow-hidden min-w-[320px] min-h-[480px] max-w-[300px] h-[520px] sm:w-[340px] md:w-[350px] lg:w-[320px] xl:w-[320px] ">
      <div className="image group m-1  border-[1px] border-[#551b5e] bg-[#060616]  relative overflow-hidden  py-1  flex items-center justify-center  ">
        {images && images.length > 0 ? (
          <div className="flex  transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((image, idx) => (
              <img
                key={idx}
                className='  group-hover:scale-103 transition-transform duration-300'
                src={image}
                alt={image.title}
              />
            ))}
          </div>

        ) : <div className='w-[32opx] h-[480px]'>No Image</div>}
        <button onClick={prev} className='absolute text-white left-4 top-1/2 -translate-y-1/2 rounded-full opacity-0 group-hover:opacity-30 bg-purple-600 px-2.5 flex justify-center items-center py-1 '>
          <svg fill="#000000" height="30px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-174.08 -174.08 860.16 860.16" xml:space="preserve" stroke="#000000" stroke-width="0.00512" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M441.751,475.584L222.166,256L441.75,36.416c6.101-6.101,7.936-15.275,4.629-23.253C443.094,5.184,435.286,0,426.667,0 H320.001c-5.675,0-11.093,2.24-15.083,6.251L70.251,240.917c-8.341,8.341-8.341,21.824,0,30.165l234.667,234.667 c3.989,4.011,9.408,6.251,15.083,6.251h106.667c8.619,0,16.427-5.184,19.712-13.163 C449.687,490.858,447.852,481.685,441.751,475.584z"></path> </g> </g> </g>
          </svg>
        </button>
        <button onClick={next} className='absolute text-white right-4 top-1/2 -translate-y-1/2 rounded-full opacity-0 group-hover:opacity-30 bg-purple-600 px-2.5 flex justify-center items-center py-1 '>
          <svg fill="#000000" height="30px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-174.08 -174.08 860.16 860.16" xml:space="preserve" stroke="#000000" stroke-width="0.00512" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M441.751,475.584L222.166,256L441.75,36.416c6.101-6.101,7.936-15.275,4.629-23.253C443.094,5.184,435.286,0,426.667,0 H320.001c-5.675,0-11.093,2.24-15.083,6.251L70.251,240.917c-8.341,8.341-8.341,21.824,0,30.165l234.667,234.667 c3.989,4.011,9.408,6.251,15.083,6.251h106.667c8.619,0,16.427-5.184,19.712-13.163 C449.687,490.858,447.852,481.685,441.751,475.584z"></path> </g> </g> </g>
          </svg>
        </button>
      </div>
      <Link to={`/products/${product.id}`}>
        <div className="info px-2 py-4">
          <div className="content flex gap-1 justify-between ">
            <h1 className='text-gray-300 text-xl'>{product.title}</h1>
            <span className='text-gray-300  font-semibold text-xl'>${product.price}</span>
          </div>
          <h1 className='text-gray-500 text-sm pt-1'>{product.brand}</h1>
        </div>
        <div className="btn absolute bottom-0  w-full flex justify-center items-center border-white">
          <button className='bg-[#47205c] hover:bg-[#332343] hover:text-gray-100 transition-opacity ease-in duration-400 text-gray-300 text-md w-full px-8 py-3'>BuyNow</button>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
