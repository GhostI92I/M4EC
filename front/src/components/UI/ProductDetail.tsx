'use client'
import { useAuth } from '@/app/context/AuthContext'
import { IProduct } from '@/types'
import React from 'react'

const ProductDetail: React.FC<IProduct> = ({ name, image, description, price, stock }) => {
    const { userData } = useAuth();

    const handleAddToCart = () => {
        if (!userData?.token) {
            alert("You have to be logged in to add products to your cart")
        } else{
            alert("Product added to your cart")
        }
    }
    return (
        <div>
            <div>
                <h1>{name}</h1>
                <img src={image} alt={name} />
                <h3>Description: {description}</h3>
                <p>Price: ${price} USD</p>
                <p>Stock left: {stock}</p>
                <br />
                <button onClick={handleAddToCart}>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductDetail
