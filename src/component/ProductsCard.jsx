import React from 'react'

const ProductsCard = ({image,productName}) => {
  return (
    <div>
     <div className="relative h-52 rounded-lg overflow-hidden flex justify-end bg-green-100">
  <img
    src={image}
    alt="Natural Green Lotion"
    className="h-full object-cover object-right"
  />
  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-xs flex flex-col items-center justify-center text-center p-4 bg-white bg-opacity-60 rounded-lg">
    <strong className="text-gray-800 font-semibold text-lg leading-snug">
   { productName}    </strong>
    <span className="text-gray-600 text-sm font-medium mt-1">Skin Care Product</span>
    <a href="#" className="font-semibold text-gray-800 mt-3 inline-block px-4 py-2 bg-green-300 rounded-md hover:bg-green-400 transition-colors">Shop Now</a>
  </div>
</div>
 
    </div>
  )
}

export default ProductsCard;
