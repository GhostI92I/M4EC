import ProductDetail from '@/components/UI/ProductDetail';
import { getProductById } from '@/utils/products.helper';
import React from 'react'

const DetailProduct = async ({ params }: { params: Promise<{ productID: string }> }) => {
    const productID = (await params).productID;

    const product = await getProductById(productID)
    return (
        <ProductDetail {...product}/>
    )
}

export default DetailProduct
