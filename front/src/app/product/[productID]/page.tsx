import React from 'react'

const DetailProduct = async ({ params }: { params: Promise<{ productID: string }> }) => {
    const productID = (await params).productID;
    return (
        <div>
            DetailProduct {productID}
        </div>
    )
}

export default DetailProduct
