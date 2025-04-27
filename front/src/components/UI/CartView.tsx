'use client'
import { useAuth } from '@/app/context/AuthContext';
import { IProduct } from '@/types';
import { createOrder } from '@/utils/orders.helpers';
import React, { useEffect, useState } from 'react'

const CartView = () => {
    const { userData } = useAuth();
    const [cart, setCart] = useState<IProduct[]>();
    const [total, setTotal] = useState<number>();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]")
        if (storedCart) {
            let totalCart = 0;
            storedCart.map((item: IProduct) => {
                totalCart = totalCart + item.price;
            })
            setTotal(totalCart)
            setCart(storedCart)
        }
    }, [])

    const handleCheckout = async () => {
        const idProducts: number[] = cart?.map((product) => product.id)
        await createOrder(idProducts, userData?.token!)
    }

    return (
        <div className='flex flex-row items-center justify-around w-full px-5'>
            <div>
                Your products {
                    cart?.length ? cart?.map((product: IProduct) => {
                        return (
                            <div key={product.id}>
                                <p>{product.name}</p>
                                <img className='max-w-2xl' src={product.image} alt={product.name} />
                                <p>Price: ${product.price}</p>
                            </div>
                        )
                    }) : (
                        <div>You don't have products in your cart</div>
                    )
                }
            </div>

            <div>
                Total: ${total} USD
                <br />
                <button onClick={handleCheckout}>Checkout</button>
            </div>
        </div>
    )
}

export default CartView
