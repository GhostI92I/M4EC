import { getProductById } from '@/utils/products.helper';
import React from 'react'

const DetailProduct = async ({ params }: { params: Promise<{ productID: string }> }) => {
    const productID = (await params).productID;

    const product = await getProductById(productID)
    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <h3>Description: {product.description}</h3>
            <p>Price: ${product.price} USD</p>
            <p>Stock left: {product.stock}</p>
        </div>
    )
}

export default DetailProduct
