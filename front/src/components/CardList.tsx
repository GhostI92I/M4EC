import { productsToPreLoad } from '@/utils/productsToPreload';
import React from 'react'
import Card from './Card';
import { getProductsDB } from '@/utils/products.helper';
import Link from 'next/link';

const CardList = async () => {
    const products = await getProductsDB();

    return (
        <div className='flex flex-wrap items-center gap-4 p-4 justify-center'>
            {
                products &&
                products?.map((product) => {
                    return (
                        <Link key={product.id} href={`/product/${product.id}`}>
                            <Card {...product} /* name={product.name} image={product.image} description={product.description} price={product.price} */ />
                        </Link>
                    )
                }
                )
            }
        </div>
    )
}

export default CardList
