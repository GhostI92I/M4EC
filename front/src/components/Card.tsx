import { IProduct } from '@/types'
import React from 'react'

const Card: React.FC<IProduct> = ({ name, price, description, image }) => {
    return (
        <div className='w-full max-w-sm bg-white rounded-lg min-h-[300px] justify-around items-center gap-1 shadow-xl flex flex-col'>
            <h3 className='font-extrabold text-2xl p-3 flex justify-center'>{name}</h3>
            <div className="w-full h-70 overflow-hidden">
                <img className="w-full h-full object-cover transition delay-150 duration-300 ease-in-out hover:-translate-y-1 scale[60%] hover:scale-[90%]" src={image} alt={name} />
            </div>
            <p className='p-4 line-clamp-3 text-ellipsis'>Description: {description}</p>
            <p className='w-full flex justify-end p-4 font-semibold bg-gray-700 text-white rounded-b-md'>Price: ${price} USD</p>
        </div>
    )
}

export default Card
