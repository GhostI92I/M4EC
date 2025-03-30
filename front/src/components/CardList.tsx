import { productsToPreLoad } from '@/utils/productsToPreload';
import React from 'react'
import Card from './card';

const CardList = () => {
    const products = productsToPreLoad;

    return (
        <div className='flex flex-wrap items-center gap-4 p-4 justify-center'>
            {
                products &&
                products?.map((product) => {
                    return (
                        <Card key={product.id} {...product} /* name={product.name} image={product.image} description={product.description} price={product.price} */ />
                    )
                }
                )
            }
        </div>
    )
}

export default CardList
