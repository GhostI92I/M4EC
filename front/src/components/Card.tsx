import { IProduct } from '@/types'
import React from 'react'

const Card: React.FC<IProduct> = ({name, price, description, image}) => {
    return (
        <div className='w-full max-w-sm bg-white border border-gray-400 rounded-lg min-h-[300px] justify-around items-center gap-1'>
            <h3 className='font-extrabold text-2xl p-3 flex justify-center'>{name}</h3>
            <img className='p-8 rounded-t-lg' src={image} alt={name} />
            <p className='p-4 truncate'>Description: {description}</p>
            <p className='p-4 font-semibold bg-gray-700 text-white'>Price: ${price} USD</p>
        </div>
    )
}

export default Card
