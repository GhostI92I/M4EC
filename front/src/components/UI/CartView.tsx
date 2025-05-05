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
        /* Lógica para que el carrito pueda recibir o no los productos y hacer el checkout */
        if (cart && userData?.token) { /* Si existe carrito y token del usuario */
            const idProducts: number[] = cart?.map((product) => product.id)
            await createOrder(idProducts, userData?.token!)
            setCart([]); /* Una vez hecha la compra se setea el carrito a un arreglo vacío */
            setTotal(0); /* Una vez que se hace la compra se setea el total a cero */
            localStorage.setItem("cart", "[]") /* Una vez que se hace la compra se varcía el carrito en el localStorage */
        }
    }

    return (
        <div className='flex flex-row items-center justify-around w-full px-5'>
            <div>
                <h1 className='flex justify-center m-3  p-2 shadow-2xl'>Your products </h1>
                {
                    cart?.length ? cart?.map((product: IProduct) => {
                        return (
                            <div key={product.id} className='border-2 rounded-3xl justify-items-center gap-2 m-4 shadow-sm'>
                                <p className='font-extrabold'>{product.name}</p>
                                <img className='max-w-2xs' src={product.image} alt={product.name} />
                                <p className='font-semibold'>Price: ${product.price}</p>
                            </div>
                        )
                    }) : (
                        <div>
                            <h1 className='text-red-900'>
                                You don't have products in your cart
                            </h1>
                        </div>
                    )
                }
            </div>

            <div className='bg-gray-700 text-white p-4 font-bold rounded-3xl'>
                <h2 className='flex justify-center m-3'>
                    Total: ${total} USD
                </h2>
                <br />
                <button onClick={handleCheckout} className='flex w-50 bg-white text-black justify-center gap-2.5 m-2 rounded-2xl shadow-2xl'>Checkout</button>
            </div>
        </div>
    )
}

export default CartView
