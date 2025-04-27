'use client'
import { useAuth } from '@/app/context/AuthContext'
import { IProduct } from '@/types'
import React from 'react'

const ProductDetail: React.FC<IProduct> = ({ id, name, image, description, price, stock, categoryId }) => {
    const { userData } = useAuth();

    const handleAddToCart = () => {
        if (!userData?.token) {
            alert("You have to be logged in to add products to your cart")
        } else {
            const cart: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]")
            const productExist = cart.some((item: IProduct) => {
                if (item.id === id) return true;
                return false;
            })
            if (productExist) {
                alert("The product thet you are adding, is already in your cart")
            } else {
                cart.push({
                    name, image, id, description, stock, price, categoryId
                })
                localStorage.setItem("cart", JSON.stringify(cart))
                alert("Product added to your cart")
            }
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
