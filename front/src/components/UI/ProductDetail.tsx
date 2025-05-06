'use client'
import { useAuth } from '@/app/context/AuthContext'
import { IProduct } from '@/types'
import Image from 'next/image'
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
        <div className="max-w-md mx-auto p-6 shadow-2xl">
          <div className="bg-white shadow-sm p-6 space-y-4">
            <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
      
            <Image
              src={image}
              alt={name}
              className="w-full h-64 object-cover rounded-xl shadow-sm"
            />
      
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-gray-700">Descripción</h3>
              <p className="text-gray-600 text-sm">{description}</p>
      
              <p className="text-lg font-bold text-gray-800">Precio: ${price} USD</p>
              <p className="text-sm text-gray-600">Stock disponible: {stock}</p>
            </div>
      
            <button
              onClick={handleAddToCart}
              className="btn btn-primary w-full bg-blue-800 text-white rounded-2xl p-2"
            >
              Añadir al carrito
            </button>
          </div>
        </div>
      )
      
}

export default ProductDetail
